const groupBy = (array, func) => {
  let resultObj = {};

  array.forEach((item) => {
    const key = func(item);
    const group = { [key]: array.filter((i) => func(i) === key) };
    resultObj = { ...resultObj, ...group };
  });

  return resultObj;
};

console.log("Task №1 - ", groupBy([3.6, 3.7, 6.4, 8.9], Math.floor)); // { '3': [3.6, 3.7], '6': [6.4], '8': [8.9] }
