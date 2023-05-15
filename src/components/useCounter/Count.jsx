import React from "react";
import { useCounter } from "../../custom-hooks/customCounter/counter";
import styled from "styled-components";
export const Count = () => {
  const { value, Increment, Decrement, Reset } = useCounter();
  return (
    <Container>
      <p>{value}</p>
      <button onClick={() => Increment(4)}>+</button>
      <button onClick={() => Decrement(2)}>-</button>
      <button onClick={() => Reset(0)}>Reset</button>
    </Container>
  );
};

const Container = styled.div`
  p {
    font-size: 20px;
    color: greenyellow;
  }
  button {
    width: 70px;
    margin-left: 20px;
    background-color: aqua;
    border-radius: 20px;
    border: none;
  }
`;
