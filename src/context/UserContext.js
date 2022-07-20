import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [loadingProfile, setLoadingProfile] = useState(false);

  const fetchProjects = () => {
    setLoading(true);
    axios("https://investigo-tai.herokuapp.com/project")
      .then((res) => {
        setProjects(res?.data?.projects);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err?.response?.data);
        setLoading(false);
      });
  };

  const fetchUserProfile = () => {
    setLoadingProfile(true);
    axios("https://investigo-tai.herokuapp.com/profile", {
      headers: {
        Authorization: userData?.token,
      },
    })
      .then((res) => {
        setUserProfile(res?.data?.user);
        setLoadingProfile(false);
      })
      .catch((err) => {
        console.log(err?.response?.data);
        setLoadingProfile(false);
      });
  };

  useEffect(() => {
    fetchProjects();
    fetchUserProfile();
  }, []);
  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        projects,
        loading,
        userProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
