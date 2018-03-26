# STAGE 1: Build
FROM node:9.0.0-alpine as builder

COPY package.json package-lock.json ./

# Store node modules in separate docker layer preventing unnecessary npm installs each build
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

# Build the angular app in production mode and store the artifacts in dist folder
RUN $(npm bin)/ng build --prod


# STAGE 2: Setup Nginx Server
FROM nginx:1.13.10-alpine

# Copy our nginx config over the default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Remove the default nginx site
RUN rm -rf /usr/share/nginx/html/*

# From ‘builder’ stage copy over the build located in the in dist folder to the default nginx public folder
COPY --from=builder /ng-app/dist /usr/share/nginx/html

# Execute Nginx
CMD ["nginx", "-g", "daemon off;"]
