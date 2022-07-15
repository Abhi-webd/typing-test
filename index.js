const testeEasy = ["Whatever you are, be a goood one.",
"Be the change you wish to see in the world.",
"Try and fail, but never fail to try.",
"Do one thing that scares you every day.",
"Let your memory be your travel bag.",
]

const testMedium = [
    "Believe you can and you are halfway there.",
    "What a beautiful day it is on the beach, here in beautiful and sunny Hawaii.",
    "You never did tell me how many copper pennies where in that jar; how come?",
    "In order to keep up at that pace, Zack Squeve would have to work all night.",
    " Those diamonds and rubies will make a beautiful piece of jewelry."
]

const testHard = [
    "The steamboats seemed to float down the Mississippi River at a snail’s pace.",
    "Trixie and Veronica, our two cats, just love to play with their pink ball of yarn.",
    "Rex Quinfrey, a renowned scientist, created plans for an invisibility machine.",
    "Xavier Puvre counted eighty large boxes and sixteen small boxes stacked outside.",
    "Hector quizzed Mr. Vexife for two hours, but he was unable to get any information"
]

const msg = id("msg");
const input = id("check");
const btn = id("btn");
let startTime, endTime;
input.disabled = true;
const startTest = () =>
{
    let random = Math.floor(Math.random() * testeEasy.length);
    if(id("diff-e").checked){
        msg.innerText = testeEasy[random];
    }
    else if(id("diff-m").checked){
        msg.innerText = testMedium[random];
    }
    else{
        msg.innerText = testHard[random];
    }
    let date = new Date();
    startTime = date.getTime();
    btn.innerHTML = "Done";
}

const endTest = () =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);
    let totalStr = input.value;
    let wordCount =  wordCounter(totalStr);
    let speed = Math.round((wordCount/totalTime) * 60);
    let finalMsg = "You typed total at " + speed + " words per minute ";
    finalMsg += compareWords(msg.innerText,totalStr);
    msg.innerText = finalMsg;
}

const compareWords = (str1,str2) =>{
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");

    let count = 0;

    word1.forEach(function(item,index) {
        if(item == word2[index]){
            count++;
        }
    });
    let accuracy = ((count / word1.length) * 100);
    let errorWords = (word1.length - count);
    return (count + " correct out of " + word1.length + " words and the total number of error are " + errorWords + " with accuracy of " + accuracy + "%.");
}

const wordCounter = (str) =>{
    let response = str.split(" ").length;
    console.log(response);
    return response;
}

btn.addEventListener("click",function(){
    if(this.innerText == "Start"){
        id("start").innerText = "Start Typing";
        input.value = '';
        input.disabled = false;
        msg.innerText = " ";
        startTest();
    }
    else if(this.innerText == "Done"){
        id("start").innerText = '';
        input.disabled = true;
        btn.innerText = "Start";
        endTest();
    }
});

input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && btn.innerText === "Done") {
        id("start").innerText = '';
        input.disabled = true;
        btn.innerText = "Start";
        endTest();
    }
});

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && btn.innerText === "Start"  ) {
        id("start").innerText = "Start Typing";
        input.value = '';
        input.disabled = false;
        msg.innerText = " ";
        startTest();
    }
});

function id(id){
    return document.getElementById(id);
}

function qs(selector){
    return document.querySelector(selector);
}

function qsa(selector){
    return document.querySelectorAll(selector);
}