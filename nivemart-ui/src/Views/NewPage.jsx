import { Flex, Text, Image, Button, Box } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const NewPage = () => {
  const collections = [
    { src: "../images5.jpeg", label: "Western New collections" },
    { src: "../images2.jpeg", label: "Party Wear collections" },
    { src: "../images3.jpeg", label: "New collections" },
    { src: "../images4.jpeg", label: "Formals new collections" },
    { src: "../images6.jpeg", label: "Formals new collections" },
    { src: "../images7.jpeg", label: "Formals new collections" },
    { src: "../images8.jpeg", label: "Formals new collections" },
    { src: "../images9.jpeg", label: "Formals new collections" },
  ];
const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Flex flexDir="column" margin="25px" gap="60px">
      <Flex>
        <Button
          fontWeight="200"
          borderRadius="20px"
          backgroundColor="#FDC161"
          color="white"
          _hover={{ backgroundColor: "orange" }}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
        <Flex
          fontSize="62px"
          marginLeft="330px"
          color="#f2bd8d"
          fontWeight="100"
        >
          <Text>Fresh arrival and new selections.</Text>
        </Flex>
      </Flex>

      <Flex gap="15px" flexWrap="wrap" justifyContent="center">
        {collections.map((collection, index) => (
          <Box key={index} width="calc(25% - 15px)" textAlign="center">
            <Image
              width="100%" // Adjust the width as needed
              height="80%" // Adjust the height as needed
              objectFit="cover"
              src={collection.src}
              alt={collection.label}
            />
            <Button
              fontWeight="200"
              borderRadius="20px"
              backgroundColor="#FDC161"
              color="white"
              _hover={{ backgroundColor: "orange" }}
              mt="10px" // Margin top to create space between image and button
              px="15px"
              whiteSpace="nowrap" // Prevents text from wrapping
              width="auto" // Adjust width based on text
            >
              {collection.label}
            </Button>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default NewPage;
