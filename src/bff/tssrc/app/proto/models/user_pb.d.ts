// package: microx2cms.models
// file: models/user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class User extends jspb.Message { 
    getId(): string;
    setId(value: string): User;
    getName(): string;
    setName(value: string): User;
    getAge(): string;
    setAge(value: string): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: string,
        name: string,
        age: string,
    }
}

export class QueryUser extends jspb.Message { 
    getId(): string;
    setId(value: string): QueryUser;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryUser.AsObject;
    static toObject(includeInstance: boolean, msg: QueryUser): QueryUser.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryUser, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryUser;
    static deserializeBinaryFromReader(message: QueryUser, reader: jspb.BinaryReader): QueryUser;
}

export namespace QueryUser {
    export type AsObject = {
        id: string,
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
