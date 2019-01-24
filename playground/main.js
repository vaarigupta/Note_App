const fs = require('fs');
const os = require('os');
const prac = require('./practice.js');
//const user = os.userInfo();
//console.log(user);
// let ans = prac.addNum(2,3);
// console.log(ans);

var command = process.argv[2];
console.log("Command : "+command);
if(command === 'add')
{
  console.log("Adding notes");
}
else if( command === 'list')
{
  console.log("Listing all Notes");
}
else if(command === 'read')
{
  console.log("fetching all nodes");
}
else if (command === 'remove')
{
  console.log("Removing All notes");
}
else {
  console.log("Sorry Not recognized");
}
