FROM golang:1.16.4-alpine3.13 as builder

WORKDIR /tmp

ENV PROTOBUF_VERSION 3.16.0
ENV PROTOBUF_URL https://github.com/protocolbuffers/protobuf/releases/download/v$PROTOBUF_VERSION/protobuf-cpp-$PROTOBUF_VERSION.tar.gz

RUN set -eux && \
      apk update && \
      apk add --no-cache git curl build-base autoconf automake libtool && \
      curl -L -o /tmp/protobuf.tar.gz $PROTOBUF_URL && \
      tar xvzf protobuf.tar.gz

WORKDIR /tmp/protobuf-$PROTOBUF_VERSION

RUN set -eux && \
      ./autogen.sh && \
      ./configure && \
      make -j 3 && \
      make install && \
      # go get -u github.com/golang/protobuf/protoc-gen-go && \
      # API v2 対応 &&\
      go get -u google.golang.org/protobuf/cmd/protoc-gen-go@v1.26 &&\
      go get -u google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.1 &&\
      go get -u github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc && \
      go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway && \
      go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger

FROM golang:1.16.4-alpine3.13

COPY --from=builder /usr/local/bin/protoc /usr/local/bin
COPY --from=builder /usr/local/include /usr/local/include
COPY --from=builder /usr/local/lib /usr/local/lib
COPY --from=builder /usr/lib /usr/lib
COPY --from=builder /go/bin /go/bin

COPY ./proto /go/proto

WORKDIR /go
