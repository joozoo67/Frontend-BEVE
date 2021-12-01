import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactQueryDevtools } from 'react-query/devtools'
import {QueryClient, QueryClientProvider} from "react-query"

import Fonts from "../theme/Fonts";
import theme from "../theme/theme";

const queryClient = new QueryClient();

export default function App({ Component }) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Fonts />
        <Component />
      </QueryClientProvider>
    </ChakraProvider>
  );
}
