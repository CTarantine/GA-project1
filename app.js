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
        points = parseFloat("100");

            if (i < question.length && i < answerA.length && i < answerB.length && i < answerC.length && i < answerD.length && i < correct.length) {
                document.querySelector("#questionbox").innerHTML = question[i];
                document.querySelector("#a1").innerHTML = answerA[i];
                document.querySelector("#a2").innerHTML = answerB[i];
                document.querySelector("#a3").innerHTML = answerC[i];
                document.querySelector("#a4").innerHTML = answerD[i];
                correct[i];
                i++;
            
            // else {
            //     document.querySelector(".modal").style.display = "none";
            //     document.querySelector("#right").style.color = "black";
            // }
            
        let choices = document.querySelectorAll(".answerbox")
        for (let x = 0; x < choices.length; x++) {
            choices[x].addEventListener("click", function (event) {
                console.log(event.target.innerText)
                console.dir(event)
                if (answerA[i].value === correct[i]) {
                    console.log(score + points)
                }
                if (answerB[i].value === correct[i]) {
                    console.log(score + points)
                }
                if (answerB[i].value === correct[i]) {
                    console.log(score + points)
                }
                if (answerB[i].value === correct[i]) {
                    console.log(score + points)
                }
                else {
                    console.log(score - points)
                }
            })
        }
        }
            })