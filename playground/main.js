const fs = require('fs');
const yargs = require('yargs');
const prac = require('./practice.js');
//const user = os.userInfo();
//console.log(user);
// let ans = prac.addNum(2,3);
// console.log(ans);

//var command = process.argv;
// var argv = yargs.argv;
// var command = argv._[0];
// console.log("yargs : ",argv);
//
// console.log("Command : "+command);
// if(command === 'add')
// {
//
//   prac.addNote(argv.title , argv.body);
// }
// else if( command === 'list')
// {
//
//   prac.getAll();
// }
// else if(command === 'read')
// {
//
//   prac.readNote(argv.title);
// }
// else if (command === 'remove')
// {
//
//   prac.removeNote(argv.title);
// }
// else {
//   console.log("Sorry Not recognized");
// }


var object = {
  title: 'vaari',
  body: 'she is a good girl'
}
/// Object to JSON String
var ObjJson = JSON.stringify(object);

/// writing content(JSON STRING) to file
fs.writeFileSync('json1.json',ObjJson);

/// Read Content of the file and save it to readObj
var readObj = fs.readFileSync('json1.json');

/// Again convert JSON to Object
var jsonToObj = JSON.parse(readObj);
console.log(typeof jsonToObj);
console.log(jsonToObj.title);
