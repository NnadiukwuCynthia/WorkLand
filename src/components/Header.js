import React from "react";
import { Box, Text, Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <Box w="70%" mx="auto" my="55" align={"center"}>
        <Text
          fontSize="4xl"
          color={"white"}
          fontFamily={"sans-serif"}
          lineHeight="1.2"
          spacing={3}
          fontWeight={"semibold"}
          mb="7"
        >
          Welcome To <br />
          Workland Factory
        </Text>
        <Text
          fontSize="md"
          color={"white"}
          fontFamily={"sans-serif"}
          lineHeight="1.5"
          spacing={2}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          inventore dolores atque <br />
          optio. In tempore esse libero. Amet quia, voluptatibus esse at illo
          labore, illum laudantium reiciendis aperiam accusamus cumque.
        </Text>
        <ButtonGroup size="lg" isAttached variant="outline" mt="20">
          <Button
            border="2px"
            borderColor="goldenrod"
            color={"white"}
            variant="outline"
            _hover={{ color: "black", bg: "goldenrod" }}
          >
            Read More
          </Button>
          <IconButton
            aria-label="read more"
            icon={<FaArrowRight />}
            backgroundColor="goldenrod"
            variant="ghost"
            _hover={{
              color: "white",
              bg: "goldenrod",
            }}
          />
        </ButtonGroup>
      </Box>
    </>
  );
};

export default Header;
