import React, { useState } from "react";
import { FaEdit, FaEye, FaEyeSlash } from "react-icons/fa";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false); 
  const [isChangingPassword, setIsChangingPassword] = useState(false); 
  const [formData, setFormData] = useState({
    name: "XYZ",
    birthday: "Dec 22, 2000",
    gender: "Female",
    maritalStatus: "Married",
    address: "75, Nikol, Ahmedabad - 382418",
    pincode: "382418",
    state: "Gujarat",
    password: "••••••••", 
  });

  const [tempFormData, setTempFormData] = useState({ ...formData }); 
  const [oldPassword, setOldPassword] = useState(""); 
  const [newPassword, setNewPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 

 
  const handleChange = (e) => {
    setTempFormData({ ...tempFormData, [e.target.name]: e.target.value });
  };


  const handleSave = () => {
    setFormData({ ...tempFormData });
    setIsEditing(false); 
    console.log("Updated Data:", formData);
  };

  
  const handleCancel = () => {
    setTempFormData({ ...formData }); 
    setIsEditing(false); 
  };

  
  const handlePasswordChange = () => {
    if (oldPassword === formData.password) { 
      if (newPassword === confirmPassword) {
        setFormData({ ...formData, password: newPassword });
        setIsChangingPassword(false); 
        console.log("Password Changed to:", newPassword); 
      } else {
        alert("New passwords do not match");
      }
    } else {
      alert("Old password is incorrect");
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-start relative">
      
      <div className="absolute top-4 left-4">
        <img
          src="/logo.png" r
          alt="Logo"
          className="w-40 h-auto"
        />
      </div>

      
      <div className="w-full h-full bg-white shadow-lg p-6 rounded-lg pt-24">
        
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
          <header className="flex items-center space-x-6">
            <div className="relative flex justify-center items-center w-20 h-20 bg-green-500 text-white text-2xl font-bold rounded-full">
              X
              
              <button className="absolute bottom-0 right-0 border-4 border-white bg-gray-500 rounded-full p-2">
                <FaEdit size={16} className="text-white" /> 
              </button>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{formData.name}</h2>
              <p className="text-gray-600">7203954483</p>
              <p className="text-gray-600">xyz@gmail.com</p>
            </div>
          </header>

          
          <div className="mt-6 flex flex-wrap items-center gap-36 bg-gray-200 p-4 rounded-lg">
            <p className="text-red-600 font-medium">✅ Verified Email Address</p>
            <p className="text-red-600 font-medium">✅ Verified Mobile Number</p>
            <p className="text-red-600 font-medium">✅ Complete Basic Info</p>
          </div>
        </div>

        
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-300">
          <section className="relative">
            <h3 className="text-3xl font-bold">Profile</h3>
            <p className="text-gray-500 text-m">Basic info, for a faster booking experience</p>
            
            <button
              onClick={() => setIsEditing(true)} 
              className="absolute top-0 right-0 mt-2 mr-4 text-green-500 hover:text-green-600"
            >
              <FaEdit size={24} />
            </button>
            <table className="w-full mt-4 border-collapse border border-gray-200">
              <tbody>
                {Object.entries(formData).map(([key, value]) => (
                  key !== "password" && (
                    <tr key={key} className="border-t">
                      <td className="px-4 py-2 font-medium text-gray-700 capitalize">
                        {key.replace(/([A-Z])/g, " $1")}
                      </td>
                      <td className="px-4 py-2">{value}</td>
                    </tr>
                  )
                ))}
              </tbody>
            </table>
          </section>
        </div>

        {/* New Container: Login Details */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-300">
          <section>
            <h3 className="text-3xl font-bold">Login Details</h3>
            <p className="text-gray-500 text-m">Manage your mobile number,email address and password</p>
            <table className="w-full mt-4 border-collapse border border-gray-200">
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2 font-medium text-gray-700">MOBILE NUMBER</td>
                  <td className="px-4 py-2">7203954483</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2 font-medium text-gray-700">EMAIL ID</td>
                  <td className="px-4 py-2">xyz@gmail.com</td>
                </tr>
                <tr className="border-t relative">
                  <td className="px-4 py-2 font-medium text-gray-700">PASSWORD</td>
                  <td className="px-4 py-2">
                    {formData.password}
                    {/* Change Password link with red color */}
                    <button
                      onClick={() => setIsChangingPassword(true)}
                      className="absolute right-0 text-red-500 text-sm hover:underline"
                    >
                      Change Password ?
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>

        {/* New Container: Additional Information */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-300">
          <section>
            <h3 className="text-3xl font-bold">Co-Travellers</h3>
            <p className="text-gray-500 text-m">Add, Remove and Update your traveller list</p><br />
            <table>
              <div className="flex items-center gap-3">
                <span className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-semibold">
                  HP
                </span>
                <span>
                  <p className="font-semibold">hp patel</p>
                  <p>Male, 22y, 12/22/2002</p>
                </span>
              </div>
            </table>
          </section>
        </div>

        {/* New Container: Logged Devices */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-300">
          <section>
            <h3 className="text-3xl font-bold">Logged In Devices</h3>
            <p className="text-gray-500 text-m">check all the devices where your account in logged in</p>
            <table className="w-full mt-4 border-collapse border border-gray-200">
            <div className="mx-3 mt-5">
                  <span className="flex gap-3">
                    <img src="/monitor.png" className="w-10 h-10" />
                    <span>
                      <p className="font-semibold ">
                        Chrome <span>(Current device)</span>
                      </p>
                      <p>Desktop Web</p>
                      <p>MANESAR, IN</p>
                      <p>Logged In since 10:13 am, 30th Dec '24</p>
                    </span>
                  </span>
                </div>
            </table>
          </section>
        </div>
      </div>

      {/* Modal to Edit Profile */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-11/12 md:w-1/2 lg:w-1/3 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
            <div className="space-y-4">
              {Object.entries(tempFormData).map(([key, value]) => (
                <div key={key} className="flex flex-col">
                  <label
                    className="text-gray-700 font-medium capitalize"
                    htmlFor={key}
                  >
                    {key.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type="text"
                    id={key}
                    name={key}
                    value={value}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-4 justify-end">
              <button
                onClick={handleSave}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal to Change Password */}
      {isChangingPassword && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-11/12 md:w-1/2 lg:w-1/3 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
            <div className="space-y-4">
              <input
                type="password"
                placeholder="Old Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-2 text-gray-500"
                >
                  {showNewPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
              </div>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-2 text-gray-500"
                >
                  {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
              </div>
            </div>
            <div className="mt-6 flex gap-4 justify-end">
              <button
                onClick={handlePasswordChange}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setIsChangingPassword(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
