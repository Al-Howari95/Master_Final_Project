import React from "react";
import PP from "../Component/PP";
import PPP from "../Component/PPP";
import { useEffect } from "react";
  


const Profile = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
   <PP/>
   {/* <PPP/> */}
  

    </>
  );
};

export default Profile;