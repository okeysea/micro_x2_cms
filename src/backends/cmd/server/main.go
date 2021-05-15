package main

import (
  "log"
  "net"
  "fmt"
  "os"
  "os/signal"
  pb "okeysea/micro_x2_cms/api/testproto"
  "okeysea/micro_x2_cms/pkg/testservice"
  "google.golang.org/grpc"
)

func checkErr(message string, err error) {
  if err != nil {
    log.Fatalf(message, err)
  }
}

func init() {
  log.SetFlags( log.LstdFlags | log.Lshortfile )
}

func main() {
  fmt.Println("=========Test API Start=========")

  listenPort, err := net.Listen("tcp", "0.0.0.0:19003")
  checkErr("Failed to listen: %v", err);

  server := grpc.NewServer();
  testService := &testservice.MyTestService{}
  pb.RegisterTestServer(server, testService)

  go func(){
    fmt.Println("Starting server...")
    err = server.Serve( listenPort )
    checkErr("failed to server: %v", err)
  }()

  ch := make(chan os.Signal, 1)
  signal.Notify(ch, os.Interrupt)

  <-ch

  fmt.Println("Stopping this server")
  server.Stop()
  fmt.Println("Closing the listener")
  listenPort.Close()
  fmt.Println("=========Test API End=========")
}
