//creating a function whit a insert text
function alert(text){
	console.log(text);
}

alert("Hello");

function custom(text, age, width){
	alert(text + age + width);
}

custom(1,2,1);

let a = 11;
function go(c){
	var b = 11;
	return a + b + c;
}

console.log(go(100));

let testCustom = function go(c){
	let b = 22;
	return a + b + c;
}
console.log(testCustom(1000));