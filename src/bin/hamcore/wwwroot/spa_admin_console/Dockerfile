FROM node:12.16.0-slim

# Install latest yarn
RUN curl --compressed -o- -L https://yarnpkg.com/install.sh | bash

# Install node_modules from package.json and yarn.lock
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Enable node_modules commands
ENV PATH=/app/node_modules/.bin:$PATH
