// package: microx2cms.apigwproto
// file: service/apigateway.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as service_apigateway_pb from "../service/apigateway_pb";
import * as common_health_pb from "../common/health_pb";

interface IAPIGatewayService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getHealth: IAPIGatewayService_IGetHealth;
}

interface IAPIGatewayService_IGetHealth extends grpc.MethodDefinition<common_health_pb.QueryHealth, common_health_pb.ResponseHealth> {
    path: "/microx2cms.apigwproto.APIGateway/GetHealth";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_health_pb.QueryHealth>;
    requestDeserialize: grpc.deserialize<common_health_pb.QueryHealth>;
    responseSerialize: grpc.serialize<common_health_pb.ResponseHealth>;
    responseDeserialize: grpc.deserialize<common_health_pb.ResponseHealth>;
}

export const APIGatewayService: IAPIGatewayService;

export interface IAPIGatewayServer extends grpc.UntypedServiceImplementation {
    getHealth: grpc.handleUnaryCall<common_health_pb.QueryHealth, common_health_pb.ResponseHealth>;
}

export interface IAPIGatewayClient {
    getHealth(request: common_health_pb.QueryHealth, callback: (error: grpc.ServiceError | null, response: common_health_pb.ResponseHealth) => void): grpc.ClientUnaryCall;
    getHealth(request: common_health_pb.QueryHealth, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_health_pb.ResponseHealth) => void): grpc.ClientUnaryCall;
    getHealth(request: common_health_pb.QueryHealth, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_health_pb.ResponseHealth) => void): grpc.ClientUnaryCall;
}

export class APIGatewayClient extends grpc.Client implements IAPIGatewayClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getHealth(request: common_health_pb.QueryHealth, callback: (error: grpc.ServiceError | null, response: common_health_pb.ResponseHealth) => void): grpc.ClientUnaryCall;
    public getHealth(request: common_health_pb.QueryHealth, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_health_pb.ResponseHealth) => void): grpc.ClientUnaryCall;
    public getHealth(request: common_health_pb.QueryHealth, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_health_pb.ResponseHealth) => void): grpc.ClientUnaryCall;
}
