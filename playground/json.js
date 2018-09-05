var fs = require('fs');
var OriginalNote = {
	title : "INDIA",
	body : "Beautiful Country"
}

var OriginalNoteString = JSON.stringify(OriginalNote);

fs.writeFileSync('notes.json',OriginalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(note)
console.log("Title : ", note.title);
console.log("Body : ",note.body);
console.log("OriginalNoteString :" , typeof OriginalNoteString);
console.log("note : ", typeof note);




// var obj = {
// 	name : 'Andrew'
// }
// var ObjToString = JSON.stringify(obj)
// console.log( typeof obj);
// console.log( typeof ObjToString);
// console.log(ObjToString)

// var string = '{ "name" : "vaari" , "age" : 21}';
// var StringToObj = JSON.parse(string);
// console.log( typeof string);
// console.log( typeof StringToObj);
// console.log(StringToObj)


















/// stringify is used to convert an object to a string
/// parse is used to convert a string to an object - doing just reverse of  stringify function
/// typeof is used to tell the type of the identifier
///Note :- JSON is basically a string -
///FEATURES OF JSON:-
///IT  has a structure similar to an object like key value pair 
///Always use odouble quotes for every string inside it not single quotes 
///we also have to wrap key in double quotes for creating a json 



