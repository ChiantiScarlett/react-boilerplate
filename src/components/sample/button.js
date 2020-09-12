import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

/**
 * Sample Button Component
 * @param {*} history inherits from withRouter
 * @param {*} title Button text
 * @param {*} path Path to redirect when the button is clicked
 *
 */
const Button = ({ history, title, path }) => {
  return (
    <Container
      onClick={() => {
        history.push(path);
      }}
    >
      {title}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background: #eee;
  color: #222;
  font-size: 20px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
`;

export default withRouter(Button);
