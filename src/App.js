import React from "react";
import { Routes, Route } from "react-router-dom";
// import { Box } from "@chakra-ui/react";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Testimonial from "./Pages/Testimonial";
import Contact from "./Pages/Contact";
import Sign from "./Pages/Sign";
import Search from "./Pages/Search";
import Error from "./Pages/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/service" element={<Services />} />
        <Route path="/signIn/signUp" element={<Sign />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Error />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
