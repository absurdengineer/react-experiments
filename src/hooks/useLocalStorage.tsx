import { useState } from "react";

interface UseLocalStorage {
  (key: string, initialValue: any): readonly [
    string,
    (value: any) => void,
    () => void
  ];
}

const useLocalStorage: UseLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    if (item && item !== "") {
      return JSON.parse(item);
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  const deleteValue = () => {
    localStorage.removeItem(key);
    setStoredValue("");
  };

  return [storedValue, setValue, deleteValue] as const;
};

export default useLocalStorage;
