import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import CurrentLocation from "./CurrentLocation";
import axios from "axios";

export default function CurrentAddress({usePos}) {
  console.log(usePos);
  const [noLoc, setNoLoc]=useState(false);
  const [useLoc, setUseLoc] = useState("");
  // 주소-좌표 변환 객체를 생성합니다
  
  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();
    try{
    if(usePos.lat!=null){
      console.log(usePos);
      geocoder.coord2Address(usePos.lon, usePos.lat, function(result, status) {      
        if (status === kakao.maps.services.Status.OK) {
          console.log(usePos);
          console.log(result[0]);     
          const newUseLoc = ( result[0].address.region_2depth_name);      
                setUseLoc(newUseLoc);                
              }
            }
    );}}catch(e){
      setNoLoc(true);    
    };
    setNoLoc(false);
   },[usePos]);

   if(noLoc){
     return(<div>에러</div>);
   }
  return <Box>{useLoc}</Box>;
}
