import {
  IconButton,
  Input,
  InputRightElement,
  FormControl,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { FaSearch, FaFilter } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Filter from "./filter/Filter";

export default function MainSearchForm() {
  const [searched, setSearched] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    handleSubmit,
    register,
    getValues,
    required, //return toast message when input length==0
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { keywords } = getValues();
    console.log(keywords);
    setSearched(true);
    //axios fetch
    //검색결과 페이지로 넘어가기
  };
  const onEnter = (e, data) => {
    if (e.key === "Enter") onSubmit(data);
  };

  return (
    <Box w="60%" my="0" mx="auto">
      <FormControl onSubmit={handleSubmit(onSubmit)} display="flex">
        <IconButton icon={<FaFilter />} onClick={onOpen} />
        <Input
          {...register("keywords", {
            minLength: {
              value: 1,
              message: "입력한 검색어가 없습니다. 다시 입력해주세요.",
            },
          })}
          onKeyDown={onEnter}
          errors={errors}
          variant="filled"
          placeholder="식당, 메뉴, 지역 등을 입력하세요"
        />
        <InputRightElement>
          <IconButton
            aria-label="Search Database"
            onClick={onSubmit}
            icon={<FaSearch />}
          />
        </InputRightElement>
      </FormControl>
      <Filter isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

const StyledForm = styled.form``;
