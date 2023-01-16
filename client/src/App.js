import React from "react";
import DrawerMenu from "./component/DrawerMenu";
import { BrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";
// import Help from "./pages/Help";, Routes, Route
import './assets/User.css';

function App() {
  return (
    <BrowserRouter>
    <section className="background">
    <DrawerMenu />

    </section>
    </BrowserRouter>
  );
}

export default App;
