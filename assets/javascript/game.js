//src link this to html
console.log("connected!") //connected to html

var musicians = ["coldplay", "chainsmokers", "brunomars", "eminem"];

var randomWordIndex = Math.floor(Math.random() *4);

var randomMusician = musicians[randomWordIndex];

var underscores = "";

for (var i = randomMusician.length - 1; i >= 0; i--) {
	underscores = underscores + " _ ";
}


$("#word").append(underscores);

