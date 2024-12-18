import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faMoneyBillWave, 
  faClipboardCheck, 
  faFileAlt, 
  faClock, 
  faChartLine, 
  faUserCircle, 
  faSignOutAlt 
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const LoanDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Side Navigation */}
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
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Loan Dashboard</h1>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 p-2 rounded-full transition duration-200">
              <FontAwesomeIcon icon={faUserCircle} className="text-3xl text-gray-700" />
              <span className="text-lg text-gray-700">John Doe</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full transition duration-200 shadow-md"
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Active Loans */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-200">
            <h3 className="text-xl font-semibold text-gray-700">Active Loans</h3>
            <p className="text-gray-500">Loans currently active</p>
            <div className="mt-4 flex items-center space-x-2">
              <div className="bg-blue-500 text-white p-4 rounded-full">
                <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
              </div>
              <span className="text-xl font-bold text-gray-800">125</span>
            </div>
          </div>

          {/* Defaulted Loans */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-200">
            <h3 className="text-xl font-semibold text-gray-700">Defaulted Loans</h3>
            <p className="text-gray-500">Loans in default</p>
            <div className="mt-4 flex items-center space-x-2">
              <div className="bg-red-500 text-white p-4 rounded-full">
                <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
              </div>
              <span className="text-xl font-bold text-gray-800">110</span>
            </div>
          </div>

          {/* Paid Loans */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-200">
            <h3 className="text-xl font-semibold text-gray-700">Paid Loans</h3>
            <p className="text-gray-500">Loans fully paid off</p>
            <div className="mt-4 flex items-center space-x-2">
              <div className="bg-green-500 text-white p-4 rounded-full">
                <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
              </div>
              <span className="text-xl font-bold text-gray-800">3</span>
            </div>
          </div>

          {/* Pending Approval */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-200">
            <h3 className="text-xl font-semibold text-gray-700">Loans Pending Approval</h3>
            <p className="text-gray-500">Waiting for approval</p>
            <div className="mt-4 flex items-center space-x-2">
              <div className="bg-orange-500 text-white p-4 rounded-full">
                <FontAwesomeIcon icon={faClock} className="text-2xl" />
              </div>
              <span className="text-xl font-bold text-gray-800">3</span>
            </div>
          </div>

          {/* Total Loan Amount */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-200">
            <h3 className="text-xl font-semibold text-gray-700">Active Loan Amount</h3>
            <p className="text-gray-500">Disbursed total</p>
            <div className="mt-4 flex items-center space-x-2">
              <div className="bg-teal-500 text-white p-4 rounded-full">
                <FontAwesomeIcon icon={faChartLine} className="text-2xl" />
              </div>
              <span className="text-xl font-bold text-gray-800">2,500</span>
            </div>
          </div>

          {/* Total Payments */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-200">
            <h3 className="text-xl font-semibold text-gray-700">Total Payments</h3>
            <p className="text-gray-500">Loan payments made</p>
            <div className="mt-4 flex items-center space-x-2">
              <div className="bg-indigo-500 text-white p-4 rounded-full">
                <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
              </div>
              <span className="text-xl font-bold text-gray-800">1,200</span>
            </div>
          </div>

          {/* Overdue Loans */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-200">
            <h3 className="text-xl font-semibold text-gray-700">Overdue Loan Amount</h3>
            <p className="text-gray-500">Loans past due date</p>
            <div className="mt-4 flex items-center space-x-2">
              <div className="bg-yellow-500 text-white p-4 rounded-full">
                <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
              </div>
              <span className="text-xl font-bold text-gray-800">1,200</span>
            </div>
          </div>

          {/* Loan Interest */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-200">
            <h3 className="text-xl font-semibold text-gray-700">Loan Interest</h3>
            <p className="text-gray-500">Interest accrued</p>
            <div className="mt-4 flex items-center space-x-2">
              <div className="bg-green-600 text-white p-4 rounded-full">
                <FontAwesomeIcon icon={faChartLine} className="text-2xl" />
              </div>
              <span className="text-xl font-bold text-gray-800">$500</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 flex justify-center gap-6">
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg flex items-center gap-3 transition duration-200">
            <FontAwesomeIcon icon={faClipboardCheck} />
            Apply for Loan
          </button>
          <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg flex items-center gap-3 transition duration-200">
            <FontAwesomeIcon icon={faFileAlt} />
            View Payments
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanDashboard;
