import { commentConfig } from "./commentConfig";
import { navbar } from "./navbar";
import { series } from "./series";

export const themeConfig = {
  style: "@vuepress-reco/style-default",
  logo: "/logo.png",
  author: "Leeycul",
  authorAvatar: "/logo.png",
  lastUpdatedText: "",
  commentConfig:commentConfig,
  series: series,
  navbar: navbar,
}