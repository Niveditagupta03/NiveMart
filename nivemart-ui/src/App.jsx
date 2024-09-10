import { useState, useEffect } from "react";
import "./App.css";
import {
  ChakraProvider,
  theme,
  Flex,
  Spacer,
  Button,
  Text,
  Avatar,
} from "@chakra-ui/react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import Google from "./Components/Oauth/google";
import LandingPage from "./Views/LandingPage";
import NewPage from "./Views/NewPage";
import ErrorPage from "./Views/ErrorPage";

function onLoginButtonClick() {
  window.location.href =
    "https://accounts.google.com/o/oauth2/v2/auth?client_id=140470690761-hhbmaehivdb66el1r95hrjmjldvoupfv.apps.googleusercontent.com&response_type=code&state=state_parameter_passthrough_value&scope=https%3A//www.googleapis.com/auth/userinfo.email+https%3A//www.googleapis.com/auth/userinfo.profile&redirect_uri=http%3A//localhost:5173/oauth/google&prompt=consent&include_granted_scopes=true";
}

function onLogoutButtonClick() {
  window.localStorage.removeItem("userJWT");
  window.dispatchEvent(new Event("storage"));
}

function App() {
  const [userData, setUserData] = useState();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <ErrorPage />, // Handle errors
    },
    {
      path: "/new-page",
      element: <NewPage />,
      errorElement: <ErrorPage />, // Handle errors
    },
    {
      path: "/oauth/google",
      element: <Google />,
      errorElement: <ErrorPage />, // Handle errors
    },
  ]);

  useEffect(() => {
    function checkUserData() {
      const item = localStorage.getItem("userJWT");
      if (item) {
        setUserData(JSON.parse(atob(item.split(".")[1])));
      } else {
        setUserData(undefined);
      }
    }

    checkUserData();
    window.addEventListener("storage", checkUserData);

    return () => {
      window.removeEventListener("storage", checkUserData);
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Flex alignItems="center" boxShadow="md" backgroundColor="#FDC161">
        <Spacer />
        {userData ? (
          <>
            <Text>{userData.name}</Text>
            <Avatar margin="5px" src={userData.profile_picture_url}></Avatar>
            <Button
              margin="1rem"
              onClick={onLogoutButtonClick}
              borderRadius="32px"
            >
              Logout
            </Button>
          </>
        ) : (
          <Button margin="1rem" onClick={onLoginButtonClick}>
            Login
          </Button>
        )}
      </Flex>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
