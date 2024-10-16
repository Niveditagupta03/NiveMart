// import { Flex, Button, Text } from "@chakra-ui/react";

// const SideBar = () => {
//   return (
//     <Flex flexDirection="row" gap="20px">
//       <Flex
//         borderRadius="30px"
//         background="linear-gradient(135deg, #A8E0D6, #75CBB6)" // Softer gradient for a fresh look
//         padding="30px"
//         alignItems="center"
//         height="560px"
//         width="240px"
//         justifyContent="center"
//         boxShadow="0 10px 25px rgba(0, 0, 0, 0.15)" // Enhanced shadow for depth
//         transition="transform 0.4s ease, box-shadow 0.4s ease" // Smooth animation
//         _hover={{
//           // transform: "translateY(-10px)", // Lift on hover
//           boxShadow: "0 20px 35px rgba(0, 0, 0, 0.25)", // Stronger shadow on hover
//         }}
//       >
//         <Flex flexDir="column" margin="15px" gap="20px" textAlign="center">
//           <Text
//             color="#123E3B" // Darker tone for better contrast
//             fontSize="26px"
//             fontWeight="bold"
//             textTransform="uppercase"
//             letterSpacing="2px" // Extra spacing for elegance
//             textShadow="2px 2px 4px rgba(0, 0, 0, 0.1)" // Soft text shadow
//           >
//             Winter Weekends
//           </Text>
//           <Button
//             borderRadius="25px"
//             background="linear-gradient(45deg, #008080, #00C9A7)" // Gradient button for a rich effect
//             color="white"
//             fontWeight="700" // Stronger font weight for emphasis
//             fontSize="16px"
//             paddingX="20px"
//             paddingY="12px"
//             boxShadow="0 6px 15px rgba(0, 0, 0, 0.25)" // Strong button shadow
//             _hover={{
//               background: "linear-gradient(45deg, #00B3B3, #00E0C6)", // Brighter hover gradient
//               boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)", // Enhanced shadow on hover
//               transform: "scale(1.05)", // Slight scale up on hover
//             }}
//             transition="transform 0.3s ease, box-shadow 0.3s ease"
//           >
//             Avail Offer
//           </Button>
//         </Flex>
//       </Flex>

//       <Flex
//         borderRadius="30px"
//         background="linear-gradient(135deg, #A8E0D6, #75CBB8)" // Softer gradient for a fresh look
//         padding="30px"
//         alignItems="center"
//         height="560px"
//         width="240px"
//         justifyContent="center"
//         boxShadow="0 10px 25px rgba(0, 0, 0, 0.15)" // Enhanced shadow for depth
//         transition="transform 0.4s ease, box-shadow 0.4s ease" // Smooth animation
//         _hover={{
//           // transform: "translateY(-10px)", // Lift on hover
//           boxShadow: "0 20px 35px rgba(0, 0, 0, 0.25)", // Stronger shadow on hover
//         }}
//       >
//         <Flex flexDir="column" margin="15px" gap="20px" textAlign="center">
//           <Text
//             color="#123E3B" // Darker tone for better contrast
//             fontSize="26px"
//             fontWeight="bold"
//             textTransform="uppercase"
//             letterSpacing="2px" // Extra spacing for elegance
//             textShadow="2px 2px 4px rgba(0, 0, 0, 0.1)" // Soft text shadow
//           >
//             Winter Weekends
//           </Text>
//           <Button
//             borderRadius="25px"
//             background="linear-gradient(45deg, #008080, #00C9A7)" // Gradient button for a rich effect
//             color="white"
//             fontWeight="700" // Stronger font weight for emphasis
//             fontSize="16px"
//             paddingX="20px"
//             paddingY="12px"
//             boxShadow="0 6px 15px rgba(0, 0, 0, 0.25)" // Strong button shadow
//             _hover={{
//               background: "linear-gradient(45deg, #00B3B3, #00E0C6)", // Brighter hover gradient
//               boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)", // Enhanced shadow on hover
//               transform: "scale(1.05)", // Slight scale up on hover
//             }}
//             transition="transform 0.3s ease, box-shadow 0.3s ease"
//           >
//             Avail Offer
//           </Button>
//         </Flex>
//       </Flex>
//     </Flex>
//   );
// };

// export default SideBar;

import { Flex, Button, Text } from "@chakra-ui/react";

const SideBar = () => {
  return (
    <Flex flexDirection="row" gap="20px">
      {/* First Card */}
      <Flex
        borderRadius="20px"
        background="linear-gradient(135deg, #B8CCC0, #86B29E)" // Softer muted gradient
        padding="30px"
        alignItems="center"
        height="560px"
        width="240px"
        justifyContent="center"
        boxShadow="0 10px 20px rgba(0, 0, 0, 0.1)" // Softer shadow
        transition="transform 0.3s ease, box-shadow 0.3s ease"
        _hover={{
          transform: "translateY(-5px)", // Slight lift
          boxShadow: "0 20px 35px rgba(0, 0, 0, 0.15)", // Subtle shadow on hover
        }}
      >
        <Flex flexDir="column" margin="15px" gap="15px" textAlign="center">
          <Text
            color="#2C514E" // Muted dark teal for text
            fontSize="24px"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="2px" // Balanced spacing for sophistication
            textShadow="1px 1px 4px rgba(0, 0, 0, 0.1)" // Subtle shadow
          >
            Winter Weekends
          </Text>
          <Button
            borderRadius="20px"
            background="linear-gradient(45deg, #006D66, #57B497)" // Muted dark teal to soft green
            color="white"
            fontWeight="600"
            fontSize="16px"
            paddingX="18px"
            paddingY="10px"
            boxShadow="0 5px 10px rgba(0, 0, 0, 0.15)" // Softer button shadow
            _hover={{
              background: "linear-gradient(45deg, #007B75, #6CC6A9)", // Slightly brighter on hover
              boxShadow: "0 7px 15px rgba(0, 0, 0, 0.2)", // Gentle hover effect
              transform: "scale(1.03)", // Slight scale on hover
            }}
            transition="all 0.2s ease"
          >
            Avail Offer
          </Button>
        </Flex>
      </Flex>

      {/* Second Card */}
      <Flex
        borderRadius="20px"
        background="linear-gradient(135deg, #CFE1D4, #A6C7B2)" // Softer mint and green gradient
        padding="30px"
        alignItems="center"
        height="560px"
        width="240px"
        justifyContent="center"
        boxShadow="0 10px 20px rgba(0, 0, 0, 0.1)"
        transition="transform 0.3s ease, box-shadow 0.3s ease"
        _hover={{
          transform: "translateY(-5px)", // Same slight lift on hover
          boxShadow: "0 20px 35px rgba(0, 0, 0, 0.15)", // Consistent hover shadow
        }}
      >
        <Flex flexDir="column" margin="15px" gap="15px" textAlign="center">
          <Text
            color="#2C514E" // Same dark teal for uniformity
            fontSize="24px"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="2px"
            textShadow="1px 1px 4px rgba(0, 0, 0, 0.1)"
          >
            Winter Weekends
          </Text>
          <Button
            borderRadius="20px"
            background="linear-gradient(45deg, #006D66, #57B497)"
            color="white"
            fontWeight="600"
            fontSize="16px"
            paddingX="18px"
            paddingY="10px"
            boxShadow="0 5px 10px rgba(0, 0, 0, 0.15)"
            _hover={{
              background: "linear-gradient(45deg, #007B75, #6CC6A9)",
              boxShadow: "0 7px 15px rgba(0, 0, 0, 0.2)",
              transform: "scale(1.03)",
            }}
            transition="all 0.2s ease"
          >
            Avail Offer
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideBar;
