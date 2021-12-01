import { Flex, Text } from "@chakra-ui/layout";

export default function Advantages() {
  return (
    <Flex
      bgColor="#f4ecd5"
      color="black"
      mt="20px"
      flexDir="column"
      py="3%"
      px={{ base: "3%", md: "10%" }}
    >
      <Text fontSize="5xl" fontWeight="bold">
        Why Be Vegetarian?
      </Text>
      <Text fontSize="3xl">
        <br />
        채식주의는 육식 섭취를 줄임으로써 환경 오염을 줄이고, 동물의 권리를
        존중하며, 건강을 위해 노력하고자 하는 가치관입니다.
      </Text>
    </Flex>
  );
}
