console.log("Estou aqui");
const inputEquipament = document.querySelector('.input-equipment');
const inputConsumption = document.querySelector('.input-consumption');
const areaConsumption = document.querySelector('.area-consumption');
const ulList = document.querySelector('.list-equipament');

const buttonAddList = document.querySelector('.button-add-nobreak')
    .addEventListener('click', e => {
        e.preventDefault();

        if (!inputEquipament.value && !inputConsumption.value) return;
        listNobreak(inputEquipament.value, inputConsumption.value);
    })

function createdLi() {
    const li = document.createElement("li");
    li.classList.add("item-list");
    li.classList.add("font-public-sans");
    return li;
}

function listNobreak(equipament, consumption) {
    const li = createdLi();
    li.innerText = `${equipament} - ${consumption}V`;
    ulList.appendChild(li);
    clearInput();
}

function clearInput() {
    inputEquipament.value = " ";
    inputConsumption.value = " ";
    inputEquipament.focus();

}
