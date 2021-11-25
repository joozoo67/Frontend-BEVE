import { Grid, Flex, Wrap } from "@chakra-ui/react";
import Card from "./Card";

export default function GridCard() {
  return (
    <Wrap direction="row" spacing={5}>
      <Card />
    </Wrap>
  );
}
