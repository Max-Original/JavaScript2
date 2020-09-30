try{
	console.log("start of code");
}catch (err){
	console.log("error happend");
}finally{
	console.log("finally block");
}

console.log("=======================");

try {
	var data = {'age':20};
	var user = JSON.parse(data)
	if(!user.name){
		throw new SyntaxError('parse error');
	}
} catch (err) {
	console.log('error happend---> '+err);
} finally {
	console.log('finally block');
}
