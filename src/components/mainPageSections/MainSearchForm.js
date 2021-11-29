import { Flex, Spacer, Text } from "@chakra-ui/layout";

import SearchForm from "../SearchForm";

export default function MainSearchForm() {
  return (
    <Flex
      flexDirection="column"
      w="50%"
      h="100vh"
      minH="500px"
      p="5% 3%"
      position="relative"
      zIndex="1"
      color="white"
    >
      <Spacer />
      <Text fontSize={{ base: "5xl", md: "8xl" }} fontWeight="bold">
        Explore Seoul with <br /> Vegetarian Restaurants
      </Text>
      <Text fontSize="5xl" mt="15px">
        BECOME VEGETARIAN
      </Text>
      <SearchForm width="100%" marginTop="50px" inputVariant="filled" />
    </Flex>
  );
}
