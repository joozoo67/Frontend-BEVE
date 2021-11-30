import {
  extendTheme,
  defaultTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";

const theme = extendTheme({
  ...defaultTheme,
  colors: {
    beige: "#f4ecd5",
    mustardYello: "#d1a142",
    pink: "#e6494e",
    lightGreen: "#7ca83f",
    green: "#1e4500",
  },
  fonts: {
    heading: "Pontano Sans",
    body: "Pontano Sans",
  },
});

export default theme;
