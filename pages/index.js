import TopBar from "../src/components/TopBar";
import MainSearchForm from "../src/components/MainSearchForm";
import Filter from "../src/components/filter/Filter";
import { Box } from "@chakra-ui/react";
import { useState } from "react";


export default function Home() {
  return (
    <>
      <TopBar />
      <Box bgColor="green.200" w="100%" h="50vh" pos="absolute" top="100">
        <MainSearchForm />
      </Box>
      
    </>
  );
}
