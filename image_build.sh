#!/usr/bin/env bash
set -eo pipefail

. ./.environment

docker build --file ./Dockerfile \
  --tag $ORG/$REPO:temp \
  --compress --force-rm --no-cache \
  .
