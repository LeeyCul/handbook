import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { themeConfig } from "./config/index";

export default defineUserConfig({
  title: "码无止境 Code is Life",
  base:'/handbook/',
  description: "在无止境的编程代码世界里遨游，用代码改变我们的生活",
  theme: recoTheme(themeConfig),
});
