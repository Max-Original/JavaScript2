let user = {};
user.name = "ПИЛИП";
user.surname = "ШЕВЧЕНКО";
user.name = "СЕРГІЙ";
delete user.name;

function countSalarie(salari, salari1, salari2) {
	return salari + salari1 + salari2;
}

let count = 0;
let employeeSalaries = {};
employeeSalaries.salari1 = 100;
employeeSalaries.salari2 = 0;
employeeSalaries.salari3 = 100;

for ( let key in employeeSalaries) {
	count += employeeSalaries[key];
	if (employeeSalaries[key] == 0) {
		count += 0;
	}
}

console.log(count);

function doo(one, two, something) {
	if (something == plus) {
		return one + two;
	} else if (something == mines) {
		if (one < 0) {
			throw new RangeError("first value cant be less then 0");
		}
		return one - two;
	} else if (something == multiply) {
		if (one < 0) {
			throw new Error("first value cant be less then 0");
		} else if (two < 0) {
			throw new Error("Second value cant be less then 0");
		} else {
			return one * two;
		}
	} else if (something == divide) {
		if (one < 0) {
			throw new Error("first value cant be less then 0");
		} else if (two < 0) {
			throw new Error("Second value cant be less then 0");
		} else {
			return one / two;
		}
	}
}

try{
doo(0,2,mines)}catch (err) {
	console.log('error happend---> '+err);
}
