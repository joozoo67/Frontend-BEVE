import SearchForm from "../src/components/SearchForm";
import CardGrid from "../src/components/CardGrid";
import TopBar from "../src/components/TopBar";
import { Flex, Text,Box } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { restaurantDataState } from "../src/states";

export default function ResultPage() {
  const restaurantData = useRecoilValue(restaurantDataState);

  return (
    <>
      <TopBar position="static" />
      <SearchForm
        width="50%"
        marginTop="3%"
        inputVariant="outline"
        iconButtonVariant="ghost"
      />
      <Flex flexDirection="column" px="15%">
        <Text fontSize="3xl">검색결과 [{restaurantData.length}]</Text>
      
          <CardGrid/>
      
      </Flex>
    </>
  );
}
