console.log("ello love")



//close Q&A modal
document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".modal").style.display = "none"
})

//display Q&A
document.querySelector("#right").addEventListener("click", function () {
    // console.log("working")
    document.querySelector(".modal").style.display = "block";
    let question = ["sampleQuestion1", "sampleQuestion2","sampleQuestion3"];
    let answerA = ["sampleAnswer1", "sampleAnswerI","sampleAnsweri"];
    let answerB = ["sampleAnswer2", "sampleAnswerII","sampleAnswerii"];
    let answerC = ["sampleAnswer3", "sampleAnswerIII","sampleAnsweriii"];
    let answerD = ["sampleAnswer4", "sampleAnswerIV","sampleAnsweriv"];
    for (let i = 0; i < question.length;i++){
        document.querySelector("#questionbox").innerHTML = question[i];
    }
    for (let i = 0; i < answerA.length; i++) {
        document.querySelector("#a1").innerHTML = answerA[i];
        
    }
    for (let i = 0; i < answerB.length; i++) {
        document.querySelector("#a2").innerHTML = answerB[i];
        
    }
    for (let i = 0; i < answerC.length; i++) {
        document.querySelector("#a3").innerHTML = answerC[i];
    }
    for (let i = 0; i < answerD.length; i++) {
        document.querySelector("#a4").innerHTML = answerD[i];
    }

})


// 1. when card is clicked, modal containing question and answer appear
// 2. modal populates with info from array
// 3. modal clears info when closed
// 4. answer choice click add and subtracts listed point value
// 5. value displays in proper places and keeps running total
// 6. card appearance changes when end of array reached (display:none)






