import React from "react";
import { useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";

import { useState } from "react";
import axios from "axios";
import { serverUrl } from "../App";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";

const SignIn = () => {
  const primaryColor = "#ff4d2d";
  const hoverColor = "#e64323";
  const bgColor = "#fff9f6";
  const borderColor = "#ddd";

  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await axios.post(
        `${serverUrl}/api/auth/signin`,
        {
          email,
          password,
        },
        { withCredentials: true },
      );

      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    try {
      const { data } = await axios.post(
        `${serverUrl}/api/auth/google-auth`,
        {
          fullName: result.user.displayName,
          email: result.user.email,
        },
        { withCredentials: true },
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center
    p-4 style={{backgroundColor:bgcolor}}"
    >
      <div
        className={`bg-white rounded-xl shadow-lg w-full max-w-md p-8 border[1px]`}
        style={{
          border: `1px solid ${borderColor}`,
        }}
      >
        <h1
          className={`text-3xl font-bold mb-2`}
          style={{ color: primaryColor }}
        >
          Vingo
        </h1>
        <p className="text-gray-600 mb-8">
          Sign In to your account to get started with delicious food deliveries
        </p>

        {/*Email*/}

        <div className="mb-4">
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
            style={{ border: `1px solid ${borderColor}` }}
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </div>

        {/* Password*/}

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-1"
          >
            Password
          </label>
          <input
            type="password"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter Your Password"
            style={{ border: `1px solid ${borderColor}` }}
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>

        <div
          className="text-right mb-4 text-[#ff4d2d] cursor-pointer"
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password
        </div>

        <button
          className={`w-full font-semibold py-2 rounded-lg transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer`}
          onClick={handleSignIn}
        >
          Sign In
        </button>

        <button
          className="w-full mt-4 flex items-center justify-center gap-2 border rounded-lg px-4 py-2 transition duration-200 border-gray-200 hover:bg-gray-100"
          onClick={handleGoogleAuth}
        >
          <FcGoogle size={20} />
          <span> Sign In with Google </span>
        </button>

        <button className="w-full">
          <p
            className="text-center mt-2 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            {" "}
            Want to create a new account ?{" "}
            <span className="text-[#ff4d2d]">Sign Up</span>{" "}
          </p>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
