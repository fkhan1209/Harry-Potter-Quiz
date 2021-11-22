// Questions will be asked
const Questions = [{
    id: 0,
    q: "What is Harry and Ginny's middle child's full name?",
    a: [{ text: "Albus Snape Potter", isCorrect: false },
        { text: "Albus Severus Weasley", isCorrect: false },
        { text: "Albus Severus Potter", isCorrect: true },
        { text: "Albus Snape Weasley", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What is the first ever password to Gryffindor Tower?",
    a: [{ text: "Fortuna Major", isCorrect: false, isSelected: false },
        { text: "Baubles", isCorrect: false },
        { text: "Pig Snout", isCorrect: false },
        { text: "Caput Draconis", isCorrect: true }
    ]

},
{
    id: 2,
    q: "What is Luna's Patronus?",
    a: [{ text: "An otter", isCorrect: false },
        { text: "A lynx", isCorrect: false },
        { text: "A rabbit", isCorrect: true },
        { text: "A horse", isCorrect: false }
    ]

}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "#AE0001";
    op2.style.backgroundColor = "#946B2D";
    op3.style.backgroundColor = "#946B2D";
    op4.style.backgroundColor = "#946B2D";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "#946B2D";
    op2.style.backgroundColor = "#AE0001";
    op3.style.backgroundColor = "#946B2D";
    op4.style.backgroundColor = "#946B2D";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "#946B2D";
    op2.style.backgroundColor = "#946B2D";
    op3.style.backgroundColor = "#AE0001";
    op4.style.backgroundColor = "#946B2D";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "#946B2D";
    op2.style.backgroundColor = "#946B2D";
    op3.style.backgroundColor = "#946B2D";
    op4.style.backgroundColor = "#AE0001";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "#D3A625";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "#AAAAAA";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
}

})
