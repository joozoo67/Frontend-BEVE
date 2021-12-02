import { Flex, Spacer, Text } from "@chakra-ui/layout";
import TopBar from "../TopBar";

export default function SiteInfo() {
  return (
    <Flex bgColor="#3E603B" h="200px" color="#F2E3DC" p="30px">
      <TopBar position="absolute" />
      <Spacer />
      <Flex flexDir="column" alignItems="center" ml="50px">
        <Text fontSize="3xl" fontWeight="bold" mb="10px">
          WEB GITHUB
        </Text>
        <Text>https://github.com/Sprinter-LEAP-2021</Text>
      </Flex>

      <Flex flexDir="column" alignItems="center" ml="50px">
        <Text fontSize="3xl" fontWeight="bold" mb="10px">
          DEVELOPERS&CONTACT
        </Text>
        <Text>YEONHEE JUNG : spig0126@gmail.com</Text>
        <Text>YOUMIN KIM : spig0126@gmail.com</Text>
        <Text>JUYEON KIM : spig0126@gmail.com</Text>
        <Text>JANG YESSEO : spig0126@gmail.com</Text>
      </Flex>
    </Flex>
  );
}
