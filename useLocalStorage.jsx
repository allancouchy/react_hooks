import { useState, useEffect } from "react";

const useLocalStorage = (key, initValue) => {
  const [value, setValue] = useState(() => {
    const currentValue = localStorage.getItem(key);
    return currentValue ? JSON.parse(currentValue) : initValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
