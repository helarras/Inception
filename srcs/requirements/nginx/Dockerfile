FROM debian:bookworm

RUN apt-get update && apt-get install -y \
    nginx openssl \
    && mkdir -p /etc/nginx/certs \
    && rm -rf /var/lib/apt/lists/*

COPY tools/setup.sh /usr/local/bin/setup.sh
RUN chmod +x /usr/local/bin/setup.sh

EXPOSE 443 4000

ENTRYPOINT ["setup.sh"]