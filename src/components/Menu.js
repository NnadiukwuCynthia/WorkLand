import Data from "./MenuData";
import { Box, Flex } from "@chakra-ui/react";
import logo from "../imgs/logo.png";
import { Link } from "react-router-dom";
import React from "react";
import style from "./style.module.css";

const Menu = () => {
  return (
    <>
      <Flex justify={"space-between"} align={"center"} w="90%" mx="auto">
        <Box>
          <img src={logo} alt="Logo" />
        </Box>
        <Flex w="45%" justify={"space-evenly"} align={"top"}>
          {Data.map((items, index) => {
            const { title, path } = items;
            return (
              <ul key={index} className={style.List}>
                <li>
                  <Link to={path} className={style.listItem}>
                    {title}
                  </Link>
                </li>
              </ul>
            );
          })}
        </Flex>
      </Flex>
    </>
  );
};

export default Menu;
