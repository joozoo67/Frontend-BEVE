import { Flex, Image } from "@chakra-ui/react";

import TopBar from "../src/components/TopBar";
import mainBackground from "../public/mainBackground.svg";
import MainSearchForm from "../src/components/mainPageSections/MainSearchForm";
import Advantages from "../src/components/mainPageSections/Advantages";
import Vegan from "../src/components/mainPageSections/Vegan";
import VegetarianStages from "../src/components/mainPageSections/VegetarianStages";
import NearShops from "../src/components/mainPageSections/NearShops";
import SiteInfo from "../src/components/mainPageSections/SiteInfo";
import food from "../public/img/food.png";
import Map from "../src/components/Map"
import DetailedShop from "../src/components/DetailedShop";
import CurrentLocation from "../src/components/location/CurrentLocation";


export default function Home() {
  return (
    <>
<DetailedShop/>
  <CurrentLocation/>
      <TopBar position="absolute" />
      <Image
        w="100vw"
        h="100vh"
        position="absolute"
        objectFit="cover"
        src={mainBackground.src}
      />
      <MainSearchForm />
      <Advantages />
      <Flex h="800px">
        <Vegan />
        <NearShops />
      </Flex>
      <VegetarianStages />
      <SiteInfo />
    </>
  );
}