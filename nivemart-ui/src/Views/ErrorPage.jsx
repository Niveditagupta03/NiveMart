import React from "react";
import { Box, Text, Button, Image, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" py={1} px={1}>
      <Flex justify="center" mb={1}>
        <Image
          boxSize="500px"
          objectFit="cover"
          src="../error404.png"
          alt="Error 404"
        />
      </Flex>
      <Text fontSize="24px" mt={1} mb={1}>
        Page Not Found
      </Text>
      <Text color="gray.500" mb={2}>
        The page you are looking for does not exist.
      </Text>
      <Button
        backgroundColor="#5271ff"
        color="white"
        onClick={() => navigate("/")}
        _hover={{ backgroundColor: "#405bb5" }}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
