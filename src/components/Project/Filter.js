import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Filter = () => {
  return (
    <div className="property__filter">
      <div className="container">
        <div className="property__filter__area">
          <div className="row d-flex align-items-center">
            <div className="col-lg-12 col-xl-6">
              <div className="property__search__wrapper">
                <form action="#" method="post">
                  <div className="input">
                    <input
                      type="search"
                      name="property__search"
                      id="propertySearch"
                      placeholder="Search for properties"
                    />
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <button type="submit" className="button button--effect">
                    Search
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="property__select__wrapper">
                <select
                  className="location__select"
                  style={{
                    width: "100%",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <option data-display="Location">Location</option>
                  <option value="angeles">Los Angeles</option>
                  <option value="francis">San Francisco, CA</option>
                  <option value="weldon">The Weldon</option>
                  <option value="diego">San Diego</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="property__select__wrapper">
                <select
                  className="property__select"
                  style={{
                    width: "100%",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <option data-display="Property">Property </option>
                  <option value="commercial">Commercial</option>
                  <option value="residential">Residential</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
