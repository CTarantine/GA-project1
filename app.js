console.log("ello love")

//close Q&A modal
// document.querySelector(".close").addEventListener("click", function () {
//     document.querySelector(".modal").style.display = "none"
// })

let question = [];
let answerA = [];
let answerB = [];
let answerC = [];
let answerD = [];
let correct = [];

//array items
let i = 0;
let a = 0;
let b = 0;
let c = 0;;
let d = 0;;

//keeps track of score
let score = parseFloat(document.querySelector(".score").innerHTML);

let choices = document.querySelectorAll(".answerbox")


//display Q&A
document.querySelector("#right").addEventListener("click", function () {
    // console.log("working")
    runSequence(a)
    question = ["sampleQuestion1", "sampleQuestion2", "sampleQuestion3"];
    answerA = ["sampleAnswer1", "sampleAnswerI", "sampleAnsweri"];
    answerB = ["What is?", "sampleAnswerII", "sampleAnswerii"];
    answerC = ["What is?", "sampleAnswerIII", "sampleAnsweriii"];
    answerD = ["What is?", "sampleAnswerIV", "sampleAnsweriv"];
    correct = ["What is?", "sampleAnswerI", "sampleAnsweriv"];
    points = parseFloat("300");

    if (a < question.length && a < answerA.length && a < answerB.length && a < answerC.length && a < answerD.length && a < correct.length) {
        document.querySelector("#questionbox").innerHTML = question[a];
        document.querySelector("#a1").innerHTML = answerA[a];
        document.querySelector("#a2").innerHTML = answerB[a];
        document.querySelector("#a3").innerHTML = answerC[a];
        document.querySelector("#a4").innerHTML = answerD[a];
        correct[a];
    }
    a++
    if (a >= question.length && a >= answerA.length && a >= answerB.length && a >= answerC.length && a >= answerD.length && a >= correct.length) {
        document.querySelector("#right").style.color = "black";
    }
})

document.querySelector("#bottom").addEventListener("click", function () {
    runSequence(b)
    question = ["Molecule made up of 2 hydrogen atoms and 1 oxygen atom", "sampleQuestion2", "sampleQuestion3"];
    answerA = ["What is earth?", "sampleAnswerI", "sampleAnsweri"];
    answerB = ["What is water?", "sampleAnswerII", "sampleAnswerii"];
    answerC = ["What is fire?", "sampleAnswerIII", "sampleAnsweriii"];
    answerD = ["What is earth?", "sampleAnswerIV", "sampleAnsweriv"];
    correct = ["What is water?", "sampleAnswerI", "sampleAnsweriv"];
    points = parseFloat("500");

    if (b < question.length && b < answerA.length && b < answerB.length && b < answerC.length && b < answerD.length && b < correct.length) {
        document.querySelector("#questionbox").innerHTML = question[b];
        document.querySelector("#a1").innerHTML = answerA[b];
        document.querySelector("#a2").innerHTML = answerB[b];
        document.querySelector("#a3").innerHTML = answerC[b];
        document.querySelector("#a4").innerHTML = answerD[b];
        correct[b];
    }
    b++
    if (b >= question.length && b >= answerA.length && b >= answerB.length && b >= answerC.length && b >= answerD.length && b >= correct.length) {
        document.querySelector("#bottom").style.color = "black";
    }
})

document.querySelector("#left").addEventListener("click", function () {
    runSequence(c)
    question = ["sampleQuestion1", "sampleQuestion2", "sampleQuestion3"];
    answerA = ["What is?", "sampleAnswerI", "sampleAnsweri"];
    answerB = ["What is?", "sampleAnswerII", "sampleAnswerii"];
    answerC = ["What is?", "sampleAnswerIII", "sampleAnsweriii"];
    answerD = ["What is?", "sampleAnswerIV", "sampleAnsweriv"];
    correct = ["What is?", "sampleAnswerI", "sampleAnsweriv"];
    points = parseFloat("700");

    if (c < question.length && c < answerA.length && c < answerB.length && c < answerC.length && c < answerD.length && c < correct.length) {
        document.querySelector("#questionbox").innerHTML = question[c];
        document.querySelector("#a1").innerHTML = answerA[c];
        document.querySelector("#a2").innerHTML = answerB[c];
        document.querySelector("#a3").innerHTML = answerC[c];
        document.querySelector("#a4").innerHTML = answerD[c];
        correct[b];
    }
    c++
    if (c >= question.length && c >= answerA.length && c >= answerB.length && c >= answerC.length && c >= answerD.length && c >= correct.length) {
        document.querySelector("#left").style.color = "black";
    }
})

document.querySelector("#top").addEventListener("click", function () {
    // runSequence(d)
    document.querySelector(".modal").style.display = "block";
    question = ["Molecule made up of 2 hydrogen atoms and 1 oxygen atom.", "Mother of Blue, Sir, and Rumi.", "sampleQuestion3"];
    answerA = ["What is earth?", "Who is Ciara?", "sampleAnsweri"];
    answerB = ["What is water?", "Who is Kelly Rowland?", "sampleAnswerii"];
    answerC = ["What is fire?", "Who is Beyoncé?", "sampleAnsweriii"];
    answerD = ["What is earth?", "Who is Ari Lennox?", "sampleAnsweriv"];
    correct = ["What is water?", "Who is Beyoncé?", "sampleAnsweriv"];
    points = parseFloat("100");

    if (d < question.length && d < answerA.length && d < answerB.length && d < answerC.length && d < answerD.length && d < correct.length) {
        document.querySelector("#questionbox").innerHTML = question[d];
        document.querySelector("#a1").innerHTML = answerA[d];
        document.querySelector("#a2").innerHTML = answerB[d];
        document.querySelector("#a3").innerHTML = answerC[d];
        document.querySelector("#a4").innerHTML = answerD[d];
        correct[d];
    }
    // d++
    if (d >= question.length && d >= answerA.length && d >= answerB.length && d >= answerC.length && d >= answerD.length && d >= correct.length) {
        document.querySelector("#top").style.color = "black";
        document.querySelector("#top").style.opacity = "0.6";
    }
})

// let runSequence = function (i) {
//     let choices = document.querySelectorAll(".answerbox")
//     document.querySelector(".modal").style.display = "block";

//     for (let x = 0; x < choices.length; x++) {
//         choices[x].addEventListener("click", function (event) {
//             const selected = event.target.innerHTML
//             console.log(correct[i])
//             console.log(selected)
//             if (selected === correct[i]) {
//                 console.log(score + points);
//                 score = score + points
//             }
//             else {
//                 console.log(score - points);
//                 score = score - points
//             }
//             document.querySelector(".score").innerHTML = score;
//             document.querySelector(".modal").style.display = "none";
//         })
//     }
// }

for (let x = 0; x < choices.length; x++) {
    choices[x].addEventListener("click", function (event) {
        const selected = event.target.innerHTML
        console.log(correct[d])
        console.log(selected)
        if (selected === correct[d]) {
            console.log(score + points);
            score = score + points
        }
        else {
            console.log(score - points);
            score = score - points
        }
        document.querySelector(".score").innerHTML = score;
        document.querySelector(".modal").style.display = "none";
        d++;
        if (d >= question.length && d >= answerA.length && d >= answerB.length && d >= answerC.length && d >= answerD.length && d >= correct.length) {
            document.querySelector("#top").style.color = "black";
            document.querySelector("#top").style.opacity = "0.6";
            document.querySelector("#top").style.border = "solid black";
            document.querySelector("#top").addEventListener("click", function () {
                document.querySelector(".modal").style.display = "none"
            })
        }
    })
}
