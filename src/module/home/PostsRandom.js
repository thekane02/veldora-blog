import PostItem from "module/post/PostItem";
import React from "react";
import styled from "styled-components";

const RandomPostsStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
`;

const PostsRandom = () => {
  return (
    <RandomPostsStyles>
      <PostItem></PostItem>
      <PostItem></PostItem>
      <PostItem></PostItem>
      <PostItem></PostItem>
    </RandomPostsStyles>
  );
};

export default PostsRandom;
