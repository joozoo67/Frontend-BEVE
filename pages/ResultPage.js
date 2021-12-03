import SearchForm from "../src/components/SearchForm";
import CardGrid from "../src/components/CardGrid";
import TopBar from "../src/components/TopBar";
import { Flex, Text, Spacer, IconButton } from "@chakra-ui/react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import { useRecoilState, useRecoilValue } from "recoil";
import { pageState, restaurantDataState } from "../src/states";
import SiteInfo from "../src/components/mainPageSections/SiteInfo";

export default function ResultPage() {
  const restaurantData = useRecoilValue(restaurantDataState);
  const [page, setPage] = useRecoilState(pageState);

  return (
    <>
      <TopBar position="static" />
      <SearchForm
        width="50%"
        marginTop="3%"
        inputVariant="outline"
        iconButtonVariant="ghost"
      />
      <Flex flexDirection="column" px="10%" w="100vw">
        <Text fontSize="3xl" mb="3rem" ml="10%" fontWeight="bold">검색결과: </Text>
        <Flex>
          {(page != 1) &&
            <IconButton
              onClick={() => setPage(page-1)}
              icon={<BsChevronCompactLeft size="5rem"/>}
              position="fixed"
              top="55%"
              variant="ghost"
              alignSelf="center"
              _hover={`bgColor="white"`}
            />
          }
          <Spacer />
          <CardGrid/>
          <Spacer />
          {(restaurantData.length >= 12) &&
            <IconButton
              onClick={() => setPage(page+1)}
              icon={<BsChevronCompactRight size="5rem" />}
              position="fixed"
              top="55%"
              left="85%"
              variant="ghost"
              alignSelf="center"
              _hover={`bgColor="white"`}
            />
          }
        </Flex>
      </Flex>
      <SiteInfo />
    </>
  );
}
