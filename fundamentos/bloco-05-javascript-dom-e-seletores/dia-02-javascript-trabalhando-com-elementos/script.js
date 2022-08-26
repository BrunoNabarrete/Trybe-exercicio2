console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

let pai1 = document.getElementById('elementoOndeVoceEsta').parentElement;
let filho1 = document.getElementById('primeiroFilhoDoFilho');
console.log(document.getElementById('pai').firstElementChild);
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);


pai1.style.color = 'green';
filho1.innerText = 'não sei o que escrever aqui'