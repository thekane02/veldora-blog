import Heading from "components/layout/Heading";
import { Table } from "components/table";
import { db } from "config/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { shortId } from "utils/shortId";

const PostInfoStyles = styled.div`
  display: flex;
  gap: 8px;
  img {
    aspect-ratio: 16/9;
    object-fit: cover;
    width: 120px;
  }
  span {
    font-weight: 600;
  }
`;

const PostManagePage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "posts");
    onSnapshot(colRef, (snapshot) => {
      const result = [];
      snapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(result);
    });
  }, []);
  console.log(posts);
  return (
    <>
      <Heading>User Manager</Heading>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Info</th>
            <th>Author</th>
            <th>Categories</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr>
              <td title={post.id}>{shortId(post.id)}</td>
              <td
                style={{
                  width: "280px",
                }}
              >
                <PostInfoStyles>
                  <img src={post.thumbnail} alt="" />
                  <span title={post.title} className="truncate">
                    {post.title}
                  </span>
                </PostInfoStyles>
              </td>
              <td>{post.user.fullname}</td>
              <td>{post.status}</td>
              <td>{post.status}</td>
              <td>
                <div>
                  <a href={`/manage/update-post?id=${post.id}`}>Edit</a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default PostManagePage;
