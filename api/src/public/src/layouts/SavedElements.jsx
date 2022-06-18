import React from "react";

import SearchInput from "../components/SearchInput/SearchInput";
import SavedList from "../views/SavedList";
import SavedPost from "../views/SavedPost";

const SavedElements = () => {
  return (
    <div className="wrapper">
      <div>
        <div className="row col-md mx-0">
          <div className="col-lg-1"></div>
          <div className="col-lg-7 px-4 px-sm-5 mt-5 text-left">
            <div className="col-10 px-0 mt-4">
              <h2>Tus elementos guardados</h2>
              <h5 className="my-5 font-weight-normal">
                Aquí puedes visualizar los elementos que tienes guardados en tus
                marcadores. Además puedes organizar estos elementos en
                diferentes listas para su rápido acceso.
              </h5>
            </div>

            <SavedPost />
          </div>

          <div className="col-lg-4 px-5 ">
            <div className="d-flex flex-row-reverse py-4">
              <SearchInput />
            </div>
            <SavedList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedElements;
