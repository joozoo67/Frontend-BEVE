/*global kakao*/
import React, { useState, useEffect } from "react";
import { Box, Text, Flex, Spacer } from "@chakra-ui/react";
import CurrentAddress from "./CurrentAddress";

export default function CurrentLocation() {
  const [usePos, setUsePos] = useState({ lat: null, lon: null });
  const [isError, setIsError]=useState(false);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const newUserPos = {
          lat: (position.coords.latitude).toFixed(13),
          lon: (position.coords.longitude).toFixed(13),
        };
        setUsePos(newUserPos);
      });
    } else {
        setIsError(true);
    }
  }, []);
  console.log(usePos);
  if(isError){
    return(<Box>사용자의 위치를 찾을 수 없습니다</Box>);
  }

  return <Box><CurrentAddress usePos={usePos} /></Box>;
}
