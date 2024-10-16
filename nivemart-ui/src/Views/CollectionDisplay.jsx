import React, { useEffect, useState } from "react";
import { Box, Text, Button, Flex, Image, Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CollectionDisplay = ({ apiUrl, title }) => {
  const navigate = useNavigate();
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const buttonStyle = {
    borderRadius: "25px",
    margin: "10px",
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

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get(apiUrl);
        if (Array.isArray(response.data)) {
          setCollections(response.data);
        } else {
          setError("Unexpected response format.");
        }
      } catch (err) {
        setError(`There was an error fetching the collections: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, [apiUrl]);

  if (loading) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Text color="red.500">{error}</Text>
      </Flex>
    );
  }

  return (
    <Flex margin="10px" flexDir="column">
      <Flex>
        <Button
          {...buttonStyle} // Apply the custom button style
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
        <Text fontSize="62px" color="#6A9C89" fontWeight="100" ml={4}>
          {title}
        </Text>
      </Flex>
      <Flex gap="35px" flexWrap="wrap" justifyContent="center">
        {collections.length === 0 ? (
          <Text>No collections available.</Text>
        ) : (
          collections.map((collection) => (
            <Box
              key={collection.id}
              width="calc(20% - 15px)"
              textAlign="center"
            >
              <Image
                width="100%"
                height="400px"
                objectFit="cover"
                src={collection.photo}
                alt={collection.name}
                fallbackSrc="https://via.placeholder.com/200"
                onError={() =>
                  console.error(`Failed to load image: ${collection.photo}`)
                }
              />
              <Flex justifyContent="space-between" marginTop="10px">
                <Text fontWeight="200">{collection.name}</Text>
                <Text fontWeight="200">${collection.price.toFixed(2)}</Text>
              </Flex>
            </Box>
          ))
        )}
      </Flex>
    </Flex>
  );
};

export default CollectionDisplay;
