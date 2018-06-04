// console.log("connected");
var questions = [{
		question: "Who is the Assistant to the Regional Manager?",
		answer: "Dwight"
	},
	{
		question: "What is the name of the character on Shameless who is an alcoholic dad?",
		answer: "Frank"
	},
	{
		question: "How many dragons are on Game of Thrones?",
		answer: "3"
  },
  {
    question: "Jim Parsons plays which character in The Big Bang Theory?",
    answer: "Sheldon"
  },
  {
    question: "Where does Shamelss take place?",
    answer: "Chicago"
  },
  {
    question: "Who is Heisenberg on Breaking Bad?",
    answer: "Walter White"
  },
  {
    question: "Cersei Lannister is in love with who?",
    answer: "Jaime"
  },
  {
    question: "What drug does Walter White make?",
    answer: "Meth"
  },
  {
    question: "Who does Pam have a crush on in The Office?",
    answer: "Jim"
  },
  {
    question: "What's the name of the company the characters from The Office work for?",
    answer: "Dunder Mifflin Scranton"
	}];

function populateHTML() {
	// document.getElementById("quiz").innerHTML = "";

	for(var i = 0; i < questions.length; i++) {
		createQ(questions[i]);
	}
}
populateHTML();

function createQ(activeQ) {
	var myDiv = document.createElement("div");
		var myH2 = document.createElement("h2");
		var myInput = document.createElement("input");
			myDiv.appendChild(myH2);
			myDiv.appendChild(myInput);
			document.getElementById("quiz").appendChild(myDiv);

		myH2.innerText = activeQ.question;
}

var myBtn = document.createElement("button");
	myBtn.innerText = "Check Answers";
	myBtn.setAttribute("onclick", "getAnswers()");
	document.body.appendChild(myBtn);

function getAnswers() {
	var inputs = document.getElementsByTagName("input");
	for(var i = 0; i < questions.length; i++) {
		if(inputs[i].value == questions[i].answer) {
			inputs[i].style.border = "3px solid green";
		} else {
			inputs[i].style.border = "3px solid red";
		}
	}

}
