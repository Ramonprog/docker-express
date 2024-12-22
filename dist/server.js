"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/server.ts
var import_express = __toESM(require("express"));

// src/database/index.ts
var import_knex = __toESM(require("knex"));
var knex = (0, import_knex.default)({
  client: "pg",
  connection: "postgres://postgres:postgres@localhost:5432/express-docker"
});

// src/controller.ts
var Controller = class {
  constructor() {
    this.index = (req, res) => __async(this, null, function* () {
      const users = yield knex("users");
      return res.status(200).json(users);
    });
    this.create = (req, res) => __async(this, null, function* () {
      const userData = req.body;
      const user = yield knex("users").insert(userData).returning("*");
      return res.status(201).json(user);
    });
  }
};

// src/server.ts
var controller = new Controller();
var app = (0, import_express.default)();
app.use(import_express.default.json());
app.get("/", controller.index);
app.post("/create", controller.create);
app.listen(3e3, () => {
  console.log("\u{1F680} App is running on port 3000 ...");
});
