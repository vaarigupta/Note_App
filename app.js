
const fs = require('fs');
const os = require('os');

console.log("helllllllllooooo");
fs.appendFile('intro.txt', "Helloo world",function(err){
	if(err)
	{
		console.log("can't write to the file")
	}
});


let user = os.userInfo();
console.log(user);

