import React, { useContext } from "react";
import styled from "styled-components";
import { RootContext } from "services/context";

const Counter = () => {
  const [context, setContext] = useContext(RootContext);

  const updateNumber = (amount) => {
    setContext({ ...context, number: context.number + amount });
  };

  return (
    <Container>
      <Button
        onClick={() => {
          updateNumber(-1);
        }}
      >
        -
      </Button>
      <Number>{context.number}</Number>
      <Button
        onClick={() => {
          updateNumber(1);
        }}
      >
        +
      </Button>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 20px auto;
  text-align: center;
`;

const Button = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-size: 24px;
  cursor: pointer;
`;

const Number = styled.div`
  font-size: 40px;
  font-weight: bold;
  display: inline-block;
  vertical-align: middle;
  width: 50px;
  text-align: center;
  margin: 0 20px;
`;

export default Counter;
