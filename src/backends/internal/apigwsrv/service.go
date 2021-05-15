package apigwsrv

import (
  "context"
  "fmt"
  pb "okeysea/micro_x2_cms/api/apigwproto"
  common_pb "okeysea/micro_x2_cms/api/common"
)

type ApiGwSrv struct {
  // APIv2 での変更
  // reference: https://note.com/dd_techblog/n/nb8b925d21118
  pb.UnimplementedAPIGatewayServer
}

func (s *ApiGwSrv) GetHealth(ctx context.Context, message *common_pb.QueryHealth) (*common_pb.ResponseHealth, error) {
  fmt.Println("recived: %v", message.Ping)
  return &common_pb.ResponseHealth{
    Pong: message.Ping,
  }, nil
}
