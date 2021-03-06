// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package apigwproto

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	common "okeysea/micro_x2_cms/api/common"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// APIGatewayClient is the client API for APIGateway service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type APIGatewayClient interface {
	GetHealth(ctx context.Context, in *common.QueryHealth, opts ...grpc.CallOption) (*common.ResponseHealth, error)
}

type aPIGatewayClient struct {
	cc grpc.ClientConnInterface
}

func NewAPIGatewayClient(cc grpc.ClientConnInterface) APIGatewayClient {
	return &aPIGatewayClient{cc}
}

func (c *aPIGatewayClient) GetHealth(ctx context.Context, in *common.QueryHealth, opts ...grpc.CallOption) (*common.ResponseHealth, error) {
	out := new(common.ResponseHealth)
	err := c.cc.Invoke(ctx, "/microx2cms.apigwproto.APIGateway/GetHealth", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// APIGatewayServer is the server API for APIGateway service.
// All implementations must embed UnimplementedAPIGatewayServer
// for forward compatibility
type APIGatewayServer interface {
	GetHealth(context.Context, *common.QueryHealth) (*common.ResponseHealth, error)
	mustEmbedUnimplementedAPIGatewayServer()
}

// UnimplementedAPIGatewayServer must be embedded to have forward compatible implementations.
type UnimplementedAPIGatewayServer struct {
}

func (UnimplementedAPIGatewayServer) GetHealth(context.Context, *common.QueryHealth) (*common.ResponseHealth, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetHealth not implemented")
}
func (UnimplementedAPIGatewayServer) mustEmbedUnimplementedAPIGatewayServer() {}

// UnsafeAPIGatewayServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to APIGatewayServer will
// result in compilation errors.
type UnsafeAPIGatewayServer interface {
	mustEmbedUnimplementedAPIGatewayServer()
}

func RegisterAPIGatewayServer(s grpc.ServiceRegistrar, srv APIGatewayServer) {
	s.RegisterService(&APIGateway_ServiceDesc, srv)
}

func _APIGateway_GetHealth_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(common.QueryHealth)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(APIGatewayServer).GetHealth(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/microx2cms.apigwproto.APIGateway/GetHealth",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(APIGatewayServer).GetHealth(ctx, req.(*common.QueryHealth))
	}
	return interceptor(ctx, in, info, handler)
}

// APIGateway_ServiceDesc is the grpc.ServiceDesc for APIGateway service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var APIGateway_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "microx2cms.apigwproto.APIGateway",
	HandlerType: (*APIGatewayServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetHealth",
			Handler:    _APIGateway_GetHealth_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "service/apigateway.proto",
}
