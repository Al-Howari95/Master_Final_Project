// import "./App.css";
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./Component/Header";
// import Footer from "./Component/Footer";
// import AboutUs from "./Pages/AboutUs";
// import Home from "./Pages/Home";
// import Login from "./Pages/Login";
// import Registration from "./Pages/Registration";
// import ContactUs from "./Pages/ContactUs";
// import Categores from "./Pages/Categores";
// import Detelis from "./Pages/Detelis1";
// import BookNow from "./Pages/BookNow";
// import Detelis1 from "./Pages/Detelis1";
// import Profile from "./Pages/Profile";
// import Admin from "./Admim/Admin";
// import Adminlogin from "./Admim/Adminlogin";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Header />

//         <Routes>
//         <Route path="/" element={<Home/>} />

//           <Route path="/AboutUs" element={<AboutUs />} />
//           <Route path="/Login" element={<Login />} />
//           <Route path="/Registration" element={<Registration/>} />
//           <Route path="/ContactUs" element={<ContactUs/>} />
//           <Route path="/Categores" element={<Categores/>} />
//           <Route path="/Detelis/:id" element={<Detelis/>} />

//           <Route path="/BookNow" element={<BookNow/>} />
//           <Route path="/Detelis1" element={<Detelis1/>} />
//           <Route path="/Profile" element={<Profile/>} />
//           <Route path="/Adminlogin" element={<Adminlogin/>} />
//           <Route path="/Admin" element={<Admin/>} />

//         </Routes>

//         <Footer />
//       </Router>
//       <Router>

//       <Routes>

//       <Route path="/Admin" element={<Admin/>} />
//       </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import Header from "./Component/Header";
// import Footer from "./Component/Footer";
// import AboutUs from "./Pages/AboutUs";
// import Home from "./Pages/Home";
// import Login from "./Pages/Login";
// import Registration from "./Pages/Registration";
// import ContactUs from "./Pages/ContactUs";
// import Categores from "./Pages/Categores";
// import Detelis from "./Pages/Detelis1";
// import BookNow from "./Pages/BookNow";
// import Detelis1 from "./Pages/Detelis1";
// import Profile from "./Pages/Profile";
// import Admin from "./Admim/Admin";
// import Adminlogin from "./Admim/Adminlogin";
// import Cookies from "js-cookie";
// import Whyus from "./Pages/Whyus";
// import FAQs from "./Component/FAQs";
// import NotFound from "./Pages/Notfound";

// function App() {
//   const role = localStorage.getItem("role");
//   console.log("ooooooooooooooooo", role);
//   const isAuthenticated = !!getCookie("accessToken");

//   function getCookie(name) {
//     const cookies = document.cookie.split("; ");
//     for (let i = 0; i < cookies.length; i++) {
//         const cookie = cookies[i].split("=");
//         if (cookie[0] === name) {
//             return cookie[1];
//         }
//     }
//     return null;
// }

//   return (
//     <div className="App">
//       <Router>
//         <Header />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/AboutUs" element={<AboutUs />} />
//           <Route path="/Login" element={<Login />} />
//           <Route path="/Registration" element={<Registration />} />
//           <Route path="/Adminlogin" element={<Adminlogin />} />
//           <Route path="/ContactUs" element={<ContactUs />} />
//           <Route path="/Whyus" element={<Whyus />} />
//           <Route path="/FAQs" element={<FAQs />} />

//           <Route path="/Categores" element={<Categores />} />
//           <Route path="/Detelis/:id" element={<Detelis />} />

//           <Route
//             path="/BookNow"
//             element={
//               role === "1" ? (
//                 <BookNow />
//               ) : (
//                 <Navigate to="/Login" replace={true} />
//               )
//             }
//           />
//           <Route path="/Detelis1" element={<Detelis1 />} />

//           {isAuthenticated ? (
//             <Route path="/Profile" element={<Profile />} />
//           ) : (
//             <Route path="/Login" element={<Login />} />
//           )}

//           <Route path="*" element={<NotFound />} />

//           <Route
//             path="/Admin"
//             element={
//               role === "2" ? <Admin /> : <Navigate to="/Admin" replace={true} />
//             }
//           />
//         </Routes>

//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import ContactUs from "./Pages/ContactUs";
import Categores from "./Pages/Categores";
import Detelis from "./Pages/Detelis1";
import BookNow from "./Pages/BookNow";
import Detelis1 from "./Pages/Detelis1";
import Profile from "./Pages/Profile";
import Admin from "./Admim/Admin";
import Adminlogin from "./Admim/Adminlogin";
import Cookies from "js-cookie";
import Whyus from "./Pages/Whyus";
import FAQs from "./Component/FAQs";
import NotFound from "./Pages/Notfound";

function App() {
  // const [role, setRole] = useState(0);
  const role = sessionStorage.getItem("role");
  console.log("ooooooooooooooooo", role);
  // useEffect(() => {
  //   const existingToken = Cookies.get("accessToken");

  //   if (existingToken) {
  //     setRole(2);

  //   }

  // }, []);

  // console.log(role);

  const isAuthenticated = !!getCookie("accessToken");

  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split("=");
      if (cookie[0] === name) {
        return cookie[1];
      }
    }
    return null;
  }

  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Adminlogin" element={<Adminlogin />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Whyus" element={<Whyus />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/Categores" element={<Categores />} />
          <Route path="/Detelis/:id" element={<Detelis />} />

          {/* <Route
            path="/BookNow"
            element={
              role === "1" ? (
                <BookNow />
              ) : (
                <Navigate to="/Login" replace={true} />
              )
            }
          /> */}
          <Route path="/Detelis1" element={<Detelis1 />} />

          <Route
            path="/Profile"
            element={
              isAuthenticated ? <Profile /> : <Navigate to="/NotFound" />
            }
          />

<Route
            path="/Admin"
            element={
              isAuthenticated ? <Admin /> : <Navigate to="/NotFound" />
            }
          />







          <Route
            path="/BookNow"
            element={isAuthenticated ? <BookNow /> : <Navigate to="/Login" />}
          />

          {/* <Route path="/Admin" element={(role == 2) ? (<Admin />) : (<Navigate to="/Login" replace />)} /> */}
          <Route
            path="/Admin"
            element={
              role === "2" ? <Admin /> : <Navigate to="/Admin" replace={true} />
            }
          />
        </Routes>

        <Footer />
      </Router>

      {/* <Router>

      <Routes> 

      <Route path="/Admin" element={<Admin/>} />
      </Routes>
      </Router> */}
    </div>
  );
}

export default App;
