import chai from "chai";
import things from "chai-things";
import {ReadableStream} from "stream/web";

global.expect = chai.expect;
global.iterate = iterate;
global.ArrayReader = ArrayReader;
global.ReadableStream = ReadableStream;

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

function ArrayReader(items) {
  return new ReadableStream({
    start(controller) {
      function read() {
        if (items[0] instanceof Error) {
          controller.error(items.shift());
        } else if (items.length) {
          controller.enqueue(items.shift());
          read();
        } else {
          controller.close();
        }
      }

      read();
    }
  });
}
