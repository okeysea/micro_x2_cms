FROM alpine:3.13

RUN mkdir /app
WORKDIR /app
ADD ./src/backends/bin /app/bin

RUN find . -exec chmod +x {} +
