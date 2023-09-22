import { useState } from "react";

const useInput = (initValue) => {
  const [value, setValue] = useState(initValue);
  const handleChange = { value, onChange: (e) => setValue(e.target.value) };
  const reset = () => setValue(initValue);

  return [value, handleChange, reset];
};

export default useInput;
