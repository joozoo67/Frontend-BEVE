import { Box, Text, Flex, IconButton, Button, Grid } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Card from "../Card";

export default function NearShops() {
  const [location, setLocation] = useState("");
  //API 불러서 주소 가져오고, setLocation하기
  //불러온 주소를 바탕으로 filter 돌리기
  const [count, setCount] = useState(0);

  const next = () => {
    if (count == shopList.length - 1) setCount(0);
    else setCount(count + 1);
  };
  const before = () => {
    if (count == 0) setCount(shopList.length - 1);
    else setCount(count - 1);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      textAlign="center"
      py="3%"
      px={{ base: "3%", md: "5%" }}
      bgColor="#F3E6DF"
      flexGrow={1}
    >
      <Text fontSize="4xl" fontWeight="bold" color="#3E603B">
        주변 음식점
      </Text>
      <Text fontSize="2xl" color="#5C5C5C">
        <br />현 위치: {location}
      </Text>
      <Flex alignItems="center" justify="center" mt="1.5rem">
        <Button
          as={BsChevronCompactLeft}
          onClick={before}
          size="lg"
          variant="ghost"
        />
        <Grid
          templateColumns="repeat(2, 1fr)"
          justifyItems="center"
          py="3%"
          px={{ base: "3%", md: "5%" }}
        >
          <Flex flexDirection="column">
            <Text>{shopList[count].name}</Text>
            <Text>{shopList[count].category}</Text>
            <Text>{shopList[count].address}</Text>
          </Flex>
        </Grid>
        <IconButton
          as={BsChevronCompactRight}
          onClick={next}
          size="lg"
          variant="ghost"
        />
      </Flex>
    </Box>
  );
}

const layout = {
  cardDirection: "",
  textDirection: "",
  boxShadow: "",
  fontSize: "",
};

//test cases
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
  {
    name: "지니네컵밥",
    franchise: 0,
    category: "한식",
    phone: "010-9073-8440",
    location: "서대문구",
    address: "서울 서대문구 신촌역로 22-5",

    images: [
      "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "@#$(#_$",
    ], // 이미지 주소

    menu: [{ name: "야채컵밥", level: "페스코/비건" }],
  },
  {
    name: "보울룸",
    franchise: 0,
    category: "양식",
    phone: "002-3145-3085",
    location: "서대문구",
    address: "서울 서대문구 연세로 13 현대백화점 유플렉스 11층",

    images: ["", ""], // 이미지 주소

    menu: [
      { name: "보울룸 시그니처", level: "비건" },
      { name: "또띠아 칩", level: "비건" },
    ],
  },
  {
    name: "베지베어",
    franchise: 0,
    category: "양식",
    phone: "070-7938-7373",
    location: "서대문구",
    address: "서울시 서대문구 신촌역로 22-5",

    images: ["", ""], // 이미지 주소

    menu: [
      { name: "된장 이불 도시락", level: "비건" },
      { name: "고추장 덤불", level: "비건" },
      { name: "간장 덤불", level: "비건" },
      { name: "토마토 스튜", level: "비건" },
      { name: "비건 토마토 함박 스테이크", level: "비건" },
      { name: "고추장 이불 도시락", level: "비건" },
      { name: "소이 밀크티", level: "비건" },
      { name: "티 에이드", level: "비건" },
    ],
  },
  {
    name: "롯데리아",
    franchise: 1,
    category: "양식",
    phone: "0507-1323-8884",
    location: "서대문구",
    address: "서울시 서대문구 신촌로 15",

    images: ["", ""], // 이미지 주소

    menu: [
      { name: "리아미라클버거", level: "비건" },
      { name: "어썸버거", level: "비건" },
    ],
  },
  {
    name: "머노까머나",
    franchise: 1,
    category: "인도/중동",
    phone: "02-338-4343",
    location: "서대문구",
    address: "서울시 서대문구 연세로11길 13",

    images: ["", ""], // 이미지 주소

    menu: [
      { name: "믹스 베지터블", level: "비건" },
      { name: "알루 고비", level: "비건" },
      { name: "차나 마살라", level: "비건" },
      { name: "달 머커니", level: "비건" },
      { name: "빨락 알루", level: "비건" },
      { name: "알루 머터", level: "비건" },
      { name: "빠니르 마카니", level: "락토" },
      { name: "빨락 빠니르", level: "락토" },
      { name: "머터 파닐 마살라", level: "락토" },
      { name: "베지터블 짜오면", level: "비건" },
      { name: "베지터블 브리야니", level: "비건" },
      { name: "베지터블 커리 파스타", level: "비건" },
      { name: "사모사", level: "비건" },
      { name: "알루덤", level: "비건" },
      { name: "파파드", level: "비건" },
      { name: "마살라 파파드", level: "비건" },
    ],
  },
  {
    name: "옥루몽",
    franchise: 0,
    category: "한식",
    phone: "02-312-0015",
    location: "서대문구",
    address: "서울시 서대문구 연세동문길 18",

    images: ["", ""], // 이미지 주소

    menu: [
      { name: "팥죽", level: "비건" },
      { name: "단호박죽", level: "비건" },
    ],
  },
  {
    name: "투고샐러드",
    franchise: 0,
    category: "양식",
    phone: "02-393-2290",
    location: "서대문구",
    address: "서울시 서대문구 연세로 12길 30",

    images: ["", ""], // 이미지 주소

    menu: [
      { name: "바질 페스토", level: "락토오보/락토" },
      { name: "모짜렐라 치즈 샐러드", level: "락토오보" },
      { name: "리코타 치즈 샐러드", level: "락토" },
      { name: "훈제연어 샐러드", level: "페스코" },
    ],
  },
  {
    name: "본죽&비빔밥cafe",
    franchise: 1,
    category: "한식",
    phone: "02-312-6288",
    location: "서대문구",
    address: "서울시 서대문구 연세로 20",

    images: ["", ""], // 이미지 주소

    menu: [
      { name: "특전복내장죽", level: "페스코" },
      { name: "특전복죽", level: "페스코" },
      { name: "낙지김치죽", level: "페스코" },
      { name: "녹두죽", level: "비건" },
    ],
  },
  {
    name: "더브레드블루",
    franchise: 1,
    category: "베이커리",
    phone: "070-4128-0720",
    location: "마포구",
    address: "서울 마포구 신촌로12다길 3",

    images: ["", ""], // 이미지 주소

    menu: [
      { name: "TBB 비건미트 피자", level: "비건" },
      { name: "레몬스콘", level: "비건" },
      { name: "맘모스빵", level: "비건" },
      { name: "초코머핀", level: "비건" },
    ],
  },
];
