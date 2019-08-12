console.log("ello love")

//close Q&A modal
// document.querySelector(".close").addEventListener("click", function () {
//     document.querySelector(".modal").style.display = "none"
// })

// audio from https://www.zapsplat.com/?s=voice+correct&post_type=music&sound-effect-category-id=
let correctAnswer = new Audio(src = "Audio/correct.mp3");
// audio from https://www.zapsplat.com/?s=voice+incorrect&post_type=music&sound-effect-category-id= 
let incorrectAnswer = new Audio(src = "Audio/incorrect.mp3");


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
    question = ["Largest bone in the human body", "Number of track events in a decathalon", "Greek god of dreams", "Stage name of Belcalis Almánzar"],
        answerA = ["What is the femur?", "What is 3?", "Who is Zeus?", "What is Rico Nasty?"],
        answerB = ["What is the tibia?", "What is 2?", "Who is Apollo?", "What is Cardi B?"],
        answerC = ["What is the fibula?", "What is 4?", "Who is Morpheus?", "What is Rapsody?"],
        answerD = ["What is the ulna?", "What is 7?", "Who is Posiedon?", "What is YG?"],
        correct = ["What is the femur?", "What is 4?", "Who is Morpheus?", "What is Cardi B?"],
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
    question = ["Legendary Memphis rap group that won an academy award for best original song in 2006", "Hottest planet in the solar system", "Scientific study of insects", "Highest waterfall in the world"];
    answerA = ["Who are the St Lunatics?", "What is Venus?", "What is ornithology?", "What is Niagara Falls?"];
    answerB = ["Who are Three 6 Mafia?", "What is Mars?", "What is parasitology?", "What is Angel Falls?"];
    answerC = ["Who are 8 Ball & MJG?", "What is Pluto?", "What is icthyology?", "What is Tugela Falls?"];
    answerD = ["Who are UGK?", "What is Mercury?", "What is entomology?", "What is Gravity Falls?"];
    correct = ["Who are Three 6 Mafia?", "What is Venus?", "What is entomology?", "What is Angel Falls?"];
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
    question = ["Coldest place in the universe", "State bordered by only one other state", "Author of The Bluest Eye", "Symbolizes love and harmony"];
    answerA = ["What is the constellation of Virgo?", "What is Maine?", "Who is Maya Angelou?", "What is lapis lazuli?"];
    answerB = ["What is the Boomerang Nebula?", "What is Washington?", "Who is Angela Davis", "What is rhodonite?"];
    answerC = ["What are the clouds of Jupiter?", "What is Michigan?", "Who is Toni Morrison?", "What is fluorite?"];
    answerD = ["What is the surface of Mercury?", "What is New Hampshire?", "Who is Audre Lorde?", "What is rose quartz?"];
    correct = ["What is the Boomerang Nebula?", "What is Maine?", "Who is Toni Morrison?", "What is rose quartz?"];
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
    question = ["Molecule made up of 2 hydrogen atoms and 1 oxygen atom.", "Mother of Blue, Sir, and Rumi.", "First sign of the zodiac", "Name of Batman’s butler"];
    answerA = ["What is earth?", "Who is Ciara?", "What is pisces?", "Who is Alfred?"];
    answerB = ["What is water?", "Who is Kelly Rowland?", "What is Libra?", "Who is Eugene?"];
    answerC = ["What is fire?", "Who is Beyoncé?", "What is Aries?", "Who is Thomas?"];
    answerD = ["What is air?", "Who is Ari Lennox?", "What is Scorpio", "Who is Jeffrey?"];
    correct = ["What is water?", "Who is Beyoncé?", "What is Aries?", "Who is Alfred?"];
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