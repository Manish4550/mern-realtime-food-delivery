import React from "react";
import { useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";

import { useState } from "react";
import axios from "axios";
import { serverUrl } from "../App";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import { ClipLoader } from "react-spinners"
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";

const SignUp = () => {
  const primaryColor = "#ff4d2d";
  const borderColor = "#ddd";

  const navigate = useNavigate();

  const [fullName, setfullName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [mobile, setmobile] = useState("");
  const [role, setrole] = useState("user");
  const [err, seterr] = useState()
  const [loading, setloading] = useState(false)
  const dispatch= useDispatch()


  const handleSignUp = async () => {
    setloading(true)
    try {
      const response = await axios.post(
        `${serverUrl}/api/auth/signup`,
        {
          fullName,
          email,
          password,
          mobile,
          role,
        },
        { withCredentials: true },
      );

      dispatch(setUserData(response.data))
      navigate("/signin");
      seterr("")
      setloading(false)
    } catch (error) {
      seterr(error.response?.data?.message)
      setloading(false)
    }
  };

  const handleGoogleAuth = async () => {
    if (!mobile) {
      return seterr("Mobile no is  required")
    }
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    try {
      const { data } = await axios.post(
        `${serverUrl}/api/auth/google-auth`,
        {
          fullName: result.user.displayName,
          email: result.user.email,
          role,
          mobile,
        },
        { withCredentials: true },
      );
         dispatch(setUserData(data))
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
          Create your account to get started with delicious food deliveries
        </p>

        {/* Full Name*/}

        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-medium mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter Your Full Name"
            style={{ border: `1px solid ${borderColor}` }}
            value={fullName}
            onChange={(e) => {
              setfullName(e.target.value);
            }}
            required
          />
        </div>

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
            required
          />
        </div>

        {/* Mobile*/}

        <div className="mb-4">
          <label
            htmlFor="mobile"
            className="block text-gray-700 font-medium mb-1"
          >
            Mobile
          </label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter Your Mobile Number"
            style={{ border: `1px solid ${borderColor}` }}
            value={mobile}
            onChange={(e) => {
              setmobile(e.target.value);
            }} required
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
            }} required
          />
        </div>

        {/* Role*/}

        <div className="mb-4">
          <label
            htmlFor="role"
            className="block text-gray-700 font-medium mb-1"
          >
            Role
          </label>
          <div className=" flex gap-2">
            {["user", "owner", "deliveryBoy"].map((r) => (
              <button
                className=" cursor-pointer flex-1 border rounded-lg px-3 py-2 text-center font-medium transition-colors"
                key={r}
                onClick={() => setrole(r)}
                style={
                  role == r
                    ? { backgroundColor: primaryColor, color: "white" }
                    : {
                        border: `1px solid ${primaryColor}`,
                        color: primaryColor,
                      }
                }
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <button
          className={`w-full font-semibold py-2 rounded-lg transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer`}
          onClick={handleSignUp} disabled={loading}
        >
          {loading?<ClipLoader size={20} color="white"/>:"Sign Up"}
          
        </button>
        {err && <p className='text-red-700 text-center my-2.5'>*{err}</p>}
        

        <button
          className=" w-full mt-4 flex items-center justify-center gap-2 border rounded-lg px-4 py-2 transition duration-200 border-gray-200 hover:bg-gray-100"
          onClick={handleGoogleAuth}
        >
          <FcGoogle size={20} />
          <span> Sign up with Google </span>
        </button>

        <button className="w-full">
          <p
            className="text-center mt-2 cursor-pointer"
            onClick={() => navigate("/signin")}
          >
            {" "}
            Already have an account ?{" "}
            <span className="text-[#ff4d2d]">Sign In</span>{" "}
          </p>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
