import Cookies from 'js-cookie';

export const set_cookies = (cookieData) => {
  // Calculate expiration time for 24 hours from now
  const expirationTime = new Date();
  expirationTime.setTime(expirationTime.getTime() + (24 * 60 * 60 * 1000)); // 24 hours in milliseconds
  
  // Set each cookie with 24-hour expiration time
  Object.entries(cookieData).forEach(([key, value]) => {
    Cookies.set(key, value, { expires: expirationTime });
  });
};

export const get_cookie = (cookieName) => {
  return Cookies.get(cookieName);
};

export const remove_cookie = (cookieName) => {
  Cookies.remove(cookieName);
};