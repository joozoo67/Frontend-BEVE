import { Flex, Grid, GridItem, HStack, Text, Wrap } from "@chakra-ui/layout";
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
    <Flex
      bgColor="#F2E3DC"
      color="#5c5c5c"
      flexDir="column"
      py="3%"
      px={{ base: "3%", md: "7%" }}
      pd="2%"
    >
      <Text color="#3E603B" fontSize="3rem" fontWeight="bold">
        채식주의 단계?
      </Text>
      <Text color="#5c5c5c" fontSize="1rem">
        <br />
        채식주의는 7가지 단계로 세분화되어 있습니다.
        <br />
        그 기준은 유제품, 동물의 알, 물고기, 하얀 고기, 붉은 고기 등 동물성
        음식의 종류에 따라 나뉩니다.
        <br />
        (색칠은 섭취 가능을 뜻합니다)
      </Text>
      <Grid
        templateRows="repeat(8, 1fr)"
        templateColumns="35% repeat(6, 1fr)"
        justifyItems="flex-start"
        w="100%"
        h="50%"
        px="0"
        py="3%"
        gridRowGap={2}
      >
        <GridItem colStart="0" colEnd="0" rowStart="1" rowEnd="1">
          비건
          <br />
          (Vegan)
        </GridItem>
        <GridItem colStart="2" colEnd="2" rowStart="1" rowEnd="1">
          <VegetableIcon size="1.5rem" color="2A7908" />
        </GridItem>

        <GridItem colStart="0" colEnd="0" rowStart="2" rowEnd="2">
          락토 베지테리언
          <br />
          (Lacto vegetarian)
        </GridItem>
        <GridItem colStart="2" colEnd="2" rowStart="2" rowEnd="2">
          <VegetableIcon size="1.5rem" color="2A7908" />
        </GridItem>
        <GridItem colStart="3" colEnd="3" rowStart="2" rowEnd="2">
          <DairyIcon size="1.5rem" color="#4BB6EC" />
        </GridItem>

        <GridItem colStart="1" colEnd="1" rowStart="3" rowEnd="3">
          오보 베지테리언
          <br />
          (Ovo vegetarian)
        </GridItem>
        <GridItem colStart="2" colEnd="2" rowStart="3" rowEnd="3">
          <VegetableIcon size="1.5rem" color="2A7908" />
        </GridItem>
        <GridItem colStart="4" colEnd="4" rowStart="3" rowEnd="3">
          <EggIcon size="1.5rem" color="yellow" />
        </GridItem>

        <GridItem colStart="1" colEnd="1" rowStart="4" rowEnd="4">
          락토 오보 베지테리언
          <br />
          (Lacto-ovo vegetarian)
        </GridItem>
        <GridItem colStart="2" colEnd="2" rowStart="4" rowEnd="4">
          <VegetableIcon size="1.5rem" color="2A7908" />
        </GridItem>
        <GridItem colStart="3" colEnd="3" rowStart="4" rowEnd="4">
          <DairyIcon size="1.5rem" color="#4BB6EC" />
        </GridItem>
        <GridItem colStart="4" colEnd="4" rowStart="4" rowEnd="4">
          <EggIcon size="1.5rem" color="yellow" />
        </GridItem>

        <GridItem colStart="1" colEnd="1" rowStart="5" rowEnd="5">
          페스코 베지테리언
          <br />
          (Pesco-vegetarian)
        </GridItem>
        <GridItem colStart="2" colEnd="2" rowStart="5" rowEnd="5">
          <VegetableIcon size="1.5rem" color="2A7908" />
        </GridItem>
        <GridItem colStart="3" colEnd="3" rowStart="5" rowEnd="5">
          <DairyIcon size="1.5rem" color="#4BB6EC" />
        </GridItem>
        <GridItem colStart="4" colEnd="4" rowStart="5" rowEnd="5">
          <EggIcon size="1.5rem" color="yellow" />
        </GridItem>
        <GridItem colStart="5" colEnd="5" rowStart="5" rowEnd="5">
          <FishIcon size="1.5rem" color="391DEE" />
        </GridItem>

        <GridItem colStart="1" colEnd="1" rowStart="6" rowEnd="6">
          폴로 베지테리언
          <br />
          (Pollo-vegetarian)
        </GridItem>
        <GridItem colStart="2" colEnd="2" rowStart="6" rowEnd="6">
          <VegetableIcon size="1.5rem" color="2A7908" />
        </GridItem>
        <GridItem colStart="3" colEnd="3" rowStart="6" rowEnd="6">
          <DairyIcon size="1.5rem" color="#4BB6EC" />
        </GridItem>
        <GridItem colStart="4" colEnd="4" rowStart="6" rowEnd="6">
          <EggIcon size="1.5rem" color="yellow" />
        </GridItem>
        <GridItem colStart="5" colEnd="5" rowStart="6" rowEnd="6">
          <FishIcon size="1.5rem" color="391DEE" />
        </GridItem>
        <GridItem colStart="6" colEnd="6" rowStart="6" rowEnd="6">
          <PoultryIcon size="1.5rem" color="FF6A44" />
        </GridItem>

        <GridItem colStart="1" colEnd="1" rowStart="7" rowEnd="7">
          플렉시테리언
          <br />
          (Flexitarian)
        </GridItem>
        <GridItem colStart="2" colEnd="2" rowStart="7" rowEnd="7">
          <VegetableIcon size="1.5rem" color="2A7908" />
        </GridItem>
        <GridItem colStart="3" colEnd="3" rowStart="7" rowEnd="7">
          <DairyIcon size="1.5rem" color="#4BB6EC" />
        </GridItem>
        <GridItem colStart="4" colEnd="4" rowStart="7" rowEnd="7">
          <EggIcon size="1.5rem" color="yellow" />
        </GridItem>
        <GridItem colStart="5" colEnd="5" rowStart="7" rowEnd="7">
          <FishIcon size="1.5rem" color="391DEE" />
        </GridItem>
        <GridItem colStart="6" colEnd="6" rowStart="7" rowEnd="7">
          <PoultryIcon size="1.5rem" color="FF6A44" />
        </GridItem>
        <GridItem colStart="7" colEnd="7" rowStart="7" rowEnd="7">
          <MeatIcon size="1.5rem" color="E61818" />
        </GridItem>
      </Grid>
    </Flex>
  );
}