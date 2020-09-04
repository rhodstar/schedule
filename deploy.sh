npm run build
cp -rf dist/* /f/portafolio/rhofp.github.io/
cd /f/portafolio/rhofp.github.io/
git add -A
git commit -m "my schedule deployment"
git push -u origin master
cd -
