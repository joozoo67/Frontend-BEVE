import React, { useRef, useEffect } from "react";
import { Box, Text, Flex, Spacer } from "@chakra-ui/react";
import { BiWebcam } from "react-icons/bi";

export default function Map() {
  useEffect(() => {
    kakao.maps.load(() => {
      const container = document.getElementById("map"),
        options = {
          center: new kakao.maps.LatLng(37.566826, 126.9786567), // 위도, 경도 입력
          level: 3,
        };
      const map = new kakao.maps.Map(container, options); // 지도그리기
      var markerPosition = new kakao.maps.LatLng(37.566826, 126.9786567);
      var marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    });
  });

  return <Box id={"map"} w="600px" h="600px"></Box>;
}
