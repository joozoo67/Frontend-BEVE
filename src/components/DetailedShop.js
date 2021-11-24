import { Box, Image, Text, Flex, Spacer } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DetailedShop(props) {
  return (
    <Box boxShadow="md" borderRadius="15" p={5} w="20rem" h="20rem">
      <Flex></Flex>
      <Flex>
        <Text mb={2}>{props.name}</Text>
        <Spacer />
        <Text justifySelf="end">{props.category}</Text>
      </Flex>

      <Text>{props.address}</Text>
    </Box>
  );
}
