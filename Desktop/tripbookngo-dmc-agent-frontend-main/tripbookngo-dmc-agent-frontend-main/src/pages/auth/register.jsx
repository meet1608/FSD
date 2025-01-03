import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";

export default function Register() {
  const [formData, setFormData] = useState({
    agentType: "",
    companyType: "",
    agencyName: "",
    mobileNumber: "",
    email: "",
    title: "",
    fullName: "",
    dob: "",
    panNumber: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    address1: "",
    address2: "",
    address3: "",
    aadharNumber: "",
    gstNumber: "",
    referralCode: "",
    relationCode: "",
    distributorCode: "",
    remarks: "",
    password: "",
    confirmPassword: "", 
  });

  const navigate = useNavigate(); // Initialize useNavigate hook to navigate after form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    alert("Registration Successful!");

    // After successful registration, redirect to the login page
    navigate("/"); // Redirects to the login page
  };

  return (
    <div className="w-full h-auto flex justify-center items-center p-8 bg-gray-50">
      <form onSubmit={handleSubmit} className="w-full max-w-7xl bg-white shadow-xl p-10 rounded-xl">
        <h3 className="text-4xl font-bold mb-6 text-center text-gray-800">Register</h3>

        {/* Agent Type */}
        <div className="mb-6 relative">
          <label htmlFor="agentType" className="block text-lg font-semibold text-gray-700 mb-2">
            Agent Type*
          </label>
          <select
            id="agentType"
            name="agentType"
            className="w-full max-w-md border p-3 rounded-xl"
            onChange={handleChange}
            required
          >
            <option value="">Select Agent Type</option>
            <option value="Retailer">Become a Retailer</option>
            <option value="Distributor">Become a Distributor</option>
          </select>
        </div>

        {/* Company Type */}
        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700 mb-2">Select the Company Type*</label>
          <div className="flex space-x-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="companyType"
                value="Proprietor"
                onChange={handleChange}
                required
              />
              <span className="ml-2 text-lg">Proprietor</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="companyType"
                value="Partner"
                onChange={handleChange}
                required
              />
              <span className="ml-2 text-lg">Partner</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="companyType"
                value="Company/LLP"
                onChange={handleChange}
                required
              />
              <span className="ml-2 text-lg">Company/LLP</span>
            </label>
          </div>
          <hr className="my-6 border-t border-gray-300" />
        </div>

        {/* Company Information */}
        <div className="flex items-center space-x-2 mt-6">
          <label className="block text-lg font-semibold text-gray-700">Company Information</label>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Agency Name */}
        <div className="mb-6">
          <label htmlFor="agencyName" className="block text-lg font-semibold text-gray-700 mb-2">
            Agency Name*
          </label>
          <input
            type="text"
            id="agencyName"
            name="agencyName"
            className="w-full max-w-md border p-3 rounded-xl"
            onChange={handleChange}
            required
          />
        </div>

        {/* Company Contacts */}
        <div className="flex items-center space-x-2 mt-6">
          <label className="block text-lg font-semibold text-gray-700">Company Contacts</label>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <br />

        {/* Mobile Number */}
        <div className="mb-6">
          <div className="flex space-x-3">
            <span className="flex items-center border p-3 rounded-l-xl text-gray-700 text-lg">+91</span>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              className="w-72 border p-3 rounded-xl text-center text-lg"
              placeholder="Enter Mobile Number"
              onChange={handleChange}
              required
            />
            <Button className="h-15 px-6 py-3 mx-auto text-black rounded-xl text-lg">
              SEND OTP
            </Button>
          </div>
        </div>

        {/* Email */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">
            Email ID*
          </label>
          <div className="flex space-x-3">
            <input
              type="email"
              id="email"
              name="email"
              className="w-1/2 border p-3 rounded-xl text-lg"
              placeholder="Enter Email ID"
              onChange={handleChange}
              required
            />
            <Button className="h-15 px-6 py-3 mx-auto text-black rounded-xl text-lg">
              SEND OTP
            </Button>
          </div>
        </div>
        {/* Password */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-lg font-semibold text-gray-700 mb-2">
            Password*
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full max-w-md border p-3 rounded-xl"
            placeholder="Enter Password"
            onChange={handleChange}
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-lg font-semibold text-gray-700 mb-2">
            Confirm Password*
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full max-w-md border p-3 rounded-xl"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />
        </div>

        {/* Owner's PAN Information */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mt-6">
            <label className="block text-lg font-semibold text-gray-700">Owner's PAN Information (As Per PAN)</label>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="flex space-x-6 mt-6">
            {/* Title, Full Name, DOB, PAN Number, and Verify PAN */}
            <select
              id="title"
              name="title"
              className="w-1/5 border p-3 rounded-xl text-lg"
              onChange={handleChange}
              required
            >
              <option value="">Title</option>
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
            </select>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-1/3 border p-3 rounded-xl text-lg"
              placeholder="Full Name (As per PAN)"
              onChange={handleChange}
              required
            />
            <input
              type="date"
              id="dob"
              name="dob"
              className="w-1/5 border p-3 rounded-xl text-lg"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="panNumber"
              name="panNumber"
              className="w-1/5 border p-3 rounded-xl text-lg"
              placeholder="PAN Number"
              onChange={handleChange}
              required
            />
            <Button className="h-15 px-6 py-3 mx-auto text-black rounded-xl text-lg">
              VERIFY PAN
            </Button>
          </div>
        </div>

        {/* Address */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mt-6">
            <label className="block text-lg font-semibold text-gray-700">Company Address</label>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Country, State, City in one row */}
          <div className="flex space-x-6 mb-4">
            <select
              id="country"
              name="country"
              className="w-1/3 border p-3 rounded-xl"
              onChange={handleChange}
              required
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
            </select>

            <input
              type="text"
              id="state"
              name="state"
              className="w-1/3 border p-3 rounded-xl"
              placeholder="State"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              id="city"
              name="city"
              className="w-1/3 border p-3 rounded-xl"
              placeholder="City"
              onChange={handleChange}
              required
            />
          </div>

          {/* Pincode, Address Line 1, and Address Line 2 in one row */}
          <div className="flex space-x-6 mb-4">
            <input
              type="text"
              id="pincode"
              name="pincode"
              className="w-1/3 border p-3 rounded-xl"
              placeholder="Pincode"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="address1"
              name="address1"
              className="w-1/3 border p-3 rounded-xl"
              placeholder="Address Line 1"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="address2"
              name="address2"
              className="w-1/3 border p-3 rounded-xl"
              placeholder="Address Line 2"
              onChange={handleChange}
            />
          </div>

          {/* Address Line 3 */}
          <input
            type="text"
            id="address3"
            name="address3"
            className="w-full max-w-md border p-3 rounded-xl mb-4"
            placeholder="Address Line 3"
            onChange={handleChange}
          />
        </div>

        {/* Aadhar verification */}
        <div className="flex items-center space-x-2 mt-6">
          <label className="block text-lg font-semibold text-gray-700">Aadhar Verification</label>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="mb-6">
          <label htmlFor="aadharNumber" className="block text-lg font-semibold text-gray-700 mb-2">
            Aadhar Number
          </label>
          <div className="flex items-center space-x-6">
            <input
              type="text"
              id="aadharNumber"
              name="aadharNumber"
              className="w-full max-w-md border p-3 rounded-xl"
              onChange={handleChange}
              required
            />
            <Button className="h-15 px-6 py-3 mx-auto text-black rounded-xl text-lg">
              VERIFY AADHAR
            </Button>
          </div>
        </div>

        {/* GST information */}
        <div className="flex items-center space-x-2 mt-6">
          <label className="block text-lg font-semibold text-gray-700">GST Information</label>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="mb-6">
          <label htmlFor="gstNumber" className="block text-lg font-semibold text-gray-700 mb-2">
            GST Number (optional)
          </label>
          <div className="flex items-center space-x-6">
            <input
              type="text"
              id="gstNumber"
              name="gstNumber"
              className="w-full max-w-md border p-3 rounded-xl"
              onChange={handleChange}
            />
            <Button className="h-15 px-6 py-3 mx-auto text-black rounded-xl text-lg">
              VERIFY GST
            </Button>
          </div>
        </div>

        {/* Referral Details */}
        <div className="flex items-center space-x-2 mt-6">
          <label className="block text-lg font-semibold text-gray-700">Referral Details</label>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="mb-6">
          <label htmlFor="referralCode" className="block text-lg font-semibold text-gray-700 mb-2">
            Referral Code
          </label>
          <div className="flex items-center space-x-6">
            <input
              type="text"
              id="referralCode"
              name="referralCode"
              className="w-full max-w-md border p-3 rounded-xl"
              onChange={handleChange}
              required
            />
            <Button className="h-15 px-6 py-3 mx-auto text-black rounded-xl text-lg">
              VERIFY CODE
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="relationCode" className="block text-lg font-semibold text-gray-700 mb-2">
            Relationship Manager Code
          </label>
          <div className="flex items-center space-x-6">
            <input
              type="text"
              id="relationCode"
              name="relationCode"
              className="w-full max-w-md border p-3 rounded-xl"
              onChange={handleChange}
              required
            />
            <Button className="h-15 px-6 py-3 mx-auto text-black rounded-xl text-lg">
              VERIFY CODE
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="distributorCode" className="block text-lg font-semibold text-gray-700 mb-2">
            Distributor Code
          </label>
          <div className="flex items-center space-x-6">
            <input
              type="text"
              id="distributorCode"
              name="distributorCode"
              className="w-full max-w-md border p-3 rounded-xl"
              onChange={handleChange}
              required
            />
            <Button className="h-15 px-6 py-3 mx-auto text-black rounded-xl text-lg">
              VERIFY CODE
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="remarks" className="block text-lg font-semibold text-gray-700 mb-2">
            Remarks
          </label>
          <input
            type="text"
            id="remarks"
            name="remarks"
            className="w-full max-w-md border p-3 rounded-xl"
            onChange={handleChange}
          />
        </div>

        {/* Agreement Checkbox */}
        <div className="mb-6 flex items-center space-x-2">
          <input
            type="checkbox"
            id="agreement"
            name="agreement"
            className="h-5 w-5"
            required
          />
          <label htmlFor="agreement" className="text-lg text-gray-700">
            I agree to receive RCS, WhatsApp, Email or SMS from Etrav Tech Limited. I have reviewed and agreed to the{" "}
            <span className="text-blue-600">terms & condition</span> and{" "}
            <span className="text-blue-600">privacy policy</span>.
          </label>
        </div>

       { /* Submit Button */}
          <div className="flex justify-center">
  <Button className="w-72">Register</Button>
</div>

      </form>
    </div>
  );
}
