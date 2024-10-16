import { Button, Flex, Text, Image } from "@chakra-ui/react";
import { MdArrowOutward } from "react-icons/md";
const Discount = () => {
  return (
    <Flex flexDir="column" gap="20px">
      <Flex
        borderRadius="25px"
        background="linear-gradient(135deg, #C4DAD2 30%, #E0F7FA 90%)"
        padding="20px"
        alignItems="center"
        height="150px"
        width="370px"
        justifyContent="center"
        boxShadow="0 4px 20px rgba(0, 0, 0, 0.1)"
        transition="transform 0.3s ease"
      >
        <Flex flexDir="column" margin="10px" gap="10px" textAlign="center">
          <Text fontSize="24px" fontWeight="bold" color="#16423C">
            GET UP TO 20% OFF
          </Text>
          <Button
            borderRadius="25px"
            background="rgba(0, 128, 128, 0.3)" // Slightly more opaque background
            color="teal"
            fontWeight="600" // Bold text
            _hover={{ background: "rgba(0, 128, 128, 0.5)", color: "white" }} // Change text color on hover
            padding="10px 20px" // More padding for a larger button
          >
            Get Discount
          </Button>
        </Flex>
      </Flex>
      <Flex
        borderRadius="25px"
        background="linear-gradient(135deg, #6A9C89 30%, #B2D3C2 90%)"
        padding="30px"
        alignItems="center"
        height="140px"
        width="370px"
        justifyContent="space-between"
        boxShadow="0 4px 20px rgba(0, 0, 0, 0.15)"
        position="relative"
        overflow="hidden"
        transition="transform 0.3s ease"
      >
        <Flex flexDir="column" textAlign="left">
          <Text color="white" mr="10px" fontWeight="900" fontSize="24px">
            WINTER WEEKENDS
          </Text>
          <Text color="white" mr="10px" fontSize="18px">
            Keep it casual
          </Text>
        </Flex>
        <Flex
          position="absolute"
          right="10px"
          top="10px"
          height="40px"
          width="40px"
          borderRadius="50%"
          backgroundColor="rgba(255, 255, 255, 0.3)"
          boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"
          alignItems="center"
          justifyContent="center"
          _hover={{ transform: "scale(1.03)" }}
        >
          <MdArrowOutward size="24px" color="#6A9C89" />
        </Flex>
      </Flex>
      <Flex
        borderRadius="25px"
        background="linear-gradient(135deg, #C4DAD2, #A3C6C0)"
        padding="20px"
        alignItems="center"
        height="230px"
        width="370px"
        justifyContent="center"
        // boxShadow="0 10px 20px rgba(0, 0, 0, 0.2)"
        transition="transform 0.3s ease"
        position="relative"
      >
        <Image
          src="/discountpic1.png"
          alt="Winter Offer"
          boxSize="200px"
          objectFit="cover"
        />

        <Flex flexDir="column">
          <Text
            color="#16423C"
            fontSize="24px"
            fontWeight="bold"
            textAlign="center"
            textTransform="uppercase"
            marginTop="15px"
          >
            WINTER WEEKENDS
          </Text>

          <Button
            borderRadius="25px"
            background="rgba(0, 128, 128, 0.8)"
            color="white"
            fontWeight="600"
            _hover={{
              background: "rgba(0, 128, 128, 1)",
              transform: "translateY(2px)",
            }}
            boxShadow="0 4px 10px rgba(0, 0, 0, 0.3)"
            paddingX="20px"
            paddingY="10px"
            marginTop="10px"
            transition="transform 0.2s"
          >
            Avail Offer
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Discount;
