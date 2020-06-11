const OurString = document.querySelector(".insertedtext");
let wordcount = 0;
let indexis = 0;
let removedIndex = 0;
let flag = true;


(function addWord() {
    let insertedWords = ["Web Developer", "Programmer", "Billionaire CEO", "Student"];
    let firstWord = insertedWords[wordcount];
    if(flag === true){
        if (indexis <= firstWord.length) {
            let word = firstWord.slice(0, indexis++);
            OurString.innerHTML = word;
        }
        else {
            removedIndex = indexis-1;
            indexis = 0;
            wordcount++;
            flag = false;

        }
    }
    else {
        if(removedIndex >= 0) {
            let lastCharacter = OurString.innerHTML.substring(0,removedIndex)
            removedIndex--;
            OurString.innerHTML = lastCharacter
        }
        else {
            flag = true;
        }

    }
    if (wordcount === insertedWords.length) wordcount = 0;
    setTimeout(() => {
        addWord()
    }, 400);
})()