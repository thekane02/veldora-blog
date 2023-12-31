import Header from "components/layout/Header";
import DashboardSidebar from "module/dashboard/DashboardSidebar";
import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const LayoutDashboardStyles = styled.div`
  .container {
    margin-top: ${(props) => props.theme.headerHeight};
  }
`;

const LayoutDashboard = () => {
  return (
    <LayoutDashboardStyles>
      <Header></Header>
      <DashboardSidebar></DashboardSidebar>
      <div className="container">
        <Outlet></Outlet>
      </div>
    </LayoutDashboardStyles>
  );
};

export default LayoutDashboard;
