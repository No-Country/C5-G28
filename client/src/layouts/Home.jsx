import React from "react";

import MainPost from "../views/MainPost";
// import SearchInput from "../components/SearchInput/SearchInput";

// import ThemeSwitch from "../components/ThemeSwitch/ThemeSwitch";
import MostReaded from "../views/MostReaded";
import Usercard from "../components/UserCard/Usercard";

import FollowList from "../views/FollowList";
// import Preferences from "../components/Preferences/Preferences";
import Footer from "../components/Footer/Footer";
import '../styles/home.css';

const Home = () => {
  return (
    <>
    <div className="wrapper animate__animated animate__fadeIn"  >
      <div>
        <div /* className="row col-md mx-0" */ className="home-container">
          {/* <div className="col-lg-0"></div> */}
          <div className="col-lg-8 px-4 px-sm-5 mt-5 col-sm-12 col-12 home-news-post">
              <Usercard/>  

            {/* <div className="d-flex flex-row-reverse py-4 ">
              <SearchInput />
            </div> */}
            {/* <Preferences /> */}
            <MainPost />
          </div>

          <div className="col-lg-4 col-sm-0 col-0 px-5 bg-light animate__animated animate__fadeInRight animate__slow" style={{borderRadius:'15px'}}>
            <MostReaded />
            <hr className="d-none d-sm-block" />
            <FollowList />
            <Footer />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
