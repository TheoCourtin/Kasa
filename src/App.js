import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import House from "./pages/house";
import Error from "./pages/error";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/House/:id" element={<House />} />
        <Route path="/about" element={<About />} />
        {/* Dédié plutôt pour les pages 404 */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;