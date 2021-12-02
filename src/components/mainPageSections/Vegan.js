import { Box, Text, Image, Grid } from "@chakra-ui/react";
import vegan1 from "../../../public/img/vegan1.jpg";

export default function Vegan() {
  return (
    <Grid
      bgColor="#F5EDEA"
      templateColumns="repeat(2, 1fr)"
      py="3%"
      px={{ base: "3%", md: "5%" }}
    >
      <Box>
        <Text color="#3E603B" fontSize="4xl" fontWeight="bold">
          비건은 채식주의의 한 종류?
        </Text>
        <Text color="#5c5c5c" fontSize="2xl">
          <br />
          YES!
          <br /> 채식주의의 7단계 중 최상의 단계를 <br />
          일컫는 말입니다.
        </Text>
      </Box>
      <Image boxSize="20rem" src={vegan1.src} />
    </Grid>
  );
}