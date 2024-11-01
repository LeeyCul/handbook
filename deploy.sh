# 确保脚本抛出遇到的错误 sh deplop.sh发布内容
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
echo 'blog.cullee.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/LeeyCul/handbook.git main:gh-pages

cd -
