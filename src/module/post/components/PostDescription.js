import React from "react";
import styled from "styled-components";

const PostDescriptionStyles = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const PostDescription = ({ children }) => {
  return <PostDescriptionStyles>{children}</PostDescriptionStyles>;
};

export default PostDescription;
