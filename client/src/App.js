import React from "react";
import DrawerMenu from "./component/DrawerMenu";
import { BrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";
// import Help from "./pages/Help";, Routes, Route

function App() {
  return (
    <BrowserRouter>
      <DrawerMenu />
    </BrowserRouter>
  );
}

export default App;
