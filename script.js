//Array of Sentences
const sentences = [
    "The Quick Brown Fox Jumps Over The Lazy Dog",
    "Pack my box with five dozen liquor jugs",
    "Jinxed wizards pluck ivy from the big quilt",
    "Crazy Fredrick bought many very exquisite opal jewels",
    " We promptly judged antique ivory buckles for the next prize",
    "A mad boxer shot a quick, gloved jab to the jaw of his dizzy opponent",
    "Jaded zombies acted quaintly but kept driving their oxen forward",
    "The job requires extra pluck and zeal from every young wage earner",
    "Two driven jocks help fax my big quiz",
    "Sphinx of black quartz, judge my vow",
    "Quick zephyrs blow, vexing daft Jim"
];

//initializing Variable & Accessing HTML
const message = document.getElementById("message");
const userInput = document.getElementById("userInput");
const button = document.getElementById("btnPress");
let startingTime, endingTime;

// Implementing Start Test Function 
const startTest = () => {
    let randomNumber = Math.floor(Math.random() * sentences.length);
    message.innerText = sentences[randomNumber];
    let date = new Date();
    startingTime = date.getTime();
    button.innerText = "Stop";
}

// Implementing End Test Function
const stopTest = () => {
    let date = new Date();
    endingTime = date.getTime();
    let totalTime = (endingTime - startingTime) / 1000;

    let typedText = userInput.value;
    let wordCount = wordCounter(typedText);

    let speed = Math.round((wordCount / totalTime) * 60);
    let testResult = `your speed is ${speed} words per minute`;
    testResult += compareWords(message.innerText, typedText);
    message.innerText = testResult;
    userInput.value = "";
}

const compareWords = (stringOne, stringTwo) => {
    let wordOne = stringOne.split(" ");
    let wordTwo = stringTwo.split(" ");
    let count = 0;

    wordOne.forEach((item, index) => {
        if (item == wordTwo[index]) {
            count++;
        }
    });

    let errorWord = (wordOne.length - count);
    return (` | Total Words are ${wordOne.length} & Error Words are ${errorWord}.`);
}

const wordCounter = (string) => {
    let input = string.split(" ").length;
    return input;
}

// Onclick Event
button.addEventListener('click', () => {
    if (button.innerText == "Start") {
        userInput.disabled = false;
        startTest();
    }
    else if (button.innerText == "Stop") {
        if (userInput.value.length > 0) {
            userInput.disabled = true;
            button.innerText = "Start";
            stopTest();
        }
        else{
            alert("Write Something!!");
        }
    }
})
