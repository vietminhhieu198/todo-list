import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import { RouteAttributes } from "./common/config/interfaces/route";
import { RenderRouter } from "./common/config/routers/RenderRouter";
import { routerPath } from "./common/constants/routerPath";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {RenderRouter.map((route: RouteAttributes, index: number) => {
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
