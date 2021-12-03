import SearchForm from "../src/components/SearchForm";
import CardGrid from "../src/components/CardGrid";
import TopBar from "../src/components/TopBar";
import { Flex, Text, Spacer, IconButton } from "@chakra-ui/react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import { useRecoilState, useRecoilValue } from "recoil";
import { pageState, restaurantDataState } from "../src/states";

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
      <Flex flexDirection="column" px="10%" h="100vh">
        <Text fontSize="3xl" mb="3rem">검색결과 [{restaurantData.length}]</Text>
        <Flex h="100vh">
          {(page != 1) &&
            <IconButton
              onClick={() => setPage(page-1)}
              icon={<BsChevronCompactLeft size="5rem" />}
              position="fixed"
              top="55%"
              variant="ghost"
              alignSelf="center"
            />
          }
          <Spacer />
          <CardGrid/>
          <Spacer />
          {(restaurantData.length >= 12) &&
            <IconButton
              conClick={() => setPage(page+1)}
              icon={<BsChevronCompactRight size="5rem" />}
              position="fixed"
              top="55%"
              left="85%"
              variant="ghost"
              alignSelf="center"
            />
          }
        </Flex>
      </Flex>
    </>
  );
}
