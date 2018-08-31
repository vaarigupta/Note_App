var obj = {
	name : 'Andrew'
}
var ObjToString = JSON.stringify(obj)
console.log( typeof obj);
console.log( typeof ObjToString);
console.log(ObjToString)

var string = '{ "name" : "vaari" , "age" : 21}';
var StringToObj = JSON.parse(string);
console.log( typeof string);
console.log( typeof StringToObj);
console.log(StringToObj)

