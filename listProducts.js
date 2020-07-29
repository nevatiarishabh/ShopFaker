var faker = require("faker");
console.log("Welcome to my shop!");
for(var i=0; i<10; i++){
	var pn= faker.commerce.productName();
	var amt= faker.commerce.price();
	console.log(pn + ": $" + amt);
}