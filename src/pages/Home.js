import React from "react";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Investigo - Home</title>
        <script src="../../assets/vendor/slick/js/slick.js"></script>
      </Helmet>
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
