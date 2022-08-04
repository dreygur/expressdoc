# Express Doc

[express.js](https://www.npmjs.com/package/express) rest api docs with [Swagger UI](https://www.npmjs.com/package/swagger-ui-dist)

## Usage:
```javascript
const { ExpressDoc } = require('expressdoc');
const app = new ExpressDoc({
  title: "Test Documentation", // Ttitle of the app or for documentation page
  version: "5.0.1", // App version
  docPath: "/doc", // Documentation PATH
  apiPath: "./routes", // PATH to the files where api is implemented
  SwaggerUiOptions // Options for Swagger UI
});
```
**_Or:_**

```javascript
const expressDoc  = require('expressdoc');
const app = expressDoc();
// You can also pass the arguments to above function
```

The rest will be as [express.js](https://www.npmjs.com/package/express)

Whatever can be done with [express.js](https://www.npmjs.com/package/express) is possible with [ExpressDoc](https://www.npmjs.com/package/expressdoc) as it just a wrapper of express with just the [Swagger UI](https://www.npmjs.com/package/swagger-ui-dist) included for documentation generation.

---

Made with ❤️ from 🇧🇩