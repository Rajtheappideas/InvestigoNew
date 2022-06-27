import React from "react";
import {
  Cities,
  Footer,
  Herosection,
  Navbar,
  ProfitOverview,
  Projects,
  StartStep,
  VideoPopup,
  Number,
  Community,
  Market,
} from "../components";

const Home = () => {
  return (
    <>
      <Navbar />
      <Herosection />
      <Projects />
      <Cities />
      <ProfitOverview />
      <StartStep />
      <VideoPopup />
      <Number />
      <Community />
      <Market />
      <Footer />
    </>
  );
};

export default Home;
