import React from "react";
import Navbar from "./components/Navbar";
import Carrusel from "./components/Carrusel";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Authentication from "./components/auth/Authentication";

const App = () => {
  return (
    <>
      <Navbar />
      <Carrusel />
      <Home />
    </>
  );
};
export default App;
