import React from "react";
import { Image, Flex, Text } from "@chakra-ui/react";
const ImageCard = ({ src, alt, overlayText, overlayOpacity }) => (
  <Flex
    height="450px"
    width={["100%", "100%", "430px"]}
    overflow="hidden"
    borderRadius="25px"
    position="relative"
    boxShadow="0 6px 20px rgba(0, 0, 0, 0.1)"
    _hover={{
      transform: "rotate(2deg) scale(1.05)",
      transition: "all 0.4s ease-in-out",
      boxShadow: "0 12px 40px rgba(0, 0, 0, 0.5)",
    }}
  >
    <Image
      src={src}
      alt={alt}
      objectFit="cover"
      borderRadius="25px"
      width="100%"
      height="100%"
      transition="transform 0.4s ease-in-out"
      _hover={{
        transform: "scale(1.1)",
      }}
    />
    <Flex
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      backgroundColor={`rgba(0, 0, 0, ${overlayOpacity})`}
      opacity="0"
      justifyContent="center"
      alignItems="center"
      color="white"
      fontSize="24px"
      fontWeight="bold"
      transition="opacity 0.4s ease-in-out"
      _hover={{
        opacity: "1",
      }}
    >
      {overlayText}
    </Flex>
  </Flex>
);

const PageTwo = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      gap="10px"
      marginTop="120px"
      flexDir="column"
    >
      <Flex flexDir="column">
        <Text
          fontWeight="800"
          fontSize={["40px", "50px", "60px", "74px"]}
          bgGradient="linear(to-r, #4CAF50, #16423C)"
          bgClip="text"
          letterSpacing="wider"
          textTransform="uppercase"
          lineHeight="1.2"
          textShadow="2px 2px 8px rgba(0, 0, 0, 0.25)"
          transition="all 0.3s ease"
          _hover={{
            textShadow: "3px 3px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          Access To High-Quality,
        </Text>
        <Text
          fontWeight="300"
          fontSize={["30px", "40px", "50px", "60px"]}
          color="#6A9C89"
          letterSpacing="widest"
          textTransform="capitalize"
          lineHeight="1.3"
          textShadow="1px 1px 6px rgba(0, 0, 0, 0.1)"
          fontStyle="italic"
          position="relative"
          _before={{
            content: '""',
            position: "absolute",
            width: "100%",
            height: "2px",
            bottom: "-5px",
            left: "0",
            background: "linear-gradient(to right, #16423C, #4CAF50)",
            transition: "width 0.3s ease",
          }}
          _hover={{
            _before: {
              width: "100%",
            },
            color: "#4CAF50",
          }}
        >
          Eco-Friendly Products
        </Text>
        <Text
          fontWeight="200"
          fontSize={["25px", "35px", "45px", "50px"]}
          color="#16423C"
          letterSpacing="wide"
          lineHeight="1.3"
          textTransform="lowercase"
          textShadow="1px 1px 6px rgba(0, 0, 0, 0.1)"
          animation="fadeIn 2s ease-in-out"
          _hover={{
            color: "#4CAF50",
            transform: "translateY(-5px)",
            transition: "all 0.4s ease",
          }}
        >
          and Services
        </Text>
      </Flex>

      <Flex
        flexDir="row"
        justifyContent="space-between"
        width="100%"
        marginTop="50px"
      >
        <ImageCard
          src="public/model6.jpg"
          alt="Model 1"
          overlayText="Model 1"
          overlayOpacity={0.5}
        />
        <ImageCard
          src="public/model8.jpg"
          alt="Model 2"
          overlayText="Model 2"
          overlayOpacity={0.3}
        />
        <ImageCard
          src="public/model23.jpg"
          alt="Model 3"
          overlayText="Model 3"
          overlayOpacity={0.2}
        />
      </Flex>
    </Flex>
  );
};

export default PageTwo;
