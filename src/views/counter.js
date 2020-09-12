import React from "react";
import { Counter, Button } from "components/sample";

const CounterPage = () => {
  return (
    <>
      <Counter />
      <Button title="Goto Landing Page" path="/" />
    </>
  );
};
export default CounterPage;
