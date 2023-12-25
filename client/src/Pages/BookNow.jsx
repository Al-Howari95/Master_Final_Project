import React from "react";
import Book from "../Component/Book";
import Button from "../Component/Button";
import Payement from "../Component/Payement";
import { useEffect } from "react";



const Books = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    
<Book/>
<Button/>
<Payement/>
</>
  );
};

export default Books;