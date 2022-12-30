import { useState } from "react";

interface UseSessionStorage {
  (key: string, initialValue: any): readonly [
    string,
    (value: any) => void,
    () => void
  ];
}

const useSessionStorage: UseSessionStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = sessionStorage.getItem(key);
    if (item && item !== "") {
      return JSON.parse(item);
    } else {
      sessionStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    sessionStorage.setItem(key, JSON.stringify(valueToStore));
  };

  const deleteValue = () => {
    sessionStorage.removeItem(key);
    setStoredValue("");
  };

  return [storedValue, setValue, deleteValue] as const;
};

export default useSessionStorage;
