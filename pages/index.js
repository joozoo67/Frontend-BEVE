import TopBar from "../src/components/TopBar";
import MainSearchForm from "../src/components/MainSearchForm";
import Filter from "../src/components/filter/Filter";
import { Flex, Center } from "@chakra-ui/react";
import { useState } from "react";


export default function Home() {
  return (
    <>
      <TopBar />
      <Flex flexDirection="column" bgColor="green.200" w="100%" h="45vh" minH="400px" pos="absolute" top="100" pt="20%">
        <Center fontSize="5xl">Explore Seoul with Vegetarian Restaurants</Center>
        <Center fontsize="3xl">BECOME VEGETARIAN</Center>
        <MainSearchForm />
      </Flex>
      
    </>
  );
}
