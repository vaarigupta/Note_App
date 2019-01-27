//console.log("STARTING Note.js");
const yargs = require('yargs');
const title ={
	describe:"Title of the Note",
	alias : 't',
	demand : true
}
const body =
{
	describe:"Body of the Note",
	alias : 'b',
	demand : true
}
const argv = yargs.
command( 'add','Adding a new note' ,
{
title,
body

})
.command('list','Listing all the notes')
.command('read' , 'Reading a note',{
	title
})
.command('remove','Removing a note',{
	title
}).argv;
const fs = require('fs');
/* this is called refactoring
 when we create functions for those functionalities
 which need to be used at various places in the program
 */

const fetchNote = ()=>{
	try
	{
		 var notes_array = fs.readFileSync("notes-add.json");
		 var notes = JSON.parse(notes_array);
		 return notes;
	}

	catch(e)
	{
          return [];
	}
}
const saveNote = (notes)=>
{
	fs.writeFileSync("notes-add.json",JSON.stringify(notes));
}
const addNote = (title,body)=>
{
var notes = fetchNote();
var note = {
	title ,
	body
}

var duplicate_check = notes.filter((note)=>{
	return note.title === title;
})
if(duplicate_check.length === 0)
{
	 notes.push(note);
	 saveNote(notes);
	 return note;

}
else
{
	return undefined ;
}

}
const getAll = ()=>
{
  //console.log("Getting all the notes")
  var allNotes = fetchNote();
  return allNotes;
}

const readNote =(title)=>
{
  //console.log('Title :',title,' ,Body :',argv.body)
	/// Fetch Notes
  var notes = fetchNote();
	/// Filter Notes and Extract the note with same title as input
  var filteredNote = notes.filter((note)=>note.title=== title);
  var note = (filteredNote.length>0)? filteredNote[0] : undefined;
	return  note;


}
const removeNote =(title)=>
{
// 	console.log('Removing Notes')
// 	argv.title = ''
// 	argv.body= ''
// 	console.log('Title :',argv.title,' ,Body :',argv.body)

//fetch notes
var notes = fetchNote();
//filter the notes and check for the title and change
var filteredNotes = notes.filter((note)=> note.title!==title);
//save new notes array
saveNote(filteredNotes);

return notes.length !== filteredNotes.length;
}

var logNote = (note)=>
{
		console.log("--");
		console.log(`Title : ${note.title} `);
		console.log(` Body : ${note.body}`);

}

module.exports ={
	addNote,
	getAll,
	readNote,
	removeNote,
	logNote
}


///when the key and value has the same name , then we can use it for one time like addNote instead of using addNote : addNote









//console.log(module);

// module.exports.age = 21;
// module.exports.fun = function()
// {

// 	return "Hey vaari";
// }

// module.exports.add = function(a,b){
//   return (a+b)
// }
