function quizApp() {
    const quizData = [
        {
            question: 'What is the color of the sky?',
            a: 'Yellow',
            b: 'Blue',
            c: 'Indigo',
            d: 'Purple',
            correct: 'b'
        }, 
        {
            question: 'When is Nigeria Independent day?',
            a: '3rd January',
            b: '21st December',
            c: '9th February',
            d: '1st October',
            correct: 'd'
        },
        {
            question: 'How many states does Nigeria have?',
            a: '22',
            b: '91',
            c: '36',
            d: '13',
            correct: 'c'
        },
        {
            question: 'Who is the President of Nigeria?',
            a: 'Bola Tinubu',
            b: 'Jibril Ahmed',
            c: 'Nyesom Wike',
            d: 'Peter Obi',
            correct: 'a'
        },
        {
            question: 'Where is National Theatre located in Nigeria?',
            a: 'Kogi',
            b: 'Lagos',
            c: 'Osun',
            d: 'Kano',
            correct: 'b'
        },
    ];
    
    const answerEls = document.querySelectorAll(".answer"); 
    const quiz = document.getElementById('quiz'); 
    const questionEl = document.getElementById('question');
    const a_text = document.getElementById('a_text');
    const b_text = document.getElementById('b_text');
    const c_text = document.getElementById('c_text');
    const d_text = document.getElementById('d_text');
    const submitBtn = document.getElementById('submit');
    
    let currentQuiz = 0;
    let score = 0;

    loadQuiz();
    
    function loadQuiz() {
        deselectAnswers();    
    
        const currentQuizData = quizData[currentQuiz];
    
        questionEl.innerText = currentQuizData.question;
    
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
    }
    
    function getSelected() {
        
        let answer = undefined;
    
        answerEls.forEach((answerEl) => {
            if (answerEl.checked) {
                answer = answerEl.id;
            }
        });
    
        return answer;
    }
    
    function deselectAnswers() {
        answerEls.forEach((answerEl) => {
            answerEl.checked = false;
        });
    }
    
    submitBtn.addEventListener("click", () => {
        // Check for answer
        const answer = getSelected();
    
        if (answer) {
            // Check if the selected answer is correct
            if (answer === quizData[currentQuiz].correct) {
                score++;
            }
    
            // Move to the next question
            currentQuiz++;
    
            // Check if there are more questions
            if (currentQuiz < quizData.length) {
                // Load the next question
                loadQuiz();
            } else {
                // Display the final score if there are no more questions
                quiz.innerHTML = `<h2>Your Score is ${score}/${quizData.length}.</h2> <button onClick="location.reload()">Refresh</button>`;
            }
        } else {
            // Alert the user if no answer is selected
            alert("No answer selected");
        }
    });
    
}

quizApp();
