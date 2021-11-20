import styled from "styled-components";
import { Text, HStack, Button } from "@chakra-ui/react";

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
      <HStack spacing="15px" shouldWrapChildren="true" w="90%">
        {stack}
      </HStack>
    </TypeContainer>
  );
}

const TypeContainer = styled.div`
  width: 70%;
`;
