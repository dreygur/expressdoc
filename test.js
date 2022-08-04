const express = require('expressdoc');
const { Router, ExpressDoc } = require('expressdoc');
const r = Router();

// const app = new ExpressDoc({
//   title: "Test Documentation",
//   version: "5.0.1",
// });

const app = express();

/**
 * GET /hello
 * @description Get a "hello world" message.
 * @response {string} 200 - hello world.
 */
app.get("/hello", async (req, res) => {
  return res.status(200).send({
    res: "hello world"
  });
});

/**
 * GET /
 * @description Blank Page.
 * @response {string} 200.
 */
app.get("/", async (req, res) => {
  return res.status(200).send({
    res: "hello world"
  });
});

r.get("/mutu", async (req, res) => {
  return res.status(200).send({
    res: "hello world"
  });
})

app.use(r);

app.listen(3000, () => {
  console.log('serving 3000');
});