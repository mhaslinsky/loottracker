import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

// 2. Add your color mode config
// const config: ThemeConfig = {
//   initialColorMode: "dark",
//   useSystemColorMode: false,
// };

const overrides = {
  components: {
    Button: {
      baseStyle: { _focus: { boxShadow: "none" } },
    },
    Switch: { baseStyle: { _focus: { boxShadow: "none" } } },
    Input: { baseStyle: { _focus: { boxShadow: "none" } } },
    Popover: { baseStyle: { _focus: { boxShadow: "none" } } },
  },
};

// const fonts = {
//   fonts: { heading: "Manrope, sans-serif", body: "Manrope, sans-serif" },
// };

// 3. extend the theme
const theme = extendTheme(
  {
    config: { initialColorMode: "dark", useSystemColorMode: false },
    overrides,
    fonts: { heading: "Manrope, sans-serif", body: "Manrope, sans-serif" },
  },
  withDefaultColorScheme({ colorScheme: "purple" })
);

export default theme;
