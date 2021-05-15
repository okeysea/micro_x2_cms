import express from "express"

export class ControllerBase {
  constructor (){
  }
}

export type RouteMtd = RouteMethod;

interface RouteMethod {
  (req: express.Request, res: express.Response): void | null;
}
