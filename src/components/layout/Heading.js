import React from "react";
import styled from "styled-components";

const HeadingSyles = styled.h2`
  font-size: 24px;
  position: relative;
  margin-bottom: 40px;
  &::before {
    content: "";
    position: absolute;
    bottom: -6px;
    width: 36px;
    height: 4px;
    border-radius: 100rem;
    background-color: ${(props) => props.theme.primary};
  }
`;

const Heading = ({ children }) => {
  return <HeadingSyles>{children}</HeadingSyles>;
};

export default Heading;
