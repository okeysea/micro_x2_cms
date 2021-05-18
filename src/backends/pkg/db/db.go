package db

import (
  "fmt"
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
  fmt.Println("=========API Gateway service Start=========")

  listenPort, err := net.Listen("tcp", "0.0.0.0:10001")
  checkErr("Failed to listen: %v", err);

  server := grpc.NewServer();
  apigwSrv := &apigwsrv.ApiGwSrv{}
  pb.RegisterAPIGatewayServer(server, apigwSrv)

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
