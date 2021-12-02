import React, { useState, useEffect } from "react";
import { Box, Text, Flex, Spacer } from "@chakra-ui/react";
import axios from "axios";

export default function CurrentLocation() {
  const [usePos, setUsePos] = useState({ lat: null, lon: null });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const newUserPos = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        setUsePos(newUserPos);
      });
    } else {
    }
  }, []);

  //7DC681B4-C835-3C32-96CB-7910D87A6C83
  console.log(usePos);

  var geocoder=new kakao.maps.services.Geocoder();
  geocoder.coord2Address(usePos.lat,usePos.lon);

  return <Box></Box>;
}
