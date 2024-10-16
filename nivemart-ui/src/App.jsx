import "./App.css";
import { useState, useEffect } from "react";
import "./index.css";
import {
  ChakraProvider,
  theme,
  Flex,
  Spacer,
  Button,
  Text,
  Avatar,
} from "@chakra-ui/react";
import { IoLogOut } from "react-icons/io5";
import { IoLogIn } from "react-icons/io5";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Google from "./Components/Oauth/google";
import LandingPage from "./Views/LandingPage";
import NewPage from "./Views/NewPage";
import ErrorPage from "./Views/ErrorPage";
import Western from "./Views/Western";
import Party from "./Views/Party";
import Casual from "./Views/Casual";
import FancyFormal from "./Views/FancyFormal";
import Formals from "./Views/Formals";
import Trip from "./Views/Trip";
import SuperCasual from "./Views/SuperCasual";
import Outing from "./Views/Outing";
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
    {
      path: "/western",
      element: <Western />,
      errorElement: <ErrorPage />, // Handle errors
    },
    {
      path: "/party",
      element: <Party />,
      errorElement: <ErrorPage />, // Handle errors
    },
    {
      path: "/casual",
      element: <Casual />,
      errorElement: <ErrorPage />, // Handle errors
    },
    {
      path: "/fancyformal",
      element: <FancyFormal />,
      errorElement: <ErrorPage />, // Handle errors
    },
    {
      path: "/outing",
      element: <Outing />,
      errorElement: <ErrorPage />, // Handle errors
    },
    {
      path: "/formals",
      element: <Formals />,
      errorElement: <ErrorPage />, // Handle errors
    },
    {
      path: "/trip",
      element: <Trip />,
      errorElement: <ErrorPage />, // Handle errors
    },
    {
      path: "/superCasual",
      element: <SuperCasual />,
      errorElement: <ErrorPage />, // Handle errors
    },
  ]);
  //FancyFormal;
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
      {/* <Flex alignItems="center" boxShadow="sm" backgroundColor="#6A9C89">
        <Spacer />
        {userData ? (
          <>
            <Text>{userData.name}</Text>
            <Avatar margin="2px" src={userData.profile_picture_url}></Avatar>
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
      </Flex> */}
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
