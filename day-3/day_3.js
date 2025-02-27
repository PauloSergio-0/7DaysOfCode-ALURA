let area = parseInt(prompt("Se quer seguir para área de Front-End ou seguir para a área de Back-End. 1 para Front-End e 2 para Back-End"));
let aprender;
let especializacao;
let tecnologia_msg;
let tecnologia_msg_loop;
let tecnologia = [];
/*TODO: codigo ainda não testado */
if (area == 1){
    aprender = parseInt(prompt("Você deseja aprender React ou aprender Vue? 1 para React e 2 para Vue")); 
} else if (area == 2){
    aprender = parseInt(prompt("Você deseja aprender C# ou aprender Java? 1 para C# e 2 para Java")); 
};

especializacao = prompt("Você ira seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack.");

tecnologia_msg= prompt("Quais são as tecnologias nas quais a você gostaria de se especializar ou de conhecer?");

tecnologia.push(tecnologia_msg);

while(true){
    tecnologia_msg_loop= parseInt(prompt("Tem mais alguma tecnologia que você gostaria de aprender?"));
    if (tecnologia_msg_loop == 1){
        tecnologia_msg;
        tecnologia.push(tecnologia_msg);
    }
}


