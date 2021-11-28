import { Box, Text, Flex, Spacer, Image } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import food from "../../public/img/food.png";

export default function DetailedShop() {
  return (
    <Box boxShadow="md" borderRadius="15" p={5} w="20rem" h="20rem">
      <Image boxShadow="md" borderRadius="1rem" src={food.src} p={1} />
    </Box>
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
