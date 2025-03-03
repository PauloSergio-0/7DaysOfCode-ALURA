function menu(){
    while(true){
        let operacao = parseInt(prompt(
            "Escolha uma operacao:\n" +
            "1.Soma\n" +
            "2.Subtracão\n" +
            "3.Multiplicaçao\n" +
            "4.Divisão\n" +
            "5.Sair\n"));
        
        if(operacao>=1 && operacao <=5){
            if(operacao==5){
                break;
            }else{
                return calculo(operacao);
            }
        };
        alert("Opção não reconhecida!");
    };
};


function calculo(type_calc){
    let num1;
    let num2;
    while(true){
        num1 = parseInt(prompt("Qual o numero 1?"));
        num2 = parseInt(prompt("Qual o numero 2?"));
        if(!isNaN(num1) && !isNaN(num2)){
            break;
        }
        alert("Todos os campos devem ser preenchidos!");
    }

    if(type_calc == 1){        
        soma(num1, num2);
        return menu();

    } else if (type_calc ==2){
        subtracao(num1, num2);
        return menu();

    } else if (type_calc ==3){
        multiplicacao(num1, num2);
        return menu();

    } else if (type_calc ==4){
        divisao(num1, num2);
        return menu();

    };
};


function soma(num1, num2){
    return alert(`${num1 } + ${num2} = ${num1 + num2}`);
}

function subtracao(num1, num2){
    return alert(`${num1 } - ${num2} = ${num1 - num2}`);
}

function multiplicacao(num1, num2){
    return alert(`${num1} * ${num2} = ${num1 * num2}`);
}

function divisao(num1, num2){
    return alert(`${num1} / ${num2} = ${num1 / num2}`);
}


menu();