//Definisco le variabili e gli array

const numberDom = document.getElementById('number');

const correctDom = document.getElementById('correct');

const randomList = numberRandomList();

correctNumber = [];

numberList = [];

//Visualizzo i valori degli array

console.log(randomList);

console.log(numberList);

console.log(correctNumber)

//Predispongo il timing

setTimeout(requestNumber, 31000);

setInterval(timerOut, 30000);

//Creo le funzioni utlili
 
function requestNumber(){ 

    for(let i = 0; i < 5; i++){
        numberList.push(parseInt(prompt('Inserisci qui i numeri che ti ricordi')));

        if(numberList[i] == randomList[i]){
            correctNumber.push(randomList[i]);
        }
    }  

    correctDom.innerHTML += correctNumber;
    correctDom.classList.add('correctDom');
    
}

function timerOut(){

    numberDom.innerHTML = '';

}

function numberRandomList(){

    numberList = [];

    for(let i = 0; i < 5; i++){

        numberList.push(randomNumber());

    }

    return numberList;

}

function randomNumber(){

    const number = Math.floor(Math.random() * 100 + 1);

    return number;
}

//Inserisco nel Dom i numeri random

numberDom.innerHTML += randomList;

numberDom.classList.add('numberDom');









