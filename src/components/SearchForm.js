import {
  IconButton,
  Input,
  InputRightElement,
  InputLeftElement,
  FormControl,
  Box,
  useDisclosure,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { VscListSelection } from "react-icons/vsc";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import Filter from "./filter/Filter";

export default function SearchForm({ width, marginTop, inputVariant }) {
  const [searched, setSearched] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const errorToast = useToast();

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //axios fetch하고 router.push에 데이터 전달
    const { keywords } = getValues();
    console.log(keywords);
    setSearched(true);
    router.push({
      pathname: "/ResultPage",
      searchValue: { keywords },
    });
  };
  const onEnter = (e, data) => {
    if (e.key === "Enter") onSubmit(data);
  };

  return (
    <Box w={width} mt={marginTop} mx="auto">
      <FormControl onSubmit={handleSubmit(onSubmit)} display="flex" h="100px">
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
            {...register("keywords", {
              required: true,
            })}
            h="50px"
            px="10px"
            borderRadius="100"
            onKeyDown={onEnter}
            errors={errors}
            variant={inputVariant}
            bgColor="white"
            placeholder="식당, 메뉴, 지역 등을 입력하세요"
          />
          {errors.keywords && console.log("error")}

          {/* toast({
              description: "입력한 검색어가 없습니다. 다시 입력해주세요.",
              status: "error",
              position: "top",
              variant: "solid",
              bgColor: "#e6494e",
              duration: 10000,
              isClosable: true,
            }) */}

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
      <Filter isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
