package testservice

import (
  "context"
  "errors"
  "fmt"
  pb "okeysea/micro_x2_cms/api/testproto"
)

type MyTestService struct {
}

func (s *MyTestService) GetMyTest(ctx context.Context, message *pb.GetMyTestMessage) (*pb.MyTestResponse, error) {
  fmt.Println("recived: %v", message.TargetTest)
  switch message.TargetTest {
  case "tama":
    return &pb.MyTestResponse{
      Name: "tama",
      Kind: "mainecoon",
    }, nil
  case "mike":
    return &pb.MyTestResponse{
      Name: "mike",
      Kind: "nerwegian",
    }, nil
  }
  return nil, errors.New("Not Found Test")
}
