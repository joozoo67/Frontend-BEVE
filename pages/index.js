import { Flex, Image } from "@chakra-ui/react";

import TopBar from "../src/components/TopBar";
import mainBackground from "../public/mainBackground.svg";
import MainSearchForm from "../src/components/mainPageSections/MainSearchForm";
import Advantages from "../src/components/mainPageSections/Advantages";
import Vegan from "../src/components/mainPageSections/Vegan";
import VegetarianStages from "../src/components/mainPageSections/VegetarianStages";
import SiteInfo from "../src/components/mainPageSections/SiteInfo";
import CurrentLocation from "../src/components/location/CurrentLocation";

export default function Home() {
  return (
    <>
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
      <Vegan />
      <CurrentLocation />
      <VegetarianStages />
      <SiteInfo />
    </>
  );
}