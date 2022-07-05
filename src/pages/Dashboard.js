import React, { useEffect, useState } from "react";
import {
  DashboardFooter,
  DashboardNav,
  DashBoard,
  Orders,
  Withdraw,
  Invesment,
  Account
} from "../components";

const Dashboard = () => {
  const [showDashboard, setShowDashboard] = useState(true);
  const [showAccount, setShowAccount] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [showInvestment, setShowInvestment] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
 
  return (
    <>
      <DashboardNav
        setShowDashboard={setShowDashboard}
        setShowAccount={setShowAccount}
        setShowOrders={setShowOrders}
        setShowInvestment={setShowInvestment}
        setShowWithdraw={setShowWithdraw}
        showDashboard={showDashboard}
      />
      {showDashboard && (
        <DashBoard
          setShowDashboard={setShowDashboard}
          setShowAccount={setShowAccount}
          setShowOrders={setShowOrders}
          setShowInvestment={setShowInvestment}
          setShowWithdraw={setShowWithdraw}
          showDashboard={showDashboard}
          showAccount={showAccount}
          showOrders={showOrders}
          showInvestment={showInvestment}
          showWithdraw={showWithdraw}
        />
      )}
      {showInvestment && (
        <Invesment
          setShowDashboard={setShowDashboard}
          setShowAccount={setShowAccount}
          setShowOrders={setShowOrders}
          setShowInvestment={setShowInvestment}
          setShowWithdraw={setShowWithdraw}
          showDashboard={showDashboard}
          showAccount={showAccount}
          showOrders={showOrders}
          showInvestment={showInvestment}
          showWithdraw={showWithdraw}
        />
      )}
      {showAccount && (
        <Account
          setShowDashboard={setShowDashboard}
          setShowAccount={setShowAccount}
          setShowOrders={setShowOrders}
          setShowInvestment={setShowInvestment}
          setShowWithdraw={setShowWithdraw}
          showDashboard={showDashboard}
          showAccount={showAccount}
          showOrders={showOrders}
          showInvestment={showInvestment}
          showWithdraw={showWithdraw}
        />
      )}
      {showOrders && (
        <Orders
          setShowDashboard={setShowDashboard}
          setShowAccount={setShowAccount}
          setShowOrders={setShowOrders}
          setShowInvestment={setShowInvestment}
          setShowWithdraw={setShowWithdraw}
          showDashboard={showDashboard}
          showAccount={showAccount}
          showOrders={showOrders}
          showInvestment={showInvestment}
          showWithdraw={showWithdraw}
        />
      )}
      {showWithdraw && (
        <Withdraw
          setShowDashboard={setShowDashboard}
          setShowAccount={setShowAccount}
          setShowOrders={setShowOrders}
          setShowInvestment={setShowInvestment}
          setShowWithdraw={setShowWithdraw}
          showDashboard={showDashboard}
          showAccount={showAccount}
          showOrders={showOrders}
          showInvestment={showInvestment}
          showWithdraw={showWithdraw}
        />
      )}
      <DashboardFooter />
    </>
  );
};

export default Dashboard;
