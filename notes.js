console.log("STARTING Note.js");
const yargs = require('yargs');
const argv = yargs.argv;
const addNote = (title,body)=>
{
	console.log('Adding Notes' , title , body);
}
const getAll = ()=>
{
  console.log("Getting all the notes")
}
const readNote =(title)=>
{
  console.log('Title :',title,' ,Body :',argv.body)
}
const removeNote =(title)=>
{
	console.log('Removing Notes')
	argv.title = ''
	argv.body= ''
	console.log('Title :',argv.title,' ,Body :',argv.body)
}
module.exports ={
	addNote,
	getAll,
	readNote,
	removeNote
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