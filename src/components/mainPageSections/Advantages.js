import { Flex, Text } from "@chakra-ui/layout";

export default function Advantages() {
  return (
    <Flex w="100%" h="15rem" mt="20px" bgColor="#f4ecd5" color="black">
      <Text fontSize="5xl" fontWeight="bold" pl="2rem" pt="2rem">
        Why Be Vegetarian?
      </Text>
      <Text fontSize="3xl" pl="2rem" pt="2rem">
      채식주의는 육식 섭취를 줄임으로써 환경 오염을 줄이고, 동물의 권리를 존중하며, 
      건강을 위해 노력하고자 하는 가치관입니다.
      </Text>
    </Flex>
  );
}
