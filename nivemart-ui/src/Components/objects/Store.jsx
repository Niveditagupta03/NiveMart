import { Flex, Button } from "@chakra-ui/react"; // Import Button from Chakra UI
import { FiHeart } from "react-icons/fi";
import { MdBookmark } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";

const Store = () => {
  return (
    <Flex
      flexDir="row"
      height="60px"
      as="button"
      justifyContent="space-between"
      alignItems="center"
    >
      <Button
        background="none"
        _hover={{ background: "rgba(0, 128, 128, 0.5)" }}
        borderRadius="25px"
      >
        <FiHeart size={20} color="#16423C" style={{ cursor: "pointer" }} />
      </Button>
      <Button
        background="none"
        _hover={{ background: "rgba(0, 128, 128, 0.5)" }}
        borderRadius="20px"
      >
        <MdBookmark size={20} color="#16423C" style={{ cursor: "pointer" }} />
      </Button>
      <Button
        background="none"
        _hover={{ background: "rgba(0, 128, 128, 0.5)" }}
        borderRadius="20px"
      >
        <FaBagShopping
          size={20}
          color="#16423C"
          style={{ cursor: "pointer" }}
        />
      </Button>
    </Flex>
  );
};

export default Store;
