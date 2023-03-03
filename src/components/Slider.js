import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Slider = () => {
  return (
    <>
      <Flex
        direction={"column"}
        alignItems={"end"}
        justify="space-between"
        h={90}
      >
        <Button
          backgroundColor="goldenrod"
          w="5%"
          h={10}
          borderRadius="0"
          opacity=".5"
          _hover={{
            bg: "goldenrod",
            opacity: 1,
          }}
        >
          {<AiOutlineRight fontSize={30} />}
        </Button>
        <br />
        <Button
          w="5%"
          h={10}
          borderRadius="0"
          opacity="0.8"
          _hover={{
            opacity: 1,
          }}
        >
          {<AiOutlineLeft fontSize={30} />}
        </Button>
      </Flex>
    </>
  );
};

export default Slider;
