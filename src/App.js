import React, { useState } from "react";
import "./css/app.css";
import Home from "./Pages/Home";
import MainContext from "./context/MainContext";
import { user, portfolio, resume } from "./api/db.json";

function App() {
  const userData = [];
  const portfolioData = [];
  const resumeData = [];

  user.map(key => {
    userData.push(key);
  });

  portfolio.map(key => {
    portfolioData.push(key);
  });

  resume.map(key => {
    resumeData.push(key);
  });


  const [userInfo, setUserInfo] = useState(userData[0]);
  const [portfolioInfo, setPortfolioInfo] = useState(portfolioData);
  const [resumeInfo, setResumeInfo] = useState(resumeData[0]);

  const data = {
    userInfo,
    portfolioInfo,
    resumeInfo
  }

  // console.log(data);

  return (
    <>
      <MainContext.Provider value={data}>
        <Home />
      </MainContext.Provider>
    </>
  );
}

export default App;
