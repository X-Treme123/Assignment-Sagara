import React from "react";
import Navbar from "./Navbar";
import DashboardChart from "./Fragments/Dashboard/DashboardChart";
import DashboardOverview from "./Fragments/Dashboard/DashboardOverview";
import Header from "./Fragments/Students/Header";
import { CiCalendar } from "react-icons/ci";

const DashboardPage = () => {
  return (
    <div className="flex bg-gray-100 h-screen">
      <Navbar type="Dashboard" />
      <div className="flex-1">
        <Header />
        <div className="flex-1 p-8  ml-64">
          <div className="flex justify-between items-center">
            <div className="bg-white p-2 flex gap-2 items-center shadow-lg">
              <CiCalendar className="text-2xl"/>
              <p className="font-semibold text-gray-500">Dec 29, 2023 - Jan 4, 2024</p>
            </div>
            <select className="border p-2 rounded-md">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>
          <DashboardOverview />
          <DashboardChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
