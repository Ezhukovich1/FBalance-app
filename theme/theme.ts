import {extendTheme} from "native-base";

export const theme = extendTheme({
  colors: {
    brand: {
      400: "#8B85C1",
      500: "#5C6D70",
      600: "#7293A0", // <-- This is the default brand color
    },
    text: {
      600: "#000",
    },
    helper: {
      300: "#D4D4D4",
      400: "#EDEDED",
      500: "#393939",
      600: "#808080",
    },
    success: {
      100: "rgba(0, 144, 15, 0.3)",
      200: "#DAFFDE",
      600: "#00940F",
    },
  },
});

// Below to make typescript understand we are using the
// extended theme, used mainly for intellisense and autocomplete
type CustomThemeType = typeof theme;

declare module "native-base" {
  interface ICustomTheme extends CustomThemeType {}
}
