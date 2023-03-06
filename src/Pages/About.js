import React from "react";
import AboutImg from ".././imgs/pic7.jpg";
import { FaArrowLeft } from "react-icons/fa";
import {
  Flex,
  Box,
  Text,
  Button,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <Flex h={400} justify="space-between" my="50px">
        <Box w="40%">
          <img src={AboutImg} alt="About Img" />
        </Box>
        <Box w="47%" align={"right"} pr="10rem">
          <Box>
            <Text fontSize={"3xl"} fontWeight={"semibold"} casing="uppercase">
              about us
              <Box></Box>
            </Text>
          </Box>
          <Box>
            <Text
              noOfLines={[1, 2]}
              fontSize={"xl"}
              fontWeight={"bold"}
              fontFamily={"sans-serif"}
              casing="capitalize"
              mt="5"
            >
              get full range of premium Industrial services for your business
            </Text>
          </Box>
          <Box>
            <Text lineHeight={"6"} whiteSpace={"break-spaces"} my="5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptLorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            </Text>
          </Box>
          <Box my="6">
            <ButtonGroup size="md" isAttached variant="outline">
              <IconButton
                aria-label="read more"
                icon={<FaArrowLeft />}
                backgroundColor="goldenrod"
                variant="ghost"
                borderRadius="0"
                _hover={{
                  color: "white",
                  bg: "goldenrod",
                }}
              />
              <Button
                borderRadius="0"
                border="2px"
                borderColor="goldenrod"
                color={"#000"}
                variant="outline"
                _hover={{ color: "black", bg: "goldenrod" }}
              >
                Read More
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default About;
