import styled from "styled-components";
import { Text, Stack, Button, Input, FormControl } from "@chakra-ui/react";

export default function FilterTypeBox({ type, options }) {
  const options = options.map((option, index) => (
    <Button variant="outline" key={index} m={1.5}>
      {option}
    </Button>
  ));

  return (
    <TypeContainer>
      <Text>{type}</Text>
      <FormControl direction="row" wrap="wrap">
        {options}
      </FormControl>
    </TypeContainer>
  );
}

const TypeContainer = styled.div`
  margin: 15px;
`;
