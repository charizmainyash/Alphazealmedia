// eslint-disable-next-line no-unused-vars
import React from "react";
import { Header } from "../Header/Header";
import { Service } from "../Service/Service";
import { Featured } from "../Featured/Featured";
import { Content } from "../Contents/Content";
import { HeaderVideo } from "../HeaderVideo/HeaderVideo";
import "./Home.css";
import { WorkWithUs } from "../WorkWithUs/WorkWithUs";
import { Footer } from "../Footer/Footer";

export const Home = () => {
  return (
    <div className="main p-2">
        <Header />
        <HeaderVideo />    
        <Content />  
        <Featured />
        <Service />
        <WorkWithUs />
        <Footer />  
    </div>
  );
};
