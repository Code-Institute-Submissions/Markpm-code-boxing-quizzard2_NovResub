/**Codes are learned from a tutorial */
const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

const correct = document.getElementsByClassName("btn correct")
const wrong = document.getElementsByClassName("btn wrong")
/**Global variable for Welcome Page */
const modal = document.getElementById("pop-up");
const closeButton = document.getElementById("close");


let shuffledQuestions, currentQuestionIndex

closeButton.addEventListener("click", closeSubmit);
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
/**input validation before game starts, knowledge acquired from w3schools */
function closeSubmit() {
    let input = document.getElementById("uname").value;
    if (input) {
        modal.style.display = "none";
    }else {
        modal.style.display = "block";
    }
    console.log(input);
}

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.classList.add(".correct")//Add . on this classlist to prevent incrementing the score into incorrect answer when click momre than once
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    if (selectedButton.classList.contains(".correct")) {
        console.log("correct");
        incrementCorrectAnswer();

    } else {
        console.log("wrong");
        incrementWrongAnswer();
    }

    console.log(selectedButton);
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function incrementCorrectAnswer() {

    let score = parseInt(document.getElementById("right").innerText);
    document.getElementById("right").innerText = ++score;
}

function incrementWrongAnswer() {

    let score = parseInt(document.getElementById("wrong").innerText);
    document.getElementById("wrong").innerText = ++score;
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
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
]