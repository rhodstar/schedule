#!/bin/sh
# Setup variables
localRepoPath="/f/dev/roverty.github.io/"
commitMessage=${*:-"my schedule deployment"}

npm run lint --fix
npm run build
cp -rf dist/* README.adoc assets/ docs/ ${localRepoPath}
cd ${localRepoPath}
git add -A
git commit -m "${commitMessage}"
git push -u origin main
cd -
