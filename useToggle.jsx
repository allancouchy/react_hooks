import { useState } from "react";

const useToggle = (initValue = Boolean) => {
  const [state, setState] = useState(initValue);
  const toggle = () => setState(!state);

  return [state, toggle];
};

export default useToggle;
