import React from "react";
import styled from "styled-components";

const FieldCheckboxesStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const FieldCheckboxes = ({ children }) => {
  return <FieldCheckboxesStyles>{children}</FieldCheckboxesStyles>;
};

export default FieldCheckboxes;
