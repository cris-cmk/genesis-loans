import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWave, faClipboardCheck, faFileAlt, faClock, faChartLine, faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const LoanDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Side Navigation */}
      <div className="w-64 bg-gradient-to-r from-blue-700 to-blue-500 text-white p-6 fixed h-full shadow-lg">
        {/* Logo Section */}
        <div className="flex items-center mb-8">
          <h2 className="text-3xl font-bold">Genesis</h2>
        </div>

        {/* Navigation Links */}
        <ul className="space-y-6">
          <li className="flex items-center space-x-4 hover:bg-blue-600 p-3 rounded-lg transition duration-200">
            <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl rounded-full bg-white text-blue-500 p-2" />
            <span className="text-lg">Dashboard</span>
          </li>

          <div className="border-b border-gray-300 my-4"></div> {/* Divider */}

          <li className="flex items-center space-x-4 hover:bg-blue-600 p-3 rounded-lg transition duration-200">
            <FontAwesomeIcon icon={faClipboardCheck} className="text-2xl rounded-full bg-white text-blue-500 p-2" />
            <span className="text-lg">Loans</span>
          </li>

          <div className="border-b border-gray-300 my-4"></div> {/* Divider */}

          <li className="flex items-center space-x-4 hover:bg-blue-600 p-3 rounded-lg transition duration-200">
            <FontAwesomeIcon icon={faFileAlt} className="text-2xl rounded-full bg-white text-blue-500 p-2" />
            <span className="text-lg">Payments</span>
          </li>

          <div className="border-b border-gray-300 my-4"></div> {/* Divider */}

          <li className="flex items-center space-x-4 hover:bg-blue-600 p-3 rounded-lg transition duration-200">
            <FontAwesomeIcon icon={faClock} className="text-2xl rounded-full bg-white text-blue-500 p-2" />
            <span className="text-lg">Progress</span>
          </li>

          <div className="border-b border-gray-300 my-4"></div> {/* Divider */}

          <li className="flex items-center space-x-4 hover:bg-blue-600 p-3 rounded-lg transition duration-200">
            <FontAwesomeIcon icon={faChartLine} className="text-2xl rounded-full bg-white text-blue-500 p-2" />
            <span className="text-lg">Analytics</span>
          </li>
        </ul>
      </div>

      {/* Main Dashboard Content */}
      <div className="ml-64 w-full p-8">
        {/* Header with Title, Profile, and Logout */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Loan Application Dashboard</h1>
          <div className="flex items-center space-x-6">
            {/* Profile Section */}
            <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 p-2 rounded-full transition duration-200">
              <FontAwesomeIcon icon={faUserCircle} className="text-3xl text-gray-700" />
              <span className="text-lg text-gray-700">John Doe</span> {/* Example name */}
            </div>

            {/* Logout Button */}
            <button className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full transition duration-200">
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Main Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Loan Summary */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Loan Summary</h3>
              <p className="text-gray-500">Total Active Loans</p>
            </div>
            <div className="bg-blue-500 text-white p-4 rounded-full">
              <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
              <p className="text-xl mt-2">125</p> {/* Example number */}
            </div>
          </div>

    

          {/* Defaulted Loans */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Loan Summary</h3>
              <p className="text-gray-500">Defaulted Loans </p>
            </div>
            <div className="bg-red-500 text-white p-4 rounded-full">
              <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
              <p className="text-xl mt-2">110</p> {/* Example number */}
            </div>
          </div>

          {/* paid Loans*/}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Loan Summary</h3>
              <p className="text-gray-500">Paid Loans</p>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-full">
              <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
              <p className="text-xl mt-2">3</p> {/* Example number */}
            </div>
          </div>
           {/* Loan Pending Approval */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Loan Summary</h3>
              <p className="text-gray-500">Loans Pending Approval</p>
            </div>
            <div className="bg-orange-500 text-white p-4 rounded-full">
              <FontAwesomeIcon icon={faClock} className="text-2xl" />
              <p className="text-xl mt-2">3</p> {/* Example number */}
            </div>
          </div>
        </div>

        

        {/* Metrics Row */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Loan Amount */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Total Active Loan Amount</h3>
              <p className="text-gray-500">Amount of loans disbursed</p>
            </div>
            <div className="bg-teal-500 text-white p-4 rounded-full">
              <FontAwesomeIcon icon={faChartLine} className="text-2xl" />
              <p className="text-xl mt-2">$2,500,000</p> {/* Example amount */}
            </div>
          </div>

          {/* Total Payments */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Total Payments</h3>
              <p className="text-gray-500">Payments made towards loans</p>
            </div>
            <div className="bg-indigo-500 text-white p-4 rounded-full">
              <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
              <p className="text-xl mt-2">$1,200,000</p> {/* Example amount */}
            </div>
          </div>

          {/* Loan Interest */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Loan Interest</h3>
              <p className="text-gray-500">Interest accrued on loans</p>
            </div>
            <div className="bg-red-500 text-white p-4 rounded-full">
              <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
              <p className="text-xl mt-2">$35000</p> {/* Example amount */}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 flex justify-center gap-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
            <FontAwesomeIcon icon={faClipboardCheck} className="text-white" />
            Apply for Loan
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
            <FontAwesomeIcon icon={faFileAlt} className="text-white" />
            View Payments
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanDashboard;
