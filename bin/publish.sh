#!/bin/bash

rm -rf dist/

npm run build

cp package.json dist/

cd dist/

npm publish

