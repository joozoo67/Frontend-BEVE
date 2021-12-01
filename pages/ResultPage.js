import SearchForm from "../src/components/SearchForm";
import CardGrid from "../src/components/CardGrid"
import TopBar from "../src/components/TopBar";
import { Flex, Text } from "@chakra-ui/react"

export default function ResultPage() {
  return (
    <>
      <TopBar />
      <SearchForm
        width="70%"
        marginTop="20px"
        inputVariant="outline"
        iconButtonVariant="ghost"
      />
      <Flex flexDirection="column">
        <Text>검색된 결과 [{ }]</Text>
        <CardGrid />
      </Flex>
    </>
  );
}
