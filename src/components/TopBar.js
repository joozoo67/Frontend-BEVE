import { Flex, Image } from "@chakra-ui/react";
import logo from "../../public/logo.svg"
export default function TopBar() {
  return (
    <Flex color="white" w="100%">
      <Image boxSize="150px" src={logo}/>
    </Flex>
  );
}
