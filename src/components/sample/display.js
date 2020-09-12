import React, { useContext } from "react";
import styled from "styled-components";
import { RootContext } from "services/context";

const Landing = ({ history }) => {
  const [context, setContext] = useContext(RootContext);
  return <Container>{context.number}</Container>;
};

const Container = styled.div`
  font-size: 40px;
  font-weight: bold;
  padding: 40px 0;
  text-align: center;
`;

export default Landing;
