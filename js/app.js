// The Questions
var problems = [
	{
		question: "What is 2 + 2? (number value)",
		answer: "4"
	},
	{
		question: "What is the most feared Uruk-Khai warrior from Isenguard?",
		answer: "lurtz"
	},
	{
		question: "How old is Billy Franz? (number value)",
		answer: "25"
	},
	{
		question: "What do you do when priorities quickly change?",
		answer: "adapt"
	},
	{
		question: "What is the main markup language used in web development?",
		answer: "html"
	},
	{
		question: "How many Build-a-Bears does it take to impress your sister? (number value)",
		answer: "0"
	}
];

//Random Number Generation

//Declaring Global Variables for Functions to Generate Random Numbers
var theLength = problems.length,
	x = true,
	y,
	hh = true,
	z;

//Function that Generates Second Random Number
function number1() {
	while(x) {
		y = Math.floor((Math.random() * theLength));
		if(y === a) {
			console.log(y)
			x = true;
		}
		else {
			return y;
		}
	}
}

//Function that Generates Third Random Number
function number2() {
	while(hh) {
		z = Math.floor((Math.random() * theLength));
		if(z === a || z === b) {
			console.log(z)
			hh = true;
		}
		else {
			return z;
		}
	}
}

//Declaring Vairbales for Random Numbers
var a = Math.floor((Math.random() * theLength)),
	b = number1(),
	c = number2();
	problemsArray = [problems[a].question, problems[b].question, problems[c].question];
	answerArray = [problems[a].answer, problems[b].answer, problems[c].answer];

//Logging Three Different Random Numbers to Console
console.log(a + " " + b + " " + c)
console.log(problemsArray)
console.log(answerArray)

//Declaring Variables for Question Function
var nId = "question1"
var d = "2"

//Function that puts question into lable tag
function theQuestion() {
	for(i = 0; i < problemsArray.length; i++) {
		var target = document.getElementById(nId);
		target.innerHTML = problemsArray[i];
		target.value = answerArray[i];
		nId = nId.slice(0, nId.length - 1);
		nId = nId + d;
		d = (Number(d) + 1).toString();
		console.log(d)
		console.log(nId)
		console.log(typeof nId)
	}
}
theQuestion();

//Separate Functions to Determine if Answer is Correct
/*
function theAnswer1() {
	var yourAnswer = document.getElementById("answer1").value.toLowerCase();
	if(yourAnswer === problems[a].answer) {
		alert("You solved the puzzle bro!!!");
	}
	else {
		alert("Nope...")
	}
}

function theAnswer2() {
	var yourAnswer = document.getElementById("answer2").value.toLowerCase();
	if(yourAnswer === problems[b].answer) {
		alert("You solved the puzzle bro!!!");
	}
	else {
		alert("Nope...")
	}
}

function theAnswer3() {
	var yourAnswer = document.getElementById("answer3").value.toLowerCase();
	if(yourAnswer === problems[c].answer) {
		alert("You solved the puzzle bro!!!");
	}
	else {
		alert("Nope...")
	}
}
*/

//One function to determine if answer is correct

function theAnswer(ID, id) {
	var yourAnswer = document.getElementById(ID).value.toLowerCase(),
		theAnswer = document.getElementById(id).value;
	if(yourAnswer === theAnswer) {
		alert("You solved the puzzle bro!!!");
	}
	else {
		alert("Nope...")
	}
}

function refresh() {
	window.location.reload(true);
}