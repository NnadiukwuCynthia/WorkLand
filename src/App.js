import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Menu from "./components/Menu";
import header from "./imgs/header.jpg";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Testimonial from "./Pages/Testimonial";
import Contact from "./Pages/Contact";
import Sign from "./Pages/Sign";
import Search from "./Pages/Search";
import Error from "./Pages/Error";

import Header from "./components/Header";
import Slider from "./components/Slider";
function App() {
  return (
    <>
      <Box
        bgImage={header}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        w="100%"
        h={670}
        py="10"
      >
        <Menu />
        <Header />
        <Slider />
      </Box>
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
