import { Image, Text, Flex, Spacer, Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import DetailedShop from "./DetailedShop";

export default function Card({ value }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Button
      display="flex"
      flexDirection="column"
      borderRadius="15"
      w="100%"
      h="70%"
      variant="filled"
      bgColor="white"
      color="black"
      onClick={() => {
        onOpen();
        (<DetailedShop value={value} onOpen={onOpen} onClose={onClose} />)
      }}
    >
      <Image src={`/img_res/${value.name}/1.PNG`} objectFit="fill" w="25vw" h="60vh" maxW="25vw" minH="60vh" />

      <Flex w="100%">
        <Text mb={2}>{value.name}</Text>
        <Spacer />
        <Text justifySelf="end">{value.category}</Text>
      </Flex>
      <Flex w="100%">
      <Text mb={2}>{value.location.address}</Text>
      </Flex>
    </Button>
  );
}
