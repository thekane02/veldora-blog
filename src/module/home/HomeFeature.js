import { db } from "config/firebase-config";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import PostItemLarge from "module/post/PostItemLarge";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HomeFeatureStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2px;

  .post-large {
    width: unset;
    .post-thumb {
      height: 570px;
    }
  }
`;

const HomeFeature = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "posts");
    const q = query(
      colRef,
      where("status", "==", 1),
      where("featured", "==", true),
      limit(4)
    );
    onSnapshot(q, (snapshot) => {
      let result = [];
      snapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(result);
    });
  }, []);
  if (posts.length <= 0) return;
  console.log(posts);
  return (
    <HomeFeatureStyles>
      {posts.map((post) => (
        <PostItemLarge key={post.id} data={post}></PostItemLarge>
      ))}
    </HomeFeatureStyles>
  );
};

export default HomeFeature;
