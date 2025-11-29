FROM debian:bookworm

RUN apt-get update && apt-get install -y curl \
    && rm -rf /var/lib/apt/lists/*

RUN curl -L https://github.com/google/cadvisor/releases/download/v0.53.0/cadvisor-v0.53.0-linux-amd64 \
    -o /usr/bin/cadvisor

RUN chmod +x /usr/bin/cadvisor

ENTRYPOINT ["cadvisor", "-logtostderr"]