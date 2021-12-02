import { Box, Text, Flex, Spacer, Image, Modal,Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import food from "../../public/img/food.png";
import Map from "./Map";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function DetailedShop() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [count, setCount] = useState(0);

  const next = () => {
    if (count == 1) setCount(0);
    else setCount(1);
  };
  const before = () => {
    if (count == 0) setCount(1);
    else setCount(0);
  };

  const Menu = () => {
    if (shopList[0].menu) {
      const menuList = [];
      for (let i = 0; i < shopList[0].menu.length; i++) {
        menuList.push(shopList[0].menu[i]);
      }
      return menuList;
    }
  };

  return (
    <>
    <Button onClick={onOpen}>Open Modal</Button>
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay color="green"/>
        <ModalContent>
          <Button position="relative"
          as={BsChevronCompactLeft}
          onClick={before}
          size="lg"
          variant="ghost"
          position="absolute"
          top="15rem"
          left="1rem"
        />
          <Image
          w="50rem"
          h="30rem"
          boxShadow="md"
          borderRadius="0.2rem"
          src={food.src}
          objectFit="fill"
        />
        <Button
          as={BsChevronCompactRight}
          onClick={next}
          size="lg"
          variant="ghost"
          position="absolute"
          right="1rem"
          top="15rem"
        />
         <ModalCloseButton />
       
          <ModalBody>
          <Flex direction="column" justify="center">
            <Box m={3}>
              <Text fontSize="1.8rem" fontWeight="bolder" m={1}>{shopList[0].name}</Text>
              <Text m={1}>카테고리 : {shopList[0].category}</Text>
              <Text  m={1}>전화번호 : {shopList[0].phone}</Text>
              <Text  m={1}>주소 : {shopList[0].location.address}</Text>
              <Text m={1}>메뉴</Text>
              <Text>
                {Menu(shopList[0].menu).map((menus) => (
                  <Flex>
                    <Text m={0.5}>{menus.name}</Text>
                    <Spacer />
                    <Text>{menus.level}<Spacer/></Text>
                  </Flex>
                ))}
              </Text>
            </Box>
            
          </Flex>
      <Flex justify="center" p={2}>
       <Map />
      </Flex>
          </ModalBody>   
        </ModalContent>
      </Modal>
    </>
  );
}

const shopList = 
[{"_id":"61a52338287fcc53069875ae",
"name":"발우공양",
"franchise":0,
"category":"한식",
"phone":"02-733-2081"
,"location":{"region":"종로구","address":"서울 종로구 견지동 71 템플스테이 통합정보센터 5층"}
,"menu":[{"name":"선식","level":["비건"]},
{"name":" 원식","level":["비건"]},
{"name":" 마음식","level":["비건","페스토"]},
{"name":" 희식","level":["비건"]},
{"name":" 법식","level":["비건"]}],
"image":{"data1":"https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api","data2":"https://images.app.goo.gl/6MgRyqeTJzPjqZCv5"}}
];