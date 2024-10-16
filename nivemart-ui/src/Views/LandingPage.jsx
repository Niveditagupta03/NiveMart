import React, { useState } from "react";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { keyframes } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import PageTwo from "../Components/page/PageTwo";
import PageThree from "../Components/page/PageThree";
import Logo from "../Components/objects/Logo";
import AllButton from "../Components/objects/AllButton";
import ModelSec from "../Components/objects/ModelSec";

// Keyframes for button shake animation
const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-1px); }
  50% { transform: translateX(1px); }
  75% { transform: translateX(-1px); }
  100% { transform: translateX(0); }
`;

// Button styles
const buttonStyle = {
  borderRadius: "25px",
  margin: "1px",
  fontWeight: "200",
  background: "linear-gradient(30deg, #16423C, #16423C)",
  color: "white",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.2s, box-shadow 0.2s, background 0.2s, filter 0.2s",
  _hover: {
    background: "linear-gradient(30deg, #6A9C89, #6A9C89)",
    transform: "translateY(-3px)",
    boxShadow: "0 3px 4px rgba(0, 0, 0, 0.3)",
    filter: "brightness(1.2)",
  },
  _active: {
    transform: "translateY(0)",
    boxShadow: "0 2px 3px rgba(0, 0, 0, 0.2)",
    filter: "brightness(1)",
  },
};

// Custom button component
const CustomButton = React.memo(({ children, ...props }) => (
  <Button {...buttonStyle} {...props}>
    {children}
  </Button>
));

// Custom menu component
const CustomMenu = React.memo(({ label, items }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Menu>
      <MenuButton
        as={CustomButton}
        rightIcon={
          <ChevronDownIcon
            transform={isClicked ? "translateY(14px)" : "translateY(0)"}
            transition="transform 0.2s ease"
            onClick={() => setIsClicked((prev) => !prev)}
            _hover={{ animation: `${shake} 0.5s ease` }}
          />
        }
        w="200px"
      >
        {label}
      </MenuButton>
      <MenuList fontSize="14px" fontFamily="revert">
        {items.map((item, index) => (
          <MenuItem key={index} _hover={{ backgroundColor: "#F8F4E1" }}>
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
});

// Main Landing Page component
export default function LandingPage() {
  const navigate = useNavigate();
  const imageSrc = "../model14.jpg"; // Image source

  const handleClick = () => {
    navigate("/new-page");
  };

  return (
    <Flex
      flexDir="column"
      backgroundColor="#EAEAEA"
      padding="0px 20px 20px 20px"
    >
      <Flex flexDir="column">
        <Flex>
          <Logo />
        </Flex>
        <Flex>
          <AllButton />
        </Flex>
        <Flex>
          <ModelSec />
        </Flex>
      </Flex>
      <Flex>
        <PageTwo />
      </Flex>
      <Flex>
        <PageThree />
      </Flex>
      <Flex>4th page</Flex>
    </Flex>
  );
}
