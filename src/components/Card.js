import { Box, Image, Text, Flex, Spacer } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Card() {
  const shopList = [
    {
      name: "발우공양",
      franchise: 0,
      category: "한식",
      phone: "02-733-2081",
      location: "종로구",
      address: "서울 종로구 견지동 71 템플스테이 통합정보센터 5층",

      images: [
        "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "@#$(#_$",
      ], // 이미지 주소

      menu: [
        { name: "선식", level: "비건" },
        { name: "원식", level: "비건" },
        { name: "마음식", level: "비건" },
        { name: "희식", level: "비건" },
        { name: "법식", level: "비건" },
      ],
    },
  ];
  const [loading, setLoading] = useState(false);
  const [shop, setShop] = useState("");

  useEffect(() => {
    const shopCard = async () => {
      setLoading(true);
      const response = await axios.get("");
      setShop(response.data);
      setLoading(false);
    };
    shopCard();
  }, []);

  if (loading) return <div>로딩중</div>;

  return shopList.map((value, index) => (
    <Box boxShadow="md" borderRadius="15" p={5} w="20rem" h="20rem">
      <Flex>
        <Spacer />
        <Image src={value.images[0]} align="center" />
        <Spacer />
      </Flex>
      <Flex>
        <Text mb={2}>{value.name}</Text>
        <Spacer />
        <Text justifySelf="end">{value.category}</Text>
      </Flex>

      <Text>{value.address}</Text>
    </Box>
  ));
}
