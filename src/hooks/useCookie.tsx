import { useState } from "react";

interface UseCookie {
  (key: string, initialValue?: any): readonly [
    string,
    (value: any) => void,
    () => void
  ];
}
interface Cookies {
  [key: string]: string;
}
interface GetCookie {
  (cookieName: string): string | null;
}
interface SetCookie {
  (cookieName: string, cookieValue: any, validity?: number): void;
}
interface DeleteCookie {
  (cookieName: string): void;
}

const getCookie: GetCookie = (cookieName) => {
  let cookiesList = decodeURIComponent(document.cookie).split("; ");
  let cookies: Cookies = {};
  for (let cookie of cookiesList) {
    let cookieList = cookie.split("=");
    cookies[cookieList[0]] = cookieList[1];
  }
  return cookies[cookieName];
};

const setCookie: SetCookie = (cookieName, cookieValue, validity = 7) => {
  const expiryDate = new Date();
  expiryDate.setTime(expiryDate.getTime() + validity * 24 * 60 * 60 * 1000);
  let expires = "expires=" + expiryDate.toUTCString();
  document.cookie =
    cookieName + "=" + JSON.stringify(cookieValue) + ";" + expires + ";path=/";
};

const deleteCookie: DeleteCookie = (cookieName) => {
  setCookie(cookieName, null, -1);
};

const useCookie: UseCookie = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const cookie = getCookie(key);
    if (cookie) return JSON.parse(cookie);
    else {
      setCookie(key, initialValue);
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setCookie(key, valueToStore);
    setStoredValue(valueToStore);
  };

  const deleteValue = () => {
    deleteCookie(key);
    setStoredValue("");
  };

  return [storedValue, setValue, deleteValue] as const;
};

export default useCookie;
