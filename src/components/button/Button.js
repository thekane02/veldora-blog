import { LoadingSpinner } from "components/loading";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 0 20px;
  min-width: 240px;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  height: ${(props) => props.height || "60px"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
  margin: 0 auto;
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;
const Button = ({
  type = "button",
  children,
  onClick = () => {},
  href,
  ...props
}) => {
  const navigate = useNavigate();
  const { isLoading } = props;
  if (href)
    return (
      <ButtonStyles type={type} onClick={() => navigate(href)} {...props}>
        {isLoading ? <LoadingSpinner></LoadingSpinner> : children}
      </ButtonStyles>
    );
  return (
    <ButtonStyles type={type} onClick={onClick} {...props}>
      {isLoading ? <LoadingSpinner></LoadingSpinner> : children}
    </ButtonStyles>
  );
};

export default Button;
