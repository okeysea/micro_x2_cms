.PHONY: protoc clean_protoc
protoc:
	docker-compose -f docker-compose.protoc.yml run --rm protoc\
		protoc --proto_path=proto\
		-Iproto\
		--go_out=./proto-out\
		--go_opt=module=okeysea/micro_x2_cms/api\
		--go-grpc_out=./proto-out\
		--go-grpc_opt=module=okeysea/micro_x2_cms/api\
		./proto/**/*.proto

clean_protoc:
	sudo rm -r ./src/backends/api/*

.PHONY: gobuild clean_gobuild
gobuild:
	docker-compose -f docker-compose.gocompiler.yml run --rm gocompiler make

clean_gobuild:
	ls -a ./src/backends/bin/ | grep -v -E "^\..*$$|^\.\.$$" | xargs sudo rm -rf

.PHONY: openapi
openapi:
	docker-compose -f docker-compose.openapi.yml up

.PHONY: bffup bffbash bffsync_api
bffup:
	docker-compose run --rm bff npm run build:live
bffbash:
	docker-compose run --rm bff bash
bffsync_api:
	cp -i ./bffapi/merged.yml ./src/bff/public/apispec/v1/apidoc.yml

# パスはコンテナ内のパスであることに注意
PROTOC_SRC_DIR:=./proto
PROTOC_NODEJS_DISTDIR:=/app/tssrc/app/proto
BACKTICK:=\`
bffprotoc:
	docker-compose run --rm bff npm run grpc:generate
