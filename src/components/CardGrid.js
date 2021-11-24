import { Grid, Flex, Wrap } from "@chakra-ui/react";
import Card from "./Card";

export default function GridCard() {
  return (
    <Flex direction="row" wrap="wrap" gap={10}>
      <Card />
    </Flex>
  );
}
