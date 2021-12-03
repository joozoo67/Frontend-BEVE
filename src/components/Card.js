import { Box, Image, Text, Flex, Spacer, Button,useDisclosure } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import DetailedShop from "./DetailedShop";

export default function Card({ value }) {
  // console.log(value);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const tmp = value.name;
  const tmp_t = tmp.split(" (");

  if (value.franchise == 0) {
      return (
        <Flex
          as="button"
          variant="ghost"
          _hover="none"
          _focus="none"
          display="flex"
          flexDirection="column"
          h="100%"
          w="100%"
          boxShadow="base"
          color="black"
          onClick={onOpen}
        >
          <DetailedShop onOpen={onOpen} isOpen={isOpen} onClose={onClose} value={value} />
          <Box  maxW="100%" maxH="75%" w="100%" h="75%">
            <Image src={`/img_res/${value.name}/1.png`} objectFit="fill"  maxW="100%" maxH="90%" w="100%" h="90%" />
          </Box>
          <Box m={2} textAlign="left">
            <Text color="green" fontWeight="bolder">{value.name}</Text>
            <Text fontSize="0.8rem" justifySelf="end">{value.category}</Text>
          <Text fontSize="0.8rem">{value.location.address}</Text>
          </Box>
        </Flex>
      );
  }

  else {
      return (
        <Flex
          as="button"
          variant="ghost"
          _hover="none"
          _focus="none"
          display="flex"
          flexDirection="column"
          h="100%"
          w="100%"
          boxShadow="base"
          color="black"
          onClick={onOpen}
        >
          <DetailedShop onOpen={onOpen} isOpen={isOpen} onClose={onClose} value={value}/>
          <Image src={`/img_res/` + tmp_t[0] + `/1.png`} objectFit="fill" maxW="100%" maxH="70%" w="100%" h="70%" />

          <Box m={2} textAlign="left">
            <Text color="green" fontWeight="bolder">{value.name}</Text>
            <Text fontSize="0.8rem" justifySelf="end">{value.category}</Text>
          <Text fontSize="0.8rem">{value.location.address}</Text>
          </Box>
        </Flex>
      );
  }
}
