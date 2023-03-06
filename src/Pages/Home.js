import React from "react";
import header from "../imgs/header.jpg";
import Menu from ".././components/Menu";
import Header from ".././components/Header";
import Slider from ".././components/Slider";
import About from "./About";
import { Box } from "@chakra-ui/react";

const Home = () => {
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
      <About></About>
    </>
  );
};

export default Home;
