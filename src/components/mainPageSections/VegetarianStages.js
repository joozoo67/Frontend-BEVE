import { Flex, Grid, GridItem, HStack, Text } from "@chakra-ui/layout";
import {
  GiPlantSeed as VegetableIcon,
  GiMilkCarton as DairyIcon,
  GiChickenOven as PoultryIcon,
  GiMeat as MeatIcon,
} from "react-icons/gi";
import { BsEggFried as EggIcon } from "react-icons/bs";
import { FaFish as FishIcon } from "react-icons/fa";

export default function VegetarianStages() {
  return (
    <Flex bgColor="#7ca83f" color="white" h="55rem" mt="20px">
      <Grid
        templateRows="repeat(8, 1fr)"
        templateColumns="25rem 50rem"
        gap={"3rem"}
        justifyItems="flex-start"
        w="50%"
        h="50%"
        pl="3rem"
        pt="1rem"
      >
        <GridItem>
        <Text color="white" fontSize="3rem" fontWeight="bold">
        채식주의 단계?
      </Text>
        </GridItem>

        <GridItem>
        <Text color="black" fontSize="1rem">
        <br/>채식주의는 7가지 단계로 세분화되어 있습니다.<br/> 
        그 기준은 유제품, 동물의 알, 물고기, 하얀 고기, 붉은 고기 등 동물성 음식의 종류에 따라 나뉩니다.
        <br/>(색칠은 섭취 가능을 뜻합니다) 
      </Text>
        </GridItem>

        <GridItem>
          비건
          <br /> (Vegan)
        </GridItem>

        <GridItem>
        <VegetableIcon size="1.5rem" color="2A7908"/>
        </GridItem>

        <GridItem>
          락토 베지테리언
          <br /> (Lacto vegetarian)
        </GridItem>

        <GridItem>
        <HStack spacing='3rem'>
        <VegetableIcon size="1.5rem" color="2A7908"/>
        <DairyIcon size="1.5rem" color="#4BB6EC"/>
        </HStack>
        </GridItem>

        <GridItem>
          오보 베지테리언
          <br /> (Ovo vegetarian)
        </GridItem>

        <GridItem>
          <HStack spacing='3rem'>
        <VegetableIcon size="1.5rem" color="2A7908"/>
        <EggIcon size="1.5rem" color="yellow"/>
        </HStack>
        </GridItem>

        <GridItem>
          락토 오보 베지테리언
          <br /> (Lacto-ovo vegetarian)
        </GridItem>

        <GridItem>
        <HStack spacing='3rem'>
        <VegetableIcon size="1.5rem" color="2A7908"/>
        <DairyIcon size="1.5rem" color="#4BB6EC"/>
        <EggIcon size="1.5rem" color="yellow"/>
        </HStack>
        </GridItem>

        <GridItem>
          페스코 베지테리언
          <br /> (Pesco-vegetarian)
        </GridItem>

        <GridItem>
        <HStack spacing='3rem'>
        <VegetableIcon size="1.5rem" color="2A7908"/>
        <DairyIcon size="1.5rem" color="#4BB6EC"/>
        <EggIcon size="1.5rem" color="yellow"/>
        <FishIcon size="1.5rem" color="391DEE"/>
        </HStack>
        </GridItem>

        <GridItem>
          폴로 베지테리언
          <br /> (Pollo-vegetarian)
        </GridItem>

        <GridItem>
        <HStack spacing='3rem'>
        <VegetableIcon size="1.5rem" color="2A7908"/>
        <DairyIcon size="1.5rem" color="#4BB6EC"/>
        <EggIcon size="1.5rem" color="yellow"/>
        <FishIcon size="1.5rem" color="391DEE"/>
        <PoultryIcon size="1.5rem" color="FF6A44"/>
        </HStack>
        </GridItem>

        <GridItem>
          플렉시테리언
          <br /> (Flexitarion)
        </GridItem>

        <GridItem>
        <HStack spacing='3rem'>
        <VegetableIcon size="1.5rem" color="2A7908"/>
        <DairyIcon size="1.5rem" color="#4BB6EC"/>
        <EggIcon size="1.5rem" color="yellow"/>
        <FishIcon size="1.5rem" color="391DEE"/>
        <PoultryIcon size="1.5rem" color="FF6A44"/>
        <MeatIcon size="1.5rem" color="E61818"/>
        </HStack>
        </GridItem>

      </Grid>
    </Flex>
  );
}