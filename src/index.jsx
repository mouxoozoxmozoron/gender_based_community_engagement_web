import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  redirect,
  useNavigate,
} from "react-router-dom";
import HomeScreen from "./screens/main_screen";
import LoginScreen, { Action as Login_action } from "./screens/login_screen";
import RegisterScreen, { Action as Register_action } from "./screens/register_screen";
import Posts, {loader as PostDataloader} from "./screens/posts/posts";

import MainLayOut from "./lay_out/main_lay_out";
import Notification from "./screens/notifications";
import Post_details from "./screens/posts/post_details";
import Event_details from "./screens/posts/event_details";
import Grou_lay_out, {loader as Group_home_loader} from "./componnent/group_lay_out";
import Group_post from "./screens/group/group_post";
import Group_events from "./screens/group/group_events";
import My_post from "./screens/group/my_post";
import Change_password from "./screens/group/change_password";
import Update_profile from "./screens/group/update_profile";
import Create_post from "./screens/group/create_post";
import Profile from "./screens/group/user_profile";
import Event_ticket, {loader as Event_ticket_loader} from "./screens/group/event_ticket";

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayOut />}>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/notifications" element={<Notification />} />
      <Route path="/login" element={<LoginScreen />} action={Login_action} />
      <Route path="/register" element={<RegisterScreen />} action={Register_action} />

      <Route path="/posts" element={<Posts />} loader={PostDataloader} />
      <Route path="/posts/:id" element={<Post_details />} />
      <Route path="/event/:id" element={<Event_details />} />

      <Route path="/group" element={<Grou_lay_out />}  >
      <Route path="posts" element={<Group_post />} />
      <Route path="events" element={<Group_events />} >
      <Route path="e_ticket/:event_id" element={<Event_ticket />}  />
      </Route>
      <Route path="my_post" element={<My_post />} />

    <Route path="profile" element={<Profile />} >
      end
    <Route path="password" element={<Change_password />} />
      <Route path="update_profile" element={<Update_profile />} />
    </Route>

      <Route path="new_post" element={<Create_post />} />


      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={AppRoutes} />;
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
