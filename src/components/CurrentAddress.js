import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import CurrentLocation from "./CurrentLocation";
import axios from "axios";

export default function CurrentAddress(props) {
  const [useLoc, setUseLoc] = useState("");
  // 주소-좌표 변환 객체를 생성합니다
  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();
      geocoder.coord2Address("126.9218479000000","37.3649553000000", function(result, status) {      
        if (status === kakao.maps.services.Status.OK) {
          console.log(result[0]);     
          const newUseLoc = ( result[0].address.region_2depth_name);      
                setUseLoc(newUseLoc);                
        }
    });
   },[]);
   
  return <Box>{useLoc}</Box>;
}
