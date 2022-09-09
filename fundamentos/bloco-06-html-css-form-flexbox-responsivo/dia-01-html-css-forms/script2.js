const buttonSubmit = document.querySelector('#submit');
const buttonReset = document.querySelector('#reset');
const formInput = document.querySelectorAll('input');
const photoButton = document.querySelector('#radio-opção2');

buttonSubmit.addEventListener('click', function(event){
    event.preventDefault();
    const validation = textInputValidation();
    if (validation === false ) {
        alert('Dados inválido');
    }else {
        
    }
});

function resetAll(){
    for(let index = 0; index < formInput.length; index +=1){
        const userInput = formInput[index];
        userInput.value = '';
        userInput.checked = false;
    };
}

buttonReset.addEventListener('click', resetAll)

if(photoButton.checked = false){
    alert('Errro, dados invalídos!');
}

function textInputValidation() {
    const email = document.querySelector('#email').value.length;
    const invalidMail = email < 10 || email > 50;

    const name = document.querySelector('#nome-completo').value.length;
    const invalidName = name < 10 || name > 50;

    const textArea = document.querySelector('#texto-trybe').value.length;
    const invalidText = textArea > 500;

    if(invalidMail || invalidName || invalidText){
        return false; 
    } else {
        return true;
    }
}
