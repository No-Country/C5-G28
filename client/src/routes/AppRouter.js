import { UserContext } from "../hooks/UserContext";
import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

//layouts
import Home from "../layouts/Home";
import UserProfile from "../layouts/UserProfile";
import Login from "../layouts/Login";
import Registro from "../layouts/Registro";
import Posts from "../layouts/Post";
import SavedElements from "../layouts/SavedElements";
import Verification from '../layouts/Verificacion';
import LecturaPost from "../layouts/LecturaPost";

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
            <Route element={<LecturaPost />} path="/post" />
            <Route element={<Posts />} path="/posts" />
            <Route element={<UserProfile />} path="/perfil" />
            <Route element={<SavedElements />} path="/guardados" />
          </Route>
          <Route element={<Login />} path="/" />
          <Route element={<Registro />} path="/registrarse" />
          <Route element={<Verification />} path="/verificacion" />
        </Routes>
      </Router>
    </>
  );
};
