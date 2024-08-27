import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/order" element={<Order />} />
        <Route path="/about" element={<About />} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
