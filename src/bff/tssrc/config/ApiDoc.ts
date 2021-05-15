import yaml from "js-yaml"
import fs from "fs"
import { OpenAPIV3 } from "openapi-types"

const docfile = "/app/public/apispec/v1/apidoc.yml"

const doc = yaml.load(fs.readFileSync( docfile, "utf8" )) as OpenAPIV3.Document<{}>;
const expressOpenApiDoc = {...doc, paths: {}}

export const ApiDoc            = doc
export const ExpressOpenApiDoc = expressOpenApiDoc
