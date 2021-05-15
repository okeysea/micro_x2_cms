import * as Base from "../Bases"

export class StaticPagesController extends Base.ControllerBase {
  constructor (){
    super();
  }

  index: Base.RouteMtd = (req, res) => {
    res.send("Hello?");
  }
}
