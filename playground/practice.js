


// module.exports.addNum = (a,b)=>{
//   return a+b;
// }

const fs = require('fs');
var addNote = (title , body)=>{
console.log("Adding Notes ");
var notes = [];
var note = {
  title,
  body
}
notes.push(noteToStr);
var noteToStr = JSON.stringify(notes);
fs.writeFileSync('json1.json',noteToStr);
var StrToNotes = fs.readFileSync('json1.json');

var notesFromFile = JSON.parse(StrToNotes);

console.log(notesFromFile);


}

var getAll = ()=>
{
  console.log(`Getting all Notes`);
}

var readNote = (title)=>{
  console.log(`Reading Notes :
Title : ${title}`)
}


var removeNote = (title)=>{

console.log(`Removing Notes :
Title : ${title}  `)

}



module.exports = {

  addNote,
  getAll,
  readNote,
  removeNote
}
