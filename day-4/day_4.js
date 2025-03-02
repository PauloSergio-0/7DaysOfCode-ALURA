function numero_aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function restart(){
    var restart= parseInt(prompt("Deseja jogar Novamente? 0 para sim e 1 para não"));
    if(restart == 1){
        alert("reiniciando o game!")
        return game_randomNunber();
    }
}

function game_randomNunber(){
    let tentativas = 0;
    let minNum, maxNum;
    let num;
    
    while (true){
        minNum = parseInt(prompt("Qual o valor minímo"));
        maxNum = parseInt(prompt("Qual o valor máximo"));
        
        if((!isNaN(minNum) && !isNaN(maxNum) ) &&(maxNum > minNum)){
            num = numero_aleatorio(minNum, maxNum);
            break;
        }
    }


    while(true){
        tentativas ++;
        let resposta_tentativas = tentativas > 1 ? "tentativas" : "tentativa";
        
        if(tentativas > 3){
            alert(`Você perdeu!\nO número era ${num}`);
            break;
        }
        let resposta = parseInt(prompt(`Qual é o número secreto de ${minNum} a ${maxNum}?`));

        if (resposta == num){
            
            alert(`Parabéns você venceu!\nEm ${tentativas} ${resposta_tentativas}.\nO numero é ${num}.`);
            return restart();
        } else if (resposta <= num){
            alert(`O número deve ser maior`);
        } else{
            alert(`O número deve ser menor`);
            
        }
        
    };
};

game_randomNunber();
