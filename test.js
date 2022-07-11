const ExpressDoc = require('expressdoc');

const a = new ExpressDoc({
  title: "Test Documentation",
  version: "5.0.1",
});

/**
 * GET /hello
 * @description Get a "hello world" message.
 * @response {string} 200 - hello world.
 */
a.get("/hello", async (req, res) => {
  return res.status(200).send({
    res: "hello world"
  });
});

/**
 * GET /
 * @description Blank Page.
 * @response {string} 200.
 */
a.get("/", async (req, res) => {
  return res.status(200).send({
    res: "hello world"
  });
});

a.listen(3000, () => {
  console.log('serving 3000');
});