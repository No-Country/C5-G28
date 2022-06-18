import React from "react";
import "./Preferences.css";
import PreferenceBtn from "../PreferenceBtn/PreferenceBtn";

const Preferences = () => {
  const preferences = [
    "JavaScript",
    "Blockchain",
    "React",
    "Desarrollo Web",
    "UX/UI",
    "AWS services",
  ];

  return (
    <div className="row d-flex justify-content-center mt-4 margin-left-preferences">
      {/* <h3 className="mb-2 px-2 font-weight-light">Tus preferidos</h3> */}
      <ul className="px-0 d-flex align-content-center align-items-center flex-wrap tag-preferences">
        {/* ITERAR SEGÚN PREFERENCIAS */}
        {preferences.length >= 1 ? (
          preferences.map((name, index) => (
            <PreferenceBtn key={index + name} name={name} />
          ))
        ) : (
          <div> No se encontraron preferencias</div>
        )}
      </ul>
    </div>
  );
};

export default Preferences;
