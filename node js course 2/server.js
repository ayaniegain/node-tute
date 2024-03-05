// let add=(a,b)=>a+b

// let res=add(3,7)

// console.log(res);

//callback

// function add() {
//   console.log("working completed");
// }

// function myfunc(a, b, callback) {
//   callback();

//   let sum = a + b;

//   return sum;
// }

// console.log(myfunc(9, 4, add));

const fs = require("fs");
const os = require("os");

fs.writeFileSync("index.txt", "Hello World!");

let { username } = os.userInfo();

fs.appendFileSync("index.txt", ` - ${username}`);

let data = fs.readFileSync("index.txt", "utf8");

console.log(data);
