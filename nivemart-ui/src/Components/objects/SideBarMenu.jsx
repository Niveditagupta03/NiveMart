// // import React, { useRef } from "react";
// // import {
// //   Flex,
// //   Button,
// //   Drawer,
// //   DrawerBody,
// //   DrawerHeader,
// //   DrawerOverlay,
// //   DrawerContent,
// //   DrawerCloseButton,
// //   useDisclosure,
// //   List,
// //   ListItem,
// //   Tooltip,
// // } from "@chakra-ui/react";
// // import { CgMenuMotion } from "react-icons/cg";
// // import {
// //   FaUser,
// //   FaCog,
// //   FaTruck,
// //   FaCreditCard,
// //   FaQuestionCircle,
// //   FaPhone,
// //   FaInfoCircle,
// // } from "react-icons/fa";

// // const SidebarMenu = () => {
// //   const { isOpen, onOpen, onClose } = useDisclosure(); // Hook to manage drawer state
// //   const btnRef = useRef(); // Ref for the button that opens the drawer

// //   return (
// //     <>
// //       <Flex
// //         flexDir="row"
// //         height="80px"
// //         justifyContent="space-around"
// //         alignItems="center"
// //         padding="10px"
// //       >
// //         {/* Button to open the sidebar drawer */}
// //         <Button
// //           ref={btnRef}
// //           onClick={onOpen}
// //           _hover={{ background: "rgba(0, 128, 128, 0.1)" }}
// //           borderRadius="35px"
// //           background="none"
// //         >
// //           <CgMenuMotion size={40} color="#16423C" />
// //         </Button>
// //       </Flex>

// //       <Drawer
// //         isOpen={isOpen}
// //         placement="left"
// //         onClose={onClose}
// //         finalFocusRef={btnRef}
// //         backgroundColor="#6A9C89"
// //       >
// //         <DrawerOverlay />
// //         <DrawerContent maxW="90px" backgroundColor="#6A9C89">
// //           <DrawerCloseButton mb={3} />
// //           <DrawerHeader fontSize="14px" mb={0} mt={5}>
// //             Menu
// //           </DrawerHeader>
// //           <DrawerBody backgroundColor="#C4DAD2">
// //             <List spacing={4}>
// //               <ListItem>
// //                 <Tooltip
// //                   label="Profile"
// //                   placement="right"
// //                   backgroundColor="#16423C"
// //                 >
// //                   <Button
// //                     variant="ghost"
// //                     leftIcon={<FaUser />}
// //                     borderRadius="35px"
// //                     _hover={{ background: "#6A9C89" }}
// //                   />
// //                 </Tooltip>
// //               </ListItem>
// //               <ListItem>
// //                 <Tooltip
// //                   label="Settings"
// //                   placement="right"
// //                   backgroundColor="#16423C"
// //                 >
// //                   <Button
// //                     variant="ghost"
// //                     leftIcon={<FaCog />}
// //                     borderRadius="35px"
// //                     _hover={{ background: "#6A9C89" }}
// //                   />
// //                 </Tooltip>
// //               </ListItem>
// //               <ListItem>
// //                 <Tooltip
// //                   label="Track"
// //                   placement="right"
// //                   backgroundColor="#16423C"
// //                 >
// //                   <Button
// //                     variant="ghost"
// //                     leftIcon={<FaTruck />}
// //                     _hover={{ background: "#6A9C89" }}
// //                     borderRadius="35px"
// //                   />
// //                 </Tooltip>
// //               </ListItem>
// //               <ListItem>
// //                 <Tooltip
// //                   label="Payment"
// //                   placement="right"
// //                   backgroundColor="#16423C"
// //                 >
// //                   <Button
// //                     variant="ghost"
// //                     leftIcon={<FaCreditCard />}
// //                     _hover={{ background: "#6A9C89" }}
// //                     borderRadius="35px"
// //                   />
// //                 </Tooltip>
// //               </ListItem>
// //               <ListItem>
// //                 <Tooltip
// //                   label="Help"
// //                   placement="right"
// //                   backgroundColor="#16423C"
// //                 >
// //                   <Button
// //                     variant="ghost"
// //                     leftIcon={<FaQuestionCircle />}
// //                     _hover={{ background: "#6A9C89" }}
// //                     borderRadius="35px"
// //                   />
// //                 </Tooltip>
// //               </ListItem>
// //               <ListItem>
// //                 <Tooltip
// //                   label="Contact Us"
// //                   placement="right"
// //                   backgroundColor="#16423C"
// //                 >
// //                   <Button
// //                     variant="ghost"
// //                     leftIcon={<FaPhone />}
// //                     _hover={{ background: "#6A9C89" }}
// //                     borderRadius="35px"
// //                   />
// //                 </Tooltip>
// //               </ListItem>
// //               <ListItem>
// //                 <Tooltip
// //                   label="About"
// //                   placement="right"
// //                   backgroundColor="#16423C"
// //                 >
// //                   <Button
// //                     variant="ghost"
// //                     leftIcon={<FaInfoCircle />}
// //                     _hover={{ background: "#6A9C89" }}
// //                     borderRadius="35px"
// //                   />
// //                 </Tooltip>
// //               </ListItem>
// //             </List>
// //           </DrawerBody>
// //         </DrawerContent>
// //       </Drawer>
// //     </>
// //   );
// // };

// // export default SidebarMenu;
// import React, { useRef, useState, useEffect } from "react";
// import {
//   Flex,
//   Button,
//   Drawer,
//   DrawerBody,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useDisclosure,
//   List,
//   ListItem,
//   Tooltip,
//   Avatar,
//   Text,
// } from "@chakra-ui/react";
// import { CgMenuMotion } from "react-icons/cg";
// import {
//   FaUser,
//   FaCog,
//   FaTruck,
//   FaCreditCard,
//   FaQuestionCircle,
//   FaPhone,
//   FaInfoCircle,
// } from "react-icons/fa";

// const SidebarMenu = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const btnRef = useRef();
//   const [userData, setUserData] = useState(null);

//   // Effect to check user data in local storage
//   useEffect(() => {
//     function checkUserData() {
//       const item = localStorage.getItem("userJWT");
//       if (item) {
//         // Decode JWT and set user data
//         setUserData(JSON.parse(atob(item.split(".")[1])));
//       } else {
//         setUserData(null);
//       }
//     }

//     checkUserData();
//     window.addEventListener("storage", checkUserData); // Listen for changes in storage

//     return () => {
//       window.removeEventListener("storage", checkUserData);
//     };
//   }, []);

//   // Function to handle login button click
//   function onLoginButtonClick() {
//     window.location.href =
//       "https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&response_type=code&state=state_parameter_passthrough_value&scope=https%3A//www.googleapis.com/auth/userinfo.email+https%3A//www.googleapis.com/auth/userinfo.profile&redirect_uri=http%3A//localhost:5173/oauth/google&prompt=consent&include_granted_scopes=true";
//   }

//   // Function to handle logout button click
//   function onLogoutButtonClick() {
//     window.localStorage.removeItem("userJWT");
//     setUserData(null); // Update state to reflect logout
//     window.dispatchEvent(new Event("storage")); // Trigger storage event
//   }

//   return (
//     <>
//       <Flex flexDir="row" height="80px" alignItems="center" padding="10px">
//         <Button
//           ref={btnRef}
//           onClick={onOpen}
//           _hover={{ background: "rgba(0, 128, 128, 0.1)" }}
//           borderRadius="35px"
//           background="none"
//         >
//           <CgMenuMotion size={40} color="#16423C" />
//         </Button>
//       </Flex>

//       <Drawer
//         isOpen={isOpen}
//         placement="left"
//         onClose={onClose}
//         finalFocusRef={btnRef}
//         backgroundColor="#6A9C89"
//       >
//         <DrawerOverlay />
//         <DrawerContent maxW="90px" backgroundColor="#6A9C89">
//           <DrawerCloseButton mb={3} />
//           <DrawerHeader fontSize="14px" mb={0} mt={5}>
//             Menu
//           </DrawerHeader>

//           <DrawerBody backgroundColor="#C4DAD2">
//             <List spacing={4}>
//               <ListItem>
//                 <Tooltip
//                   label="Profile"
//                   placement="right"
//                   backgroundColor="#16423C"
//                 >
//                   <Button
//                     variant="ghost"
//                     leftIcon={<FaUser />}
//                     borderRadius="35px"
//                     _hover={{ background: "#6A9C89" }}
//                   />
//                 </Tooltip>
//               </ListItem>
//               <ListItem>
//                 <Tooltip
//                   label="Settings"
//                   placement="right"
//                   backgroundColor="#16423C"
//                 >
//                   <Button
//                     variant="ghost"
//                     leftIcon={<FaCog />}
//                     borderRadius="35px"
//                     _hover={{ background: "#6A9C89" }}
//                   />
//                 </Tooltip>
//               </ListItem>
//               <ListItem>
//                 <Tooltip
//                   label="Track"
//                   placement="right"
//                   backgroundColor="#16423C"
//                 >
//                   <Button
//                     variant="ghost"
//                     leftIcon={<FaTruck />}
//                     _hover={{ background: "#6A9C89" }}
//                     borderRadius="35px"
//                   />
//                 </Tooltip>
//               </ListItem>
//               <ListItem>
//                 <Tooltip
//                   label="Payment"
//                   placement="right"
//                   backgroundColor="#16423C"
//                 >
//                   <Button
//                     variant="ghost"
//                     leftIcon={<FaCreditCard />}
//                     _hover={{ background: "#6A9C89" }}
//                     borderRadius="35px"
//                   />
//                 </Tooltip>
//               </ListItem>
//               <ListItem>
//                 <Tooltip
//                   label="Help"
//                   placement="right"
//                   backgroundColor="#16423C"
//                 >
//                   <Button
//                     variant="ghost"
//                     leftIcon={<FaQuestionCircle />}
//                     _hover={{ background: "#6A9C89" }}
//                     borderRadius="35px"
//                   />
//                 </Tooltip>
//               </ListItem>
//               <ListItem>
//                 <Tooltip
//                   label="Contact Us"
//                   placement="right"
//                   backgroundColor="#16423C"
//                 >
//                   <Button
//                     variant="ghost"
//                     leftIcon={<FaPhone />}
//                     _hover={{ background: "#6A9C89" }}
//                     borderRadius="35px"
//                   />
//                 </Tooltip>
//               </ListItem>
//               <ListItem>
//                 <Tooltip
//                   label="About"
//                   placement="right"
//                   backgroundColor="#16423C"
//                 >
//                   <Button
//                     variant="ghost"
//                     leftIcon={<FaInfoCircle />}
//                     _hover={{ background: "#6A9C89" }}
//                     borderRadius="35px"
//                   />
//                 </Tooltip>
//               </ListItem>
//             </List>
//           </DrawerBody>
//           <Flex
//             alignItems="center"
//             boxShadow="sm"
//             backgroundColor="#6A9C89"
//             padding="10px"
//             mb={4}
//           >
//             {userData ? (
//               <Flex flexDir="column">
//                 <Text color="white" marginLeft="8px">
//                   {userData.name}
//                 </Text>
//                 <Avatar margin="2px" src={userData.profile_picture_url} />
//               </Flex>
//             ) : (
//               <Button
//                 margin="0.5rem"
//                 onClick={onLogoutButtonClick}
//                 borderRadius="35px"
//               >
//                 <IoLogOut size={30} color="#16423C" />
//               </Button>
//             )}
//           </Flex>
//         </DrawerContent>
//       </Drawer>
//     </>
//   );
// };

// export default SidebarMenu;

import React, { useRef, useState, useEffect } from "react";
import {
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  List,
  ListItem,
  Tooltip,
  Avatar,
  Text,
} from "@chakra-ui/react";
import { CgMenuMotion } from "react-icons/cg";
import {
  FaUser,
  FaCog,
  FaTruck,
  FaCreditCard,
  FaQuestionCircle,
  FaPhone,
  FaInfoCircle,
} from "react-icons/fa";
import { IoLogOut, IoLogIn } from "react-icons/io5"; // Correct the missing import for IoLogIn

const SidebarMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const [userData, setUserData] = useState(null);

  // Effect to check user data in local storage
  useEffect(() => {
    function checkUserData() {
      const item = localStorage.getItem("userJWT");
      if (item) {
        try {
          // Decode JWT and set user data
          const decodedToken = JSON.parse(atob(item.split(".")[1]));
          setUserData(decodedToken);
        } catch (error) {
          console.error("Error decoding JWT", error);
          setUserData(null);
        }
      } else {
        setUserData(null);
      }
    }

    checkUserData();
    window.addEventListener("storage", checkUserData); // Listen for changes in storage

    return () => {
      window.removeEventListener("storage", checkUserData);
    };
  }, []);

  // Function to handle login button click
  function onLoginButtonClick() {
    window.location.href =
      "https://accounts.google.com/o/oauth2/v2/auth?client_id=140470690761-hhbmaehivdb66el1r95hrjmjldvoupfv.apps.googleusercontent.com&response_type=code&state=state_parameter_passthrough_value&scope=https%3A//www.googleapis.com/auth/userinfo.email+https%3A//www.googleapis.com/auth/userinfo.profile&redirect_uri=http%3A//localhost:5173/oauth/google&prompt=consent&include_granted_scopes=true";
  }

  // Function to handle logout button click
  function onLogoutButtonClick() {
    window.localStorage.removeItem("userJWT");
    setUserData(null);
    window.dispatchEvent(new Event("storage")); // Trigger storage event
  }

  return (
    <>
      <Flex flexDir="row" height="80px" alignItems="center" padding="10px">
        <Button
          ref={btnRef}
          onClick={onOpen}
          _hover={{ background: "rgba(0, 128, 128, 0.1)" }}
          borderRadius="35px"
          background="none"
        >
          <CgMenuMotion size={40} color="#16423C" />
        </Button>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="#6A9C89">
          {" "}
          {/* Background color applied here */}
          <DrawerCloseButton />
          <DrawerHeader fontSize="14px">Menu</DrawerHeader>
          <DrawerBody backgroundColor="#C4DAD2">
            <List spacing={4}>
              <ListItem>
                <Tooltip label="Profile" placement="right">
                  <Button
                    variant="ghost"
                    leftIcon={<FaUser />}
                    borderRadius="35px"
                    _hover={{ background: "#6A9C89" }}
                  />
                </Tooltip>
              </ListItem>
              <ListItem>
                <Tooltip label="Settings" placement="right">
                  <Button
                    variant="ghost"
                    leftIcon={<FaCog />}
                    borderRadius="35px"
                    _hover={{ background: "#6A9C89" }}
                  />
                </Tooltip>
              </ListItem>
              <ListItem>
                <Tooltip label="Track" placement="right">
                  <Button
                    variant="ghost"
                    leftIcon={<FaTruck />}
                    _hover={{ background: "#6A9C89" }}
                    borderRadius="35px"
                  />
                </Tooltip>
              </ListItem>
              <ListItem>
                <Tooltip label="Payment" placement="right">
                  <Button
                    variant="ghost"
                    leftIcon={<FaCreditCard />}
                    _hover={{ background: "#6A9C89" }}
                    borderRadius="35px"
                  />
                </Tooltip>
              </ListItem>
              <ListItem>
                <Tooltip label="Help" placement="right">
                  <Button
                    variant="ghost"
                    leftIcon={<FaQuestionCircle />}
                    _hover={{ background: "#6A9C89" }}
                    borderRadius="35px"
                  />
                </Tooltip>
              </ListItem>
              <ListItem>
                <Tooltip label="Contact Us" placement="right">
                  <Button
                    variant="ghost"
                    leftIcon={<FaPhone />}
                    _hover={{ background: "#6A9C89" }}
                    borderRadius="35px"
                  />
                </Tooltip>
              </ListItem>
              <ListItem>
                <Tooltip label="About" placement="right">
                  <Button
                    variant="ghost"
                    leftIcon={<FaInfoCircle />}
                    _hover={{ background: "#6A9C89" }}
                    borderRadius="35px"
                  />
                </Tooltip>
              </ListItem>
            </List>
          </DrawerBody>
          {/* User Profile Section */}
          <Flex
            alignItems="center"
            boxShadow="sm"
            backgroundColor="#6A9C89"
            padding="10px"
            mb={4}
            flexDirection="column"
          >
            {userData ? (
              <>
                <Text color="white" marginLeft="8px">
                  {userData.name}
                </Text>
                <Avatar margin="2px" src={userData.profile_picture_url} />
                <Button
                  margin="0.5rem"
                  onClick={onLogoutButtonClick}
                  borderRadius="35px"
                >
                  <IoLogOut size={30} color="#16423C" />
                </Button>
              </>
            ) : (
              <Button
                margin="0.3rem"
                onClick={onLoginButtonClick}
                borderRadius="32px"
                padding="0.5rem"
              >
                <IoLogIn size={30} color="#16423C" />
              </Button>
            )}
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SidebarMenu;
