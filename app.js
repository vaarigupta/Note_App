console.log("STARTING app.js");

//const os = require('os');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


const note = require("./notes.js");

// fs.appendFile('intro.txt', "Helloo world",function(err){
// 	if(err)
// 	{
// 		console.log("can't write to the file")
// 	}
// });

// appendFile method is just appending the content in the file .It takes three arguments
// 1- file name 
// 2- content 
// 3- function if error comes

// let user = os.userInfo();
// console.log(user);
// fs.appendFileSync('intro.txt',"helloo" +user.username + "!!!");

//using appendFileSync , there is no need to use 3rd argument
//fs.appendFileSync('intro.txt',`helloo ${user.username} !!! .you are ${note.age} years old`);

//intead of concatenating the string , we can use template string in which we have to use ${} for evaluating any value for a variable 
// fs.appendFileSync('notes.js',`console.log("STARTING Note.js")`);

// let print = note.fun();
// console.log(print);

// let add = note.add(2,3); // we are using add function contained in the note.js by importing note here
// console.log(add);
// let add1 = note.add("helloo "," vaari");
// console.log(add1);

// console.log(_.isString('yes'));
// console.log(_.isString(true));//tells about the given input is a string or not
// console.log(_.uniq([1,2,3,3,4,5,5,2,2,4,4,4,4 , 3,78,89,789])); // it gives the unique elements of an array passed to it
// //console.log(process) -gives 
//console.log(process.argv)
var command = process.argv[2]
const argv = yargs.argv;
if(command === 'list')
{
	console.log("Listing notes")
}
else if(command === 'add')
{
	console.log('adding notes')
}
else if(command === 'remove')
{
	console.log('removing notes')
}
else if(command === 'read')
{
	console.log('reading my notes')
}
else
{
	console.log('not recognisable')
}
console.log("process" , process.argv);
console.log("yargs" , argv);

