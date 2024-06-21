---
title: Git 常用指令
date: 2021-11-07 00:30:48
---

## 1、remote(绑定、删除远程仓库地址)

```
1、列出所有 remote 远程主机
   git remote
2、展示当前关联的其他仓库列表
   git remote -v
3、删除远程仓库关联关系
   git remote rm <name>（name即git remote出来的如：git remote rm origin）
4、关联自己的仓库地址
   git remote add origin <地址>  如： git remote add origin https://github.com/LeeyCul/ts-cli.git
   关联完成后，在将自己的本地的分支推到线上，如：git push origin main 或者 git push -u origin --all
```

## 2、status、add

```
1、查看文件状态git status -s
   ??：文件未被追踪
   A：文件已经添加到暂存区
   M：文件已经修改
   D：文件已经从stage删除
   R：文件已经被重命名
  U：更新但未合并
2、展示当前关联的其他仓库列表
   git add src/pages/文件名   【添加需要提交的文件名（加路径，参考git status 打印出来的文件路径）】
```

## 3、拉取、上传（rebase）

```
1、使用rebase拉取代码
  git pull —rebase origin master
```

## 4、stash(暂存 ps:新增的文件不会)：

```
1、暂存文件（两个功能一样）
   git stash
   git stash save '注释'
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
```

## 5、reset【清除回滚之后的记录】、revert【不会清除后续提交的记录】 回滚：

```
几乎都需需要-f强制推送
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
```

## 6、merge

```
1、查询提交commit记录
   git merge --no-ff feature 【--no-ff非快进式】
           A---B---C test
         /         \
D---E---F-----------G master

快进式
   A---B---C test
         /         master
D---E---F
```
