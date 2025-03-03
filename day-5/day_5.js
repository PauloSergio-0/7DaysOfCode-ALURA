let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

function add_compra(){
    while(true){
        var tagItem = parseInt(prompt(
            "Escolha a categoria:\n"+
            "1.frutas\n"+
            "2.laticinios\n"+
            "3.congelados\n"+
            "4.doces\n"
            ));
        if(tagItem >= 1 && tagItem <= 4){
            item = prompt("Qual o item?");
            return add_tagItem(tagItem, item);
        } 
        alert("Escolha não encontrada!!");
    }
}


function add_tagItem(tag, item){

    if(tag == 1){
        frutas.push(item);
    }else if(tag == 2){
        laticinios.push(item);
    }else if(tag == 3){
        congelados.push(item);
    }else if(tag == 4){
        doces.push(item);
    }
    lista_compras();

};


function listar_items(){
    while(true){
        var listar = parseInt(prompt("deseja listar item(s) ? 1 para sim e 0 para não."));

        if (listar == 1){
            alert(
            `frutas: ${frutas.join(", ")}\n`+
            `laticinios: ${laticinios.join(", ")}\n`+
            `congelados: ${congelados.join(", ")}\n`+
            `doces: ${doces.join(", ")}\n`
                );
            return lista_compras();
            }else if (add_item == 0){
                alert("Fim das operações!!");
                return lista_compras()
            } 
            alert("Escolha não encontrada!!");
            
    }
}

function lista_compras(){

    
    while(true){
        var add_item = parseInt(prompt("deseja adicionar item ? 1 para sim e 0 para não. 2 para sair"));

        if(add_item == 1){
            return add_compra();
        }else if (add_item == 0){
            return listar_items();
        }else if (add_item == 2){
            break;
        } 
            
        alert("Escolha não encontrada!!");
        
    }

}

lista_compras();