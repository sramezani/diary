#! /bin/bash
# cache clear for react native app and fresh install 

echo 'watchman cache clearing...'
watchman watch-del-all

echo 'node-modules install...'
rm package-lock.json
rm -rf node_modules && npm install

echo 'npm cache clearing...'
npm start -- --reset-cache