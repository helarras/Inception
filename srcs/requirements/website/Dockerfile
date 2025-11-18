FROM debian:bookworm


RUN apt-get update && apt-get install -y nginx \
    nano net-tools \
    && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /var/www/website

COPY tools/src/* /var/www/website
COPY conf/nginx_site.conf /etc/nginx/conf.d/nginx_site.conf

EXPOSE 8080

ENTRYPOINT ["nginx", "-g", "daemon off;"]


