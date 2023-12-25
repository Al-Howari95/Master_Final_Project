import React, { useEffect, useState  } from "react";
import {Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";

export default function GoolgeSignInButton() {
  const navigate = useNavigate();

  const [userGoogle, setUserGoogle] = useState([]);

  console.log(userGoogle);
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUserGoogle(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

 useEffect(() => {
  console.log("userGoogle:", userGoogle);

  if (userGoogle.access_token) {
    axios
      .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userGoogle.access_token}`)
      .then(async (res) => {
        console.log("Google User Info:", res.data);

        try {
          const response = await axios.post("http://127.0.0.1:3001/google", res.data);
          console.log("Server response:", response);
          // console.log("Server response2:", response.config.data);


          const Token = response.data.token;
          console.log("accessToken:",Token);

          Cookies.set("accessToken",Token)
          sessionStorage.setItem('role',1);


          

          // Make sure the token is not undefined or null before storing it
          if (Token) {
            // navigate("/");
            window.location.href = "/"
          }

          // Rest of your code...
        } catch (error) {
          console.log("Error:", error);
        }
      })
      .catch((err) => console.log("Google User Info Error:", err.message));
  }
}, [userGoogle,navigate]);

  return (
    <div>
    <button
      // id="google-sign-in"
      id="font-medium"
      className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      onClick={() => login()}
    >
      <div  className="bg-white p-2 rounded-full">
        <svg className="w-4" viewBox="0 0 533.5 544.3">
          <path
            d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
            fill="#4285f4"
          />
          <path
            d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
            fill="#34a853"
          />
          <path
            d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
            fill="#fbbc04"
          />
          <path
            d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
            fill="#ea4335"
          />
        </svg>
      </div>
      <span className="ml-2">Continue with Google</span>
    </button>
    </div>
  );
}