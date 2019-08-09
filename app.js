console.log("ello love")

//close Q&A modal
document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".modal").style.display = "none"
})

let question = [];
let answerA = [];
let answerB = [];
let answerC = [];
let answerD = [];
let correct = [];

//array items
let i = 0;

//keeps track of score
let score = parseFloat(document.querySelector(".score").innerHTML);


//display Q&A
document.querySelector("#right").addEventListener("click", function () {
    // console.log("working")
    document.querySelector(".modal").style.display = "block";
    question = ["Molecule made up of 2 hydrogen atoms and 1 oxygen atom", "sampleQuestion2", "sampleQuestion3"];
    answerA = ["What is earth?", "sampleAnswerI", "sampleAnsweri"];
    answerB = ["What is water?", "sampleAnswerII", "sampleAnswerii"];
    answerC = ["What is fire?", "sampleAnswerIII", "sampleAnsweriii"];
    answerD = ["What is earth?", "sampleAnswerIV", "sampleAnsweriv"];
    correct = ["What is water?", "sampleAnswerI", "sampleAnsweriv"];
    points = parseFloat("300");

    if (i < question.length && i < answerA.length && i < answerB.length && i < answerC.length && i < answerD.length && i < correct.length) {
        document.querySelector("#questionbox").innerHTML = question[i];
        document.querySelector("#a1").innerHTML = answerA[i];
        document.querySelector("#a2").innerHTML = answerB[i];
        document.querySelector("#a3").innerHTML = answerC[i];
        document.querySelector("#a4").innerHTML = answerD[i];
        correct[i];
    }
})

let choices = document.querySelectorAll(".answerbox")
for (let x = 0; x < choices.length; x++) {
    choices[x].addEventListener("click", function (event) {
        const selected = event.target.innerHTML
        console.log(correct[i])
        console.log(selected)
        if (selected === correct[i]) {
            console.log(score + points);
            score = score + points
        }
        else {
            console.log(score - points);
            score = score - points
        }
        document.querySelector(".score").innerHTML = score;
        document.querySelector(".modal").style.display = "none";
        i++;
        if(i >= question.length && i >= answerA.length && i >= answerB.length && i >= answerC.length && i >= answerD.length && i >= correct.length) {
            document.querySelector(".modal").style.display = "none";
            document.querySelector("#right").style.display = "none";
        }
    })
}