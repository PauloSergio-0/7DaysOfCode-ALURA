let area = parseInt(prompt("Se quer seguir para área de Front-End ou seguir para a área de Back-End. 1 para Front-End e 2 para Back-End"));
let aprender;
let especializacao;
let tecnologia_msg;
let tecnologia_msg_loop;
let tecnologia = [];
let final_message = '';


/*TODO: codigo ainda não testado */
if (area == 1){
    aprender = parseInt(prompt("Você deseja aprender React ou aprender Vue? 1 para React e 2 para Vue")); 
    final_message += `Você ira segui na área Front-End, `;

    if (aprender == 1){
        final_message += " e deseja aprender react.";
    } else if (aprender == 2){
        final_message += " e deseja aprender Vue.";
    }

} else if (area == 2){
    aprender = parseInt(prompt("Você deseja aprender C# ou aprender Java? 1 para C# e 2 para Java")); 
    final_message += `Você ira segui na área Back-End, `;

    if (aprender == 1){
        final_message += " e deseja aprender C#.";
    } else if (aprender == 2){
        final_message += " e deseja aprender Java.";

    }
};


especializacao = prompt("Você ira seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. 1 para a primeira e 2 para a segunda");

if (especializacao == 1){
    final_message += "\nVai seguir se especializando na área escolhida.";
} else if (especializacao == 2){
    final_message += "\nVai se desenvolvendo para se tornar Fullstack.";

}


tecnologia_msg = prompt("Quais são as tecnologias nas quais a você gostaria de se especializar ou de conhecer?");

tecnologia.push(tecnologia_msg);

while(true){
    tecnologia_msg_loop= parseInt(prompt("Tem mais alguma tecnologia que você gostaria de aprender? 1 para sim e 2 para não"));
    if (tecnologia_msg_loop == 1){
        tecnologia_msg = prompt("Quais são as tecnologias nas quais a você gostaria de se especializar ou de conhecer?");
        tecnologia.push(tecnologia_msg);
    } else if (tecnologia_msg_loop == 2){
        break
    } 
}
final_message += `\nE essas são as tecnologias que pretende aprender:\n${tecnologia.join(", ")}`;
alert(final_message);
