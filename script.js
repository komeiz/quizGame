(function(){
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
  let startAginCon = document.querySelector('.startAgain-con');
  startAginCon.style.display = 'none';
  nextQ.addEventListener('click',nextQuestion);

  let checkResults = document.querySelector('.result-btn');
  checkResults.style.display = 'none';

  let displayResults = document.querySelector('.display-results');
  displayResults.style.display = 'none';

  let resultpage = document.querySelector('.dis-result');

  qs.map((el,index) =>{
  el.style.display = 'none';
  });

  checkResults.addEventListener('click',displayRes);

  function displayRes(){
    questions[questions.length-1].style.display = 'none';
    resultpage.textContent = `your score is ${score}/${questions.length}`
    displayResults.style.display = 'block';
    startAginCon.style.display = 'block';
    checkResults.style.display = 'none';

  }

   questions.forEach((el,i) =>{
    document.querySelector(`.question-${i}`).addEventListener('click',getAnswer);
    let ans = el.querySelectorAll('.answer');
    let answersArr = Array.from(ans);
    answersArr.map(el =>{
      el.classList.add('hoverEffect');
    })
  });



  function getAnswer(e){
    if(e.target.className.includes('correct')){
      e.target.classList.add('green');
      score++
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
      if(questCount === questions.length - 1){
        nextQ.style.display= 'none';
        checkResults.style.display = 'block';
      }
    }
    else{
      nextQ.removeEventListener('click',nextQuestion);
    }
  }

})
();
