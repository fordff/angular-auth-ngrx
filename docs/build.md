## Build

The plan
To Dockerize a basic Angular app built with Angular CLI we need to do the following:
npm install the dependencies (Dev dependencies included)
ng build with --prod flag
move the artifacts from dist folder to a publicly accessible folder (via an an nginx server)
Setup an an nginx config file, and spin up the http server

We’ll do this in 2 stages:
Build stage: will depend on a Node alpine Docker image
Setup Stage: will depend on NGINX alpine Docker image and use the artifacts from the build stage, and the nginx config from our project.

## Requirements

- Angular cli
  Package Version

---

@angular-devkit/architect 0.803.19
@angular-devkit/build-angular 0.803.19
@angular-devkit/build-optimizer 0.803.19
@angular-devkit/build-webpack 0.803.19
@angular-devkit/core 8.3.19
@angular-devkit/schematics 8.3.19
@angular/cli 8.3.19
@ngtools/webpack 8.3.19
@schematics/angular 8.3.19
@schematics/update 0.803.19
rxjs 6.4.0
typescript 3.5.3
webpack 4.39.2

- Docker : Docker version 19.03.5, build 633a0ea
- Visual Studio Code
- Node v12.10.0

- Nginx

```
server {

  listen 80;

  sendfile on;

  default_type application/octet-stream;


  gzip on;
  gzip_http_version 1.1;
  gzip_disable      "MSIE [1-6]\.";
  gzip_min_length   1100;
  gzip_vary         on;
  gzip_proxied      expired no-cache no-store private auth;
  gzip_types        text/plain text/css application/json application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript;
  gzip_comp_level   9;


  root /usr/share/nginx/html;


  location / {
    try_files $uri $uri/ /index.html =404;
  }

}

```

## Angular

## Multi-Staged Builds
