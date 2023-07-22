console.log("Estou aqui");
let maxCompsution = 0;

const main = document.querySelector('.main');
const list = document.querySelector('.list');

// FUNÇÕES DE CRIAÇÃO DE ELEMENTOS DA LISTA
// EQUIPAMENTO
const inputEquipament = document.querySelector('.input-equipment');
const inputConsumption = document.querySelector('.input-consumption');
// LISTA
const ulList = document.querySelector('.list-equipament');

// LI PARA A LISTA DE EQUIPAMENTOS
function createdLi() {
    const li = document.createElement("li");
    li.classList.add("item-list");
    li.classList.add("font-public-sans");
    return li;
}

// LISTA DE EQUIPAMENTOS
function listNobreak(equipament, consumption) {
    const li = createdLi();
    const aux = parseInt(consumption);
    li.innerText = `${equipament} - ${aux}V`;
    ulList.appendChild(li);
    clearInput();
    console.log(aux + 0);
}

// ADICIONA UM EQUIPAMENTO A LISTA
const buttonAddList = document.querySelector('.button-add-nobreak')
    .addEventListener('click', e => {
        e.preventDefault();

        calcConsumption(inputConsumption.value);
        if (!inputEquipament.value && !inputConsumption.value) return;
        listNobreak(inputEquipament.value, inputConsumption.value);
    });

// FUNÇÃO LIMPAR
function clearInput() {
    inputEquipament.value = " ";
    inputConsumption.value = " ";
    inputEquipament.focus();
}


// FUNÇÕES DE LANÇAMENTO DO PERFIL DE NOBREAK
// ESPECIFIÇÕES DO NOBREAK
const areaBrand = document.querySelector('.area-brand');
const areaModel = document.querySelector('.area-model');
const areaLink = document.querySelector('.area-link');
const areaConsumption = document.querySelector('.area-consumption');
const areaCurrentConsumption = document.querySelector('.current-consumtion');

function nobreakProfile(brand, model, link, consumption){
    areaBrand.innerHTML = brand;
    areaModel.innerHTML = model;
    areaLink.innerHTML = link;
    areaConsumption.innerHTML = consumption;
}

// AREA DE CALCULO DO NOBREAK



// FUNÇÕES PARA CALCULO DO CONSUMO DO NOBREAK
function calcConsumption(currentConsumption){
    const auxConsumption = parseInt(currentConsumption);
    console.log(maxCompsution);
    
    let sum = 0;
    sum += auxConsumption;
    if(sum !== 350){   
        areaCurrentConsumption.innerHTML = sum;
    
    } else {
        alert("Carga excedida");
    }
}


// FUNCÕES DE INICIO DE PAGINA, LANÇANDO UMA LISTA
const buttonCoice = document.querySelector(".choice-button");
const inputChoice = document.querySelector(".choice-input");
const ulChoice = document.querySelector('.choice-ul');


function createLi() {
    const li = document.createElement("li");
    return li;
}

function createList(marca, model, poten, valueButton){
    
    const li = createLi();
    li.classList.add("choice-item-nobreak");

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const button = document.createElement("button");

    p1.classList.add("choice-marca");
    p2.classList.add("choice-model");
    button.classList.add("choice-value");

    p1.innerHTML = `${marca} - ${model}`;
    p2.innerHTML = `${poten}v`;
    button.innerHTML = `NB ${valueButton}`;
    button.value = valueButton;

    li.appendChild(p1);
    li.appendChild(p2);
 //   li.appendChild(button);
    ulChoice.appendChild(li);
}

window.addEventListener("load", (event) => {

    for(let i = 0; i < objetoNobreak.length; i++){
        if(objetoNobreak[i].potencia <= 500){
           createList(objetoNobreak[i].marca, objetoNobreak[i].modelo, 
            objetoNobreak[i].potencia, objetoNobreak[i].value);
            
            maxCompsution = objetoNobreak[i].potencia;
        }
    }

});


buttonCoice.addEventListener('click', e => {
    const choice = inputChoice.value;
    
    if(choice == " ") return;

    for(let i = 0; i < objetoNobreak.length; i++){
       // if(choice != objetoNobreak[i].value) return;
        
        if(choice == objetoNobreak[i].value){
            nobreakProfile(objetoNobreak[i].marca, objetoNobreak[i].modelo, objetoNobreak[i].link, objetoNobreak[i].potencia);
            console.log(objetoNobreak[i].marca, objetoNobreak[i].modelo, objetoNobreak[i].potencia);
        }
    }

    if(list.style.display == "flex"){
        list.style.display = "none";
    } else{
        list.style.display = "none";
    }

})

// OBEJTOS NOBREAK
const objetoNobreak = [
    {marca : "NHS", modelo : "NHS Mini III", potencia : 500, link : "link.com.br", value : 1},
    {marca : "NHS", modelo : "NHS Compact III", potencia : 350, link : "link.com.br", value : 2},
    {marca : "NHS", modelo : "NHS Bivolt", potencia : 420, link : "link.com.br", value : 3},
    {marca : "Microsol", modelo : "Mod.Iso 350v", potencia : 350, link : "link.com.br", value : 4}
];




