import {
  IconButton,
  Input,
  InputRightElement,
  InputLeftElement,
  FormControl,
  Box,
  useDisclosure,
  InputGroup,
  useToast
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { VscListSelection } from "react-icons/vsc";
import { useState } from "react";
import { useRouter } from "next/router";
import { useRecoilValue, useRecoilState } from "recoil";

import Filter from "./filter/Filter";
import { queryState, inputState} from "../states";

export default function SearchForm({ width, marginTop, inputVariant }) {
  const [inputValue, setInputValue] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const toast = useToast();

  const query = useRecoilValue(queryState);
  const [inputText, setInputText] = useRecoilState(inputState);

  const showToast = () => toast({
    title: "입력된 검색어가 없습니다.",
    description: "검색창에 검색어를 입력하시거나 필터를 골라주십시오.",
    status: "error",
    duration: 6000,
    isClosable: true,
    variant: "solid",
    position: "top"
  });

  const onSubmit = (e) => {
    if (query.area === undefined && query.stage === undefined && query.type === undefined && inputText.length === 0) showToast();
    else {
      console.log(query);
      console.log(query);
      
      setInputValue("");
      router.push({ 
        pathname: "/ResultPage",
      }); 
    }
  };
  const onEnter = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    };
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setInputText(e.target.value.split(" "));
  }

  return (
    <Box w={width} mt={marginTop} mx="auto">
      <FormControl onSubmit={onSubmit} display="flex" h="100px">
        <InputGroup>
          <InputLeftElement mx="10px" h="50px">
            <IconButton
              aria-label="Search Database"
              variant="filled"
              color="green"
              onClick={onSubmit}
              icon={<FaSearch />}
              _hover="none"
            />
          </InputLeftElement>
          <Input
            value={inputValue}
            onKeyDown={onEnter}
            onChange={handleInputChange}
            variant={inputVariant}
            h="50px"
            px="10px"
            borderRadius="100"
            bgColor="white"
            placeholder="식당, 메뉴, 지역 등을 입력하세요"
          />
          <InputRightElement mx="10px" h="50px">
            <IconButton
              icon={<VscListSelection size="30px" />}
              h="50px"
              variant="ghost"
              color="green"
              mr="10px"
              onClick={onOpen}
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Filter isOpen={isOpen} onClose={onClose} showToast={showToast} />
    </Box>
  );
}