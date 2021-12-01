import { Box, Text } from "@chakra-ui/layout";

export default function Vegan() {
  return (
    <Box w="40%" bgColor="#d1a142" p="3.75em" mt="20px">
      <Text color="white" fontSize="3.5rem" fontWeight="bold">
        비건은 <br /> 채식주의의 <br /> 한 종류?
      </Text>
      <Text color="black" fontSize="2rem">
        <br />
        YES!
        <br /> 채식주의의 7단계 중 최상의 단계를 <br />
        일컫는 말입니다.
      </Text>
    </Box>
  );
}
