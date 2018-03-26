FROM nginx:1.13.10-alpine
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY /dist /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]