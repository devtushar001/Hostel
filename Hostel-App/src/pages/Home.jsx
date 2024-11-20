import React from "react";
import './Styles/Home.css';
import RoomDisplay from "../components/RoomDisplay/RoomDisplay";
import Slider from "../components/Slider/Slider";

const Home = () => {

   return (
    <div className="homepage">
      < Slider/>
      <RoomDisplay />
    </div>
   );
};

export default Home;
