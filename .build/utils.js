var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  func: () => func
});
const func = () => {
  console.log("func");
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  func
});
//# sourceMappingURL=utils.js.map
