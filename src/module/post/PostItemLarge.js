import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostThumbnail from "./components/PostThumbnail";
import PostCategory from "./components/PostCategory";
import PostTitle from "./components/PostTitle";
import PostMeta from "./components/PostMeta";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "config/firebase-config";
import { v4 } from "uuid";

const PostItemLargeStyles = styled.div`
  position: relative;
  width: 760px;
  .post-content {
    position: absolute;
    bottom: 0;
    margin: 12px;
    z-index: 2;
    .post-title a {
      color: white;
    }
  }
  .post-auth-name {
    color: white;
  }
`;

const PostItemLarge = (props) => {
  const { data, ...rest } = props;

  if (!data) return;
  const { title, slug, desc, thumbnail, createdAt, user } = data;
  const date = new Date(createdAt.seconds * 1000).toLocaleDateString("vi-VI", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <PostItemLargeStyles className="post-large" {...rest}>
      <PostThumbnail
        href={slug}
        height="480px"
        url={
          thumbnail ||
          "https://jellywp.com/theme/disto/demo/wp-content/uploads/2018/11/melissa-walker-horn-1058236-unsplash-1920x982.jpg"
        }
      ></PostThumbnail>
      <div className="post-content">
        {data.categories.map((category) => (
          <PostCategory key={v4()} href={`/${category.slug}`}>
            {category.name}
          </PostCategory>
        ))}
        <PostTitle href={slug} size="32px" color="white">
          {title}
        </PostTitle>
        <PostMeta color="white" date={date} auth={user}></PostMeta>
      </div>
    </PostItemLargeStyles>
  );
};

export default PostItemLarge;
