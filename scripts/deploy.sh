#!/usr/bin/env sh

set -e

yarn build

cd build

git init
git add .
git commit -m 'deploy'

git push -f git@github.com:murrrrphy/murney-react-website.git master:gh-pages

cd -