//01 - Conexão JavaScript
console.log("Meu primeiro script foi executado!");




//02 - Mensagem inicial, projeto boiadeiro.
console.log("Catálogo de vacinação bovino");
console.log("Diminuição da taxa de mortes por aftosa");
console.log(100 + 70);




//03 - Exemplo de const e let
const nomePropriedade = "Fazenda Marília";
const vacina = "Aftosa";
let quantidadeGados = 500;
console.log(quantidadeGados + 100);

//Valor de let alterado
quantidadeGados = 600;
console.log(quantidadeGados);

//Mostrando o novo valor no console
console.log(`A ${nomePropriedade} está vacinando com ${vacina} a quantidade de ${quantidadeGados} cabeças de gado.`)





//04 - Exemplo de var
var exemploVacinacaoAntigo = "A fazenda Marilia está vacinando com Aftosa a quantidade de 600 cabeças de gado.";
console.log(exemploVacinacaoAntigo);




//05 - Exemplos de String, Number, Boolean e Null
const nomeVacina = "Aftosa";
const quantidadeVacina = 600;
const vacinacaoCompleta = true;
const proximaVacinacao = null;


console.log(nomeVacina);
console.log(quantidadeVacina);
console.log(vacinacaoCompleta);
console.log(proximaVacinacao);




//06 - Exemplo de operadores
const dia1 = 450;
const dia2 = 150;
const media = (dia1 + dia2) / 2;
const divisao = (dia1 / dia2);
const subtracao = (dia1 - dia2);
const multiplicacao = (dia1 * dia2);
const diaMaisProdutivo = dia1 >= dia2;


console.log(multiplicacao)
console.log(divisao)
console.log(subtracao)
console.log(media)
console.log(diaMaisProdutivo)




//07 - String e Template Literals
console.log(`José Zanc, proprietário da ${nomePropriedade} está efetuando a vacinação contra ${vacina} a quantidade de ${quantidadeGados} cabeças de gado.`);




//08 - If e Else
if (quantidadeGados <= 600) {
    console.log("💉Vacinação concluida com SUCESSO!💉");
}

else {
    console.log("💉Vacinação INCOMPLETA!💉");
}





//10 - Desafio integrador
const totalGados = 800;
let gadosVacinados = 600;
const gadosPendentes = (totalGados - gadosVacinados);
console.log(gadosPendentes);

const percentualVacinado = (gadosVacinados / totalGados) * 100;
console.log(percentualVacinado);


console.log(`A fazenda Marília vacinou ${gadosVacinados} de ${totalGados} cabeças de gado.`);


if (gadosPendentes === 0) {
    console.log("Vacinação do rebanho concluída!");
} else {
    console.log("Ainda existem animais para vacinar.");
}