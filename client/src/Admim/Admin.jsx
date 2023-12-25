import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Admim/Dashboard";
import Users from "../Admim/Users";
import Card2 from "./Card2";
import Categores from "../Admim/Categores";
import Card1 from "./Card1";
import Contact from "./Contact";
import Submit from "./Submit";
import FAQs1 from "./FAQs1"
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';


const Admin = () => {
  const [page, setPage] = useState("profile");
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // حالة السايد بار

  // const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1280);
  const [isSideOpen, setIsSideOpen] = useState(true);


  const handleLogout = () => {
    // استخدم Cookies.remove لإزالة الكوكي
    Cookies.remove("accessToken");
    // قم بتوجيه المستخدم إلى الصفحة المطلوبة
    window.location.href = "/";
  };
  

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-full z-50">
      <div id="aside"
        className={`fixed w-64 h-full bg-white border-r overflow-y-auto z-10 ${
          isSidebarOpen ? "left-0" : "-left-64"
        }`}
      >
        <div className="fixed top-0 left-0 w-full bg-blue-500 p-3">
          <button
            aria-label="Toggle sidebar"
            className="h-10 w-10 text-white flex items-center justify-center cursor-pointer focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <aside id="aside" className="flex flex-col w-64 h-auto px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 mt-10">
          <div className="log">
            <h1 className="text-blue-400 ml-6">CleanWave</h1>
            <img
              id="imagess"
              src="https://s3.envato.com/files/262194812/thumbnail.png"
              className="mr-5 h-6 sm:h-9"
              alt="logo"
            />
          </div>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav className="-mx-3 space-y-6 ">
              <div className="space-y-3 ">
                {/* <label className="px-3 text-xs text-grey-700 uppercase dark:text-gray-400">
                  Manage Account
                </label> */}
                {/* <button
                  className="w-full flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-blue-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  onClick={() => setPage("Dashboard")}
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
                </button> */}
                {/* mx-2 text-sm font-medium */}
                <button
                  className="w-full flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-blue-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  onClick={() => setPage("Users")}
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                </button>
                <button
                  className="w-full flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-blue-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  onClick={() => setPage("Card1")}
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Services</span>
                </button>

                <button
                  className="w-full flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-blue-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  onClick={() => setPage("Card2")}
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Employees</span>
                </button>
                <button
                  className="w-full flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-blue-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  onClick={() => setPage("Contact")}
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Contact</span>
                </button>
                <button
                  className="w-full flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-blue-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  onClick={() => setPage("Submit")}
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Submit</span>
                </button>
                <button
                  className="w-full flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-blue-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  onClick={() => setPage("FAQs1")}
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">FAQs</span>
                </button>
              </div>

              <div className="space-y-3 ">
                <Link
                  to="/"
                  onClick={handleLogout}
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-blue-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">logout</span>
                </Link>
              </div>
            </nav>
          </div>
        </aside>
      </div>

      {/* content */}
      <div className="flex-1">
        <div className={`${page === "Dashboard" ? "block" : "hidden"} w-full`}>
          <Dashboard />
        </div>

        <div className={`${page === "Users" ? "block" : "hidden"} w-full`}>
          <Users />
        </div>

        <div className={`${page === "Card2" ? "block" : "hidden"} w-full`}>
          <Card2 />
        </div>
        <div className={`${page === "Card1" ? "block" : "hidden"} w-full`}>
          <Card1 />
        </div>
        <div className={`${page === "Contact" ? "block" : "hidden"} w-full`}>
          <Contact />
        </div>
        <div className={`${page === "Submit" ? "block" : "hidden"} w-full`}>
          <Submit />
        </div>
        <div className={`${page === "FAQs1" ? "block" : "hidden"} w-full`}>
          <FAQs1 />
        </div>
      </div>
    </div>
  );
};

export default Admin;