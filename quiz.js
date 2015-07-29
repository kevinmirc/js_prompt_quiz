alert("Let's take a quiz!");
var correct = 0
//list questions with prompts
//count the number correct by adding it to var correct as we go along

var q1 = prompt("cat or dog?")
	if (q1.toLowerCase() === "dog") {
		correct += 1;
	}
console.log("q1: " + q1)
console.log("correct " + correct)

var q2 = prompt("apple or android?")
	if (q2.toLowerCase() === "apple") {
		correct += 1;
	}
console.log("q2: " + q2)
console.log("correct " + correct)

var q3 = prompt("coke or pepsi?")
	if (q3.toLowerCase() === "coke") {
		correct += 1;
	}
console.log("q3: " + q3)
console.log("correct " + correct)

var q4 = prompt("football or softball?")
	if (q4.toLowerCase() === "football") {
		correct += 1;
	}
console.log("q4: " + q4)
console.log("correct " + correct)

var q5 = prompt("beer or wine?")
	if (q5.toLowerCase() === "beer") {
		correct += 1;
	}
console.log("q5: " + q5)
console.log("correct " + correct)

var q6 = prompt("code or bros?")
	if (q6.toLowerCase() === "bros") {
		correct += 1;
	}
console.log("q5: " + q6)
console.log("correct " + correct)

//make condition of which crown they get (4 options: gold, silver, bronze, none)
if (correct === 6) {
	document.write("<p>You got " + correct + " correct!</p>")
	document.write("<p><strong>You've earned a GOLD crown!</strong></p>")
} else if (correct >= 4) {
	document.write("<p>You got " + correct + " correct!</p>")
	document.write("<p><strong>You've earned a SILVER crown!</strong></p>")
} else if (correct >=1) {
	document.write("<p>You got " + correct + " correct!</p>")
	document.write("<p><strong>You've earned a BRONZE crown.</strong></p>")
} else if (correct === 0) {
	document.write("<p>Sorry. You got " + correct + " correct!</p>")
	document.write("<p><strong>You've earned no crown.</strong></p>")
}