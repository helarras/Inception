#!/bin/bash

if [ ! -f /etc/nginx/certs/helarras.crt ]; then
    mkdir -p /etc/nginx/certs
    echo "helarras: Setting up SSL..."
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/nginx/certs/helarras.key \
    -out /etc/nginx/certs/helarras.crt \
    -subj "/C=MA/ST=TTH/L=TETOUAN/O=1337/OU=42/CN=$DOMAIN_NAME/UID=helarras"
fi

rm /etc/nginx/sites-enabled/default

ln -s /etc/nginx/sites-available/wordpress.conf /etc/nginx/sites-enabled/wordpress.conf
ln -s /etc/nginx/sites-available/adminer.conf /etc/nginx/sites-enabled/adminer.conf


exec nginx -g "daemon off;"