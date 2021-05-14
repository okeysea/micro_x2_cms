import express from "express"
import { AddressInfo } from "net"

const app = express();

app.get('/', (_, res)=>{
  res.send('Hello, world!');
});

const server = app.listen(3000, ()=>{
  const addr = server.address() as AddressInfo;
  if( addr != null ){
    const host = addr.address;
    const port = addr.port;
    console.log("app listening at http://%s:%s", host, port);
  }
});
