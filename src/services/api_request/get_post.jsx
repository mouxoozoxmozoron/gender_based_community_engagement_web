import React from "react";
import { get_cookie } from "../../utilis/cookies_manager";
import { base_url, data_url } from "../../utilis/apiv1/end_point";

async function GetPosts() {
const get_post_url=base_url + data_url.fetch_post;
  const token = get_cookie("auth_token");
  const res = await fetch(get_post_url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  
  if (!res.ok) {
    let errorMessage;
    if (res.status === 401) {
      errorMessage = "sign in forbetter experience";
    } else {
      errorMessage = "network error!";
    }
    throw {
      message: errorMessage,
      status: res.status,
      statusText: res.statusText,
    };
  }
  const data = await res.json();

  return data.data;
}

export default GetPosts;
