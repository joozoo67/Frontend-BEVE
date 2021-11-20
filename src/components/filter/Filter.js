import { Flex, Text, Box, Button, HStack } from "@chakra-ui/react";
import FilterTypeBox from "./FilterTypeBox";
import styled from "styled-components";

const seoulAreas = [
  "강서구",
  "양천구",
  "구로구",
  "금천구",
  "영등포구",
  "마포구",
  "은평구",
  "서대문구",
  "동작구",
  "관악구",
  "용산구",
  "서초구",
  "강남구",
  "송파구",
  "강동구",
  "중구",
  "종로구",
  "성북구",
  "강북구",
  "도봉구",
  "노원구",
  "중랑구",
  "동대문구",
  "성동구",
  "광진구",
];
const vegetarianStage = [
  "비건",
  "락토 베지테리언",
  "오보 베지테리언",
  "락토 오보 베지테리언",
  "페스코 베지테리언",
  "폴로 베지테리언",
  "플렉시테리언",
];
const restaurantType = ["한식", "분식", "카페", "베이커리"];

export default function Filter() {
  return (
    <Flex flexDirection="column" w="50px" h="80%">
      <Text>필터</Text>
      <FilterTypeBox type="지역" options={seoulAreas} wra/>
      <FilterTypeBox type="채식 단계" options={vegetarianStage} />
      <FilterTypeBox type="업종" options={restaurantType} />
    </Flex>
  );
}

const FilterContainer = styled.div`
  display: flex;
  width: 50px;
`;
