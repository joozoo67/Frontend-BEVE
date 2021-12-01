import { Flex, Spacer, Text } from "@chakra-ui/layout";

import SearchForm from "../SearchForm";

export default function MainSearchForm() {
  return (
    <Flex
      flexDirection="column"
      w="50%"
      h="100vh"
      minH="500px"
      p="10% 0 8% 4%"
      position="relative"
      zIndex="1"
      color="white"
    >
      <Spacer />
      <Text fontSize={{ base: "3rem", md: "4rem" }} fontWeight="bold">
        Explore Seoul with <br /> Vegetarian Restaurants
      </Text>
      <Text fontSize="4xl" mt="0.5375em">
        BECOME VEGETARIAN
      </Text>
      <SearchForm width="100%" marginTop="1.875em" inputVariant="filled" />
    </Flex>
  );
}
