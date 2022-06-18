import React from "react";
import { PreferencesContext } from "../../store/PreferencesContext.js";
import { useContext } from "react";

const PreferenceBtn = ({ name }) => {
  const { setPreferenceValue } = useContext(PreferencesContext);
  const prueba = () => {
    setPreferenceValue(name);
  };

  return (
    <>
      <li
        type="button"
        className="btn btn-primary mr-2  mb-2 rounded-pill px-3"
        onClick={prueba}
      >
        {name}
      </li>
    </>
  );
};

export default PreferenceBtn;
