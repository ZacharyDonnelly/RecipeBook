# stage 1
FROM node:alpine as build

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN yarn
RUN yarn prod:compress

# STAGE 2
FROM nginx:1.16.0-alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# docker run -it -p 80:80 --rm frontend
