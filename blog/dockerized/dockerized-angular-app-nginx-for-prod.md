---
title: Dockerized an Angular application for production, and run on Nginx
description: 'Dockerized an Angular application for production, and run on Nginx'
published: true
slugs: 'dockerized-and-angular-app-for-production-and-run-on-nginx'
image: 'assets/Angular-Docker-NGNIX.jpeg'
publishedAt: 2021-10-20
tags: ['Angular', 'Nginx', 'Docker']
---

### Dockerized an Angular application for production, and run on Nginx
<hr />

- A `Dockerfile` looks like this:

```bash
FROM node:12-alpine as builder

LABEL author="Dai Nguyen"
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build -- --output-path=./dist --prod

FROM nginx:1.21.3-alpine
LABEL author="Dai Nguyen"

# Copy custom nginx config
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80 443
```
  - Divided into 2 steps, step 1 builds the [Angular](https://angular.io/) application and step 2 will copy it into [Nginx](https://www.nginx.com/) to execute the application in Nginx
  - RUN `npm run build -- --output-path=./dist --prod`. Execute the build code with the configuration for production, and will be saved in the dist . folder
  - Because the [Angular](https://angular.io/) application when built, it will be a static source. So it has to be run in a web server, specifically here I will run in [Nginx](https://www.nginx.com/)
  - We will have a separate configuration file for Nginx named: nginx.conf and will copy that file into the Nginx container, with the path: `/etc/nginx/nginx.conf`
  - Here I will expose 2 ports `80` for http, and `443` for https connection

<br />
<hr />
<br />

- A `nginx.cof` looks like this:
```bash
worker_processes 4;

events { worker_connections 1024; }

http {
        ssl_session_cache   shared:SSL:10m;
        ssl_session_timeout 30m;
        
        #See http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load        
        proxy_cache_path        /var/cache/nginx levels=1:2 keys_zone=one:8m max_size=3000m inactive=600m;
        proxy_temp_path         /var/tmp;
        include                 mime.types;
        default_type            application/octet-stream;
        sendfile                on;
        keepalive_timeout       65;
        
        gzip                    on;
        gzip_comp_level         6;
        gzip_vary               on;
        gzip_min_length         1000;
        gzip_proxied            any;
        gzip_types              text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
        gzip_buffers            16 8k;

    server {
      listen       80;
      server_name  localhost;

      location / {
          root   /usr/share/nginx/html;
          index  index.html;
          expires -1;
          add_header Pragma "no-cache";
          add_header Cache-Control "no-store, no-cache, must-revalidate, post-check=0, pre-check=0";
          try_files $uri$args $uri$args/ $uri $uri/ /index.html =404;
      }
    }
}
```

### And that's it!