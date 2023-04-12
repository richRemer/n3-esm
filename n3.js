/**
 * Notes about this fork of N3:
 *  - missing support for N3Store
 *  - missing support for N3StreamParser
 *  - missing support for N3StreamWriter
 *  - missing support for N3Writer
 *
 * Notes on how port was made
 *  - replace src/index.js with this n3.js file
 *  - update import paths with extensions
 *  - removed queue-microtask package dependency
 */

import namespaces from "./src/IRIs.js";
import * as Util from "./src/N3Util.js";
import Lexer from "./src/N3Lexer.js";
import Parser from "./src/N3Parser.js";
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
  DataFactory,
  Lexer,
  Parser,
  Util,
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
  DataFactory,
  Lexer,
  Parser,
  //STRIKE:Writer,
  //STRIKE:Store,
  //STRIKE:StreamParser,
  //STRIKE:StreamWriter,
  Util,
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
