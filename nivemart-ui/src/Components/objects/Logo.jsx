import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import SidebarMenu from "./SideBarMenu";
import Store from "./Store";

const Logo = () => {
  return (
    <Flex
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Flex>
        <SidebarMenu />
      </Flex>
      <Flex alignItems="center">
        <Image
          boxSize="100px"
          objectFit="contain"
          src="../images.png"
          alt="NiveMart Logo"
        />
      </Flex>
      <Flex>
        <Store />
      </Flex>
    </Flex>
  );
};

export default Logo;
