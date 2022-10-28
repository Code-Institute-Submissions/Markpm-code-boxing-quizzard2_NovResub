/**Codes are learned from a tutorial */
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const buttons = document.getElementsByClassName("btn");

/**Global variable for Welcome Page */
const modal = document.getElementById("pop-up");
const closeButton = document.getElementById("close");
const feedback = document.getElementById("feedback_p");//this is the feedback variable
//const warnUser = document.getElementsByClassName("hidden");

let shuffledQuestions, currentQuestionIndex;
let wrong = false;

feedback.addEventListener("click", showFeedBackForm);
closeButton.addEventListener("click", closeSubmit);
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

/**This is the function that shows the feedback form when clicked */
function showFeedBackForm() {
    let feedback = document.getElementById("feedback");
    if(feedback.style.display ==="none") {
        feedback.style.display = "block";
    }else {
       feedback.style.display = "none";
    }
    console.log(feedback);
}

var form = document.getElementById("pop-up");
//**This to prevent the form from not submitting,codes from Coding Shiksha */
form.addEventListener("submit", function(event) {
    event.preventDefault();
})

/**input validation before game starts, knowledge acquired from w3schools,
 * added codes for defensive design
 */
function closeSubmit() {
    let input = document.getElementById("uname").value;
    var txt;// added this variable to raise error when a user input is invalid
    if (input.length >= 4 && (input.length <= 10)) {
        modal.style.display = "none";
    }else {
        txt = "Please enter a minimum of 4 and a maximum of 10 characters to start the game.";
    }
    document.getElementById("errorMsg").innerHTML = txt;
    console.log(input);
}

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

//This function shows the question and answers for selection
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

//This function disable all the buttons when an answer is selected 
function disableAnswers(){
    for (let i = 0; i  < 3; i++){
        buttons[i].disabled = true;
    }
}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct;
    if (correct) {
        incrementCorrectAnswer();
        disableAnswers();

    } else{
        disableAnswers();
        incrementWrongAnswer();
    }

    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        //Resets the score back to zero
        startButton.addEventListener("click", backHmoe => {
            window.location.href = "index.html";
        });
        
        startButton.classList.remove('hide');
    }
}

//This function increment th correct answer
function incrementCorrectAnswer() {

    let score = parseInt(document.getElementById("right").innerText);
    document.getElementById("right").innerText = ++score;
}

// This function increments the wrong answer
function incrementWrongAnswer() {

    let score = parseInt(document.getElementById("wrong").innerText);
    document.getElementById("wrong").innerText = ++score;
}

//This function changes the color of text and border when a button is selected
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

//This function clears the color of text when the next button is selected
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

//This are the questions array
const questions = [{
        question: 'Who is the third man in the ring?',
        answers: [{
                text: 'The Referee',
                correct: true
            },
            {
                text: 'The Coach',
                correct: false
            },
            {
                text: 'The Ring Announcer',
                correct: false
            },
        ]
    },
    {
        question: "How many minutes per round in Men's Professional Boxing?",
        answers: [{
                text: '2 minutes',
                correct: false
            },
            {
                text: '5 minutes',
                correct: false
            },
            {
                text: '3 minutes',
                correct: true
            }
        ]
    },
    {
        question: 'What does KO mean?',
        answers: [{
                text: 'Knock Out',
                correct: true
            },
            {
                text: 'Knock Off',
                correct: false
            },
            {
                text: 'Knock On',
                correct: false
            }
        ]
    },
    /**additional questions */
    {
        question: 'What does WBC stand for?',
        answers: [{
                text: 'World Boxing Corporation',
                correct: false
            },
            {
                text: 'World Best Champions',
                correct: false
            },
            {
                text: 'World Boxing Council',
                correct: true
            }
        ]
    },
    {
        question: 'How many pounds is a Bantamweight?',
        answers: [{
                text: '118 pounds',
                correct: true
            },
            {
                text: '115 pounds',
                correct: false
            },
            {
                text: '122 pounds',
                correct: false
            }
        ]
    },
    {
        question: "How many weight classes are there in Men's boxing?",
        answers: [{
                text: '15 weight classes',
                correct: false
            },
            {
                text: '17 weight classes',
                correct: true
            },
            {
                text: '12 weight classes',
                correct: false
            }
        ]
    },
    {
        question: 'A boxer who holds World titles from all of the major sanctioning body is called?',
        answers: [{
                text: 'Undisputed Champion',
                correct: true
            },
            {
                text: 'Unified Champion',
                correct: false
            },
            {
                text: 'Universal Champion',
                correct: false
            }
        ]
    },
    {
        question: 'What is the Nationality of Katie Taylor?',
        answers: [{
                text: 'Irish',
                correct: true
            },
            {
                text: 'British',
                correct: false
            },
            {
                text: 'American',
                correct: false
            }
        ]
    },
    {
        question: 'What is the name of the boxer that is known as the Gypsy king?',
        answers: [{
                text: 'Tyson Fury',
                correct: true
            },
            {
                text: 'Mike Tyson',
                correct: false
            },
            {
                text: 'Anthony Joshua',
                correct: false
            }
        ]
    },
    {
        question: 'Who is the only boxer that became an eight weight division Champion of the World?',
        answers: [{
                text: 'Floyd Mayweather',
                correct: false
            },
            {
                text: 'Manny Pacquaio',
                correct: true
            },
            {
                text: 'Ricky Hatton',
                correct: false
            }
        ]
    },
    {
        question: 'In what Olympics did Katie Taylor won her Gold medal?',
        answers: [{
                text: 'London Olympics',
                correct: true
            },
            {
                text: 'Beijing Olympics',
                correct: false
            },
            {
                text: 'Tokyo Olympics',
                correct: false
            }
        ]
    },
    {
        question: 'In what round did Ricky Hatton was knockout by Manny Pacqauio?',
        answers: [{
                text: '2nd Round',
                correct: true
            },
            {
                text: '6th Round',
                correct: false
            },
            {
                text: '10th Round',
                correct: false
            }
        ]
    },
];

