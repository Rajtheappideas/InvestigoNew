import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  DashboardFooter,
  DashboardNav,
  DashBoard,
  Invesment,
  Orders,
  Withdraw,
} from "../components";

const Dashboard = () => {
  return (
    <>
      <DashboardNav />
      <DashBoard />
      {/* <Invesment /> */}
      {/* <Orders /> */}
      {/* <Withdraw /> */}
      <DashboardFooter />
    </>
  );
};

export default Dashboard;
