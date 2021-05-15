// package: microx2cms.common
// file: common/health.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class QueryHealth extends jspb.Message { 
    getPing(): string;
    setPing(value: string): QueryHealth;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryHealth.AsObject;
    static toObject(includeInstance: boolean, msg: QueryHealth): QueryHealth.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryHealth, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryHealth;
    static deserializeBinaryFromReader(message: QueryHealth, reader: jspb.BinaryReader): QueryHealth;
}

export namespace QueryHealth {
    export type AsObject = {
        ping: string,
    }
}

export class ResponseHealth extends jspb.Message { 
    getPong(): string;
    setPong(value: string): ResponseHealth;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResponseHealth.AsObject;
    static toObject(includeInstance: boolean, msg: ResponseHealth): ResponseHealth.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResponseHealth, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResponseHealth;
    static deserializeBinaryFromReader(message: ResponseHealth, reader: jspb.BinaryReader): ResponseHealth;
}

export namespace ResponseHealth {
    export type AsObject = {
        pong: string,
    }
}
