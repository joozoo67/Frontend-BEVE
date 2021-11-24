import TopBar from "../src/components/TopBar";
import SearchForm from "../src/components/SearchForm";
import { Flex, Center } from "@chakra-ui/react";
import NearShopsBox from "../src/components/NearShopsBox";

export default function Home() {
  return (
    <>
      <TopBar />
      <Flex
        flexDirection="column"
        bgColor="green.200"
        w="100%"
        h="45%"
        minH="500px"
        p="15% 0 3% 0"
      >
        <Center fontSize="5xl">
          Explore Seoul with Vegetarian Restaurants
        </Center>
        <Center fontSize="3xl">BECOME VEGETARIAN</Center>
        <SearchForm
          width="60%"
          marginTop="40px"
          inputVariant="filled"
          iconButtonVariant="solid"
        />
      </Flex>
      <NearShopsBox />
    </>
  );
}
