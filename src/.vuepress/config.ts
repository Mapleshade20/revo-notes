import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Notes",
      description: "OrgSnow's personal notes",
    },
  },

  theme,

  shouldPrefetch: false,
});
