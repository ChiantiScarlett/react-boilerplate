import React from "react";
import { Display, Button } from "components/sample";

const LandingPage = () => {
  return (
    <>
      <Display />
      <Button title="Goto Counter Page" path="/counter" />
    </>
  );
};
export default LandingPage;
