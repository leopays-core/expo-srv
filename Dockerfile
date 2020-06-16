FROM node:latest

LABEL author="LeoPays <dev@leopays.dev>" \
  maintainer="LeoPays <dev@leopays.dev>" \
  version="0.1.0" \
  description="This is a image for expo development server."

RUN echo 'APT::Install-Recommends 0;' >> /etc/apt/apt.conf.d/01norecommends && \
  echo 'APT::Install-Suggests 0;' >> /etc/apt/apt.conf.d/01norecommends && \
  apt-get update && \
  DEBIAN_FRONTEND=noninteractive apt-get install -y \
  git curl unzip && \
  yarn global add expo-cli --production --silent


WORKDIR /expo-srv

COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --production --silent && mv node_modules ../

COPY ["bin/expo-srv", "./bin"]

EXPOSE 19000 19001 19006

CMD ["bin/expo-srv"]
