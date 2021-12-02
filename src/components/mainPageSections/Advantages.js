import { Box, Grid, Text, Image } from "@chakra-ui/react";
import vegan2 from "../../../public/img/vegan2.jpg";

export default function Advantages() {
  return (
    <Grid
      bgColor="#F5EDEA"
      templateColumns="repeat(2, 1fr)"
      justifyContent="center"
      justifyItems="center"
      py="3%"
      px={{ base: "3%", md: "5%" }}
    >
      <Image boxSize="25rem" src={vegan2.src} />
      <Box>
        <Text fontSize="4xl" color="#3E603B" fontWeight="bold">
          <br />
          Why Be Vegetarian?
        </Text>
        <Text fontSize="2xl" color="#5c5c5c">
          <br />
          채식주의는 육식 섭취를 줄임으로써 <br /> 환경 오염을 줄이고, 동물의
          권리를 존중하며, <br />
          건강을 위해 노력하고자 하는 가치관입니다.
        </Text>
      </Box>
      <hr />
    </Grid>
  );
}
