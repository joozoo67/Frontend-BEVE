import styled from "styled-components";
import { Text, Stack, Button } from "@chakra-ui/react";

export default function FilterTypeBox({ type, options }) {
  console.log(options);
  const stack = options.map((option, index) => (
    <Button variant="outline" key="index">
      {option}
    </Button>
  ));

  return (
    <TypeContainer>
      <Text>{type}</Text>
      <Stack direction="row" spacing="4" wrap="wrap">
        {stack}
      </Stack>
    </TypeContainer>
  );
}
const TypeContainer = styled.div`
  margin: 15px;
`;
