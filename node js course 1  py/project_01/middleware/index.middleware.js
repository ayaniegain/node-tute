
const fs = require("fs");

const middlewareOne=(req, res, next) => {
    let vol = "hello";
    req.cer = vol;
    console.log("this is middleware 1");
    next();
  }

function logfileMiddleware(filename) {
    
 const  func=(req, res, next) => {
    console.log(req.cer);
  
    fs.appendFile(
        filename ,
      `\n ${Date.now()} |  ${req.method} |  ${req.path}| ${res.statusCode}`,
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
  
    console.log("this is middleware 2");
    next();
  }
  return func
}

  module.exports={
    middlewareOne,
    logfileMiddleware
  }