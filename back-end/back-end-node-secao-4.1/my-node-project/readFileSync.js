const fs = require('fs').promises;


async function main () {

    try{
        const data = await fs.writeFile('./meu-arquivo.txt', 'Meu Textão');
        console.log('arquivo escrito com sucesso');
    } catch (e) {
        console.error(`Erro ao ler o arquivo: ${e.path}`);
        console.log(e);
    }
}

main();