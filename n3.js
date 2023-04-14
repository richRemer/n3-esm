/**
 * Notes about this fork of N3:
 *  - missing support for N3StreamParser
 *  - missing support for N3StreamWriter
 *  - missing support for N3Writer
 *
 * Notes on how port was made
 *  - replace src/index.js with this n3.js file
 *  - update import paths with extensions
 *  - removed queue-microtask package dependency
 *  - remove N3Store.match backwards compatibility with streams
 *  - replace Node.js streams with Web Streams
 *    - IMPORTANT: these streams don't work the same way
 */

import namespaces from "./src/IRIs.js";
import Lexer from "./src/N3Lexer.js";
import Parser from "./src/N3Parser.js";
import Store from "./src/N3Store.js";
import * as Util from "./src/N3Util.js";
import {
  default as DataFactory,
  Term,
  NamedNode,
  Literal,
  BlankNode,
  Variable,
  DefaultGraph,
  Quad,
  Triple,
  termFromId,
  termToId
} from "./src/N3DataFactory.js";

export {
  Lexer,
  Parser,
  Store,
  Util,

  DataFactory,

  Term,
  NamedNode,
  Literal,
  BlankNode,
  Variable,
  DefaultGraph,
  Quad,
  Triple,

  termFromId,
  termToId
};

export default {
  Lexer,
  Parser,
  Store,
  //STRIKE:StreamParser,
  //STRIKE:StreamWriter,
  Util,
  //STRIKE:Writer,

  DataFactory,

  Term,
  NamedNode,
  Literal,
  BlankNode,
  Variable,
  DefaultGraph,
  Quad,
  Triple,

  termFromId,
  termToId,
};
