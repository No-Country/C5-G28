import React from "react";

const ThemeSwitch = () => {
  return (
    <div className="custom-control custom-switch d-flex flex-row-reverse  px-0 mb-5 py-4">
      <input type="checkbox" class="custom-control-input" id="customSwitches" />
      <label className="custom-control-label" for="customSwitches"></label>
    </div>
  );
};

export default ThemeSwitch;
