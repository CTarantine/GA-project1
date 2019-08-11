console.log("ello love")

//close Q&A modal
// document.querySelector(".close").addEventListener("click", function () {
//     document.querySelector(".modal").style.display = "none"
// })

// audio from https://www.zapsplat.com/?s=voice+correct&post_type=music&sound-effect-category-id=
let correctAnswer = new Audio(src="Audio/correct.mp3");
// audio from https://www.zapsplat.com/?s=voice+incorrect&post_type=music&sound-effect-category-id= 
let incorrectAnswer = new Audio(src="Audio/incorrect.mp3");


let question = [];
let answerA = [];
let answerB = [];
let answerC = [];
let answerD = [];
let correct = [];

// rightCard array items
let a = 0;
//bottomCard array items
let b = 0;
//leftCard array items
let c = 0;
//topCard array items
let d = 0;

let rightCard = document.querySelector("#right");
let bottomCard = document.querySelector("#bottom");
let leftCard = document.querySelector("#left");
let topCard = document.querySelector("#top");


let modal = document.querySelector(".modal");
let modal2 = document.querySelector(".modal2");
let modal3 = document.querySelector(".modal3");
let modal4 = document.querySelector(".modal4");

//keeps track of score
let score = parseFloat(document.querySelector(".score").innerHTML);

let choices = document.querySelectorAll(".answerbox");
let choices2 = document.querySelectorAll(".answerbox2");
let choices3 = document.querySelectorAll(".answerbox3");
let choices4 = document.querySelectorAll(".answerbox4");


rightCard.addEventListener("click", function () {
    // console.log("working")
    modal.style.display = "block";
    question = ["sampleQuestion1", "sampleQuestion2", "sampleQuestion3"],
        answerA = ["sampleAnswer1", "sampleAnswerI", "sampleAnsweri"],
        answerB = ["What is?", "sampleAnswerII", "sampleAnswerii"],
        answerC = ["What is?", "sampleAnswerIII", "sampleAnsweriii"],
        answerD = ["What is?", "sampleAnswerIV", "sampleAnsweriv"],
        correct = ["sampleAnswer1", "sampleAnswerI", "sampleAnsweriv"],
        points = parseFloat("300")

    if (a < question.length && a < answerA.length && a < answerB.length && a < answerC.length && a < answerD.length && a < correct.length) {
        document.querySelector("#questionbox").innerHTML = question[a];
        document.querySelector("#a1").innerHTML = answerA[a];
        document.querySelector("#a2").innerHTML = answerB[a];
        document.querySelector("#a3").innerHTML = answerC[a];
        document.querySelector("#a4").innerHTML = answerD[a];
        correct[a];
    }
})

for (let x = 0; x < choices.length; x++) {
    choices[x].addEventListener("click", function (event) {
        let selected = event.target.innerHTML
        console.log(correct[a])
        console.log(selected)
        console.log(event.currentTarget)
        if (selected === correct[a]) {
            console.log(score + points);
            correctAnswer.play();
            score = score + points
        }
        else {
            console.log(score - points);
            incorrectAnswer.play();
            score = score - points
        }
        document.querySelector(".score").innerHTML = score;
        modal.style.display = "none";
        a++;
        if (a >= question.length && a >= answerA.length && a >= answerB.length && a >= answerC.length && a >= answerD.length && a >= correct.length) {
            rightCard.style.color = "black";
            rightCard.style.opacity = "0.6";
            rightCard.style.border = "solid black";
            rightCard.addEventListener("click", function () {
                modal.style.display = "none"
            })
        }
    })
}

bottomCard.addEventListener("click", function () {
    modal2.style.display = "block";
    question = ["Molecule made up of 2 hydrogen atoms and 1 oxygen atom", "sampleQuestion2", "sampleQuestion3"];
    answerA = ["What is earth?", "sampleAnswerI", "sampleAnsweri"];
    answerB = ["What is water?", "sampleAnswerII", "sampleAnswerii"];
    answerC = ["What is fire?", "sampleAnswerIII", "sampleAnsweriii"];
    answerD = ["What is earth?", "sampleAnswerIV", "sampleAnsweriv"];
    correct = ["What is water?", "sampleAnswerI", "sampleAnsweriv"];
    points = parseFloat("500");

    if (b < question.length && b < answerA.length && b < answerB.length && b < answerC.length && b < answerD.length && b < correct.length) {
        document.querySelector("#questionbox2").innerHTML = question[b];
        document.querySelector("#a12").innerHTML = answerA[b];
        document.querySelector("#a22").innerHTML = answerB[b];
        document.querySelector("#a32").innerHTML = answerC[b];
        document.querySelector("#a42").innerHTML = answerD[b];
        correct[b];
    }
})

for (let x = 0; x < choices.length; x++) {
    choices2[x].addEventListener("click", function (event) {
        const selected = event.target.innerHTML
        console.log(correct[b])
        console.log(selected)
        if (selected === correct[b]) {
            console.log(score + points);
            correctAnswer.play();
            score = score + points
        }
        else {
            console.log(score - points);
            incorrectAnswer.play();
            score = score - points
        }
        document.querySelector(".score").innerHTML = score;
        modal2.style.display = "none";
        b++;
        if (b >= question.length && b >= answerA.length && b >= answerB.length && b >= answerC.length && b >= answerD.length && b >= correct.length) {
            bottomCard.style.color = "black";
            bottomCard.style.opacity = "0.6";
            bottomCard.style.border = "solid black";
            bottomCard.addEventListener("click", function () {
                modal2.style.display = "none"
            })
        }
    })
}

leftCard.addEventListener("click", function () {
    modal3.style.display = "block";
    question = ["sampleQuestion1", "sampleQuestion2", "sampleQuestion3"];
    answerA = ["What is?", "sampleAnswerI", "sampleAnsweri"];
    answerB = ["What is?", "sampleAnswerII", "sampleAnswerii"];
    answerC = ["What is?", "sampleAnswerIII", "sampleAnsweriii"];
    answerD = ["What is?", "sampleAnswerIV", "sampleAnsweriv"];
    correct = ["What is?", "sampleAnswerI", "sampleAnsweriv"];
    points = parseFloat("700");

    if (c < question.length && c < answerA.length && c < answerB.length && c < answerC.length && c < answerD.length && c < correct.length) {
        document.querySelector("#questionbox3").innerHTML = question[c];
        document.querySelector("#a13").innerHTML = answerA[c];
        document.querySelector("#a23").innerHTML = answerB[c];
        document.querySelector("#a33").innerHTML = answerC[c];
        document.querySelector("#a43").innerHTML = answerD[c];
        correct[c];
    }
})

for (let x = 0; x < choices.length; x++) {
    choices3[x].addEventListener("click", function (event) {
        const selected = event.target.innerHTML
        console.log(correct[c])
        console.log(selected)
        if (selected === correct[c]) {
            console.log(score + points);
            correctAnswer.play();
            score = score + points
        }
        else {
            console.log(score - points);
            incorrectAnswer.play();
            score = score - points
        }
        document.querySelector(".score").innerHTML = score;
        modal3.style.display = "none";
        c++;
        if (c >= question.length && c >= answerA.length && c >= answerB.length && c >= answerC.length && c >= answerD.length && c >= correct.length) {
            leftCard.style.color = "black";
            leftCard.style.opacity = "0.6";
            leftCard.style.border = "solid black";
            leftCard.addEventListener("click", function () {
                modal3.style.display = "none"
            })
        }
    })
}

topCard.addEventListener("click", function () {
    modal4.style.display = "block";
    question = ["Molecule made up of 2 hydrogen atoms and 1 oxygen atom.", "Mother of Blue, Sir, and Rumi.", "sampleQuestion3"];
    answerA = ["What is earth?", "Who is Ciara?", "sampleAnsweri"];
    answerB = ["What is water?", "Who is Kelly Rowland?", "sampleAnswerii"];
    answerC = ["What is fire?", "Who is Beyoncé?", "sampleAnsweriii"];
    answerD = ["What is air?", "Who is Ari Lennox?", "sampleAnsweriv"];
    correct = ["What is water?", "Who is Beyoncé?", "sampleAnsweriv"];
    points = parseFloat("100");

    if (d < question.length && d < answerA.length && d < answerB.length && d < answerC.length && d < answerD.length && d < correct.length) {
        document.querySelector("#questionbox4").innerHTML = question[d];
        document.querySelector("#a14").innerHTML = answerA[d];
        document.querySelector("#a24").innerHTML = answerB[d];
        document.querySelector("#a34").innerHTML = answerC[d];
        document.querySelector("#a44").innerHTML = answerD[d];
        correct[d];
    }
})
for (let x = 0; x < choices.length; x++) {
    choices4[x].addEventListener("click", function (event) {
        const selected = event.target.innerHTML
        console.log(correct[d])
        console.log(selected)
        if (selected === correct[d]) {
            console.log(score + points);
            correctAnswer.play();
            score = score + points
        }
        else {
            console.log(score - points);
            incorrectAnswer.play();
            score = score - points
        }
        document.querySelector(".score").innerHTML = score;
        document.querySelector(".modal4").style.display = "none";
        d++;
        if (d >= question.length && d >= answerA.length && d >= answerB.length && d >= answerC.length && d >= answerD.length && d >= correct.length) {
            topCard.style.color = "black";
            topCard.style.opacity = "0.6";
            topCard.style.border = "solid black";
            topCard.addEventListener("click", function () {
                modal4.style.display = "none"
            })
        }
    })
}