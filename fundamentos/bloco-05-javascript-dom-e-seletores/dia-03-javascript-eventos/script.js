function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

let ulList = document.querySelector('#days');
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (let index = 0; index < decemberDaysList.length; index += 1){
    let dayList = decemberDaysList[index];

    let dayListItem = document.createElement('li');
    dayListItem.innerHTML = dayList;// porque innerText ou inner HTML
    dayListItem.className = 'day';
    ulList.appendChild(dayListItem);
    
    if (dayList === 24) {
        dayListItem.className = 'day holiday';
    }
    if (dayList === 25) {
        dayListItem.className = 'day holiday friday';
    }
    if (dayList === 31) {
        dayListItem.className = 'day holiday';
    }
    if (dayList === 4) {
        dayListItem.className = 'day friday';
    }
    if (dayList === 11) {
        dayListItem.className = 'day friday';
    }
    if (dayList === 18) {
        dayListItem.className = 'day friday';
    }
}

function createNewButton (buttonName){
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    newButton.id = 'btn-holiday';
    newButton.innerHTML = buttonName;
    buttonContainer.appendChild(newButton);
}
createNewButton ('Feriados');


function displayHoliday() {
    let chanceColor = document.querySelectorAll('.holiday');
    let buttonHoliday = document.querySelector('#btn-holiday');
    let backgroundColor = 'rgb(238,238,238)';
    let newColor = 'black';

    buttonHoliday.addEventListener('click', function() {
        for (let index =0; index < chanceColor.length; index +=1){
            if (chanceColor[index].style.backgroundColor === newColor) {
                chanceColor[index].style.backgroundColor = backgroundColor;
            }else {
                chanceColor[index].style.backgroundColor = newColor;
            }
        } 
    })

}

displayHoliday();

function createButtonFriday (buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButtonFriday = document.createElement('button');
    newButtonFriday.id = 'btn-friday';
    newButtonFriday.innerHTML = buttonName;
    buttonContainer.appendChild(newButtonFriday);
}

createButtonFriday('Sexta-feira');

function chanceTextFriday (arrayFriday) {
    let chanceText = document.querySelectorAll('.friday');
    let buttonFriday = document.querySelector('#btn-friday');
    let newFridayText = 'SEXTOUU'
    console.log (chanceText);
    
    buttonFriday.addEventListener('click', function () {
        for (let index = 0; index < chanceText.length; index += 1){
            let verification = chanceText[index].innerHTML
            console.log(verification);
            if (chanceText[index].innerHTML !== newFridayText) {
                chanceText[index].innerHTML = newFridayText;
            } else {
                chanceText[index].innerHTML = arrayFriday[index];
            }
        }
    })
}
let decemberFridays = [4, 11, 18, 25];
chanceTextFriday(decemberFridays);

function zoomSelect () {
    let daysZoom = document.querySelector('#days');
    
    daysZoom.addEventListener('mouseover', function (evento){
        evento.target.style.fontSize = '30px';
        evento.target.style.fontWeight = '600'
    })
}

function zoomOut () {
    let dayZoomOut = document.querySelector('#days');

    dayZoomOut.addEventListener('mouseout', function (evento){
        evento.target.style.fontSize = '20px';
        evento.target.style.fontWeight = '200'
    })
}

zoomOut();
zoomSelect();

function taskAdd (String) {
    let taskDad = document.querySelector('.my-tasks');
    let taksName = document.createElement('span');

    taksName.innerHTML = String;

    taskDad.appendChild(taksName);

}

taskAdd('Cozinhar');

function newColorTask (cor) {
    let taskDad = document.querySelector('.my-tasks');
    let newDiv = document.createElement('div');
    
    newDiv.className = 'task'

    newDiv.style.backgroundColor = cor;

    taskDad.appendChild(newDiv);
}

newColorTask ('red');

function selectTask () {
    let selectTask = document.getElementsByClassName('task selected');
    let myTask = document.querySelector('.task')

    myTask.addEventListener('click', function(event){
        if (selectTask.length === 0){
            event.target.className = 'task selected';
        } else {
            event.target.className = 'task';
        }
    })
}

selectTask();

function dayTaskColor () {
    let selectTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
}