import React, { lazy } from "react";
import { Helmet } from "react-helmet";
import {
  Footer,
  Gallery,
  JobSection,
  MarketSection,
  Navbar,
  TeamSection,
} from "../components";
import { Banner } from "../components/index";
const Overview = lazy(() => import("../components/Aboutus/Overview"));

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
