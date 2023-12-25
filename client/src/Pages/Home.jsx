import React from "react";
import Card from "../Component/Card";
import Dat from "../Component/Dat";
import D from "../Component/D";
import Card2 from "../Component/Card2";
import Hero from "../Component/Hero";
import Button from "../Component/Button";
import Oss from "../Component/Oss ";
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    
      <Hero />
      <Card />
      {/* <Dat /> */}
      <D />
      <Card2/>
      <Oss/>
      <Button/>

    </>
  );
};

export default Home;



