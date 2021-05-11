.PHONY: protoc clean_protoc
protoc:
	docker-compose -f docker-compose.protoc.yml run --rm protoc\
		protoc --go_out=plugins=grpc:./proto-out\
		--go_opt=module=okeysea/micro_x2_cms\
		./proto/*.proto

clean_protoc:
	sudo rm -r ./src/backends/api/*

.PHONY: gobuild
gobuild:
	docker-compose -f docker-compose.gocompiler.yml run --rm gocompiler make\
