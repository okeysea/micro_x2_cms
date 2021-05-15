// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var common_health_pb = require('../common/health_pb.js');

function serialize_microx2cms_common_QueryHealth(arg) {
  if (!(arg instanceof common_health_pb.QueryHealth)) {
    throw new Error('Expected argument of type microx2cms.common.QueryHealth');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_microx2cms_common_QueryHealth(buffer_arg) {
  return common_health_pb.QueryHealth.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_microx2cms_common_ResponseHealth(arg) {
  if (!(arg instanceof common_health_pb.ResponseHealth)) {
    throw new Error('Expected argument of type microx2cms.common.ResponseHealth');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_microx2cms_common_ResponseHealth(buffer_arg) {
  return common_health_pb.ResponseHealth.deserializeBinary(new Uint8Array(buffer_arg));
}


var APIGatewayService = exports.APIGatewayService = {
  getHealth: {
    path: '/microx2cms.apigwproto.APIGateway/GetHealth',
    requestStream: false,
    responseStream: false,
    requestType: common_health_pb.QueryHealth,
    responseType: common_health_pb.ResponseHealth,
    requestSerialize: serialize_microx2cms_common_QueryHealth,
    requestDeserialize: deserialize_microx2cms_common_QueryHealth,
    responseSerialize: serialize_microx2cms_common_ResponseHealth,
    responseDeserialize: deserialize_microx2cms_common_ResponseHealth,
  },
};

exports.APIGatewayClient = grpc.makeGenericClientConstructor(APIGatewayService);
