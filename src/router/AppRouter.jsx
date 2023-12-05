import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./menuRoutes";
import Layout from "../components/layout/Layuot.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
