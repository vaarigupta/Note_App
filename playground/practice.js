


// module.exports.addNum = (a,b)=>{
//   return a+b;
// }


var addNote = (title , body)=>{
  console.log(`Adding Notes :
Title : ${title}
Body : ${ body}
    `);
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
