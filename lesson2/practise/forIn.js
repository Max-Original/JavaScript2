
let menu = {
		width : 111,
		heigth : 222,
		title : "you menu"
}
//show all value of menu
for(let key in menu){
	console.log("Key " + key + " Value "+ menu[key]);
}


//counts all how many key ther are;
let counter = 0;

for(let key in menu){
	counter++
}

console.log(counter);

//it will sort by it self, if you dont wont to, just put in a + 
let codes = {
		"45":"data1",
		"1":"data2",
		"17":"data3"
}
console.log(codes);
