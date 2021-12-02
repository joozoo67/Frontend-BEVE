import SearchForm from "../src/components/SearchForm";
import TopBar from "../src/components/TopBar";
import { Flex, Text } from "@chakra-ui/react";

import CardGrid from "../src/components/CardGrid";
import DetailedShop from "../src/components/DetailedShop";

export default function DescriptionPage() {
  return (
    <>
      <Flex>
        <DetailedShop/>    
      </Flex>
    </>
  );
}
