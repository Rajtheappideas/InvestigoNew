import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  DashboardFooter,
  DashboardNav,
  DashBoard,
  Orders,
  Withdraw,
  Invesment,
} from "../components";
import Account from "../pages/Account";
// import Withdraw from "../pages/Withdraw";
// import Invesment from "../pages/Invesment";
// import Orders from "../pages/Orders";

const Dashboard = () => {
  const [showDashboard, setShowDashboard] = useState(true);
  const [showAccount, setShowAccount] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [showInvestment, setShowInvestment] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  return (
    <>
      <DashboardNav />
      {showDashboard && (
        <DashBoard
          setShowDashboard={setShowDashboard}
          setShowAccount={setShowAccount}
          setShowOrders={setShowOrders}
          setShowInvestment={setShowInvestment}
          setShowWithdraw={setShowWithdraw}
        />
      )}
      {showInvestment && (
        <Invesment
          setShowDashboard={setShowDashboard}
          setShowAccount={setShowAccount}
          setShowOrders={setShowOrders}
          setShowInvestment={setShowInvestment}
          setShowWithdraw={setShowWithdraw}
        />
      )}
      {showAccount && (
        <Account
          setShowDashboard={setShowDashboard}
          setShowAccount={setShowAccount}
          setShowOrders={setShowOrders}
          setShowInvestment={setShowInvestment}
          setShowWithdraw={setShowWithdraw}
        />
      )}
      {showOrders && (
        <Orders
          setShowDashboard={setShowDashboard}
          setShowAccount={setShowAccount}
          setShowOrders={setShowOrders}
          setShowInvestment={setShowInvestment}
          setShowWithdraw={setShowWithdraw}
        />
      )}
      {showWithdraw && (
        <Withdraw
          setShowDashboard={setShowDashboard}
          setShowAccount={setShowAccount}
          setShowOrders={setShowOrders}
          setShowInvestment={setShowInvestment}
          setShowWithdraw={setShowWithdraw}
        />
      )}
      <DashboardFooter />
    </>
  );
};

export default Dashboard;
