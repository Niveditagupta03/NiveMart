import { Flex, Text, Image, Button, Box, Icon } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../Components/objects/BackButton"; // Ensure this path is correct
import { StarIcon } from "@chakra-ui/icons";

const buttonStyle = {
  borderRadius: "25px",
  margin: "1px",
  borderColor: "orange",
  fontWeight: "200",
  padding: "10px 20px",
  minWidth: "150px",
  background: "white",
  color: "#16423C",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.2s, box-shadow 0.2s, background 0.2s, filter 0.2s",
  _hover: {
    background: "linear-gradient(30deg, #6A9C89, #4CAF50)",
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

const ProductCard = ({ imageSrc, price, description, rating }) => (
  <Flex
    backgroundColor="white"
    borderRadius="25px"
    position="relative"
    justifyContent="center"
    alignItems="center"
    width="250px"
    height="340px"
    p="0px 0px 75px 0px"
    border="0.5px solid"
    borderColor="#FEFAE0"
  >
    <Flex
      backgroundColor="white"
      borderRadius="25px"
      justifyContent="center"
      alignItems="center"
      height="250px"
      width="240px"
      border="0.5px solid"
      borderColor="#FEFAE0"
    >
      <Image
        width="100%"
        height="100%"
        objectFit="contain"
        src={imageSrc}
        alt="Model Image"
      />
    </Flex>
    <Flex position="absolute" bottom="10px" left="20px">
      <Text
        fontSize="14px"
        color="black"
        fontWeight="300"
        textAlign="center"
        padding="5px 15px"
        borderRadius="10px"
      >
        {`$ ${price}`}
      </Text>
    </Flex>
    <Flex position="absolute" bottom="30px" left="20px">
      <Text
        fontSize="14px"
        color="black"
        fontWeight="300"
        textAlign="center"
        padding="5px 15px"
        borderRadius="10px"
      >
        {description}
      </Text>
    </Flex>
    <Flex position="absolute" bottom="40px" left="160px">
      {[...Array(5)].map((_, i) => (
        <Icon
          as={StarIcon}
          key={i}
          color={i < rating ? "gold" : "gray.300"}
          boxSize={4}
        />
      ))}
    </Flex>
  </Flex>
);

const NewPage = () => {
  const navigate = useNavigate();

  const collections = [
    {
      src: "../model22.jpg",
      label: "Western",
      path: "/western",
    },
    { src: "../model9.jpg", label: "Party Wear Stack", path: "/party" },
    {
      src: "../model3.jpg",
      label: "Casual Party ",
      path: "/casual",
    },
    {
      src: "../model24.jpg",
      label: "Fancy Formal",
      path: "/fancyformal",
    },
    {
      src: "../model11.jpg",
      label: "Formals ",
      path: "/formals",
    },
    {
      src: "../model6.jpg",
      label: "Outing ",
      path: "/outing",
    },
    {
      src: "../model19.jpg",
      label: "Super Casual",
      path: "/superCasual",
    },
    { src: "../model18.jpg", label: "Trip Stack", path: "/trip" },
  ];

  const products = [
    {
      imageSrc: "../model22.jpg",
      price: "34.5",
      description: "Stylish Look",
      rating: 4,
    },
    {
      imageSrc: "../model9.jpg",
      price: "34.5",
      description: "Elegant Dress",
      rating: 5,
    },
    {
      imageSrc: "../model3.jpg",
      price: "34.5",
      description: "Party Vibe",
      rating: 4,
    },
    {
      imageSrc: "../model24.jpg",
      price: "34.5",
      description: "Fancy Fit",
      rating: 3,
    },
    {
      imageSrc: "../model11.jpg",
      price: "34.5",
      description: "Office Look",
      rating: 4,
    },
    {
      imageSrc: "../model6.jpg",
      price: "34.5",
      description: "Casual Day",
      rating: 5,
    },
    {
      imageSrc: "../model19.jpg",
      price: "34.5",
      description: "Super Casual",
      rating: 4,
    },
    {
      imageSrc: "../model18.jpg",
      price: "34.5",
      description: "Trip Ready",
      rating: 5,
    },
    {
      imageSrc: "../model11.jpg",
      price: "34.5",
      description: "Office Look",
      rating: 4,
    },
    {
      imageSrc: "../model6.jpg",
      price: "34.5",
      description: "Casual Day",
      rating: 5,
    },
    {
      imageSrc: "../model19.jpg",
      price: "34.5",
      description: "Super Casual",
      rating: 4,
    },
    {
      imageSrc: "../model18.jpg",
      price: "34.5",
      description: "Trip Ready",
      rating: 5,
    },
    {
      imageSrc: "../model11.jpg",
      price: "34.5",
      description: "Office Look",
      rating: 4,
    },
    {
      imageSrc: "../model6.jpg",
      price: "34.5",
      description: "Casual Day",
      rating: 5,
    },
    {
      imageSrc: "../model19.jpg",
      price: "34.5",
      description: "Super Casual",
      rating: 4,
    },
    {
      imageSrc: "../model18.jpg",
      price: "34.5",
      description: "Trip Ready",
      rating: 5,
    },
    {
      imageSrc: "../model11.jpg",
      price: "34.5",
      description: "Office Look",
      rating: 4,
    },
    {
      imageSrc: "../model6.jpg",
      price: "34.5",
      description: "Casual Day",
      rating: 5,
    },
    {
      imageSrc: "../model19.jpg",
      price: "34.5",
      description: "Super Casual",
      rating: 4,
    },
    {
      imageSrc: "../model18.jpg",
      price: "34.5",
      description: "Trip Ready",
      rating: 5,
    },
  ];

  return (
    <Flex flexDir="column" margin="25px" gap="60px">
      <Flex justifyContent="space-between" alignItems="center">
        <BackButton />
        <Flex direction="column" align="center" mb="20px">
          <Text fontSize="64px" fontWeight="700" color="#6A9C89" mb="10px">
            Fresh Arrivals
          </Text>
          <Box height="2px" width="100px" bg="#6A9C89" mb="10px" />
          <Text fontSize="64px" fontWeight="700" color="#6A9C89">
            and New Selections
          </Text>
        </Flex>
      </Flex>

      <Flex gap="15px" flexWrap="wrap" justifyContent="center" mb="20px">
        {collections.map((collection, index) => (
          <Button
            key={index}
            {...buttonStyle}
            onClick={() => navigate(collection.path)}
          >
            {collection.label}
          </Button>
        ))}
      </Flex>

      <Flex
        gap="25px"
        justifyContent="space-between"
        width="100%"
        flexWrap="wrap"
      >
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageSrc={product.imageSrc}
            price={product.price}
            description={product.description}
            rating={product.rating}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default NewPage;
