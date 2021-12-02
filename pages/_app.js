import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Fonts from "../theme/Fonts";
import theme from "../theme/theme";

export default function App({ Component }) {
  return (
    // <RecoilRoot>
      <ChakraProvider theme={theme}>
      <Fonts />
      <Component />
    </ChakraProvider>
    // </RecoilRoot>
    
  );
}


