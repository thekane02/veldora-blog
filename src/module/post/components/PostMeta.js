import { IconClock } from "components/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PostMetaStyles = styled.div`
  font-size: 12px;
  display: flex;
  column-gap: 18px;
  margin: 8px 0;
  color: ${(props) => props.color};
  .post-auth,
  .post-date {
    display: flex;
    column-gap: 8px;
    align-items: center;
    &-avt {
      width: 25px;
      height: 25px;
      object-fit: cover;
      border-radius: 100rem;
    }

    &-name {
      font-weight: 500;
    }
  }
  .post-date {
    column-gap: 6px;
  }
`;

const PostMeta = ({ color = "black", auth, date = "Dec 24, 2016" }) => {
  return (
    <PostMetaStyles className="post-meta" color={color}>
      <Link
        to={auth?.username ? `/profile/${auth.username}` : "#"}
        className="post-auth"
      >
        <img className="post-auth-avt" src={auth?.avatar} alt="" />
        <span className="post-auth-name">
          {auth?.fullname ? auth.fullname : "im_dev2002"}
        </span>
      </Link>

      <div className="post-date">
        <span className="post-date-icon">
          <IconClock size={18} color={color}></IconClock>
        </span>
        {date}
      </div>
    </PostMetaStyles>
  );
};

export default PostMeta;
