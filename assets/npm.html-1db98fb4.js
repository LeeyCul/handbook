import{_ as e,o as n,c as i,e as a}from"./app-4b62f06d.js";const s={},d=a(`<p><strong>user: lihongpei</strong><strong>password: 123456</strong></p><h2 id="_1、查看、设置源" tabindex="-1"><a class="header-anchor" href="#_1、查看、设置源" aria-hidden="true">#</a> 1、查看、设置源</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、查看源
   npm config get registry
   npm config set registry https://registry.npmmirror.com
   - https://registry.npm.taobao.org
   - https://npm.cd120.info
   - https://registry.npmmirror.com

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、verdaccio-发布包" tabindex="-1"><a class="header-anchor" href="#_2、verdaccio-发布包" aria-hidden="true">#</a> 2、Verdaccio 发布包</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm adduser --registry https://npm.cd120.info
npm login --registry https://npm.cd120.info
npm publish --registry https://npm.cd120.info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、卸载、安装" tabindex="-1"><a class="header-anchor" href="#_3、卸载、安装" aria-hidden="true">#</a> 3、卸载、安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install &lt;pakage&gt;@&lt;版本&gt;
npm uninstall &lt;pakage&gt; 【/usr/local/bin/】

npm link 【全局调试包】
npm link &lt;pakage&gt;  【只在当前项目】

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、安装本地包" tabindex="-1"><a class="header-anchor" href="#_4、安装本地包" aria-hidden="true">#</a> 4、安装本地包</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &quot;dependencies&quot;: {
      &quot;karavan-core&quot;: &quot;file:../karavan-core&quot;,
   },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),r=[d];function t(l,c){return n(),i("div",null,r)}const v=e(s,[["render",t],["__file","npm.html.vue"]]);export{v as default};
