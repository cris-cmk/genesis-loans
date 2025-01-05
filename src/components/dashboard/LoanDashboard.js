import React, { useState ,useEffect} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faMoneyBillWave, 
  faClipboardCheck, 
  faFileAlt, 
  faClock, 
  faChartLine, 
  faUserCircle, 
  faSignOutAlt,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import { db, addDoc, collection ,getDocs, query, orderBy, limit} from "../../firebase"; // Import Firestore functions


const LoanDashboard = () => {
  const navigate = useNavigate();

  const username = localStorage.getItem("username") || "Guest"; // Default to "Guest" if no username is found


  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username"); // Clear username
    sessionStorage.clear();
    navigate("/login");
  };


    // Ensure all state and functions are defined in this component
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);


  // Toggle modal function
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  

  // Hide alert after 3 seconds
  setTimeout(() => setAlertVisible(false), 9000);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    amount: "",
    term: "",
    repaymentAmount: "",
    purpose: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    setFormData((prev) => {
      const updatedData = { ...prev, [name]: value };
  
      if (name === "amount" || name === "term") {
        const amount = parseFloat(updatedData.amount) || 0;
        const term = parseInt(updatedData.term, 10) || 0;
        const interestRate = 0.05; // 5% monthly interest rate
        const repaymentAmount = amount + amount * interestRate * term;
        updatedData.repaymentAmount = repaymentAmount.toFixed(2); // Format to 2 decimal places
      }
  
      return updatedData;
    });
  };
  
 // Handle form submission and save to Firestore
 const handleFormSubmit = async (e) => {
  e.preventDefault();

  try {
    console.log("Loan application submitted:", formData);
    // Submit form data to Firestore
    await addDoc(collection(db, "loanApplications"), {
      firstName: formData.firstName,
      lastName: formData.lastName,
      amount: formData.amount,
      term: formData.term,
      repaymentAmount: formData.repaymentAmount,
      purpose: formData.purpose,
      timestamp: new Date(),
    });
  

    // Clear form after successful submission
    setFormData({
      firstName: "",
      lastName: "",
      amount: "",
      term: "",
      purpose: "",
      repaymentAmount:""
    });

  // Show success alert
    setAlertVisible(true);
      } catch (error) {
    console.error("Error submitting  loan details : ", error);
      }
    };

    //fetching recent loans
    const [recentLoans, setRecentLoans] = useState([]);

    const fetchRecentLoans = async () => {
      try {
        const loansRef = collection(db, "loanApplications");
        const recentLoansQuery = query(loansRef, orderBy("timestamp", "desc"), limit(5));
        const querySnapshot = await getDocs(recentLoansQuery);
        const loans = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRecentLoans(loans);
        console.log("fetched loans successfully ",loans)
      } catch (error) {
        console.error("Error fetching recent loans: ", error);
      }
    };
    // Fetch recent loans on initial load
    useEffect(() => {
      fetchRecentLoans();
      }       , []);
  
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Side Navigation */}
      <div className="w-64 bg-gradient-to-br from-blue-700 to-blue-500 text-white p-6 fixed h-full shadow-xl">
        <div className="flex items-center mb-8">
          <h2 className="text-3xl font-bold tracking-wide">Genesis Loans</h2>
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
              <span className="text-lg text-gray-700">{username}</span>
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
              <span className="text-xl font-bold text-gray-800">500</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 flex justify-center gap-6">
          <button onClick={toggleModal}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg flex items-center gap-3 transition duration-200">
            <FontAwesomeIcon icon={faClipboardCheck} />
           Issue Loan
          </button>
          <button  
           className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg flex items-center gap-3 transition duration-200">
            <FontAwesomeIcon icon={faFileAlt} />
            View Payments
          </button>
        </div>

         {/* Recent Loan Records Table */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Recent Loan Applications</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b p-4">First Name</th>
                <th className="border-b p-4">Last Name</th>
                <th className="border-b p-4">Amount</th>
                <th className="border-b p-4">Term</th>
                <th className="border-b p-4">Repayment Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentLoans.map(loan => (
                <tr key={loan.id}>
                  <td className="border-b p-4">{loan.firstName}</td>
                  <td className="border-b p-4">{loan.lastName}</td>
                  <td className="border-b p-4">{loan.amount}</td>
                  <td className="border-b p-4">{loan.term}</td>
                  <td className="border-b p-4">{loan.repaymentAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Modal for Loan Application */}
        {isModalOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
      {/* Modal Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Customer Loan Details</h2>
        <button
          onClick={toggleModal}
          className="text-gray-500 hover:text-gray-800 focus:outline-none"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>

      {/* Loan Application Form */}
      <form onSubmit={handleFormSubmit}>
        {/* First Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Customer First Name</label>
          <input
            type="text"
            name="firstName"
            className="w-full p-2 border rounded-lg"
            placeholder="Enter First Name"
            required
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Customer Last Name</label>
          <input
            type="text"
            name="lastName"
            className="w-full p-2 border rounded-lg"
            placeholder="Enter Customer Last Name"
            required
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>

        {/* Loan Amount */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Loan Amount</label>
          <input
            type="number"
            name="amount"
            className="w-full p-2 border rounded-lg"
            placeholder="Enter loan amount"
            required
            value={formData.amount}
            onChange={handleInputChange}
          />
        </div>

        {/* Loan Term */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Loan Term (Months)</label>
          <input
            type="number"
            name="term"
            className="w-full p-2 border rounded-lg"
            placeholder="Enter loan term"
            required
            value={formData.term}
            onChange={handleInputChange}
          />
        </div>

        {/* Repayment Amount */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Repayment Amount</label>
          <input
            type="text"
            name="repaymentAmount"
            className="w-full p-2 border rounded-lg bg-gray-100 text-gray-600"
            readOnly
            value={formData.repaymentAmount}
          />
        </div>

        {/* Loan Purpose */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Purpose of Loan</label>
          <textarea
            name="purpose"
            className="w-full p-2 border rounded-lg"
            placeholder="Enter the loan purpose"
            required
            value={formData.purpose}
            onChange={handleInputChange}
          />
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={toggleModal}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Submit
          </button>
           {/* Success Alert */}
 
        

         {/* Success Alert */}
      {alertVisible && (
        <div className="fixed bg-green-500 text-white px-20 py-3 rounded-lg shadow-lg">
        Loan details submitted successfully!
      </div>
      )}
        </div>
      </form>

      
    
    </div>
   
    
  </div>
    )}

  
        
      </div>
    </div>

    
  );
};

export default LoanDashboard;
