import React from "react";
import styled from "styled-components";

const FormContainerStyles = styled.div`
  margin-top: ${(props) => props.theme.headerHeight};
  padding: 16px 0;
  .field-format {
    display: flex;
    justify-content: space-between;
    width: 100%;
    & > * {
      width: 46%;
    }
  }
`;

const FormContainer = ({ children }) => {
  return <FormContainerStyles>{children}</FormContainerStyles>;
};

export default FormContainer;
