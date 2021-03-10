const invert = (obj) => {
  let resultObj = {};
  Object.keys(obj).forEach((key) => {
    // resultObj["_" + obj[key]] = key; // HACK - TO KEEP ORDERING
    resultObj[obj[key]] = key; // ORDERING WILL BE CHANGES AS WE HAVE NUMERIC KEYS
  });

  // let resultObj = new Map(); // USING MAP - TO KEEP ORDERING
  // for (const [key, value] of Object.entries(obj)) {
  //   resultObj.set(value, key);
  // }

  return resultObj;
};

console.log(
  "Task №2 - ",
  invert({ a: "some", b: "object", c: 1 }),
  "NO ORDERRING SAVED"
); // { 'some': 'a', 'object': 'b', '1': 'c' }
