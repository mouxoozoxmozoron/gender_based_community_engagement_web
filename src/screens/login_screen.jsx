import React from "react";
import Button from "react-bootstrap/Button";
import LoginAuth from "../services/api_request/login_request";
// import cookies from "../utilis/cookies_manager";
import {
  set_cookies,
  get_cookie,
  remove_cookie,
} from "../utilis/cookies_manager";
// import Cookies from 'js-cookie';

import {
  useLoaderData,
  useSearchParams,
  Form,
  useNavigate,
  redirect,
  useActionData,
  useNavigation,
  NavLink,
} from "react-router-dom";

export async function Action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  console.log("form data are:", formData);
  const pathname = new URL(request.url).searchParams.get("redirectTo") || "/posts";
  console.log("retrievedpath is ", pathname);

  try {
    const data = await LoginAuth({ email, password });
    if (data) {
      const auth_token = data.token;
      const user_id = data.user.id;
      const user_name= data.user.first_name;
      //set cookies
      set_cookies({
        auth_token: auth_token,
        user_id: user_id,
        user_name: user_name,
      });
      //get cookies
      const authToken = get_cookie("auth_token");
      const userId = get_cookie("user_id");

      console.log("data in cookie are:", authToken, "and", user_id);

      //remove cookies
      // remove_cookie("auth_token");
      // remove_cookie("user_id");
      return redirect(pathname);
    }
  } catch (error) {
    console.error("Login error:", error);
    console.log(error.status);
    return error.message;
  }
}

function LoginScreen() {
  const [login_message, setlogin_message] = useSearchParams();
  const message = useLoaderData();
  const navifation_infor = useNavigation();
  console.log(navifation_infor);
  const error = useActionData();

  return (
    <div className="form_section">
      <section className="form_body">
      <center>
        <Form className="form" method="post">
      
          <h3>Login</h3>
          {error && <h4 className="error_message">{error}</h4>}

          <section>
            <h3>Email</h3> <br />
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </section>
          <section>
            <h3>Password</h3> <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </section>
          <br />
          <div className="form_buttons">
            <Button variant="success" type="submit">
              Login
            </Button>
            <NavLink to="/register">Dont have an account?</NavLink>
          </div>
       
        </Form>
        </center>
      </section>
    </div>
  );
}
export default LoginScreen;
