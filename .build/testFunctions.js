var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  DateTest: () => DateTest,
  MapSetTest: () => MapSetTest,
  functionTest: () => functionTest,
  objectTest: () => objectTest,
  primaryTest: () => primaryTest
});
var import_cloneDeep = __toModule(require("./cloneDeep"));
function primaryTest() {
  let original = null;
  let cloned = (0, import_cloneDeep.cloneDeep)(original);
  original = "";
  console.assert(cloned === null, original, cloned);
  original = void 0;
  cloned = (0, import_cloneDeep.cloneDeep)(original);
  original = "";
  console.assert(cloned === void 0, original, cloned);
  original = true;
  cloned = (0, import_cloneDeep.cloneDeep)(original);
  original = "";
  console.assert(cloned === true, original, cloned);
  original = false;
  cloned = (0, import_cloneDeep.cloneDeep)(original);
  original = "";
  console.assert(cloned === false, original, cloned);
  original = 1;
  cloned = (0, import_cloneDeep.cloneDeep)(original);
  original = "";
  console.assert(cloned === 1, original, cloned);
  original = "1";
  cloned = (0, import_cloneDeep.cloneDeep)(original);
  original = "";
  console.assert(cloned === "1", original, cloned);
}
function objectTest() {
  let original = {
    a: {
      aa: [
        {
          aaa: {
            aaaa: "b",
            bbbb: function() {
              console.log("bbb");
              return "returning B";
            },
            cccc: () => {
              console.log("ccc");
              return "returning C";
            }
          }
        },
        100
      ]
    }
  };
  let cloned = (0, import_cloneDeep.cloneDeep)(original);
  original.a.aa[0].aaa.bbbb = [];
  console.assert(cloned.a.aa[0].aaa.bbbb() === "returning B");
  original = [
    {
      a: {
        aa: [{
          aaa: {
            aaaa: "b",
            bbbb: function() {
              console.log("bbb");
              return "returning B";
            },
            cccc: () => {
              console.log("ccc");
              return "returning C";
            }
          }
        }]
      }
    },
    { b: 1 }
  ];
  cloned = (0, import_cloneDeep.cloneDeep)(original);
  original[0].a = [];
  console.assert(cloned[0].a.aa[0].aaa.bbbb() === "returning B");
  original = Object;
  cloned = (0, import_cloneDeep.cloneDeep)(original);
  original["a"] = 1;
  console.assert(Object.keys(cloned).length === 0);
  original = new Object();
  cloned = (0, import_cloneDeep.cloneDeep)(original);
  original["a"] = 1;
  console.assert(Object.keys(cloned).length === 0);
}
function functionTest() {
  var _a;
  let original = function() {
    return { a: 1 };
  };
  let cloned = (0, import_cloneDeep.cloneDeep)(original);
  original = null;
  console.assert(((_a = cloned()) == null ? void 0 : _a.a) === 1);
  original = Function;
  cloned = (0, import_cloneDeep.cloneDeep)(original);
  original = null;
  console.assert((cloned == null ? void 0 : cloned.length) !== void 0);
  original = new Function();
  cloned = (0, import_cloneDeep.cloneDeep)(original);
  original = null;
  console.assert((cloned == null ? void 0 : cloned.length) !== void 0);
  original = () => {
    console.log(11111);
    return "arrow function";
  };
  cloned = (0, import_cloneDeep.cloneDeep)(original);
  original = null;
  console.assert(cloned() == "arrow function");
  original = {
    method: () => {
      console.log(11111);
      return "arrow function";
    }
  };
  cloned = (0, import_cloneDeep.cloneDeep)(original);
  original.method = null;
  console.assert(cloned.method() == "arrow function");
}
function DateTest() {
  var _a;
  let original = Date;
  let cloned = (0, import_cloneDeep.cloneDeep)(original);
  original = null;
  console.assert(cloned !== null);
  original = Date();
  cloned = (0, import_cloneDeep.cloneDeep)(original);
  original = null;
  console.assert(cloned !== null);
  original = new Date();
  cloned = (0, import_cloneDeep.cloneDeep)(original);
  original = null;
  console.assert(cloned !== null);
  original = new Date();
  cloned = (0, import_cloneDeep.cloneDeep)(original);
  original = null;
  console.assert(cloned !== null);
  original = {
    a: {
      key: Date
    }
  };
  cloned = (0, import_cloneDeep.cloneDeep)(original);
  original.a.key = null;
  console.assert(((_a = cloned == null ? void 0 : cloned.a) == null ? void 0 : _a.key) !== null);
}
function MapSetTest() {
  let original = new Set[{ a: { aa: [{ aaa: { aaa: "b", bbb: function() {
    console.log("bbb");
  }, ccc: () => {
    console.log("ccc");
  } } }] } }, { b: 1 }]();
  let cloned = (0, import_cloneDeep.cloneDeep)(original);
  console.assert(original !== cloned, original, cloned);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DateTest,
  MapSetTest,
  functionTest,
  objectTest,
  primaryTest
});
//# sourceMappingURL=testFunctions.js.map
