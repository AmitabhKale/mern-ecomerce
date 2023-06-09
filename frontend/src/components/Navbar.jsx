import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  background-color: orangered;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
`;

const Navbar = ({ brand }) => {
  return (
    <Container>
      <Wrapper>{brand}</Wrapper>
    </Container>
  );
};

Navbar.defaultProps = {
  brand: "Lifestyle Fashion",
};

export default Navbar;
