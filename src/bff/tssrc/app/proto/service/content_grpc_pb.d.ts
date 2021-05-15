// package: microx2cms.contentproto
// file: service/content.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as service_content_pb from "../service/content_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as common_health_pb from "../common/health_pb";

interface IContentService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getHealth: IContentService_IGetHealth;
    getContent: IContentService_IGetContent;
}

interface IContentService_IGetHealth extends grpc.MethodDefinition<common_health_pb.QueryHealth, common_health_pb.ResponseHealth> {
    path: "/microx2cms.contentproto.Content/GetHealth";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_health_pb.QueryHealth>;
    requestDeserialize: grpc.deserialize<common_health_pb.QueryHealth>;
    responseSerialize: grpc.serialize<common_health_pb.ResponseHealth>;
    responseDeserialize: grpc.deserialize<common_health_pb.ResponseHealth>;
}
interface IContentService_IGetContent extends grpc.MethodDefinition<service_content_pb.QueryContent, service_content_pb.ContentResponse> {
    path: "/microx2cms.contentproto.Content/GetContent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_content_pb.QueryContent>;
    requestDeserialize: grpc.deserialize<service_content_pb.QueryContent>;
    responseSerialize: grpc.serialize<service_content_pb.ContentResponse>;
    responseDeserialize: grpc.deserialize<service_content_pb.ContentResponse>;
}

export const ContentService: IContentService;

export interface IContentServer extends grpc.UntypedServiceImplementation {
    getHealth: grpc.handleUnaryCall<common_health_pb.QueryHealth, common_health_pb.ResponseHealth>;
    getContent: grpc.handleUnaryCall<service_content_pb.QueryContent, service_content_pb.ContentResponse>;
}

export interface IContentClient {
    getHealth(request: common_health_pb.QueryHealth, callback: (error: grpc.ServiceError | null, response: common_health_pb.ResponseHealth) => void): grpc.ClientUnaryCall;
    getHealth(request: common_health_pb.QueryHealth, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_health_pb.ResponseHealth) => void): grpc.ClientUnaryCall;
    getHealth(request: common_health_pb.QueryHealth, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_health_pb.ResponseHealth) => void): grpc.ClientUnaryCall;
    getContent(request: service_content_pb.QueryContent, callback: (error: grpc.ServiceError | null, response: service_content_pb.ContentResponse) => void): grpc.ClientUnaryCall;
    getContent(request: service_content_pb.QueryContent, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_content_pb.ContentResponse) => void): grpc.ClientUnaryCall;
    getContent(request: service_content_pb.QueryContent, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_content_pb.ContentResponse) => void): grpc.ClientUnaryCall;
}

export class ContentClient extends grpc.Client implements IContentClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getHealth(request: common_health_pb.QueryHealth, callback: (error: grpc.ServiceError | null, response: common_health_pb.ResponseHealth) => void): grpc.ClientUnaryCall;
    public getHealth(request: common_health_pb.QueryHealth, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_health_pb.ResponseHealth) => void): grpc.ClientUnaryCall;
    public getHealth(request: common_health_pb.QueryHealth, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_health_pb.ResponseHealth) => void): grpc.ClientUnaryCall;
    public getContent(request: service_content_pb.QueryContent, callback: (error: grpc.ServiceError | null, response: service_content_pb.ContentResponse) => void): grpc.ClientUnaryCall;
    public getContent(request: service_content_pb.QueryContent, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_content_pb.ContentResponse) => void): grpc.ClientUnaryCall;
    public getContent(request: service_content_pb.QueryContent, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_content_pb.ContentResponse) => void): grpc.ClientUnaryCall;
}
