// (
//   function(){
//     var Questions = function (questions,options,answers){
//      this.questions = questions;
//      this.options = options;
//      this.answer = answers
//
//     }
//
//     Questions.prototype.generateQuestions=function(){
//       console.log(this.questions);
//       for (var i = 0; i < this.options.length; i++) {
//         console.log(this.options[i]);
//       }
//
//     }
//
//
//     Questions.prototype.checkAnswer =function (answer,score){
//
//       var sc =0;
//       if(answer === this.answer){
//         sc = score(true);
//         console.log('your answer is correct');
//       }
//       else if (answer === 'done') {
//          sc=score(false)
//         console.log('game is over');
//       }
//       else{
//         sc=score(false)
//         console.log('your answer is wrong');
//       }
//
//       this.displayScore(sc)
//     }
//
//
//
// Questions.prototype.displayScore = function(score){
//   console.log('your current score is ' + score);
//     console.log('-----------------');
//
// }
//
//     var q1 = new Questions ('what is css?',
//     ['(a) stylesheets','(b) design platform','(c) programming language'],
//     'a',
//     );
//     var q2 = new Questions ('what is javaScript',
//     ['(a) programming technique','(b) design language','(c) programming language'],
//     'c'
//     );
//
//     var q3 =new Questions ('web development is...',
//     ['(a) fun ','(b) boring','(c) tacky'],
//     'a'
//     );
//
//     var quizQuestions = [q1,q2,q3];
//
//
// function score(){
// var sc = 0;
// return function(correct){
//   if(correct){
//     sc++
//   }
//   return sc
// }
// };
//
// var trackScore = score();
//
//
// function nextQuestion() {
//       var rN = Math.floor(Math.random() * quizQuestions.length);
//        quizQuestions[rN].generateQuestions();
//        //quizQuestions[rN].generateOptions();
//        var answers =prompt('what is the correct answer');
//        quizQuestions[rN].checkAnswer(answers,trackScore);
//
// if(answers !=='done'){
//
//   nextQuestion();
// }
//
//
// }
// nextQuestion();
//
//   })
//    // ();
//
// var x = 176/8;
// console.log(x);
//    var countries = ['january','february','march','april','may'];
//
//    countries.forEach(function (country) {
//      console.log(country);
//    });

// let answerss = document.querySelectorAll('.answer');
// let answerArr = Array.from(answerss)
// answerArr.map(el=>{
//  el.style.backgroundColor ='rgba(255, 300, 0, 0.5)'
//
// })


//console.log(answersArr);
// let q = document.querySelector('.question-0')
// let ans = q.querySelectorAll('.answer');
// let answersArr = Array.from(ans);
// console.log(answersArr);

let score = 0;
let questCount= 0

let questions = [document.querySelector('.question-0'),
document.querySelector('.question-1'),
document.querySelector('.question-2'),
document.querySelector('.question-3')];

let qs = [document.querySelector('.question-1'),
document.querySelector('.question-2'),
document.querySelector('.question-3')];

let nextQ = document.querySelector('.btn');
nextQ.addEventListener('click',nextQuestion);

qs.map((el,index) =>{
el.style.display = 'none';
});



 questions.forEach((el,i) =>{
  document.querySelector(`.question-${i}`).addEventListener('click',getAnswer);
  let ans = el.querySelectorAll('.answer')//.classList.add('hoverEffect');
  let answersArr = Array.from(ans);
  answersArr.map(el =>{
    el.classList.add('hoverEffect');
  })
});



function getAnswer(e){
  if(e.target.className.includes('correct')){
    e.target.classList.add('green');
    score++
    document.querySelector('.score').textContent=`${score}/${questions.length}`
  }
  else if (e.target.className.includes('wrong')){
       e.target.classList.add('red');
        let parentNode =  e.target.parentNode;
        let disCor = parentNode.getElementsByClassName('correct')[0];
        disCor.classList.add('green');
  }
else{
  return
}
    this.removeEventListener('click',getAnswer);
  let x = this.querySelectorAll('.answer')
  let answersArr = Array.from(x);
  answersArr.map(el =>{
    el.classList.remove('hoverEffect');
  })
};



function nextQuestion(){
  if(!(questCount >= questions.length - 1)){
     questCount++
     questions[questCount-1].style.display = 'none';
    questions[questCount].style.display = 'block';
  }
  else{
    nextQ.removeEventListener('click',nextQuestion);
  }
}
