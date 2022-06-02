import React from "react";

import MainPost from "../views/MainPost";
import SearchInput from "../components/SearchInput/SearchInput";

import ThemeSwitch from "../components/ThemeSwitch/ThemeSwitch";
import MostReaded from "../views/MostReaded";

import FollowList from "../views/FollowList";
import Preferences from "../components/Preferences/Preferences";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div className="wrapper">
      <div>
        <div className="row col-md mx-0">
          <div className="col-lg-1"></div>
          <div className="col-lg-7 px-4 px-sm-5 mt-5">
            {/* <div className=" d-md-none">
              <ThemeSwitch />
            </div> */}

            <div className="d-flex flex-row-reverse py-4 ">
              <SearchInput />
            </div>
            <Preferences />
            <MainPost />
          </div>

          <div className="col-lg-4 px-5 bg-light">
            {/* <div className="d-none d-md-block">
              <ThemeSwitch />
            </div> */}

            <MostReaded />
            <hr className="d-none d-sm-block" />
            <FollowList />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
