const buttonSubmit = document.querySelector('#submit');
const buttonReset = document.querySelector('#reset');
const formInput = document.querySelectorAll('input');

buttonSubmit.addEventListener('click', function(event){
    event.preventDefault();
});

function resetAll(){
    for(let index = 0; index < formInput.length; index +=1){
        const userInput = formInput[index];
        userInput.value = '';
        userInput.checked = false;
    };
}

buttonReset.addEventListener('click', resetAll)