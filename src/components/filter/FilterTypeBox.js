import styled from "styled-components";
import { Text, FormControl, Button } from "@chakra-ui/react";

export default function FilterTypeBox({
  type,
  options,
  selected,
  setSelected,
}) {
  const addOption = (e) => {
    if (selected.includes(e.target.value)) {
      setSelected(selected.filter((item) => item !== e.target.value));
    } else {
      setSelected([...selected, e.target.value]);
    }
  };

  const stack = options.map((option, index) => (
    <Button
      clicked="false"
      class="filterButton"
      value={option}
      key={index}
      m={1.5}
      onClick={(e) => {
        e.target.clicked = e.target.clicked === "true" ? "false" : "true";
        addOption(e);
      }}
    >
      {option}
    </Button>
  ));

  return (
    <TypeContainer>
      <Text fontSize="xl" fontWeight="bold">{type}</Text>
      <FormControl direction="row" wrap="wrap">
        {stack}
      </FormControl>
    </TypeContainer>
  );
}

const TypeContainer = styled.div`
  margin: 2rem 1rem 3rem 1rem;
`;