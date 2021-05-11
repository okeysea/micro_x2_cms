FROM golang:1.16.4-alpine3.13

RUN apk update && apk add make

RUN mkdir /app
WORKDIR /app

ADD ./src/backends /app

