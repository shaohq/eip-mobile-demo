#!/bin/bash
# datetime=`date +%Y%m%d-%H%M%S`
# echo $datetime
tag=eipwork/eip-mobile-demo

npm i
npm run build
docker build \
  --label CI_PROJECT_NAME=eip-mobile-demo \
  --label CI_PROJECT_NAMESPACE=eipwork \
  --label CI_COMMIT_SHA=5229d92c6768faa26819f799384fe19bb178fda2 \
  --label CI_COMMIT_REF_NAME=master \
  --label CI_COMMIT_TITLE="index sample" \
  --label CI_COMMIT_MESSAGE="create a sample docker image eipwork/eip-mobile-demo for eip-service-index " \
  --label CI_PIPELINE_URL="https://github.com/shaohq/eip-mobile-demo" \
  -t $tag:latest .
docker tag $tag:latest $tag:$1
docker push $tag:latest
docker push $tag:$1