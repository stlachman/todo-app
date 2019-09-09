import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 2rem auto 0;
  max-width: 500px;
`;

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
