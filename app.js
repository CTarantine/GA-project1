console.log("ello love")



//close Q&A modal
document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".modal").style.display ="none"
})

//display Q&A
document.querySelector("right").addEventListener("click",function(){

})


// 1. when card is clicked, modal containing question and answer appear
// 2. modal populates with info from array
// 3. modal clears info when closed
// 4. answer choice click add and subtracts listed point value
// 5. value displays in proper places and keeps running total
// 6. card appearance changes when end of array reached (display:none)