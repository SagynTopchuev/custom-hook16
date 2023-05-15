// import { useState } from "react";

// export function useInput(
//   initialValue,
//   validationFunction,
//   validationFunction1
// ) {
//   const [value, setValue] = useState(initialValue);
//   const [error, setError] = useState("");

//   const handleChange = (event) => {
//     const inputValue = event.target.value;
//     setValue(inputValue);
//     setError(validationFunction(inputValue));
//     setError(validationFunction1(inputValue));
//   };

//   return {
//     value,
//     error,
//     handleChange,
//   };
// }
// import { useState } from "react";

// export const useInputWithValidation = (initialValue, validations) => {
//   const [value, setValue] = useState(initialValue);
//   const [error, setError] = useState("");

//   const validate = (value) => {
//     for (const validation of validations) {
//       const { condition, message } = validation;
//       if (!condition(value)) {
//         setError(message);
//         return false;
//       }
//     }

//     setError("");
//     return true;
//   };

//   const handleChange = (event) => {
//     const inputValue = event.target.value;
//     setValue(inputValue);
//     validate(inputValue);
//   };
//   const Form = (e) => {
//     e.preventDefault();
//   };
//   return {
//     value,
//     error,
//     handleChange,
//     validate,
//     Form
//   };
// };

import { useState } from "react";
export const useValid = (ini, type) => {
  const [valid, setValid] = useState(ini);
  const handleChange = (e) => setValid(e.target.value);
  const validateInput = () => {
    switch (type) {
      case "email":
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(valid)) {
          return false;
        }
        return true;
      case "password":
        const passwordRegex = valid.length >= 8;
        if (!passwordRegex) {
           return false;
        }
        return true;
      default:
        break
    }
  };
  console.log(validateInput());
  return {
    valid,
    handleChange,
    validateInput,
  }
};