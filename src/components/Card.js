import { Box, Image, Text, Flex, Spacer, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

export default function Card({ value }) {
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
    >
      <Image src={value.images[0]} objectFit="fill" w="100%" h="100%" />

      <Flex w="100%">
        <Text mb={2}>{value.name}</Text>
        <Spacer />
        <Text justifySelf="end">{value.category}</Text>
      </Flex>
      <Text w="100%" justifySelf="flex-start" overflowWrap="break-word">
        {value.address}
      </Text>
    </Button>
  );
}
