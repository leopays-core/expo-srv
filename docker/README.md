# Docker image [leopays/expo-srv]
> Docker org [leopays].

> Docker image [leopays/expo-srv].


## Build & Puscker Docker image
**Change version**
```
docker/.environment
docker/Dockerfile
docker/README.md
package.json
README.md
```

### Auto
```bash
cd docker
./image_build.sh
./image_push.sh
```

### Manual

```bash
export ORG=leopays
export REPO=expo-srv
export VERSION=v0.1.0

cd docker

docker build --file ./Dockerfile \
  --tag $ORG/$REPO:temp \
  --compress --force-rm --no-cache \
  ../
docker tag $ORG/$REPO:temp $ORG/$REPO:$VERSION
docker tag $ORG/$REPO:temp $ORG/$REPO:latest
docker push $ORG/$REPO:$VERSION
docker push $ORG/$REPO:latest
```


[leopays]: https://hub.docker.com/u/leopays "leopays"
[leopays/expo-srv]: https://hub.docker.com/r/leopays/expo-srv "leopays/expo-srv"
