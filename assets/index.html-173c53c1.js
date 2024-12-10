import{_ as n,o as s,c as a,e,a as t}from"./app-5d9c6d30.js";const r="/assets/image-1-ce174a30.png",i="/assets/image-2-e99a9cf3.png",d={},l=e(`<p>当前端 web 项目中应用了 ts，我们不可能对成千上百的接口进行 interface 的类型定义,那样效率是极低的，但是我们又需要 ts 智能友好的提示信息，该怎么办？这是我们必须要面对的问题。</p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>根据 swagger.json 地址迅速生成 ts 接口，以及相关请求响应参的 interface 模块命令行工具。且支持 swagger 的 V2、V3 版本。其宗旨是利用 swagger 接口文档让前端的效率变得更高，接口的请求参、响应参以及接口命名将不在需要手动引入，让前端更聚焦在业务功能的开发，接口将全面与 swagger 进行同步。</p><h2 id="快速入门" tabindex="-1"><a class="header-anchor" href="#快速入门" aria-hidden="true">#</a> 快速入门</h2><h3 id="_1、安装" tabindex="-1"><a class="header-anchor" href="#_1、安装" aria-hidden="true">#</a> 1、安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i apitots-swaggers -g 或者 yarn add apitots-swaggers -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>全局安装能让命令在任何地方能运行，如果只安装在项目上，可执行文件将被安装到 node_modules/.bin 下，通常这个目录通常不会被加入系统的 PATH 环境变量，所以就需要在 script 内定义脚本进行运行方可成功跑通脚本，如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;apits:init&quot;</span><span class="token operator">:</span> <span class="token string">&quot;apits init&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;apits:gen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;apits tots&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>全局安装则不需要，可直接运行 apits 命令，两种方式可任意选择</p><h3 id="_2、帮助文档" tabindex="-1"><a class="header-anchor" href="#_2、帮助文档" aria-hidden="true">#</a> 2、帮助文档</h3><p>输入 apits,根据命令提示进行操作，如图:</p><p><img src="`+r+'" alt="alt text"></p>',12),c=t("div",{class:"custom-container warning"},[t("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[t("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[t("circle",{cx:"12",cy:"12",r:"9"}),t("path",{d:"M12 8v4"}),t("path",{d:"M12 16h.01"})])]),t("p",{class:"custom-container-title"},"WARNING"),t("p",null,"注意: request 需要到处 axios 的 request 类型，为 ts 提供类型,因为 request 需要接受两个类型，request、response")],-1),o=e('<h3 id="_3、api-说明" tabindex="-1"><a class="header-anchor" href="#_3、api-说明" aria-hidden="true">#</a> 3、API 说明</h3><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">说明</th><th style="text-align:center;">类型</th><th style="text-align:center;">是否必填</th><th style="text-align:center;">默认值</th></tr></thead><tbody><tr><td style="text-align:center;">serverUrl</td><td style="text-align:center;">服务地址，此处填其 json 地址</td><td style="text-align:center;">string</td><td style="text-align:center;">是</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">requestInstanceUrl</td><td style="text-align:center;">请求文件路径(request 路径)</td><td style="text-align:center;">string</td><td style="text-align:center;">否</td><td style="text-align:center;">axios</td></tr><tr><td style="text-align:center;">outputFilePath</td><td style="text-align:center;">输出文件路径</td><td style="text-align:center;">string</td><td style="text-align:center;">否</td><td style="text-align:center;">src/api</td></tr><tr><td style="text-align:center;">ImportBaseURL</td><td style="text-align:center;">设置接口的 baseURL 导入地址</td><td style="text-align:center;">string</td><td style="text-align:center;">否，搭配 baseURL</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">baseURL</td><td style="text-align:center;">设置接口的 baseURL</td><td style="text-align:center;">string</td><td style="text-align:center;">否，搭配 ImportBaseURL</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">includeTags</td><td style="text-align:center;">包含的接口 Tag</td><td style="text-align:center;">string</td><td style="text-align:center;">否</td><td style="text-align:center;">[]</td></tr><tr><td style="text-align:center;">excludeTags</td><td style="text-align:center;">排除的接口 Tag</td><td style="text-align:center;">string</td><td style="text-align:center;">否</td><td style="text-align:center;">[]</td></tr><tr><td style="text-align:center;">prefix</td><td style="text-align:center;">添加前缀，如代理请求模式，所有请求均请求到指定接口</td><td style="text-align:center;">string</td><td style="text-align:center;">否</td><td style="text-align:center;"></td></tr></tbody></table><h3 id="_4、结果" tabindex="-1"><a class="header-anchor" href="#_4、结果" aria-hidden="true">#</a> 4、结果</h3><p><img src="'+i+'" alt="alt text"></p>',4),g=[l,c,o];function p(x,h){return s(),a("div",null,g)}const y=n(d,[["render",p],["__file","index.html.vue"]]);export{y as default};
