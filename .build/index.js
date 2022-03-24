function primaryTest() {
  let original = null;
  let cloned = cloneDeep(original);
  original = "";
  console.assert(cloned === null, original, cloned);
  original = void 0;
  cloned = cloneDeep(original);
  original = "";
  console.assert(cloned === void 0, original, cloned);
  original = true;
  cloned = cloneDeep(original);
  original = "";
  console.assert(cloned === true, original, cloned);
  original = false;
  cloned = cloneDeep(original);
  original = "";
  console.assert(cloned === false, original, cloned);
  original = 1;
  cloned = cloneDeep(original);
  original = "";
  console.assert(cloned === 1, original, cloned);
  original = "1";
  cloned = cloneDeep(original);
  original = "";
  console.assert(cloned === "1", original, cloned);
}
function functionTest() {
  let original = function() {
  };
  let cloned = cloneDeep(original);
  console.assert(original !== cloned, original, cloned);
  original = Function;
  cloned = cloneDeep(original);
  console.assert(original !== cloned, original, cloned);
  original = new Function();
  cloned = cloneDeep(original);
  console.assert(original !== cloned, original, cloned);
  original = () => {
    console.log(11111);
  };
  cloned = cloneDeep(original);
  console.assert(original !== cloned, original, cloned);
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
  let cloned = cloneDeep(original);
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
  cloned = cloneDeep(original);
  original[0].a = [];
  console.assert(cloned[0].a.aa[0].aaa.bbbb() === "returning B");
  original = Object;
  cloned = cloneDeep(original);
  original["a"] = 1;
  console.assert(Object.keys(cloned).length === 0);
  original = new Object();
  cloned = cloneDeep(original);
  original["a"] = 1;
  console.assert(Object.keys(cloned).length === 0);
}
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
    value.forEach((element) => {
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
const demo = (value) => {
  let copiedValue = {};
  if (typeof value === "object") {
    if (!Object.entries(value)) {
      return value;
    }
    const key = Object.entries(value)[0][0];
    if (key) {
      const pairedValue = demo(Object.entries(value)[0][1]);
      copiedValue[key] = pairedValue;
    }
  }
  return copiedValue;
};
const testValue = {
  a: {
    b: {
      c: [1, 2, 3]
    }
  }
};
objectTest();
//# sourceMappingURL=index.js.map
