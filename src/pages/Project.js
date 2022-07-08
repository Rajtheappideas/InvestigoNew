import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Filter, Footer, Navbar, Properties } from "../components";
import bgImg from "../assets/images/banner/banner-two-bg.png";
import img1 from "../assets/images/property/project01.png";
import img2 from "../assets/images/property/project02.png";
import img3 from "../assets/images/property/project03.png";
import img4 from "../assets/images/property/project04.png";
import img5 from "../assets/images/property/project05.png";
import img6 from "../assets/images/property/project06.png";

const Project = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [searchByLocation, setSearchByLocation] = useState("");
  const [seachByProperty, setSeachByProperty] = useState("");
  const [filterDataByProperty, setFilterDataByProperty] = useState([]);

  const data = [
    {
      img: img1,
      title: "Hotel",
      address: "8706 Herrick Ave, Los Angeles",
      investors: "17",
      amount: "7,94,196",
      percentage: "14.56%",
      annualReturn: "2.5% + 4%",
      propertyType: "Residential",
      remainTime: "",
    },
    {
      img: img2,
      title: "Mineral Exploitation",
      address: "3335 21 St, San Francisco",
      investors: "178",
      amount: "2,94,196",
      percentage: "34.56%",
      annualReturn: "255% + 4%",
      propertyType: "Commercial",
      remainTime: "",
    },
    {
      img: img3,
      title: "Agriculture",
      address: " 356 La Jolla, San Diego",
      investors: "167",
      amount: "10,94,196",
      percentage: "24.56%",
      annualReturn: "3.5% + 2%",
      propertyType: "Commercial",
      remainTime: "",
    },
    {
      img: img4,
      title: "Transport",
      address: "90071, Grand Avenue, San Diego",
      investors: "134",
      amount: "3,44,196",
      percentage: "64.56%",
      annualReturn: "7.5% + 9%",
      propertyType: "Commercial",
      remainTime: "",
    },
    {
      img: img5,
      title: "Telecommunication",
      address: "Colorado Springs, CO",
      investors: "559",
      amount: "9,94,196",
      percentage: "84.56%",
      annualReturn: "7.5% + 4%",
      propertyType: "Commercial",
      remainTime: "",
    },
    {
      img: img6,
      title: "Real Estate",
      address: "Gastonia, NC",
      investors: "132",
      amount: "1,14,196",
      percentage: "44.56%",
      annualReturn: "5.5% + 2%",
      propertyType: "Commercial",
      remainTime: "",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Investigo - Project</title>
      </Helmet>
      <Navbar />
      {/* banner */}
      <section
        className="banner__alt bg__img"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container">
          <div className="banner__alt__area">
            <h1 className="neutral-top neutral-bottom">
              <span>Browse Properties</span>
            </h1>
          </div>
        </div>
      </section>
      <Filter
        data={data}
        setFilteredData={setFilteredData}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setSearchByLocation={setSearchByLocation}
        searchByLocation={searchByLocation}
        setSeachByProperty={setSeachByProperty}
        seachByProperty={seachByProperty}
        setFilterDataByProperty={setFilterDataByProperty}
        />
      <Properties
        data={data}
        filterDataByProperty={filterDataByProperty}
        filteredData={filteredData}
        searchValue={searchValue}
        searchByLocation={searchByLocation}
      />
      <Footer />
    </>
  );
};

export default Project;
