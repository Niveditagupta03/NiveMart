import { Flex, Image, Button } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import Discount from "./Discount";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";

const buttonStyle = {
  borderRadius: "25px",
  margin: "1px",
  fontWeight: "bold",
  background: "linear-gradient(135deg, #16423C, #1A6B58)",
  color: "white",
  padding: "10px 20px",
  boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
  _hover: {
    background: "linear-gradient(135deg, #6A9C89, #4E7766)",
    transform: "scale(1.05)",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
  },
  _active: {
    transform: "scale(1)",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
  },
};

const CustomButton = ({ children, ...props }) => (
  <Button {...buttonStyle} {...props}>
    {children}
  </Button>
);

const ModelSec = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  // Array of images
  const images = [
    "/model14.jpg",
    "/model15.jpg",
    "/model16.jpg",
    "/model12.jpg",
    "/model13.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true); // State for fade-in effect

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Start fade-in
      }, 500); // Wait for fade-out to complete before changing the image
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleClick = () => {
    navigate("/new-page"); // Redirect to the new page
  };

  return (
    <Flex
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      gap="10px"
      marginTop="20px"
    >
      <Flex>
        <Discount />
      </Flex>
      <Flex
        justifyContent="center"
        position="relative"
        overflow="hidden"
        width="560px"
        height="70vh"
        borderRadius="15px"
        boxShadow="0 10px 30px rgba(0, 0, 0, 0.1)"
      >
        <Image
          src={images[currentImageIndex]}
          alt="Model"
          boxSize="100%"
          objectFit="cover"
          objectPosition="top"
          transition="opacity 0.8s ease-in-out"
          opacity={fade ? 1 : 0} // Adjusted to use 1 and 0 for full opacity control
          filter="brightness(0.9)"
          borderRadius="15px"
        />
        <Flex
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.2)"
          borderRadius="15px"
          zIndex="1"
        />
        <Flex
          position="absolute"
          bottom="10%"
          left="50%"
          transform="translateX(-50%)"
          justifyContent="center"
          zIndex="2"
        >
          <CustomButton
            w="230px"
            h="50px"
            fontSize="17px"
            backgroundColor="rgba(0, 126, 111, 0.2)"
            _hover={{
              background:
                "linear-gradient(to right, #16423C, #4CAF50, #16423C)",
            }}
            onClick={handleClick}
          >
            Start Shopping
            <FiArrowUpRight
              size="27px"
              color="white"
              style={{ marginLeft: "10px" }}
            />
          </CustomButton>
        </Flex>
      </Flex>

      <Flex>
        <SideBar />
      </Flex>
    </Flex>
  );
};

export default ModelSec;
