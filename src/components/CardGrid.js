import { Grid, Flex, Spinner, useBreakpointValue } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import Card from "./Card";
import { restaurantDataState } from "../states";
import useSearchRestaurants from "../library/useSearchRestaurant";

export default function CardGrid() {
  const columnNum = useBreakpointValue({ base: 2, lg: 3 });
  const { isLoading, isError } = useSearchRestaurants();
  
  const restaurantData = useRecoilValue(restaurantDataState);

  return isLoading === true? (<Spinner size="lg" />) : (
    <Grid templateColumns={`repeat( ${columnNum}, 1fr)`} gap={5}>
      {restaurantData.map((value, index) => (
        <Card key="value.address" value={value} />
      ))}
    </Grid>
  );
}