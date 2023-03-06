import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { FaSadTear } from "react-icons/fa";
// import Header from ".././components/Header";

const Error = () => {
  useEffect(() => {});
  return (
    <>
      {/* <Header /> */}
      <Box fontSize={60} textAlign="center">
        <Text align="center">
          Sorry <FaSadTear />
        </Text>
        <h1>
          404 page | Page Not Found <lINK TO="/">Home</lINK>
        </h1>
      </Box>
    </>
  );
};

export default Error;
