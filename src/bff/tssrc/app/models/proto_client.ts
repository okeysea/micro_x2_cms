import * as grpc from "@grpc/grpc-js"
import * as common_pb from "@proto/common/health_pb"
import * as apigateway_grpc_pb from "@proto/service/apigateway_grpc_pb"

/*
const client = new apigateway_grpc_pb.APIGatewayClient(
  "apigwsrv:10001",
  grpc.credentials.createInsecure(),
);

const req = new common_pb.QueryHealth();
req.setPing("hello, hello, and hello.");

client.getHealth(req, (error, result)=>{
  if(error) console.log('grpc error: ', error);
  else console.log( result.toObject() );
});
*/

export class APIGatewayService {
  private static serviceClient = new apigateway_grpc_pb.APIGatewayClient(
    "apigwsrv:10001",
    grpc.credentials.createInsecure(),
  );

  constructor (){
  }

  async getHealth(ping: string){
    return new Promise((resolve, reject)=>{
      const req = new common_pb.QueryHealth();
      req.setPing( ping );

      APIGatewayService.serviceClient.getHealth(req, (error, response)=>{
        if(error) reject( error );
        else resolve( response.toObject() );
      });
    });
  }
}

