npm run lint --fix
npm run build
cp -rf dist/* README.md /f/dev/rhofp.github.io/
cd /f/dev/rhofp.github.io/
git add -A
git commit -m "my schedule deployment"
git push -u origin master
cd -
