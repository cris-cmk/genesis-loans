import React from "react";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faMoneyBillWave, 
  faClipboardCheck, 
  faFileAlt, 
  faClock, 
  faChartLine 
} from "@fortawesome/free-solid-svg-icons";

const Layout = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-br from-blue-700 to-blue-500 text-white p-6 fixed h-full shadow-xl">
        <div className="flex items-center mb-8">
          <h2 className="text-3xl font-bold tracking-wide">Genesis</h2>
        </div>
        <ul className="space-y-6">
          <li className="flex items-center space-x-4 hover:bg-blue-600 p-3 rounded-lg transition duration-200 shadow-sm">
            <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl bg-white text-blue-500 p-2 rounded-full" />
            <span className="text-lg font-medium">Dashboard</span>
          </li>
          <li className="flex items-center space-x-4 hover:bg-blue-600 p-3 rounded-lg transition duration-200 shadow-sm">
            <FontAwesomeIcon icon={faClipboardCheck} className="text-2xl bg-white text-blue-500 p-2 rounded-full" />
            <span className="text-lg font-medium">Loans</span>
          </li>
          <li className="flex items-center space-x-4 hover:bg-blue-600 p-3 rounded-lg transition duration-200 shadow-sm">
            <FontAwesomeIcon icon={faFileAlt} className="text-2xl bg-white text-blue-500 p-2 rounded-full" />
            <span className="text-lg font-medium">Payments</span>
          </li>
          <li className="flex items-center space-x-4 hover:bg-blue-600 p-3 rounded-lg transition duration-200 shadow-sm">
            <FontAwesomeIcon icon={faClock} className="text-2xl bg-white text-blue-500 p-2 rounded-full" />
            <span className="text-lg font-medium">Progress</span>
          </li>
          <li className="flex items-center space-x-4 hover:bg-blue-600 p-3 rounded-lg transition duration-200 shadow-sm">
            <FontAwesomeIcon icon={faChartLine} className="text-2xl bg-white text-blue-500 p-2 rounded-full" />
            <span className="text-lg font-medium">Analytics</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="ml-64 w-full p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
