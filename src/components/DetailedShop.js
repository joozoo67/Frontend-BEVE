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

export default function DetailedShop() {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
          <ModalHeader> 
          <Image
          w="30rem"
          h="30rem"
          boxShadow="md"
          borderRadius="1rem"
          src={food.src}
    
        />
         <ModalCloseButton />
        </ModalHeader>
          <ModalBody>
          <Flex direction="column" justify="center">
        <Box m={3}>
          <Text fontSize="2rem" fontWeight="bolder"></Text>
          <Text color="#868e96"></Text>
              <Text>{shopList[0].name}</Text>
              <Text>category: {shopList[0].category}</Text>
              <Text>phone: {shopList[0].phone}</Text>
              <Text>address: {shopList[0].address}</Text>
              <Text>Menu</Text>
              <Text>
                {Menu(shopList[0].menu).map((menus) => (
                  <Flex>
                    <Text>{menus.name}</Text>
                    <Spacer />
                    <Text>{menus.level}</Text>
                  </Flex>
                ))}
              </Text>
            </Box>
      </Flex>
          </ModalBody>
          <ModalFooter>
          <Flex justify="center">
            <Map />
          </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    
    </>
  );
}

const shopList = [
  {
    name: "기웃기웃",
    franchise: 0,
    category: "카페",
    phone: "010-5472-9773",
    location: "마포구",
    address: "서울 마포구 신촌로12다길 20",

    images: [
      "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "@#$(#_$",
    ], // 이미지 주소

    menu: [
      { name: "카페라떼", level: "락토/비건" },
      { name: "라벤더라떼", level: "락토/비건" },
      { name: "플랫화이트", level: "락토/비건" },
      { name: "쇼콜라", level: "락토" },
      { name: "피스타&바나나쉐이크", level: "비건" },
      { name: "비건 피넛버터쿠키", level: "비건" },
      { name: "비건 두부크림빵", level: "비건" },
    ],
  },
];
