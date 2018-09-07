console.log("STARTING Note.js");
const yargs = require('yargs');
const argv = yargs.argv;
const fs = require('fs');
/* this is called refactoring
 when we create functions for those functionalities
 which need to be used at various places in the program
 */

const fetchNote = ()=>{
	try
	{
		 var notes_array = fs.readFileSync("notes-add.json");
		 return JSON.parse(notes_array);
	}

	catch(e)
	{
          return [];
	}
}
const saveNote = (notes)=>
{
	fs.writeFileSync("notes-add.json",notes);
}
const addNote = (title,body)=>
{
var notes = fetchNote();
var note = {
	title ,
	body
}

var duplicate_check = notes.filter((note)=>{
	return note.title === title 
})
if(duplicate_check.length == 0)
{
	 notes.push(note);
	 notes = JSON.stringify(notes);
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
  console.log("Getting all the notes")
}
const readNote =(title)=>
{
  //console.log('Title :',title,' ,Body :',argv.body)
  var notes = fetchNote();
  var filteredNote = notes.filter((note)=>note.title=== title);
  return filteredNote[0];


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
var filteredNotes = notes.filter((note)=> {
	if(note.title !== title)
	{
		return note;
	}
});
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