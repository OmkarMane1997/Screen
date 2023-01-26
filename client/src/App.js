import React from "react";
import DrawerMenu from "./component/DrawerMenu";
import { BrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";
// import Help from "./pages/Help";, Routes, Route
import './assets/User.css';
import { ToastContainer } from 'react-toastify'
function App() {
  return (
    <BrowserRouter>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    <section className="background">
    <DrawerMenu />

    </section>
    </BrowserRouter>
  );
}

export default App;
