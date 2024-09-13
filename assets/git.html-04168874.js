import{_ as s,o as d,c as a,e as n,a as e,b as i}from"./app-33dc414e.js";const t={},l=n(`<h2 id="_1、remote" tabindex="-1"><a class="header-anchor" href="#_1、remote" aria-hidden="true">#</a> 1、remote</h2><p>绑定、删除远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、列出所有 remote 远程主机
   git remote

2、展示当前关联的其他仓库列表
   git remote -v

3、删除远程仓库关联关系
   git remote rm &lt;name&gt;（name即git remote出来的如：git remote rm origin）

4、关联自己的仓库地址
   git remote add origin &lt;地址&gt;
   如：git remote add origin https://github.com/LeeyCul/ts-cli.git关联完成后
      在将自己的本地的分支推到线上，如：git push -u origin main 或者 git push -u origin --all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、status、add" tabindex="-1"><a class="header-anchor" href="#_2、status、add" aria-hidden="true">#</a> 2、status、add</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、查看文件状态git status -s
   ??：文件未被追踪
   A：文件已经添加到暂存区
   M：文件已经修改
   D：文件已经从stage删除
   R：文件已经被重命名
  U：更新但未合并

2、展示当前关联的其他仓库列表
   git add src/pages/文件名   【添加需要提交的文件名（加路径，参考git status 打印出来的文件路径）】
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、rebase" tabindex="-1"><a class="header-anchor" href="#_3、rebase" aria-hidden="true">#</a> 3、rebase</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、使用rebase拉取代码
  git pull —rebase origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、stash-暂存" tabindex="-1"><a class="header-anchor" href="#_4、stash-暂存" aria-hidden="true">#</a> 4、stash 暂存</h2>`,8),r=e("div",{class:"custom-container warning"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8v4"}),e("path",{d:"M12 16h.01"})])]),e("p",{class:"custom-container-title"},"WARNING"),e("p",null,[i("直接 "),e("strong",null,"stash"),i(" 新增的文件不回暂存，需要加上-u")])],-1),v=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、暂存文件（两个功能一样）
   git stash
   git stash save &#39;注释&#39;
   git stash -u(包括新增)

2、恢复暂存
   git stash pop
   git stash pop stash@{$num}

3、列出所有暂存
   git stash list
   git stash show (查看最新暂存)

4、将暂存的代码在其他地方、分支使用，且不会删除
   git stash apply  【默认第一个，后续需要根据list内】
   git stash apply stash@{1}

5、删除暂存
   git stash drop stash@{$num}
   git stash clear（删除全部）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、reset、revert" tabindex="-1"><a class="header-anchor" href="#_5、reset、revert" aria-hidden="true">#</a> 5、reset、revert</h2>`,2),c=e("div",{class:"custom-container info"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])]),e("p",{class:"custom-container-title"},"INFO"),e("ul",null,[e("li",null,[e("code",null,"reset"),i(" 清除回滚之后的记录")]),e("li",null,[e("code",null,"revert"),i(" 不会清除后续提交的记录")])])],-1),u=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>几乎都需需要-f强制推送
1、查询提交commit记录
   git log 【全部】
   git log -3 【最近3条】

2、回退reset
   ps: 应该是上次的id才对
   git reset --mixed HEAD^ 【会撤销git add .】
   git reset --soft HEAD^ 【撤销到上次】  git reset --soft commit_id（最好） 【不会撤销git add .】
   git reset --hard HEAD^  【撤销 commit、撤销 git add . 操作、撤销修改代码】慎用

3、回退revert【将撤销版本之后的提交做一个新的commit重新做提交】
   git revert commit_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6、merge" tabindex="-1"><a class="header-anchor" href="#_6、merge" aria-hidden="true">#</a> 6、merge</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、查询提交commit记录
   git merge --no-ff feature 【--no-ff非快进式】
           A---B---C test
         /         \\
D---E---F-----------G master

快进式
   A---B---C test
         /         master
D---E---F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),m=[l,r,v,c,u];function o(b,g){return d(),a("div",null,m)}const x=s(t,[["render",o],["__file","git.html.vue"]]);export{x as default};
