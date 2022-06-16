import React, { createContext, useState } from "react";
export const PreferencesContext = createContext();

export const PreferencesContextProvider = ({ children }) => {
  const [preference, setPreference] = useState("JavaScript");

  const setPreferenceValue = (value) => {
    setPreference(value);
  };
  const getPreferenceValue = () => {
    return preference;
  };
  return (
    <PreferencesContext.Provider
      value={{ preference, setPreferenceValue, getPreferenceValue }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};
