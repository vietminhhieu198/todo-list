import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./common/sass/App.scss";
import { RouteAttributes } from "./common/config/interfaces/route";
import { routerList } from "./common/config/routers/routerList";
import { routerPath } from "./common/constants/routerPath";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routerList.map((route: RouteAttributes, index: number) => {
          return (
            <Route path={route.path} element={route.element} key={index} />
          );
        })}
        <Route path="*" element={<Navigate to={routerPath.common.HOME} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
