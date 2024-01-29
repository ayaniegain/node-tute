const fs= require("fs")

// CREATE FILE
//sync
// let file=fs.writeFileSync("./test1.txt","create test1 file");

//async
// fs.writeFile("./test.txt","create a new file",(err)=>console.log(err));


// READ FILE
// let file=fs.readFileSync("./test1.txt",{encoding: 'utf-8'});

// console.log(file);
// fs.readFile("./test1.txt" ,{encoding: 'utf-8'},(err,data)=>!err?console.log(data):console.log(err));

//DELETE FILE

// fs.unlinkSync("./test.txt")

//APPEND FILE
// fs.appendFile('./test1.txt',"123456\n",(err)=>console.log(err))

const os= require('os')

console.log(os.cpus().length);