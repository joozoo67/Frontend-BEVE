import styled, {css} from "styled-components";
import { Text, FormControl } from "@chakra-ui/react";


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
    <FilterButton
      clicked="false"
      class="filterButton"
      value={option}
      key={index}
      m={1.5}
      onClick={(e) => {
        console.log(e.target.clicked);
        e.target.clicked = e.target.clicked === "true" ? "false" : "true";
        addOption(e);
      }}
    >
      {option}
    </FilterButton>
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

const FilterButton = styled.button`
  transition-duration: 0.3s;
  width: fit-content;
  margin: 0.3rem;
  border: 1.7px solid;
  padding: 0.5rem;
  border-color: #3E603B;
  border-radius: 0.6rem;

  &:hover{
    background: #99BB96;
    border-color: #99BB96;
    color: white;
  }

  &:active{
    border: 1.7px solid !important;
  }

  ${(props) => {
  if (props.clicked === "true") {
    css`
      background: #3E603B !important;
      color: white;
      border-color: #3E603B;`
  }}}

`
