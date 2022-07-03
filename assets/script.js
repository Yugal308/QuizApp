const questions = [
    {
      questionText: "Commonly used data types DO NOT include:",
      options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
      answer: "3. alerts",
    },
    {
      questionText: "Arrays in JavaScript can be used to store ______.",
      options: [
        "1. numbers and strings",
        "2. other arrays",
        "3. booleans",
        "4. all of the above",
      ],
      answer: "4. all of the above",
    },
    {
      questionText:
        "String values must be enclosed within _____ when being assigned to variables.",
      options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
      answer: "3. quotes",
    },
    {
      questionText:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      options: [
        "1. JavaScript",
        "2. terminal/bash",
        "3. for loops",
        "4. console.log",
      ],
      answer: "4. console.log",
    },
    {
      questionText:
        "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
      options: ["1. break", "2. stop", "3. halt", "4. exit"],
      answer: "1. break",
    },
  ];
  
const start = document.querySelector('.btn');
const que = document.querySelector("#question");
const home = document.querySelector("#start");
const user = document.querySelector("#user-input");
const highScore = document.querySelector("#high-score");
const time = document.querySelector("#timer");
const btn1 = document.querySelector(".one");
const btn2 = document.querySelector(".two");
const btn3 = document.querySelector(".three");
const btn4 = document.querySelector(".four");
const ques = document.querySelector(".que-title");
const status = document.querySelector("#status");
const leaderBoard = document.querySelector("#leaderboard");
const back = document.querySelector(".back");
const clear = document.querySelector(".clear");
const submit = document.querySelector(".submit");
const countdown = document.querySelector("#timer");
const userScore = document.querySelector("#score");
const userName = document.querySelector("#user-name");
const highScoreList = document.querySelector("#highScoreList");

let count = 0;
let counter = 50;
let ti;
let marks = 0;
let userNum = 1;
const scores = window.localStorage;
scores.setItem("highScores",JSON.stringify([]));
let highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];

function startTime(time){
  ti = setInterval(function(){
    if(counter<10) countdown.innerHTML = '0'+counter;
    else countdown.innerHTML = counter;
    counter--;
    if(counter<=0)
    {
      marks = 0;
      displayUser();
    }
  },1000);
}

function displayStart(){
  time.innerHTML = "00";
  que.style.display="none";
  user.style.display="none";
  highScore.style.display="none";
  home.style.display="block";
  status.innerHTML = "";
  clearInterval(ti);
  counter = 50;
  countdown.innerHTML = "";
}
function displayQuestionBox(index){
  que.style.display="block";
  user.style.display="none";
  highScore.style.display="none";
  home.style.display="none";
  showQuestion(index);
  
}
function displayUser(){
  clearInterval(ti);
  userScore.innerHTML = marks;
  que.style.display="none";
  user.style.display="block";
  highScore.style.display="none";
  home.style.display="none";
}

function displayHighScore(){
  clearInterval(ti);
  que.style.display="none";
  user.style.display="none";
  highScore.style.display="block";
  home.style.display="none";
  displayHigh();
}

function showQuestion(index){
    let que_text = questions[index].questionText;
    btn1.innerHTML = questions[index].options[0];
    btn2.innerHTML = questions[index].options[1];
    btn3.innerHTML = questions[index].options[2];
    btn4.innerHTML = questions[index].options[3];
    ques.innerHTML = que_text;
}

function userScores(){
  const score = {
        score : marks,
        userName : userName.value
      };
  highScores.push(score);
  highScores.sort((a,b)=>{
    return b.score - a.score;
  })
  highScores.splice(5);
  scores.setItem("highScores",JSON.stringify(highScores));
    userNum++;
    displayStart();
}

function displayHigh(){
  highScoreList.innerHTML = highScores.map(score=>{
    return `<li class="high-score">${score.userName} - ${score.score}</li>`;
    
})
.join("");
}

function clearHighScore(){
  // console.log(highScoreList);
  const elemLi = document.querySelector(".high-score");
  // console.log(elemLi);
  elemLi.innerHTML = "";
  highScores = [];
  scores.clear();
  displayStart();
  
}

start.onclick = ()=>{
  displayQuestionBox(0);
  count = 0;
  marks = 0;
  startTime(50);
}

btn1.onclick = ()=>{
  if(questions[count].answer === questions[count].options[0])
      status.innerHTML = "Correct!";
  else
  {
    counter = counter-10;
    status.innerHTML = "Incorrect!";
  } 
  count++;
  if(count>=5)
  {
    marks = counter;
    displayUser();
  }
  else
    displayQuestionBox(count);
}
btn2.onclick = ()=>{
  if(questions[count].answer === questions[count].options[1])
      status.innerHTML = "Correct!";
  else
  {
    counter = counter-10;
    status.innerHTML = "Incorrect!";
  }    
  count++;
  if(count>=5) {
    marks = counter;
    displayUser();
  }
  else
    displayQuestionBox(count);
}
btn3.onclick = ()=>{
  if(questions[count].answer === questions[count].options[2])
      status.innerHTML = "Correct!";
  else
  {
    counter = counter-10;
    status.innerHTML = "Incorrect!";
  } 
  count++;
  if(count>=5)
  {
    marks = counter;
    displayUser();
  }
  else
    displayQuestionBox(count);
}
btn4.onclick = ()=>{
  if(questions[count].answer === questions[count].options[3])
      status.innerHTML = "Correct!";
  else
  {
    counter = counter-10;
    status.innerHTML = "Incorrect!";
  } 
  count++;
  if(count>=5)
  {
    marks = counter;
    displayUser();
  }
  else
    displayQuestionBox(count);
}

leaderBoard.onclick = ()=>{
  displayHighScore();
}

back.onclick = ()=>{
  displayStart();
}

submit.onclick = ()=>{
  userScores();
}

clear.onclick = ()=>{
  clearHighScore();
}

