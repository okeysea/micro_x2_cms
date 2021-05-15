package main

import (
  "context"
  "fmt"
  "log"
  "time"
  pb "okeysea/micro_x2_cms/api/testproto"
  "google.golang.org/grpc"
)

func main() {
  // サーバー起動ウェイト
  time.Sleep( time.Second * 5 )
  
  conn, err := grpc.Dial("testserver:19003", grpc.WithInsecure())
  if err != nil {
    log.Fatal("client connection error", err)
  }

  defer conn.Close()
  client := pb.NewTestClient(conn)
  message := &pb.GetMyTestMessage{TargetTest: "tama"}
  res, err := client.GetMyTest( context.TODO(), message )
  fmt.Printf("result:%#v \n", res)
  fmt.Printf("error:%#v \n", err)
}
