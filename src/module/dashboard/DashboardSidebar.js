import {
  IconBook,
  IconDashboard,
  IconLogout,
  IconProfile,
  IconTags,
} from "components/icons";
import IconCategories from "components/icons/IconCategories";
import { auth } from "config/firebase-config";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "utils/constants";
import { v4 } from "uuid";

const DashboardSidebarStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 20px 12px;
  border-radius: 12px;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
  min-width: 80px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  .sidebar__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    &--active {
      span {
        svg {
          stroke: ${(props) => props.theme.primary};
        }
      }
    }
    &-title {
      display: none;
    }
    &:hover .sidebar__link-title {
      /* display: block; */
    }
  }
`;

const iconSize = 38;
const iconColor = theme.grayDark;

const itemLinks = [
  {
    title: "Dashboard",
    url: "/manage/dashboard",
    icon: <IconDashboard size={iconSize} color={iconColor}></IconDashboard>,
  },
  {
    title: "Post",
    url: "/manage/add-post",
    icon: <IconBook size={iconSize} color={iconColor}></IconBook>,
  },
  {
    title: "Category",
    url: "/manage/category",
    icon: <IconTags size={iconSize} color={iconColor}></IconTags>,
  },
  {
    title: "Profile",
    url: "/manage/profile",
    icon: <IconProfile size={iconSize} color={iconColor}></IconProfile>,
  },
  {
    title: "Logout",
    url: "/",
    icon: <IconLogout size={iconSize - 4} color={iconColor}></IconLogout>,
    onClick: () => signOut(auth),
  },
];

const DashboardSidebar = () => {
  return (
    <DashboardSidebarStyles className="sidebar">
      {itemLinks.map((item) => {
        if (item.onClick)
          return (
            <div
              className={({ isActive }) =>
                isActive
                  ? "sidebar__link sidebar__link--active"
                  : "sidebar__link"
              }
              key={v4()}
              onClick={item.onClick}
            >
              <span className="sidebar__link-icon">{item.icon}</span>
              <span className="sidebar__link-title">{item.title}</span>
            </div>
          );
        return (
          <NavLink
            to={item.url}
            className={({ isActive }) =>
              isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"
            }
            key={v4()}
          >
            <span className="sidebar__link-icon">{item.icon}</span>
            <span className="sidebar__link-title">{item.title}</span>
          </NavLink>
        );
      })}
    </DashboardSidebarStyles>
  );
};

export default DashboardSidebar;
