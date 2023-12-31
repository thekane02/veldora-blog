import Heading from "components/layout/Heading";
import { Table } from "components/table";
import { db } from "config/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
const InfoColStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  .avt {
    width: 50px;
    height: 50px;
    padding: 6px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 100rem;
  }
  img {
    width: 100%;
  }
  p {
    font-size: 13px;
    color: gray;
  }
`;

const UserManagePage = () => {
  const [users, setUsers] = useState([]);
  console.log(
    "🚀 ~ file: UserManagePage.js:9 ~ UserManagePage ~ users:",
    users
  );
  useEffect(() => {
    const colRef = collection(db, "users");
    onSnapshot(colRef, (snapshot) => {
      const result = [];
      snapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
        setUsers(result);
      });
    });
  }, []);
  return (
    <>
      <Heading>User Manager</Heading>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Info</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td title={user.id}>{user.id.slice(0, 10) + "..."}</td>
              <td>
                <InfoColStyles>
                  <div className="avt">
                    <img src={user.avatar} alt="" />
                  </div>
                  <div>
                    <h3>{user.fullname}</h3>
                    <p>{user.username}</p>
                  </div>
                </InfoColStyles>
              </td>
              <td>{user.email}</td>
              <td>user</td>
              <td>ban</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default UserManagePage;
