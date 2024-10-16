import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const PageThree = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      gap="10px"
      marginTop="150px"
      flexDir="column"
    >
      <Flex flexDir="row" w="100%" gap="10px" justifyContent="space-between">
        <Flex
          justifyContent="center"
          alignItems="center"
          height="500px"
          width={["90%", "48%"]}
          position="relative" // Position for overlay text
          borderRadius="25px" // Adding border radius to the Flex container
          overflow="hidden" // Ensuring child elements are clipped if they exceed boundaries
          boxShadow="0 10px 20px rgba(0, 0, 0, 0.15)" // Box shadow for depth
          background="linear-gradient(135deg, #C4DAD2 30%, #A8D8B9 90%)" // Gradient background
        >
          <Image
            src="public/model13.jpg"
            alt="Why Choose Us"
            objectFit="cover" // Change to cover to maintain aspect ratio
            borderRadius="25px" // Maintain the border radius on the image
            width="90%"
            height="90%"
            objectPosition="top"
          />
        </Flex>

        <Flex
          height="500px"
          width={["100%", "48%"]}
          background="linear-gradient(135deg, #C4DAD2 30%, #A8D8B9 90%)"
          borderRadius="25px"
          padding="25px"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          boxShadow="0 10px 20px rgba(0, 0, 0, 0.1)"
          transition="transform 0.3s ease, box-shadow 0.3s ease"
        >
          <Text
            fontSize={["40px", "52px"]}
            fontWeight="800"
            marginBottom="15px"
            textAlign="center"
            color="#16423C"
            textShadow="1px 1px 2px rgba(0, 0, 0, 0.3)"
          >
            Why Choose Us?
          </Text>
          <Text
            fontSize={["18px", "20px"]}
            fontWeight="300"
            marginBottom="10px"
            textAlign="center"
            color="#16423C" // Color for body text
            lineHeight="1.6" // Line height for better readability
          >
            We take pride in offering high-quality, eco-friendly products that
            meet your needs.
          </Text>
          <Text
            fontSize={["18px", "20px"]}
            fontWeight="300"
            marginBottom="10px"
            textAlign="center"
            color="#16423C"
            lineHeight="1.6"
          >
            Our focus is on sustainability, ensuring that our products help you
            reduce your environmental impact.
          </Text>
          <Text
            fontSize={["18px", "20px"]}
            fontWeight="300"
            marginBottom="10px"
            textAlign="center"
            color="#16423C"
            lineHeight="1.6"
          >
            With a commitment to quality, we guarantee that every item is
            designed with care and consideration.
          </Text>
          <Text
            fontSize={["18px", "20px"]}
            fontWeight="300"
            textAlign="center"
            color="#16423C"
            lineHeight="1.6"
          >
            Experience the best with our carefully curated selection of products
            designed for you.
          </Text>
        </Flex>
      </Flex>
      <Flex
        justifyContent="space-between"
        gap="30px"
        w="100%"
        marginTop="100px"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          height="180px"
          width={["100%", "300px"]}
          background="linear-gradient(135deg, #EAD8C0 30%, #F0E6D2 90%)" // Gradient background
          borderRadius="25px"
          padding="25px"
          flexDir="column"
          boxShadow="0 4px 12px rgba(0, 0, 0, 0.15)" // Soft shadow
          transition="transform 0.3s ease" // Smooth transition on hover
          _hover={{ transform: "scale(1.05)" }} // Scale effect on hover
        >
          <Text fontSize="24px" fontWeight="600" color="#6A4A3A">
            100% Authentic Product
          </Text>
          <Button
            backgroundColor="#EAD8C0"
            borderColor="black"
            color="black"
            _hover={{ bg: "#F0E6D2", color: "#6A4A3A" }} // Hover effect
          >
            See more
          </Button>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          height="180px"
          width={["100%", "300px"]}
          background="linear-gradient(135deg, #E5D9F2 30%, #D0C9E9 90%)" // Gradient background
          borderRadius="25px"
          padding="25px"
          flexDir="column"
          boxShadow="0 4px 12px rgba(0, 0, 0, 0.15)" // Soft shadow
          transition="transform 0.3s ease"
          _hover={{ transform: "scale(1.05)" }} // Scale effect on hover
        >
          <Text fontSize="24px" fontWeight="600" color="#3A6A94">
            Free & Easy Return
          </Text>
          <Button
            borderColor="black"
            backgroundColor="#E5D9F2"
            color="black"
            _hover={{ bg: "#D0C9E9", color: "#3A6A94" }} // Hover effect
          >
            See more
          </Button>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          height="180px"
          width={["100%", "300px"]}
          background="linear-gradient(135deg, #D2E0FB 30%, #B7C6E0 90%)"
          borderRadius="25px"
          padding="25px"
          flexDir="column"
          boxShadow="0 4px 12px rgba(0, 0, 0, 0.15)"
          transition="transform 0.3s ease"
          _hover={{ transform: "scale(1.05)" }}
        >
          <Text fontSize="24px" fontWeight="600" color="#4A6A94">
            Safe Product
          </Text>
          <Button
            backgroundColor="#D2E0FB"
            color="black"
            _hover={{ bg: "#B7C6E0", color: "#4A6A94" }}
          >
            See more
          </Button>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          height="180px"
          width={["100%", "355px"]}
          borderRadius="25px"
          overflow="hidden"
          boxShadow="0 4px 12px rgba(0, 0, 0, 0.15)"
          transition="transform 0.3s ease"
          _hover={{ transform: "scale(1.05)" }}
        >
          <Image
            src="public/model20.jpg"
            alt="Model 3"
            objectPosition="top"
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PageThree;
