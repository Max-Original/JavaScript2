//creating a empty object
let person = {};


//add some values
person.name = "Max";
person.age = 24;

console.log(person);

//remove value age 
delete person.age;

//check if person contains value "name", in case if person containse value it will print yes, if not it wont do nothing
if("name" in person){
	console.log("yes")
}

//it would show as undefined (не знайдено)
console.log(person.test);

//compares and translate to type
//conlole.log(person.test == undefined);

//only compares
// this wont work console.log(person.name === undefined);

//search if valuesare in the object
console.log('test' in person);
console.log('name' in person);

person["text text"] = "custom";
//console.log(persone.test test); wont work because of gap(пробіл)
console.log(person["text text"]);

let key = "text text";
console.log(person[key]);