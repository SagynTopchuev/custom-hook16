import React from "react";

export const Input = ({ type, onChange, value }) => {
  return <input type={type} onChange={onChange} value={value} />;
};
