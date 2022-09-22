const wakeUp = () => console.log('Acordando');

const breakfest = () => console.log('Bora toma Café');

const sleepTime = () => console.log('partiu Dormir');

const doingThings = (func) => func();

doingThings(wakeUp);
doingThings(breakfest);
doingThings(sleepTime);