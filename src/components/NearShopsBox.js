import { Box, Text, Flex, IconButton, Button } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function NearShopsBox() {
  const [location, setLocation] = useState("");
  //API 불러서 주소 가져오고, setLocation하기
  //불러온 주소를 바탕으로 filter 돌리기

  return (
    <Box
      display="flex"
      flexDirection="column"
      position="relative"
      top="180"
      px="15%"
      mx="auto"
    >
      <Text fontSize="2xl" ml="110px">
        주변 음식점
      </Text>
      <Text fontSize="md" color="grey" ml="110px">
        현 위치: {location}
      </Text>
      <Flex>
        <Button as={BsChevronCompactLeft} size="lg" />
        <Flex flexDirection="column" w="40%" flexGrow="1" px="10px"></Flex>
        <Button as={BsChevronCompactRight} size="lg" />
      </Flex>
    </Box>
  );
}
