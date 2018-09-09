//console.log("STARTING app.js");

//const os = require('os');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


const notes = require("./notes.js");


var command = process.argv[2]
const argv = yargs.argv; // yargs is an object having a key argv which is again an  object type of getter
//console.log("process" , process.argv); 
// whatever the input is given in the command line , yargs appends all of them in a list
// If we use --anything ="xyz" then we create a key value pair which becomes accessible to implement necessary functionalities to them
if(command === 'list')
{
	//console.log("Listing notes")
	var allNotes = notes.getAll();
	console.log(`Printing all the ${allNotes.length} notes `)
	allNotes.forEach((note)=> notes.logNote(note));
}
else if(command === 'add')
{
	//console.log('adding notes')
	var note = notes.addNote(argv.title , argv.body);
	if(note)
	{
		console.log("New note added")
		notes.logNote(note);
	}
	else
	{
		console.log("Oops!! title already used")
	}
}
else if(command === 'read')
{
	//console.log('reading my notes')

	var note = notes.readNote(argv.title);
	if(note)
	{
		console.log("Reading note");
		notes.logNote(note);
	}
	else
	{
		console.log("Sorry ! Note was not found");
	}


}
else if(command === 'remove')
{
	//console.log('removing notes')

	var NoteRemoved = notes.removeNote(argv.title);
	var message = NoteRemoved ? "Note removed " : "No note exists with this title";
	console.log(message);
}

else
{
	console.log('not recognisable')
}










//------------------------------------------------------------------------------------------------


//console.log("yargs argv object:-" , argv);
//console.log(process);
//console.log(yargs);


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