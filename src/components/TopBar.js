import { Flex, Button, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import logo from "../../public/logo.svg";
export default function TopBar() {
  const router = useRouter();

  return (
    <Flex color="white" w="100%" h="95px">
      <Button
        size="150px"
        variant="ghost"
        _hover="none"
        _focus="none"
        onClick={() => router.push("/")}
      >
        <Image boxSize="150px" src={logo} />
      </Button>
    </Flex>
  );
}
