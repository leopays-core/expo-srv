#!/usr/bin/env bash
set -eo pipefail

. ./.environment
#  --compress --force-rm --no-cache \
docker build --file ./Dockerfile \
  --tag $ORG/$REPO:temp \
  ../
