// useCookieSetter.js
import Cookies from "js-cookie";

const useCookie = () => {
  const setCookie = (cookieName: string, cookieValue: string) => {
    const FORMATTED_COOKIE_NAME = `${import.meta.env.VITE_APP_PREFIX}${cookieName}`;
    Cookies.set(FORMATTED_COOKIE_NAME, cookieValue, {
      expires: parseInt(import.meta.env.VITE_APP_COOKIE_EXPIRATION),
    });
  };

  const deleteCookie = (cookieName: string) => {
    Cookies.remove(`${import.meta.env.VITE_APP_PREFIX}${cookieName}`);
  };

  const getCookie = (cookieName: string) => {
    return Cookies.get(`${import.meta.env.VITE_APP_PREFIX}${cookieName}`);
  };

  return { setCookie, deleteCookie, getCookie };
};

export default useCookie;
