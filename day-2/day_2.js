let nome = prompt("Qual é o seu nome?");
let idade = parseInt(prompt("Quantos anos você tem?"));
let linguagem = prompt("Qual linguagem de programação você está estudando?");
let message_gosto;


alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

message_gosto = parseInt(prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`));

if (message_gosto == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
}else{
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
};