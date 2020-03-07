FROM node:12.16.0-slim

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
