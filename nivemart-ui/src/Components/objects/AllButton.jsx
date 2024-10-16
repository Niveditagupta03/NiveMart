// import React, { useState } from "react";
// import {
//   Flex,
//   Button,
//   Input,
//   InputGroup,
//   InputRightElement,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuList,
// } from "@chakra-ui/react";
// import { Search2Icon, ChevronDownIcon } from "@chakra-ui/icons";
// import { keyframes } from "@emotion/react";

// const shake = keyframes`
//   0% { transform: translateX(0); }
//   25% { transform: translateX(-1px); }
//   50% { transform: translateX(1px); }
//   75% { transform: translateX(-1px); }
//   100% { transform: translateX(0); }
// `;

// // Button styles
// const buttonStyle = {
//   borderRadius: "25px",
//   fontWeight: "300",
//   padding: "10px 20px",
//   minWidth: "150px",
//   background: "linear-gradient(30deg, #16423C, #16423C)",
//   color: "white",
//   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
//   transition: "transform 0.2s, box-shadow 0.2s, background 0.2s, filter 0.2s",
//   _hover: {
//     background: "linear-gradient(30deg, #6A9C89, #6A9C89)",
//     transform: "translateY(-3px)",
//     boxShadow: "0 3px 4px rgba(0, 0, 0, 0.3)",
//     filter: "brightness(1.2)",
//   },
//   _active: {
//     transform: "translateY(0)",
//     boxShadow: "0 2px 3px rgba(0, 0, 0, 0.2)",
//     filter: "brightness(1)",
//   },
//   fontSize: "16px",
// };

// // Custom button component
// const CustomButton = React.memo(({ children, ...props }) => (
//   <Button {...buttonStyle} {...props}>
//     {children}
//   </Button>
// ));

// // Custom menu component
// const CustomMenu = React.memo(({ label, items }) => {
//   const [isClicked, setIsClicked] = useState(false);

//   // Function to handle menu toggle
//   const handleMenuToggle = () => {
//     setIsClicked((prev) => !prev);
//   };

//   return (
//     <Menu isOpen={isClicked} onClose={() => setIsClicked(false)}>
//       <MenuButton
//         as={CustomButton}
//         onClick={handleMenuToggle} // Toggle menu on button click
//         rightIcon={
//           <ChevronDownIcon
//             transform={isClicked ? "rotate(180deg)" : "rotate(0deg)"} // Rotate icon based on menu state
//             transition="transform 0.2s ease"
//             _hover={{ animation: `${shake} 0.5s ease` }}
//           />
//         }
//         w="auto"
//       >
//         {label}
//       </MenuButton>
//       <MenuList fontSize="14px" fontFamily="revert">
//         {items.map((item, index) => (
//           <MenuItem key={index} _hover={{ backgroundColor: "#F8F4E1" }}>
//             {item}
//           </MenuItem>
//         ))}
//       </MenuList>
//     </Menu>
//   );
// });

// const AllButton = () => {
//   return (
//     <Flex
//       justifyContent="space-between"
//       alignItems="center"
//       width="100%"
//       gap="20px"
//     >
//       <CustomMenu
//         label="Categories"
//         items={["Party", "Casual", "Formal", "Wedding", "Trip", "Ethnic"]}
//       />
//       <CustomMenu
//         label="New Product"
//         items={[
//           "Clothing",
//           "Footwear",
//           "Accessories",
//           "Cosmetics",
//           "Jewellery",
//           "Bags",
//           "Watches",
//           "Sunglasses",
//           "Sportswear",
//           "Beauty Products",
//           "Outdoor Gear",
//         ]}
//       />
//       <InputGroup>
//         <Input borderRadius="20px" placeholder="Search Item" />
//         <InputRightElement>
//           <Search2Icon fontStyle="italic" color="#6A9C89" width="50px" />
//         </InputRightElement>
//       </InputGroup>

//       <CustomButton>Men</CustomButton>
//       <CustomButton>Women</CustomButton>
//       <CustomButton>Children</CustomButton>
//       <CustomButton>Brand</CustomButton>
//     </Flex>
//   );
// };

// export default AllButton;

import React, { useState } from "react";
import {
  Flex,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useOutsideClick,
} from "@chakra-ui/react";
import { Search2Icon, ChevronDownIcon } from "@chakra-ui/icons";
import { keyframes } from "@emotion/react";

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-1px); }
  50% { transform: translateX(1px); }
  75% { transform: translateX(-1px); }
  100% { transform: translateX(0); }
`;

// Button styles
const buttonStyle = {
  borderRadius: "25px",
  fontWeight: "300",
  padding: "10px 20px",
  minWidth: "150px",
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
  fontSize: "16px",
};

// Custom button component
const CustomButton = React.memo(({ children, ...props }) => (
  <Button {...buttonStyle} {...props}>
    {children}
  </Button>
));

// Custom menu component
const CustomMenu = React.memo(({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = React.useRef();

  // Function to handle menu toggle
  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Close the menu if clicked outside
  useOutsideClick({
    ref: menuRef,
    handler: () => {
      if (isOpen) setIsOpen(false);
    },
  });

  return (
    <Menu isOpen={isOpen} onClose={() => setIsOpen(false)} ref={menuRef}>
      <MenuButton
        as={CustomButton}
        onClick={handleMenuToggle}
        w="auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between" // Space between label and icon
        padding="10px" // Optional: Add padding for better click area
      >
        <span style={{ marginRight: "8px" }}>{label}</span>
        <ChevronDownIcon
          transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"} // Rotate based on state
          transition="transform 0.2s ease"
          _hover={{ animation: `${shake} 0.5s ease` }}
        />
      </MenuButton>

      <MenuList
        fontSize="14px"
        fontFamily="revert"
        mt={2} // Margin to separate from the button
      >
        {items.map((item, index) => (
          <MenuItem key={index} _hover={{ backgroundColor: "#F8F4E1" }}>
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
});

const AllButton = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      gap="20px"
    >
      <CustomMenu
        label="Categories"
        items={["Party", "Casual", "Formal", "Wedding", "Trip", "Ethnic"]}
      />
      <CustomMenu
        label="New Product"
        items={[
          "Clothing",
          "Footwear",
          "Accessories",
          "Cosmetics",
          "Jewellery",
          "Bags",
          "Watches",
          "Sunglasses",
          "Sportswear",
          "Beauty Products",
          "Outdoor Gear",
        ]}
      />
      <InputGroup>
        <Input
          borderRadius="25px"
          placeholder="Explore Your Desire"
          background="linear-gradient(135deg, #E0F7FA, #C4DAD2)" // Light gradient for a soft touch
          padding="20px"
          fontSize="18px"
          fontWeight="100"
          _placeholder={{ color: "#004F4F", opacity: 0.8 }} // Styled placeholder
          border="none" // Removes default border
          boxShadow="0 5px 15px rgba(0, 0, 0, 0.1)" // Soft shadow for depth
          transition="box-shadow 0.3s ease, transform 0.3s ease"
          _hover={{
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)", // Stronger shadow on hover
            transform: "scale(1.02)", // Slight scale on hover
          }}
          _focus={{
            outline: "none",
            boxShadow: "0 0 10px #6A9C89", // Highlighted shadow on focus
            transform: "scale(1.03)", // Slightly more scaling on focus
          }}
        />
        <InputRightElement pointerEvents="none">
          <Search2Icon fontStyle="italic" color="#6A9C89" width="24px" />
        </InputRightElement>
      </InputGroup>

      <CustomButton>Men</CustomButton>
      <CustomButton>Women</CustomButton>
      <CustomButton>Children</CustomButton>
      <CustomButton>Brand</CustomButton>
    </Flex>
  );
};

export default AllButton;
