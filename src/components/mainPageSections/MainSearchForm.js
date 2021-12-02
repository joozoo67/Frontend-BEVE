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
      color="#F2E3DC"
    >
      <Spacer />
      <Text fontSize="6xl" fontWeight="bold">
        Explore Seoul with <br /> Vegetarian Restaurants
      </Text>
      <Text fontSize="4xl" mt="0.5em">
        BECOME VEGETARIAN
      </Text>
      <SearchForm width="100%" marginTop="1.875em" inputVariant="filled" />
    </Flex>
  );
}
