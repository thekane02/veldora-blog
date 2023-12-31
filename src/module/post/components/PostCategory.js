import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const PostCategoryStyles = styled.span`
  ${(props) =>
    props.absolute &&
    css`
      position: absolute;
      top: 10px;
      left: 10px;
      z-index: 2;
    `};
  background: ${(props) => props.color};
  padding: 4px 10px;
  font-size: 12px;
  color: white;
  border-radius: 4px;
  display: inline-block;
  text-transform: uppercase;
  margin: 0px 0;
  a {
    color: white;
  }
`;

const PostCategory = ({ absolute, href = "#", children }) => {
  let bg;
  switch (children.toLowerCase()) {
    case "active":
      bg = "#ed1c1c";
      break;
    case "business":
      bg = "#0015ff";
      break;
    case "study":
      bg = "#d1783c";
      break;
    case "gaming":
      bg = "#6b34ba";
      break;
    default:
      bg = "#36c942";
      break;
  }
  return (
    <PostCategoryStyles color={bg} absolute={absolute}>
      <Link to={href}>{children}</Link>
    </PostCategoryStyles>
  );
};

export default PostCategory;
