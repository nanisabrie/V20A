FROM ubuntu:latest
ENV TERM linux
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && \
  apt-get install -y \
  neofetch \
  chromium \
  ffmpeg \
  wget \
  imagemagick \
  graphicsmagick \
  webp \
  mc \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*
COPY package.json .
RUN npm install && npm install qrcode-terminal
RUN npm install -g pm2
RUN npm update
COPY . .
RUN pm2 save
CMD ["pm2-runtime", "index.js"]
