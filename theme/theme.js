import {
  extendTheme,
  defaultTheme,
} from "@chakra-ui/react";

const theme = extendTheme({
  ...defaultTheme,
  colors: {
    lightbeige: "#F5EDEA",
    beige: "#F2E3DC",
    mustardYello: "#d1a142",
    pink: "#e6494e",
    black: "#5c5c5c",
    lightGreen: "#99BB96",
    green: "#3E603B",
  },
  fonts: {
    heading: "Zilla",
    body: "Zilla",
  },
});

export default theme;
