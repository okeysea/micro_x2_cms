// package: microx2cms.contentproto
// file: service/content.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as common_health_pb from "../common/health_pb";

export class QueryContent extends jspb.Message { 
    getContentId(): string;
    setContentId(value: string): QueryContent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryContent.AsObject;
    static toObject(includeInstance: boolean, msg: QueryContent): QueryContent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryContent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryContent;
    static deserializeBinaryFromReader(message: QueryContent, reader: jspb.BinaryReader): QueryContent;
}

export namespace QueryContent {
    export type AsObject = {
        contentId: string,
    }
}

export class UpdateContent extends jspb.Message { 

    hasQuery(): boolean;
    clearQuery(): void;
    getQuery(): QueryContent | undefined;
    setQuery(value?: QueryContent): UpdateContent;
    getTitle(): string;
    setTitle(value: string): UpdateContent;
    getBody(): string;
    setBody(value: string): UpdateContent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateContent.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateContent): UpdateContent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateContent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateContent;
    static deserializeBinaryFromReader(message: UpdateContent, reader: jspb.BinaryReader): UpdateContent;
}

export namespace UpdateContent {
    export type AsObject = {
        query?: QueryContent.AsObject,
        title: string,
        body: string,
    }
}

export class ContentResponse extends jspb.Message { 
    getContentId(): string;
    setContentId(value: string): ContentResponse;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ContentResponse;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ContentResponse;

    hasQueryedAt(): boolean;
    clearQueryedAt(): void;
    getQueryedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setQueryedAt(value?: google_protobuf_timestamp_pb.Timestamp): ContentResponse;
    getTitle(): string;
    setTitle(value: string): ContentResponse;
    getBody(): string;
    setBody(value: string): ContentResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ContentResponse): ContentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContentResponse;
    static deserializeBinaryFromReader(message: ContentResponse, reader: jspb.BinaryReader): ContentResponse;
}

export namespace ContentResponse {
    export type AsObject = {
        contentId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        queryedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        title: string,
        body: string,
    }
}
