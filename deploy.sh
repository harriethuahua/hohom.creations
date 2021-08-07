#!/usr/bin/env sh

# 若出現錯誤就停止
set -e

# Build 專案
npm run build

# cd 
cd dist
git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:harriethuahua/hohom.creations.git master:gh-pages

cd -