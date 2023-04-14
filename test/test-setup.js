import chai from "chai";
import things from "chai-things";

global.expect = chai.expect;
global.iterate = iterate;
chai.should();
chai.use(things);

async function iterate(asyncIterable, returnItems=false) {
  const items = [];

  for await (const item of asyncIterable) {
    if (returnItems) items.push(item);
  }

  if (returnItems) {
    return items;
  }
}