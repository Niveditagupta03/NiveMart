import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Image,
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import {
  Search2Icon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
import { keyframes } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-1px); }
  50% { transform: translateX(1px); }
  75% { transform: translateX(-1px); }
  100% { transform: translateX(0); }
`;

export default function LandingPage() {
  const images = [
    "../model.jpg",
    "../model1.jpg",
    "../model3.jpg",
    "../model4.jpg",
  ];

  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    navigate("/new-page");
  };

  const handleRightIconClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleLeftIconClick = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Flex margin="10px" gap="10px" marginBottom="20px" flexDir="column">
      <Flex flexDir="column">
        <Flex marginTop="10px">
          <Image
            marginLeft="700px"
            boxSize="70px"
            objectFit="cover"
            src="../images.png"
            alt="NiveMart Logo"
          />
        </Flex>
      </Flex>
      <Flex justifyContent="space-between">
        <Flex gap="15px">
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={
                <ChevronDownIcon
                  transform={isClicked ? "translateY(14px)" : "translateY(0)"}
                  transition="transform 0.2s ease"
                  _hover={{
                    animation: `${shake} 0.5s ease`,
                  }}
                />
              }
              borderRadius="20px"
              backgroundColor="gray.60"
              color="gray.400"
              fontStyle="oblique"
              fontWeight="1px"
              w="40%"
              gap="25px"
            >
              Categories
            </MenuButton>
            <MenuList fontFamily="revert" fontSize="14px">
              <MenuItem _hover={{ backgroundColor: "#FDC669" }}>Party</MenuItem>
              <MenuItem _hover={{ backgroundColor: "#FDC669" }}>
                Casual
              </MenuItem>
              <MenuItem _hover={{ backgroundColor: "#FDC669" }}>
                Formal
              </MenuItem>
              <MenuItem _hover={{ backgroundColor: "#FDC669" }}>
                Wedding
              </MenuItem>
              <MenuItem _hover={{ backgroundColor: "#FDC669" }}>Trip</MenuItem>
              <MenuItem _hover={{ backgroundColor: "#FDC669" }}>Ethic</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              fontWeight="1px"
              rightIcon={
                <ChevronDownIcon
                  transform={isClicked ? "translateY(14px)" : "translateY(0)"}
                  transition="transform 0.2s ease"
                  _hover={{
                    animation: `${shake} 0.5s ease`,
                  }}
                />
              }
              borderRadius="20px"
              backgroundColor="gray.60"
              color="gray.400"
              fontStyle="oblique"
              w="46%"
            >
              New Product
            </MenuButton>
            <MenuList fontSize="14px" fontFamily="revert">
              <MenuItem _hover={{ backgroundColor: "#FDC669" }}>
                Clothing
              </MenuItem>
              <MenuItem _hover={{ backgroundColor: "#FDC669" }}>
                Footwear
              </MenuItem>
              <MenuItem _hover={{ backgroundColor: "#FDC669" }}>
                Accessories
              </MenuItem>
              <MenuItem _hover={{ backgroundColor: "#FDC669" }}>
                Cosmetics
              </MenuItem>
              <MenuItem _hover={{ backgroundColor: "#FDC669" }}>
                Jewellery
              </MenuItem>
              <MenuItem _hover={{ backgroundColor: "#FDC669" }}>Bags</MenuItem>
              <MenuItem _hover={{ backgroundColor: "#FDC669" }}>
                Watches
              </MenuItem>
              <MenuItem _hover={{ backgroundColor: "#FDC669" }}>
                Sunglasses
              </MenuItem>
              <MenuItem _hover={{ backgroundColor: "#FDC669" }}>
                Sportswear
              </MenuItem>
              <MenuItem _hover={{ backgroundColor: "#FDC669" }}>
                Beauty Products
              </MenuItem>
              <MenuItem _hover={{ backgroundColor: "#FDC669" }}>
                Outdoor Gear
              </MenuItem>
            </MenuList>
          </Menu>
          <InputGroup>
            <Input
              borderRadius="20px"
              placeholder="Search Item"
              fontWeight="1px"
            />
            <InputRightElement>
              <Search2Icon fontStyle="oblique" />
            </InputRightElement>
          </InputGroup>
        </Flex>
        <Flex gap="15px">
          <Button
            fontWeight="200px"
            borderRadius="20px"
            backgroundColor="#a9d9f5"
            color="white"
            _hover={{ backgroundColor: "orange" }}
          >
            Men
          </Button>
          <Button
            fontWeight="200px"
            borderRadius="20px"
            backgroundColor="#a9d9f5"
            color="white"
            _hover={{ backgroundColor: "orange" }}
          >
            Women
          </Button>
          <Button
            borderRadius="20px"
            fontWeight="200px"
            backgroundColor="#a9d9f5"
            color="white"
            _hover={{ backgroundColor: "orange" }}
          >
            Children
          </Button>
          <Button
            fontWeight="200px"
            borderRadius="20px"
            backgroundColor="#a9d9f5"
            color="white"
            _hover={{ backgroundColor: "orange" }}
          >
            Brand
          </Button>
        </Flex>
      </Flex>

      <Box position="relative" w="full">
        <Text
          position="absolute"
          top="235px"
          left="260px"
          color="white"
          p="5px"
          borderRadius="5px"
          fontSize="42px"
          fontStyle="italic"
        >
          We are Digital meets Fashions
        </Text>
        <Text
          position="absolute"
          top="400px"
          left="25px"
          color="white"
          p="5px"
          borderRadius="5px"
          fontSize="20px"
          fontStyle="normal"
        >
          Transforming into stylish & functional pieces
        </Text>
        <Image
          borderRadius="12px"
          boxSize="full"
          objectFit="cover"
          src={images[currentImageIndex]}
          alt="NiveMart Logo"
        />
        <Flex
          position="absolute"
          bottom="30px"
          right="550px"
          justifyContent="space-between"
        >
          <Button
            borderRadius="20px"
            backgroundColor="#FDC161"
            w="230px"
            h="55px"
            fontSize="17px"
            color="white"
            _hover={{ backgroundColor: "orange" }}
            onClick={handleClick}
          >
            Start Shopping
            <FiArrowUpRight
              size="27px"
              color="white"
              style={{ marginLeft: "10px" }}
            />
          </Button>
        </Flex>
        <ChevronRightIcon
          position="absolute"
          top="10px"
          right="10px"
          borderRadius="20px"
          backgroundColor="#FDC161"
          boxSize="30px"
          color="white"
          _hover={{ backgroundColor: "orange" }}
          cursor="pointer"
          onClick={handleRightIconClick}
        />
        <ChevronLeftIcon
          position="absolute"
          top="10px"
          right="60px"
          color="white"
          borderRadius="20px"
          backgroundColor="#FDC161"
          boxSize="30px"
          _hover={{ backgroundColor: "orange" }}
          cursor="pointer"
          onClick={handleLeftIconClick}
        />
      </Box>
    </Flex>
  );
}
