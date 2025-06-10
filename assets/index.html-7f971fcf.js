import{_ as d,r as a,o as t,c as u,a as e,b as n,d as s,e as l}from"./app-4b62f06d.js";const v="/assets/image-2-eb879c46.png",r="/assets/image-3-f310daa5.png",o={},c=l(`<p><strong>pnpm 是什么</strong>？</p><blockquote><p>速度快、节省磁盘空间的软件包管理器</p></blockquote><p><strong>monorepo 是什么？</strong></p><blockquote><p>monorepo 是包含多个不同项目的单个存储库，具有明确定义的关系。</p></blockquote><p><strong>为什么需要 monorepo？</strong></p><blockquote><p>当你需要同时维护多个技术栈类似的项目，而这些项目之间互相依赖的时候，使用 monorepo 会有很多好处，比如：</p><ul><li>项目基础设施可以统一管理，比如 eslint、prettier、tsconfig 等</li><li>项目中抽离的公共代码库，在互相依赖的时候可以很方便的进行依赖管理和调试，比如 utils、api、ui 等</li><li>以及使用 npm、yarn、pnpm 等包管理器可以方便的进行第三方依赖的统一管理，达到节省安装空间，提升安装速度等目的</li></ul></blockquote><h2 id="_1、准备工作" tabindex="-1"><a class="header-anchor" href="#_1、准备工作" aria-hidden="true">#</a> 1、准备工作</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 安装pnpm
npm install -g pnpm

1.创建一个项目文件夹:
mkdir monorepoo-project
cd monorepo-project

在项目中新建若干文件夹，搭建项目结构：
├─apps  # 应用代码目录
│  ├─admin  # 管理平台应用
│  └─portal # 门户网站应用
└─packages # 公共库
    ├─api # api管理
    ├─tsconfig # tsconfig配置
    ├─ui # 公共组件
    └─utils # 公共方法

2.在项目根目录新建文件 pnpm-workspace.yaml，写入如下代码：

# pnpm-workspace.yaml

packages:
  - &quot;packages/*&quot;
  - &quot;apps/*&quot;

3.然后进行一些初始化工作，在下面根目录初始化生成 package.json:
pnpm init

然后修改生成的 package.json：
{
  &quot;name&quot;: &quot;monorepo-project&quot;,
  &quot;version&quot;: &quot;1.0.0&quot;,
  &quot;scripts&quot;: {},
  &quot;devDependencies&quot;: {}
}
基础的项目目录结构以及准备工作就完成了，接下来进行编码工作，去体验一下
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、编写-demo" tabindex="-1"><a class="header-anchor" href="#_2、编写-demo" aria-hidden="true">#</a> 2、编写 Demo</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在 packages/utils 初始化一下应用:
pnpm init

删除不需的多余的，保留如下：

{
  &quot;name&quot;: &quot;utils&quot;,
  &quot;version&quot;: &quot;0.0.0&quot;,
  &quot;main&quot;: &quot;./index.ts&quot;,
  &quot;module&quot;: &quot;./index.ts&quot;
}

然后再新建一个文件 index.ts，写入一个测试方法

function hello(msg = &quot;world&quot;) {
  return \`hello \${msg}!\`;
}

export { hello };

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编写 admin demo</strong> 这里使用 vite + react 技术栈，在 apps/admin 里初始化一下应用，在 apps/admin 初始化一下应用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 可以直接创建、复制都可以
cd ./apps/portal
pnpm create vite
如果在一个已经存在的文件夹下初始化 vite 应用，可以在 Project name 的时候输入 . ，这样就以已存在的文件夹作为应用目录

将 apps/portal 生成的 package.json 里的依赖配置剪切到根目录下的 package.json，只保留基本的：
{
  &quot;name&quot;: &quot;portal&quot;,
  &quot;private&quot;: true,
  &quot;version&quot;: &quot;0.0.0&quot;,
  &quot;type&quot;: &quot;module&quot;,
  &quot;scripts&quot;: {
    &quot;dev&quot;: &quot;vite&quot;,
    &quot;build&quot;: &quot;tsc &amp;&amp; vite build&quot;,
    &quot;preview&quot;: &quot;vite preview&quot;
  }
}
到时候以来可以共用根目录下的，以达到减少依赖的作用
然后在根目录安装一下依赖，这里安装在根目录的依赖是整个项目都可以直接使用的

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: tips 1.依赖安装到根目录 使用 -w 参数，比如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm add axios -w
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.如果要在指定的应用中安装依赖，使用 --filter 参数，比如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm --filter admin add axios 或者 pnpm i axios --filter admin

#--filter 也可以指定在具体应用下执行脚本命令，比如：
# 启动 portal 应用
pnpm --filter admin dev
当然也可以用其他方法，在根目录的package.json下改写script
![alt text](image.png)

3.--parallel 会找项目里找所有你后边跟的脚本命令比如我们现在这个 monorepo 下有两个应用有 preview ，那这两个应用的 preview 都会运行
pnpm run --parallel dev

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),m={href:"https://www.pnpm.cn/cli/run",target:"_blank",rel:"noopener noreferrer"},p=l(`<p>接下来把刚才写的 utils 添加到 admin 中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;portal&quot;,
  &quot;private&quot;: true,
  &quot;version&quot;: &quot;0.0.0&quot;,
  &quot;type&quot;: &quot;module&quot;,
  &quot;scripts&quot;: {
    &quot;dev&quot;: &quot;vite&quot;,
    &quot;build&quot;: &quot;tsc &amp;&amp; vite build&quot;,
    &quot;preview&quot;: &quot;vite preview&quot;
  },
  &quot;dependencies&quot;: {
    &quot;utils&quot;: &quot;workspace:*&quot;
  }
}

# ps: 这里名称最好和utils里面的package.json一致

# 这里的 &quot;utils&quot;: &quot;workspace:*&quot; 是手动添加的，因为 npm 上是存在 utils 这个库的，
版本号写成 workspace:*，workspace 代表的是工作空间，这个在 pnpm 里有介绍，
* 是代表使用最新版本版本，不过在本项目中也不存在依赖库版本变更问题。

# 然后在项目根目录下执行依赖安装
pnpm install


#在 admin 中引入 utils，并使用我们编写的测试方法
![alt text](image-1.png)

然后改一下 utils 提供的方法 hello 输出，再看一下 admin

可以看到admin 不需要重启，utils 的修改就已经生效了，而且 utils 也不需要打包就可以引入使用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-打包" tabindex="-1"><a class="header-anchor" href="#_3-打包" aria-hidden="true">#</a> 3.打包</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 打包
pnpm --filter portal build
# 预览
pnpm --filter portal preview
也可以配置到根目录的package.json里面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他组件也是如此： <img src="`+v+'" alt="alt text"><img src="'+r+'" alt="alt text"></p>',5),b={href:"https://juejin.cn/post/7122265283451944974",target:"_blank",rel:"noopener noreferrer"},q={href:"https://juejin.cn/post/7290755652524048439",target:"_blank",rel:"noopener noreferrer"};function g(x,h){const i=a("ExternalLinkIcon");return t(),u("div",null,[c,e("p",null,[n("具体请查看"),e("a",m,[n("pnpm 中文网"),s(i)]),n(" :::")]),p,e("p",null,[e("a",b,[n("参考"),s(i)]),e("a",q,[n("lerna+pnpm+monorepo 的模式"),s(i)])])])}const k=d(o,[["render",g],["__file","index.html.vue"]]);export{k as default};
