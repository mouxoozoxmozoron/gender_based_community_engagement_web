import React from "react";
import { get_cookie } from "../../../utilis/cookies_manager";
import { base_url, data_url } from "../../../utilis/apiv1/end_point";

async function Group_home() {
    const group_home_url = base_url + data_url.group_home;
    const token = get_cookie("auth_token");
  
    try {
      const res = await fetch(group_home_url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
      );
  
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
      }
  
      const data = await res.json();
  
      if (!data || !data.group) {
        throw new Error('Data not found in response');
      }
  
      return data.group; // Return the 'group' property from the response
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error to be handled by the caller
    }
  }
  
export default Group_home;
