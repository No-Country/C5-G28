import { UserContext } from "../hooks/UserContext";
import React from "react";
import Sidebar from "../components/Sidebar/sidebar";

//layouts
import Home from "../layouts/Home";
import UserProfile from "../layouts/userProfile";
import Login from "../layouts/login";
import Registro from "../layouts/registro";
import Posts from "../layouts/Post";
import SavedElements from "../layouts/SavedElements";

//importando react router para especificar las rutas a las secciones
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

export const AppRouter = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} path="/home" exact />
            <Route element={<Posts />} path="/posts" />
            <Route element={<UserProfile />} path="/perfil" />
            <Route element={<SavedElements />} path="/guardados" />
          </Route>
          <Route element={<Login />} path="/" />
          <Route element={<Registro />} path="/registrarse" />
        </Routes>
      </Router>
    </>
  );
};
