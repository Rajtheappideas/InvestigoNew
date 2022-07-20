import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Filter, Footer, Navbar, Properties } from "../components";
import bgImg from "../assets/images/banner/banner-two-bg.png";
import img1 from "../assets/images/property/project01.png";
import img2 from "../assets/images/property/project02.png";
import img3 from "../assets/images/property/project03.png";
import img4 from "../assets/images/property/project04.png";
import img5 from "../assets/images/property/project05.png";
import img6 from "../assets/images/property/project06.png";
import axios from "axios";
import { useUserContext } from "../context/UserContext";

const Project = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [searchByLocation, setSearchByLocation] = useState("");
  const [seachByProperty, setSeachByProperty] = useState("");
  const [filterDataByProperty, setFilterDataByProperty] = useState([]);

  const { projects, loading } = useUserContext();

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
        data={projects}
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
        data={projects}
        loading={loading}
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
