FROM node:12.8-alpine AS builder

COPY package.json package-lock.json ./

RUN npm ci && mkdir /angular-auth-ngrx && mv ./node_modules ./angular-auth-ngrx

WORKDIR /angular-auth-ngrx

COPY . .

RUN npm run ng build -- --prod --output-path=dist

FROM nginx:1.14.1-alpine

LABEL version="1.0"

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /angular-auth-ngrx/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
