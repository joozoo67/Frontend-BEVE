import { Box, Grid, Text, Spinner, useBreakpointValue } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import Card from "./Card";
import { restaurantDataState } from "../states";
import useSearchRestaurants from "../library/useSearchRestaurant";

export default function CardGrid() {
  const columnNum = useBreakpointValue({ base: 2, lg: 3 });
  const { isLoading, isError } = useSearchRestaurants();
  
  const restaurantData = useRecoilValue(restaurantDataState);

  return isLoading === true ? (<Spinner size="xl" mx="auto"/>) :
    (restaurantData.length===0? (<Text fontSize="4xl" mx="auto">검색된 결과가 없습니다</Text>) : (
      <Grid justifyItems="center" templateColumns={`repeat( ${columnNum}, 1fr)`} gap={10} >
        {restaurantData.map((value) => (
          <Card key={value.address} value={value} />
        ))}
        </Grid>
  ));
}