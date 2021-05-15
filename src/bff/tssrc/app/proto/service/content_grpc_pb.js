// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var service_content_pb = require('../service/content_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
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

function serialize_microx2cms_contentproto_ContentResponse(arg) {
  if (!(arg instanceof service_content_pb.ContentResponse)) {
    throw new Error('Expected argument of type microx2cms.contentproto.ContentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_microx2cms_contentproto_ContentResponse(buffer_arg) {
  return service_content_pb.ContentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_microx2cms_contentproto_QueryContent(arg) {
  if (!(arg instanceof service_content_pb.QueryContent)) {
    throw new Error('Expected argument of type microx2cms.contentproto.QueryContent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_microx2cms_contentproto_QueryContent(buffer_arg) {
  return service_content_pb.QueryContent.deserializeBinary(new Uint8Array(buffer_arg));
}


var ContentService = exports.ContentService = {
  getHealth: {
    path: '/microx2cms.contentproto.Content/GetHealth',
    requestStream: false,
    responseStream: false,
    requestType: common_health_pb.QueryHealth,
    responseType: common_health_pb.ResponseHealth,
    requestSerialize: serialize_microx2cms_common_QueryHealth,
    requestDeserialize: deserialize_microx2cms_common_QueryHealth,
    responseSerialize: serialize_microx2cms_common_ResponseHealth,
    responseDeserialize: deserialize_microx2cms_common_ResponseHealth,
  },
  getContent: {
    path: '/microx2cms.contentproto.Content/GetContent',
    requestStream: false,
    responseStream: false,
    requestType: service_content_pb.QueryContent,
    responseType: service_content_pb.ContentResponse,
    requestSerialize: serialize_microx2cms_contentproto_QueryContent,
    requestDeserialize: deserialize_microx2cms_contentproto_QueryContent,
    responseSerialize: serialize_microx2cms_contentproto_ContentResponse,
    responseDeserialize: deserialize_microx2cms_contentproto_ContentResponse,
  },
};

exports.ContentClient = grpc.makeGenericClientConstructor(ContentService);
