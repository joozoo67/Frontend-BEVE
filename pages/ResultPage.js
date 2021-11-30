import SearchForm from "../src/components/SearchForm";
import TopBar from "../src/components/TopBar";
import { Flex, Text } from "@chakra-ui/react";

import CardGrid from "../src/components/CardGrid";

export default function ResultPage() {
  return (
    <>
      <TopBar position="static" />
      <SearchForm
        width="50%"
        marginTop="3%"
        inputVariant="outline"
        iconButtonVariant="ghost"
      />
      <Flex flexDirection="column" p="1% 10%">
        <Text fontSize="3xl" fontWeight="bold" color="green.600" mb="6%">
          검색된 결과 [{}]
        </Text>
        <CardGrid />
      </Flex>
    </>
  );
}
