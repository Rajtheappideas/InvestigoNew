import React from "react";
import { Helmet } from "react-helmet";
import {
  Footer,
  Gallery,
  JobSection,
  MarketSection,
  Navbar,
  TeamSection,
} from "../components";
import { Banner, Overview } from "../components/index";

const Aboutus = () => {
  return (
    <>
      <Helmet>
        <title>Investigo - About us</title>
      </Helmet>
      <Navbar />
      <Banner />
      <Overview />
      <Gallery />
      <TeamSection />
      <MarketSection />
      <JobSection />
      <Footer />
    </>
  );
};

export default Aboutus;
