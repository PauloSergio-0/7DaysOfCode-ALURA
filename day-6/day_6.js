let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

function item_service(service = 1){
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
            if(service == 1){
                return add_tagItem(tagItem, item);
            }else if(service == 2){
                return remove_tagItem(tagItem, item)
            };
        } ;
        alert("Escolha não encontrada!!");
    };
};


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

function delete_item(array, item, name){

    if(array.length === 0){
        return alert(`lista vazia`);

    }

    if(array.includes(item)){
        array.splice(array.indexOf(item), 1);
        return alert(`lista atualizada ${array.join(", ")}`);
    }else{
        return alert(`Não existe item na lista ${name}.`);
    }
};

function remove_tagItem(tag, item){
    if(tag == 1){
        delete_item(frutas, item, "frutas")
    }else if(tag == 2){
        delete_item(laticinios, item, "laticinios")
    }else if(tag == 3){
        delete_item(congelados, item, "congelados")
    }else if(tag == 4){
        delete_item(doces, item, "doces")
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
            }else if (listar == 0){
                alert("Fim das operações!!");
                return lista_compras()
            } 
            alert("Escolha não encontrada!!");
            
    }
}

function lista_compras(){

    
    while(true){
        var add_item = parseInt(prompt("Serviço\n" + "1. Adcionar items\n" + "2. para listar items\n" + "3. para remover item\n" + "4. para sair\n"))

        if(add_item == 1){
            return item_service();/*adiciona */
        }else if (add_item == 2){
            return listar_items();
        }else if (add_item == 3){
            return item_service(service = 2)/*remove */
        }else if (add_item == 4){
            break
        } 
            
        alert("Escolha não encontrada!!");
        
    }

}

lista_compras();