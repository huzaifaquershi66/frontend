import { useState, useEffect } from "react";

const getLocalValue = (key, initialValue) => {
  // Check if the code is running in the browser
  if (typeof window === "undefined") return initialValue;

  try {
    // Get the stored value from localStorage
    const localValue = localStorage.getItem(key);

    // If there's a value, parse it and return
    if (localValue !== null) return JSON.parse(localValue);
  } catch (error) {
    console.error(`Error parsing localStorage key "${key}":`, error);
  }

  // If no value exists, return the initial value or the result of a function
  if (initialValue instanceof Function) return initialValue();

  return initialValue;
};

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => getLocalValue(key, initialValue));

  useEffect(() => {
    try {
      if (value === undefined) {
        // If the value is `undefined`, remove the item from localStorage
        localStorage.removeItem(key);
      } else {
        // Otherwise, save the value to localStorage
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, value]);

  // Listen for changes to localStorage from other windows or tabs
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === key) {
        setValue(getLocalValue(key, initialValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key, initialValue]);

  return [value, setValue];
};

export default useLocalStorage;
