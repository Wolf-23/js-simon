let numbers = document.getElementById('numbers');
let myText = document.getElementById('myText');
let uniqueNumbers = [];
let writeNumbers = [];



for (x = 1; x <= 5; x++) {
    let generatedNumber = generateRandomNum(uniqueNumbers,1,99)
    uniqueNumbers.push(generatedNumber);
}
console.log(uniqueNumbers);

numbers.append(uniqueNumbers);
setTimeout(numbersNone, 5000);

setTimeout(function() {
    saveUserNumbers(uniqueNumbers, writeNumbers);
}, 5500);

setTimeout(function() {
    changeClass(numbers, writeNumbers, myText);
}, 6000);

function generateRandomNum(numeriUsati, min, max) {
    let validNum = false;
    let randomNum;
    while (!validNum) {
        randomNum = Math.floor(Math.random() * ( max - min + 1)) + min;

        if (numeriUsati.includes(randomNum) == false) {
            validNum = true;
        }
    }
    return randomNum;
}

function numbersNone() {
    numbers.classList.add('d-none');
    myText.classList.add('d-none');
}

function saveUserNumbers(numArray, writeNumbers) {
    let userNumber;

    for (x = 1; x <= 5; x++) {
        userNumber = parseInt(prompt('Inserisci un numero che ricordi:'));
        let elementFound = false;
        for (let i = 0; i < numArray.length; i++) {
            if(numArray[i] == userNumber) {
                elementFound = true;
            }
        }
        if (elementFound == true) {
            writeNumbers.push(userNumber);
        }
    }
    return writeNumbers;
}

function changeClass(element, myArray, myText) {
    element.innerText = '';
    element.classList.remove('d-none');
    element.classList.add('d-flex');
    element.append(myArray);
    myText.classList.remove('d-none');
    myText.classList.add('d-flex');
    myText.innerText = 'Hai ricordato questi numeri!'
}
   

