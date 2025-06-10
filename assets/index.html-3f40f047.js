import{_ as e,o as n,c as i,e as r}from"./app-4b62f06d.js";const a={},s=r(`<h2 id="_1、用途" tabindex="-1"><a class="header-anchor" href="#_1、用途" aria-hidden="true">#</a> 1、用途</h2><p>使用 npm 或者 yarn 安装依赖时，指定依赖的镜像源，以及配置配置缓存目录等功能。</p><h2 id="_2、常见命令" tabindex="-1"><a class="header-anchor" href="#_2、常见命令" aria-hidden="true">#</a> 2、常见命令</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#查看当前设置的源
npm config get registry

修改包下载源
npm config set registry https://registry.npmmirror.com

#查看当前npm配置文件信息
npm config get 和npm config list 功能一致

# 查看全局已经安装过的 node 包
npm list -g

# 更新指定包
npm update 包名

# 卸载指定包
npm uninstall 包名
测试本地包
npm link/npm link 模块名/npm unlink 模块名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、使用-npmrc-配置镜像源" tabindex="-1"><a class="header-anchor" href="#_3、使用-npmrc-配置镜像源" aria-hidden="true">#</a> 3、使用.npmrc 配置镜像源</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># .npmrc

# 指定项目下所有包的源【注：如果其他前缀规则没有匹配到，则使用这里的源】
registry=https://registry.npmmirror.com

#设置同一个前缀/目录下包的源
如：下面的设置将前缀为@babel开头的包源指向了华为源
@babel:registry=https://mirrors.huaweicloud.com/repository/npm/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、使用-yarnrc-配置镜像源" tabindex="-1"><a class="header-anchor" href="#_4、使用-yarnrc-配置镜像源" aria-hidden="true">#</a> 4、使用.yarnrc 配置镜像源</h2><h5 id="使用小于yarn-2-0安装依赖" tabindex="-1"><a class="header-anchor" href="#使用小于yarn-2-0安装依赖" aria-hidden="true">#</a> 使用小于yarn@2.0安装依赖</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># .yarnrc

# 指定项目下所有包的源【注：如果其他前缀规则没有匹配到，则使用这里的源】
&quot;registry&quot; &quot;https://registry.npmmirror.com/&quot;

#设置同一个前缀/目录下包的源
如：下面的设置将前缀为@babel开头的包源指向了华为源
&quot;@babel:registry&quot; &quot;https://mirrors.huaweicloud.com/repository/npm/&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="使用大于等于yarn-2-0安装依赖" tabindex="-1"><a class="header-anchor" href="#使用大于等于yarn-2-0安装依赖" aria-hidden="true">#</a> 使用大于等于yarn@2.0安装依赖</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># .yarnrc.yml
# 指定项目下所有包的源【注：如果其他前缀规则没有匹配到，则使用这里的源】
&quot;npmRegistryServer&quot;: &quot;http://mirrors.cloud.tencent.com/npm/&quot;

# 设置同一个前缀/目录下包的源
# 下面的设置将前缀为babel的包源指向了华为源
# 如果babel前缀的包依赖了其他非babel前缀的包，那么这些非babel的包将不适用该规则
&quot;npmScopes&quot;:
  # babel不能以@为开头
  &quot;babel&quot;:
    &quot;npmRegistryServer&quot;: &quot;https://mirrors.huaweicloud.com/repository/npm/&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、注意事项" tabindex="-1"><a class="header-anchor" href="#_5、注意事项" aria-hidden="true">#</a> 5、注意事项</h2><p>如何单独为某个包指定镜像源？npm 和 yarn 均无法为单个包配置镜像源。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># .npmrc

# 目的是为antd单独指定镜像源【不支持这种】
antd:registry=https://mirrors.huaweicloud.com/repository/npm/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6、配置文件的优先级如何" tabindex="-1"><a class="header-anchor" href="#_6、配置文件的优先级如何" aria-hidden="true">#</a> 6、配置文件的优先级如何？</h2><p>项目根目录中的要比用户目录中的配置文件优先级更高。 当执行 npm install 命令，npm 会按照如下顺序查找配置。读取成功就不再往后找了。</p><p>/project/.npmrc /user/.npmrc</p><h4 id="ps-注意-yarn-可以使用-npmrc-的配置" tabindex="-1"><a class="header-anchor" href="#ps-注意-yarn-可以使用-npmrc-的配置" aria-hidden="true">#</a> ps:注意：yarn 可以使用.npmrc 的配置</h4><p>如果你有了.npmrc，yarn 可以直接用。（仅限于小于yarn@2.0的版本中） 当执行 yarn install 命令，yarn 会按照如下顺序查找配置。读取成功就不再往后找了。</p><p>/project/.npmrc /user/.npmrc /project/.yarnrc /user/.yarnrc</p><h2 id="_7、常见配置命令" tabindex="-1"><a class="header-anchor" href="#_7、常见配置命令" aria-hidden="true">#</a> 7、常见配置命令</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 设置注册表
registry=https://registry.npmmirror.com

# 用于修复node版本不兼容的命令配置，主要用于在install过程中的版本过低提示
ignore-engines true

# 指定缓存文件的存储路径，用于缓存下载的包。
cache=/path/to/cache

# 配置认证 token：
//registry.npmjs.org/:_authToken=your-token-here

其他具体命令在使用过程进行搜索
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),d=[s];function l(c,t){return n(),i("div",null,d)}const m=e(a,[["render",l],["__file","index.html.vue"]]);export{m as default};
