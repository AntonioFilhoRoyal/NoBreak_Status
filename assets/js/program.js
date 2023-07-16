console.log("Estou aqui");

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
    li.innerText = `${equipament} - ${consumption}V`;
    ulList.appendChild(li);
    clearInput();
}

// ADICIONA UM EQUIPAMENTO A LISTA
const buttonAddList = document.querySelector('.button-add-nobreak')
    .addEventListener('click', e => {
        e.preventDefault();

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
const marca = document.querySelector('.area-marca');
const areaModel = document.querySelector('.area-model');
const areaLink = document.querySelector('.area-link');
// AREA DE CALCULO DO NOBREAK
const areaConsumption = document.querySelector('.area-consumption');


                // FUNÇÕES PARA CALCULO DO CONSUMO DO NOBREAK


                // FUNCÕES DE INICIO DE PAGINA, LANÇANDO UMA LISTA



// OBEJTOS NOBREAK
const objetoNobreak = [];




