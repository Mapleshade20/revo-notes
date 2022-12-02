import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "Tips",
      prefix: "tips/",
      link: "tips/",
      children: "structure",
    },
    {
      text: "Revo",
      icon: "note",
      prefix: "notes/",
      link: "notes/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
});
