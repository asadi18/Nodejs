// Create Module

const sub = (a, b) => a - b;

const add = (a, b) => a + b;

const div = (a, b) => a / b;

module.exports.test = (a, b) => add(a, b) / sub(a, b);

// we can export separtely as well like

module.exports.add = add;
module.exports.sub = sub;
// module.exports.test = test;

// another way is

// module.exports = {
//   test,
//   add,
// };

console.log(module);
