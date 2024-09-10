import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" py={10} px={6}>
      <Text fontSize="48px" color="red.500">
        404
      </Text>
      <Text fontSize="24px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color="gray.500" mb={6}>
        The page you are looking for does not exist.
      </Text>
      <Button colorScheme="teal" variant="solid" onClick={() => navigate("/")}>
        Go to Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
