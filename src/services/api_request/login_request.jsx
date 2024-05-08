import React from "react";
import { base_url, auth_end_url } from "../../utilis/apiv1/end_point";

async function LoginAuth(prop) {
  const login_url = base_url + auth_end_url.login;
  const user_details = {
    email: prop.email,
    password: prop.password,
  };

  const res = await fetch(login_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(user_details),
  });

  if (!res.ok) {
    let errorMessage;
    if (res.status === 401) {
      errorMessage = "Incorrect email or password";
    } else {
      errorMessage = "We couldn't sign you in, check your internet connection";
    }
    throw {
      message: errorMessage,
      status: res.status,
      statusText: res.statusText,
    };
  }
  const data = await res.json();
  return data;
}

export default LoginAuth;
