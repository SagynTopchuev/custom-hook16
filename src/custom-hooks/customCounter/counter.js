import { useState } from "react";

export const useCounter = () => {
  const [value, setValue] = useState(0);

  const Increment = (num) => {
    setValue((prev) => prev + num);
  };
  const Decrement = (num) => {
    if (value > 0) {
      setValue((prev) => prev - num);
    } else {
      setValue(value);
    }
  };
  const Reset = (num) => {
    setValue(num);
  };

  return {
    value,
    Increment,
    Decrement,
    Reset,
  };
};
