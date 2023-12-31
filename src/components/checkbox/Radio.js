import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";

const RadioStyles = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  .input-radio__box {
    display: block;
    width: 20px;
    height: 20px;
    /* background: #ddd; */
    border-radius: 100%;
    cursor: pointer;
    position: relative;
    border: 2px solid ${(props) => props.theme.primary};
    &::after {
      content: "";
      position: absolute;
      border-radius: inherit;
      inset: 3px;
      display: ${(props) => (props.checked ? "block" : "none")};
      background: ${(props) => props.theme.primary};
    }
  }
`;

const Radio = ({ name, control, checked, children, ...props }) => {
  const { field } = useController({ control, name, defaultValue: "" });
  return (
    <RadioStyles className="input-radio" checked={checked}>
      <input className="hidden-input" type="radio" {...field} {...props} />
      <div className="input-radio__box"></div>
      <span>{children}</span>
    </RadioStyles>
  );
};

export default Radio;
