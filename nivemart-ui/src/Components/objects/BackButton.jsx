// BackButton.js
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const BackButton = ({ styleProps }) => {
  const navigate = useNavigate();

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
    ...styleProps, // Additional styles can be passed in
  };

  return (
    <Button {...buttonStyle} onClick={() => navigate(-1)}>
      Back
    </Button>
  );
};

export default BackButton;
