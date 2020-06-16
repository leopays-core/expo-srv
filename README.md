# Docker image [leopays/expo-srv]
> Docker org [leopays].

> Docker image [leopays/expo-srv].

> expo-cli version: 3.21.5.

**PORTS:**
  - 19000 - For Expo Client;
  - 19001 - Metro Bundler;
  - 19002 - ! Expo DevTools;
  - 19006 - WEB version.


## Build & Puscker Docker image
See in [docker/README.md](docker).


## First Run
```bash
mkdir -p leopays
cd leopays

git clone https://github.com/leopays-core/expo-srv.git
cd expo-srv/docker

echo "REPO=https://github.com/leopays-core/leopays-app.git" > .env
echo "BRANCH=development" >> .env
echo "REACT_NATIVE_PACKAGER_HOSTNAME=app.leopays.dev" >> .env
echo "GIT_PULL_INTERVAL=10" >> .env
echo "VERBOSE=false" >> .env
echo "WEB=true" >> .env

docker pull leopays/expo-srv:latest
docker-compose up -d
```


### Stop
```bash
cd leopays/expo-srv/docker
docker-compose down
```


[leopays]: https://hub.docker.com/u/leopays "leopays"
[leopays/expo-srv]: https://hub.docker.com/r/leopays/expo-srv "leopays/expo-srv"
