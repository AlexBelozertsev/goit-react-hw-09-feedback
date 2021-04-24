import React from 'react';
import AppBar from '../AppBar';
import Container from '../Container';

const Layout = ({ children }) => (
  <>
    <AppBar text="React Hooks. hw-09. Feedback." />
    <Container>{children}</Container>
  </>
);

export default Layout;
