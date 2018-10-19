var square = (x)=>{
	return x*x;
}
var square1 = (x) => x*x;
var square2 = x => x*x;
var person = {
	name :'Vaari',
	SayHi : ()=>{
		console.log(`Hey I'm ${this.name}`)
	},//this is an arrow function
	SayHi1(){
		console.log(`Hey I'm ${this.name}`)
	}//this is a regular function
}

//person.SayHi(); -> it is giving undefined because it is not in the scope of object 
//and also it doesnot bind to the object
person.SayHi1();