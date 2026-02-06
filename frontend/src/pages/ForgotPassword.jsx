import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import {useNavigate} from 'react-router-dom'

const ForgotPassword = () => {
  const [step, setStep] = useState(3);
  const [email, setEmail] = useState("");
  const [Otp, setOtp] = useState("")
  const [newPassword, setnewPassword] = useState("")
  const [confromPassword, setconfromPassword] = useState("")
  const navigate=useNavigate()

  return (
    <div className="flex w-full items-center justify-center min-h-screen p-4 bg-[#ff9f6]">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8">
        <div className="flex items-center gap-4 mb-4">
          <IoArrowBack size={30} className="text-[#ff4d2d] cursor-pointer"  onClick={()=>navigate("/signin")}/>
          <h1 className="text-2xl font-bold text-center text-[#ff4d2d]">
            Forgot Password
          </h1>
        </div>

        {step === 1 && 
          <div>

            <div
             className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
         

          <button
          className={`w-full font-semibold py-2 rounded-lg transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer`}
        >
          Send Otp
        </button>
          </div>}



           {step === 2 && 
          <div>

            <div
             className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              OTP
            </label>
            <input
              type="email"
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Enter Your OTP"
              value={Otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
         

          <button
          className={`w-full font-semibold py-2 rounded-lg transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer`}
        >
          Verify
        </button>
          </div>}


           {step === 3 && 
          <div>

            <div
             className="mb-6">
            <label
              htmlFor="newPassword"
              className="block text-gray-700 font-medium mb-1"
            >
              Enter New Password
            </label>
             <input
              type="email"
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) => setnewPassword(e.target.value)}
            />

             <div
             className="mb-6">
            <label
              htmlFor="confromPassword"
              className="block text-gray-700 font-medium mb-1"
            >
              Confrom Password
            </label>
            <input
              type="email"
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Confrom Password"
              value={confromPassword}
              onChange={(e) => setconfromPassword(e.target.value)}
            />
          </div>
         </div>

          <button
          className={`w-full font-semibold py-2 rounded-lg transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer`}
        >
          Reset Password
        </button>
          </div>}
      </div>   
    </div>
  );
};

export default ForgotPassword;
