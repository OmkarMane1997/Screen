import React from "react";
import DrawerMenu from "./component/DrawerMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Help from "./pages/Help";

function App() {
  return (
    <BrowserRouter>
      <DrawerMenu />
      <Routes>
        <Route path={"/Home"} element={<Home />} />
        <Route path={"/Dashboard"} element={<Dashboard />} />
        <Route path={"/Help"} element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
