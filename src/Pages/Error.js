import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { FaSadTear } from "react-icons/fa";

const Error = () => {
  return (
    <Box fontSize={60} textAlign={"center"}>
      <Text>
        Sorry <FaSadTear />
      </Text>
      <h1>
        404 page | Page Not Found<lINK TO="/">Home</lINK>
      </h1>
    </Box>
  );
};

export default Error;
