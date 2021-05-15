import express from "express"
import winston from "winston"
import expressWinston from "express-winston"
import { AddressInfo } from "net"
import { routes } from "./config/routes"
import { initialize } from "express-openapi"
import { ApiDoc, ExpressOpenApiDoc } from "@config/ApiDoc"

import { APIGatewayService } from "./app/models/proto_client"

const app = express();
app.use( expressWinston.logger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
  meta: false,
  msg: "HTTP ",
  expressFormat: true,
  colorize: false,
  ignoreRoute: (req, res) => { return false; }
}));

app.use( express.json() );
app.use( express.urlencoded({extended: true}) );
app.use('/', routes);

app.get("/devel/route", (req, res) => {
  let ret = app._router.stack;
  res.status(200).json( ret );
});

app.get("/devel/apigwhealth", (req, res) => {
  const service = new APIGatewayService();
  service.getHealth("hello, hello, and hello?")
    .then(response=>res.status(200).json(response))
    .catch(error=>res.status(200).json(error))
});

const api_path_dir = __dirname + "/app/api"
console.log("runnning: " + __filename );
console.log("API Routes Dir: ", api_path_dir );

initialize({
  apiDoc:                 ExpressOpenApiDoc,
  app,
  paths:                  api_path_dir,
  routesGlob:             "**/*.{ts,js}",
  routesIndexFileRegExp:  /(?:index)?\.[tj]s$/
});

const server = app.listen(4000, '0.0.0.0', ()=>{
  const addr = server.address() as AddressInfo;
  if( addr != null ){
    const host = addr.address;
    const port = addr.port;
    console.log("app listening at http://%s:%s", host, port);
  }
});
