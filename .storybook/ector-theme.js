import { create } from "@storybook/theming";
import logoUrl from "./logo-ector.svg";

export default create({
  base: "dark",
  brandTitle: "Ector",
  brandUrl: "https://docs.ector.store",
  brandImage: logoUrl,

  colorPrimary: "#47D7AC",
  colorSecondary: "#11111F",

  barTextColor: "white",
  barSelectedColor: "white",

  // Text colors
  textColor: "white",
  textInverseColor: "rgba(255,255,255,0.9)",
});
