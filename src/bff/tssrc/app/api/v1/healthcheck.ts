import { Operation } from "express-openapi"
import { ApiDoc } from "@config/ApiDoc"

export const GET: Operation = [
  (req, res, next) => {
    res.status(200).json({response: "all services ok"});
  },
];

console.log( ApiDoc.paths["/healthcheck"]?.get );
GET.apiDoc = ApiDoc.paths["/healthcheck"]?.get;
