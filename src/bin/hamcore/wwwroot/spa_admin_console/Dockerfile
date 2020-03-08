FROM node:12.16.0-slim

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Enable node_modules commands
ENV PATH=/app/node_modules/.bin:$PATH
