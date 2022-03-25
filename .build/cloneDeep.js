var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  cloneDeep: () => cloneDeep
});
function cloneDeep(value) {
  if (value === null || value === void 0) {
    return value;
  }
  if (["string", "number", "boolean"].includes(typeof value)) {
    return value;
  }
  if (typeof value === "function") {
    if (value.assign) {
      return {};
    }
    return value;
  }
  if (typeof value === "object" && value.length) {
    if (Object.keys(value).length === 0) {
      return {};
    }
    const arr = [];
    value.length > 0 && value.forEach((element) => {
      const returnedValue = cloneDeep(element);
      arr.push(returnedValue);
    });
    return arr;
  }
  let copiedValue = {};
  if (typeof value === "object") {
    if (Object.keys(value).length === 0) {
      return {};
    }
    for (const key in value) {
      const returnedValue = cloneDeep(value[key]);
      copiedValue[key] = returnedValue;
    }
    return copiedValue;
  }
  return value;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cloneDeep
});
//# sourceMappingURL=cloneDeep.js.map
