// quests taken from chatcpt
const quests = [
    {
        question: "HTML'de bir başlık etiketi hangisidir?",
        options: "a) <header>  b) <h1>  c) <title>",
        answer: "b",
    },
    {
        question: "CSS'nin açılımı nedir?",
        options: "a) Cascading Style Sheets  b) Creative Style Syntax  c) Computer Style System",
        answer: "a",
    },
    {
        question: "JavaScript'te bir değişken nasıl tanımlanır?",
        options: "a) var myVar  b) variable myVar  c) let myVar",
        answer: "a",
    },
    {
        question: "CSS'de id seçicisi nasıl yazılır?",
        options: "a) #id  b) .id  c) id:",
        answer: "a",
    },
    {
        question: "Hangisi bir HTML etiketidir?",
        options: "a) <p>  b) (p)  c) [p]",
        answer: "a",
    },
    {
        question: "JavaScript'te bir fonksiyon nasıl tanımlanır?",
        options: "a) function myFunc() {}  b) func myFunc() {}  c) myFunc function() {}",
        answer: "a",
    },
    {
        question: "CSS'de arka plan rengi nasıl değiştirilir?",
        options: "a) color: blue;  b) background-color: blue;  c) bg-color: blue;",
        answer: "b",
    },
    {
        question: "HTML'de bir liste elemanı nasıl tanımlanır?",
        options: "a) <li>  b) <ul>  c) <ol>",
        answer: "a",
    },
    {
        question: "Hangisi bir CSS framework'üdür?",
        options: "a) Bootstrap  b) Django  c) React",
        answer: "a",
    },
    {
        question: "JavaScript'te bir dizi nasıl oluşturulur?",
        options: "a) var arr = [];  b) var arr = {};  c) var arr = ()",
        answer: "a",
    },
];

let correct = 0;
let wrong = 0;
btnStart.addEventListener("click", () => {
    for (const x of quests) {
        let inputAnswer = prompt(`${x.question} \n ${x.options}`)

        if (inputAnswer.toLowerCase() === x.answer) {
            correct++;
        } else {
            wrong++;
        }
    }

    alert(`test tamamlandi: dogru sayisi: ${correct} yanlıs sayisi: ${wrong}`)
});