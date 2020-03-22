FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN yarn


# Bundle app source
COPY . /usr/src/app
RUN yarn prod

EXPOSE 8081

CMD ["yarn", "webpack-dev"]
