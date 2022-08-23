// exercicio: Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:


let info = {
    personagem: 'Margarda',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'sim',
}

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells four Color Comics # 178',
    nota: 'O ultimo MacPatinhas',
    recorrente: 'nao',
}

for(let key in info){
    if(key === 'recorrente' && info[key] === 'sim' && info2[key] === 'sim'){
        console.log('Ambos recorrentes');
    }else {
        console.log(info[key] + ' e ' + info2[key]);
    }
}
