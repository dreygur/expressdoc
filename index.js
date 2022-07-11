const jsdocParser = require("jsdoc-openapi");
const e = require("express");
const swaggerUi = require("./swagger");
const { json, raw, text, application, request, response, static, urlencoded, query, Router, RouterOptions } = e;

/**
 * EcpressDoc Class
 *
 * @param {Object} conf Configuration for Express
 * conf:
 *    title
 *    version
 *    apiPath
 *    docPath
 *    SwaggerUiOptions
 * @return {Object} Express instance
 */
class ExpressDoc extends e {
  constructor(conf) {
    super();

    // Set Values
    this.title = conf?.title || "Title of your service";
    this.docPath = conf?.docPath ? `/${conf.docPath}` : "/docs";

    // normal OpenAPI definition
    this.openAPIDefinition = {
      openapi: "3.0.0",
      info: {
        title: this.title,
        version: conf?.version || "1.0.0",
      }
    };

    this.spec = jsdocParser({
      swaggerDefinition: this.openAPIDefinition,
      apis: conf?.apiPaths ? conf?.apiPaths !== undefined : ["*.js"] // paths to files with comments to be parsed
    });

    this.opts = conf?.SwaggerUiOptions ? conf?.SwaggerUiOptions : {
      customSiteTitle: this.title,
      explorer: false,
      topbar: false
    };

    this.options = conf?.SwaggerOptions ? conf?.SwaggerOptions : {
      explorer: false
    };

    this.use(this.docPath, swaggerUi.serve, swaggerUi.setup(this.spec, this.opts, this.options));
  }
}

module.exports = ExpressDoc;