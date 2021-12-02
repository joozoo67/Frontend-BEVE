import React, { useState, useEffect } from "react";
import { Box, Text, Flex, Spacer } from "@chakra-ui/react";
import CurrentAddress from "./CurrentAddress";

export default function CurrentLocation() {
  const [usePos, setUsePos] = useState({ lat: null, lon: null });

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
    }
  }, []);
  console.log(usePos);

  return <Box><CurrentAddress usePos={usePos} /></Box>;
}
