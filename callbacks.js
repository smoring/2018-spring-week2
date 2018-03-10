function makeSquared(number) {
	return function() {
		return number * number;
	}
}

function makePower(power) {
	return function(x) {
		return Math.pow(x, power);
	}
}

// var nineSquared = makeSquared(9);
// var twelveSquared = makeSquared(12);


var squared = makePower(2)
var cubed = makePower(3)
var toTheFourth = makePower(4)

console.log("Nine squared is " + squared(9) );
console.log("Twelve cubed is " + cubed(12) );
console.log("Five to the fourth power is " + toTheFourth(5) );