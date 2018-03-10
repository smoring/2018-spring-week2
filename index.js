var beers = 99;

function printVerse(num) {

	var name = "bottles";
	if(num===1) { name = "bottle"; }

	console.log(num + " " + name + " of beer on the wall,");
	console.log(num + " " + name + " of beer!");
	console.log("Take one down, pass it around,");
	num--;
	console.log(num + " " + name + " of beer on the wall.\n");
	return num;
}

while(beers>0) {
	beers = printVerse(beers);
}
