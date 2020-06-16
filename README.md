# Docker image [leopays/expo-srv]
> Docker org [leopays].
> Docker image [leopays/expo-srv].

**PORTS:**
  - 19000 - For Expo Client;
  - 19001 - Metro Bundler;
  - 19002 - ! Expo DevTools;
  - 19006 - WEB version.


## Build & Push

### Auto
```bash
./image_build.sh
./image_push.sh
```


### Manual

**Change version**
```
.environment
Dockerfile
package.json
README.md
```

```bash
export ORG=leopays
export REPO=expo-srv
export VERSION=v0.1.0

docker build --file ./Dockerfile \
  --tag $ORG/$REPO:temp \
  --compress --force-rm --no-cache \
  .
docker tag $ORG/$REPO:temp $ORG/$REPO:$VERSION
docker tag $ORG/$REPO:temp $ORG/$REPO:latest
docker push $ORG/$REPO:$VERSION
docker push $ORG/$REPO:latest
```


## First Run
```bash
mkdir -p leopays
cd leopays

git clone https://github.com/leopays-core/expo-srv.git
echo "REPO=https://github.com/leopays-core/expo-app.git" > .env
echo "BRANCH=development" >> .env
echo "REACT_NATIVE_PACKAGER_HOSTNAME=54.221.151.106" >> .env
echo "GIT_PULL_INTERVAL=10" >> .env
echo "VERBOSE=false" >> .env
echo "WEB=true" >> .env

cd expo-srv
docker pull leopays/expo-srv:latest
docker-compose up -d
```


### Stop
```bash
cd leopays/expo-srv
docker-compose down
```


[leopays]: https://hub.docker.com/u/leopays "leopays"
[leopays/expo-srv]: https://hub.docker.com/r/leopays/expo-srv "leopays/expo-srv"
