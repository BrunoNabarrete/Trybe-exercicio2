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

let ulList = document.querySelector('.days-container');
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (let index = 0; index < decemberDaysList.length; index += 1){
    let dayList = decemberDaysList[index];

    let dayListItem = document.createElement('li');
    dayListItem.innerText = dayList;
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


