const start_btn = document.querySelector(".start-quiz");
const quiz_box = document.querySelector(".quiz-box");
const que_text = document.querySelector(".que-text");
const options_box = document.querySelector(".options");
const next_btn = document.querySelector(".next-btn");
const total_que = document.querySelector(".quiz-footer .total-que");
const count_que = document.querySelector(".quiz-footer .count-que");
const result_box = document.querySelector(".result-box");
const again_quiz = document.querySelector(".again-quiz");
const exit = document.querySelector(".exit");
const pass = document.querySelector(".pass")

const total_q = document.querySelector(".total-que span");
const right_a = document.querySelector(".right-ans span")
const wrong_a = document.querySelector(".wrong-ans span")
const percentage = document.querySelector(".percentage span")


const mark_check = '<i class="fa fa-check"></i>'
const mark_wrong = '<i class="fa fa-times"></i>'


start_btn.onclick = () => {
    quiz_box.classList.remove("inactive")
    start_btn.classList.add("inactive")

}

total_que.innerText = questions.length;
total_q.innerText = questions.length;


var que_index = 0;
var right_answer = 0;
var wrong_answer = 0;


count_que.innerText = que_index + 1;
ShowQuestion(que_index);

function ShowQuestion(q_index) {
    que_text.innerText = questions[q_index].num + ". " + questions[q_index].question;
    var option_statement = "";
    for (var i = 0; i < questions[q_index].options.length; i++) {
        option_statement += `<div class="option">${questions[que_index].options[i]}</div>`;
        next_btn.classList.add("inactive")
    }

    options_box.innerHTML = option_statement;

    var AllOptions = options_box.querySelectorAll(".option");
    for (var j = 0; j < AllOptions.length; j++) {
        AllOptions[j].setAttribute("onclick", "UserAnswer(this)");
    }
}

next_btn.onclick = () => {
    que_index++;

    if (questions.length > que_index) {
        count_que.innerText = que_index + 1;

        ShowQuestion(que_index);
    } else {
        quiz_box.classList.add("inactive");
        result_box.classList.remove("inactive")
        right_a.innerText = right_answer;
        wrong_a.innerText = wrong_answer;
        percentage.innerText = ((right_answer * 100 / questions.length).toFixed(2) + "%");
    }
    if (questions.length - 1 == que_index) {
        next_btn.innerText = "Finish";
    }
}

function UserAnswer(answer) {
    // console.log(answer.innerText);
    let userAns = answer.innerText;
    let correctAns = questions[que_index].answer;
    var AllOptions2 = options_box.querySelectorAll(".option");
    next_btn.classList.remove("inactive")

    if (userAns == correctAns) {
        console.log("%c right", "color:#82b74b");
        answer.classList.add("correct");
        answer.classList.add("disable");
        answer.insertAdjacentHTML("beforeend", mark_check);
        right_answer++;

    } else {
        console.log("%c wrong", "color: #f7786b")
        answer.classList.add("incorrect")
        answer.insertAdjacentHTML("beforeend", mark_wrong);
        wrong_answer++;

        for (var i = 0; i < AllOptions2.length; i++) {
            if (AllOptions2[i].innerHTML == correctAns) {
                AllOptions2[i].classList.add("correct");
                AllOptions2[i].insertAdjacentHTML("beforeend", mark_check);
            }
        }
    }

    for (var j = 0; j < AllOptions2.length; j++) {
        AllOptions2[j].classList.add("disable");
    }
}

again_quiz.onclick = () => {
    quiz_box.classList.remove("inactive")
    result_box.classList.add("inactive")

    que_index = 0;
    right_answer = 0;
    wrong_answer = 0;
    count_que.innerText = que_index + 1;
    ShowQuestion(que_index);
    next_btn.innerText = "Next Question"
}

exit.onclick = () =>{
    start_btn.classList.remove("inactive")
    result_box.classList.add("inactive")
    que_index = 0;
    right_answer = 0;
    wrong_answer = 0;
    count_que.innerText = que_index + 1;
    ShowQuestion(que_index);
    next_btn.innerText = "Next Question"
}