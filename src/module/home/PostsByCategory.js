import { db } from "config/firebase-config";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import PostItemLarge from "module/post/PostItemLarge";
import PostItemMini from "module/post/PostItemMini";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const PostsByCategoryStyles = styled.div`
  display: flex;
  column-gap: 24px;
  .post-large {
    flex: 1;
  }
  .list-post__right {
    display: flex;
    width: 30%;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const PostsByCategory = () => {
  const [posts, setPosts] = useState([]);
  console.log("file: PostsByCategory.js:24  PostsByCategory  posts:", posts);
  useEffect(() => {
    const colRef = collection(db, "posts");
    const q = query(
      colRef,
      where("status", "==", 1),
      where("categories", "array-contains", {
        id: "IOLi8j3f97GwzD06PGzd",
        name: "Công nghệ",
        slug: "cong-nghex",
        status: 1,
      }),
      // orderBy("createdAt", "desc"),
      limit(5)
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
  if (!posts.length) return;
  return (
    <PostsByCategoryStyles>
      <PostItemLarge data={posts[0]}></PostItemLarge>
      <div className="list-post__right">
        {posts.slice(1, posts.length).map((post) => (
          <PostItemMini key={post.id} data={post}></PostItemMini>
        ))}
      </div>
    </PostsByCategoryStyles>
  );
};

export default PostsByCategory;
