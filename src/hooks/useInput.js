import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const reset = () => {
    setValue(initialValue);
  };
  const attributeObj = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  return [value, attributeObj, reset];
};

export default useInput;
