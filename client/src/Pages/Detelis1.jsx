import React from "react";
import Button from "../Component/Button";
import Comment from "../Component/Comment";
import Detelis from "../Component/Detelis";
import { useEffect } from "react";



const Detelis1 = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Detelis/>
    <Comment/>
    <Button/>

   

    </>
  );
};

export default Detelis1;
