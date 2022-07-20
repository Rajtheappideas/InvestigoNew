import React from "react";
import { toast, Toaster } from "react-hot-toast";

const Filter = ({
  data,
  setFilteredData,
  searchValue,
  setSearchValue,
  setSearchByLocation,
  searchByLocation,
  setSeachByProperty,
  seachByProperty,
  setFilterDataByProperty,
}) => {
  // for name
  const handleChangeValueByName = (e) => {
    setSearchValue(e.target.value.toLowerCase());
    setFilteredData([]);
  };

  // filter by search
  const FilterBySearch = () => {
    if (searchValue === "") {
      toast.error("Enter a word please!!!", {
        duration: 1000,
        style: {
          width: "auto",
          height: "auto",
          background: "black",
          color: "white",
          fontSize: "large",
        },
        position: "top-center",
      });
      return false;
    }
    const filterbysearch = data.filter(
      (item) => item.title.toLowerCase().trim() == searchValue
    );
    if (filterbysearch.length === 0) {
      toast.error("Nothing found!!!", {
        duration: 1000,
        style: {
          width: "auto",
          height: "auto",
          background: "black",
          color: "white",
          fontSize: "large",
        },
        position: "top-center",
      });
      setSearchValue("");
      setFilteredData([]);
      return false;
    } else {
      setFilteredData(filterbysearch);
    }
  };

  // filter by location
  const FilterByLocation = () => {
    const dt = data.filter(
      (item) =>
        item.location.split(",").pop().toLowerCase().trim() == searchByLocation
    );
    const filterbylocation = dt.filter((item) =>
      item.location.split(" ").pop()
    );

    if (filterbylocation.length === 0) {
      toast.error("Nothing found!!!", {
        duration: 1000,
        style: {
          width: "auto",
          height: "auto",
          background: "black",
          color: "white",
          fontSize: "large",
        },
        position: "top-center",
      });
      setSearchByLocation("");
      setFilteredData([]);
      return false;
    } else {
      setFilteredData(filterbylocation);
    }
  };

  // filter by property
  const FilterByProperty = () => {
    const filterbyproperty = data.filter(
      (item) => item.property.toLowerCase() == seachByProperty
    );
    if (filterbyproperty.length === 0) {
      toast.error("Nothing found!!!", {
        duration: 1000,
        style: {
          width: "auto",
          height: "auto",
          background: "black",
          color: "white",
          fontSize: "large",
        },
        position: "top-center",
      });
      setSeachByProperty("");
      setFilterDataByProperty([]);
      return false;
    } else {
      setSearchByLocation("");
      setSearchValue("");
      setFilteredData([]);
      setFilterDataByProperty(filterbyproperty);
    }
  };
  return (
    <>
      <Toaster />
      <div className="property__filter">
        <div className="container">
          <div className="property__filter__area">
            <div className="row d-flex align-items-center">
              {/* filter by name */}
              <div className="col-lg-12 col-xl-6">
                <div className="property__search__wrapper">
                  <form>
                    <div className="input">
                      <input
                        type="search"
                        name="property__search"
                        id="propertySearch"
                        placeholder="Search for properties"
                        onChange={(e) => handleChangeValueByName(e)}
                        value={searchValue}
                      />
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <button
                      type="button"
                      onClick={FilterBySearch}
                      className="button button--effect"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
              {/* filter by location */}
              <div className="col-lg-6 col-xl-3">
                <div className="property__select__wrapper">
                  <select
                    className="location__select"
                    style={{
                      width: "100%",
                      padding: "20px",
                      borderRadius: "10px",
                    }}
                    value={searchByLocation}
                    onChange={(e) => {
                      setSearchByLocation(e.target.value.toLowerCase());
                    }}
                    onClick={() => FilterByLocation()}
                  >
                    <option label="Location"></option>
                    <option value="los angeles">Los Angeles</option>
                    <option value="san francisco">San Francisco</option>
                    <option value="co">Colorado</option>
                    <option value="san diego">San Diego</option>
                    <option value="nc">North Carolina</option>
                  </select>
                </div>
              </div>
              {/* filter by property */}
              <div className="col-lg-6 col-xl-3">
                <div className="property__select__wrapper">
                  <select
                    className="property__select"
                    style={{
                      width: "100%",
                      padding: "20px",
                      borderRadius: "10px",
                    }}
                    onChange={(e) =>
                      setSeachByProperty(e.target.value.toLowerCase())
                    }
                    value={seachByProperty}
                    onClick={() => FilterByProperty()}
                  >
                    <option label="Property" />
                    <option value="commercial">Commercial</option>
                    <option value="residential">Residential</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
