var startBtn = document.querySelector("#startBtn")
var questionsDiv = document.querySelector("#questions")
var introDiv = document.querySelector("#intro")
var TimeLeftSpan= document.querySelector("#TimeLeftSpan")
var initialDiv= document.querySelector("#initialDiv")
var title= document.querySelector("#title")
var choice1= document.querySelector("#choice1")
var choice2= document.querySelector("#choice2")
var choice3= document.querySelector("#choice3")
var choice4= document.querySelector("#choice4")


    
  var questions = [
      
      { 
        q: 'How would you write developer comments in JavaScript?', 
        c: ['<!-- --!>','// ','/* */','none of the above'],
        a: '// '
      
      },
      { 
        q: 'Which of the following is an example of a string?', 
        c: ['14','1.4','1e4','One and Four'],
        a: 'One and Four'
      
      },
      {
        q: 'How would you contain multiple items in an array?',
        c: ['[]', '{}', '<>', '()'],
        a: '[]'
      },
      {
        q: 'How would you convert items in an array from a string to a number?',
        c: ['JSON.stringify()', '.toNumber', 'JSON.parseInt()', 'document.querySelector()'],
        a: 'JSONparseInt()'
      },
      {
        q: 'Where in the HTML document should you write or link your JavaScript?',
        c: ['In the <head> tag', 'In a <script> tag', 'Anywhere in the <body> tag', 'Any of the above'],
        a: 'In a <script> tag'
      }
      
    ];

    var timeRemaining = questions.length * 15
    

    var questionIndex=0

    var pidClock

    startBtn.addEventListener("click", function () {
      questionsDiv.classList.remove("hide")
      introDiv.classList.add("hide")
      loadQuestion()
      pidClock=setInterval(countDown, 1000)
    })
  
    function loadQuestion(){
        
      title.textContent=questions[questionIndex].q
      choice1.textContent=questions[questionIndex].c[0]
      choice2.textContent=questions[questionIndex].c[1]
      choice3.textContent=questions[questionIndex].c[2]
      choice4.textContent=questions[questionIndex].c[3]
  
    }

  choice1.addEventListener("click", function() {
    if (choice1.textContent === questions[questionIndex].a) {
      questionIndex++;
      if (questionIndex === questions.length) {
        endGame()
      } else {
        loadQuestion()
      }
    }
    else {questionIndex++;
      timeRemaining -= 15;
      if (questionIndex === questions.length) {
        endGame()
      } else {
        loadQuestion()
      }
    }
  })
  
  choice2.addEventListener("click", function() {
    
    if (choice2.textContent === questions[questionIndex].a) {
      questionIndex++;
      if (questionIndex === questions.length) {
        endGame()
      } else {
        loadQuestion()
      }
    }
    else {questionIndex++;
       timeRemaining -= 15;
       if (questionIndex === questions.length) {
         endGame()
       } else {
        loadQuestion()
       }
      }
    })
  
  choice3.addEventListener("click", function() {
   
    if (choice3.textContent === questions[questionIndex].a) {
      questionIndex++
      if (questionIndex === questions.length) {
        endGame()
      } else {
        loadQuestion()
      }
    }
    else {questionIndex++; 
      timeRemaining -= 15;
      if (questionIndex === questions.length) {
        endGame()
      } else {
     loadQuestion()
      }
    }
  })
  choice4.addEventListener("click", function() {
    
    if (choice4.textContent === questions[questionIndex].a) {
      questionIndex++
      if (questionIndex === questions.length) {
        endGame()
      } else {
        loadQuestion()
      }
    }
    else {questionIndex++; 
      timeRemaining -= 15;
      if (questionIndex === questions.length) {
        endGame()
      } else {
     loadQuestion()
      }
    }
  })
  
    
    function countDown(){
      if(timeRemaining === 0)
      {
        clearInterval(pidClock)  
        questionsDiv.classList.add("hide")  //adding the hide class to make it invisible
        initialDiv.classList.remove("hide") // removing the hide class to make it visible
        endGame()
      }
      
      
      TimeLeftSpan.textContent = timeRemaining
      timeRemaining = timeRemaining-1
    }

   function endGame() {
      // create a div and have it display "your score is" + timeRemaining
      clearInterval();
      var endGameDiv = document.createElement("div")
        endGameDiv.innerText = "Your Score Is" + timeRemaining

      //var highScoresForm = document.getElementById("#initial-div")
       // highScoresForm.setAttribute("id", "myForm")
      //var highScoresInput = document.getElementById("#initial")
       // highScoresInput.setAttribute("type", "text")
       //highScoresInput.appendChild("myForm")
      //var highScoresSubmit = document.createElement("button")
       // highScoresSubmit.addEventListener("click", function() {
       //   document.location.href = "./highscore.html"
     //   })
      // clearInterval
      // create a form where you submit your initials
   }


