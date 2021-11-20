import styled from "styled-components";
import { Text, Stack, Button, Input, FormControl } from "@chakra-ui/react";

export default function FilterTypeBox({
  type,
  options,
  selected,
  setSelected,
}) {
  const onclick = (e) => {
    if (selected.includes(e.target.value)) {
      setSelected(selected.filter((item) => item !== e.target.value));
    } else {
      setSelected([...selected, e.target.value]);
    }
  };

  // const addOption = ()
  const stack = options.map((option, index) => (
    <Button
      value={option}
      variant="outline"
      key={index}
      m={1.5}
      onClick={onclick}
    >
      {option}
    </Button>
  ));

  return (
    <TypeContainer>
      <Text>{type}</Text>
      <FormControl direction="row" wrap="wrap">
        {stack}
      </FormControl>
    </TypeContainer>
  );
}

const TypeContainer = styled.div`
  margin: 15px;
`;
