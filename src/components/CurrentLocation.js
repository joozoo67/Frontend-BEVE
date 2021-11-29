import React, { useState, useEffect } from "react";
import { Box, Text, Flex, Spacer } from "@chakra-ui/react";

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

  console.log(usePos);

  return (
    <Box>
      {usePos.lat}
      {usePos.lon}
    </Box>
  );
}
