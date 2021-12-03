import { Box, Image, Text, Flex, Spacer, Button,useDisclosure } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import DetailedShop from "./DetailedShop";

export default function Card({ value }) {
  // console.log(value);
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex
      as="button"
      variant="ghost"
      _hover="none"
      _focus="none"
      display="flex"
      flexDirection="column"
      boxShadow="base"
      h="100%"
      w="100%"
      color="black"
      onClick={() => {
        onOpen();
        (<DetailedShop value={value} onOpen={onOpen} onClose={onClose} />)
      }}
    >
      <Image src={`/img_res/${value.name}/1.png`} objectFit="cover" w="100%" h="80%" maxW="100%" maxH="80%" />
        <Box m={2} textAlign="left">
          <Text color="green" fontWeight="bolder">{value.name}</Text>
          <Text fontSize="0.8rem" justifySelf="end">{value.category}</Text>
          <Text fontSize="0.8rem">{value.location.address}</Text>
        </Box> 
      <Spacer />
    </Flex>
  );
}
