import { Flex, Spacer, Text } from "@chakra-ui/layout";

import SearchForm from "../SearchForm";

export default function MainSearchForm() {
  return (
    <Flex
      flexDirection="column"
      w="50%"
      h="100vh"
      p="10% 0 8% 4%"
      position="relative"
      zIndex="1"
      color="white"
    >
      <Spacer />
      <Text fontSize={{ base: "5xl", md: "7xl" }} fontWeight="bold">
        Explore Seoul with <br /> Vegetarian Restaurants
      </Text>
      <Text fontSize="4xl" mt="15px">
        BECOME VEGETARIAN
      </Text>
      <SearchForm width="100%" marginTop="50px" inputVariant="filled" />
    </Flex>
  );
}
