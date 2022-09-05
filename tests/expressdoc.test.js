const { Router, ExpressDoc } = require('../index');

const title = "Test Documentation";
const docPath = "/docs/index";
const version = "0.0.1";
const doc = new ExpressDoc({
  title,
  version,
  docPath
});

test('title', () => {
  expect(doc.title).toEqual(title);
});

test('doc path', () => {
  expect(doc.docPath).toEqual(docPath);
});

test('version', () => {
  expect(doc.openAPIDefinition.info.version).toEqual(version);
});