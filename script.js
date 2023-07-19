const input = document.querySelector(".choice-input");
const buttonCoice = document.querySelector(".choice-button");

const ul = document.querySelector('.choice-ul');

const marca = document.querySelector('.choice-marca');
const model = document.querySelector('.choice-model');
const potencia = document.querySelector('.choice-potencia');

function createLi(){
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
    li.appendChild(button);
    ul.appendChild(li);
}

const obj = [
    {marca : "Mdddarca", modelo : "nhs mini iii", potencia : 500, link : "link.com.br", value : 1},
    {marca : "Marca", modelo : "nhs", potencia : 350, link : "link.com.br", value : 2},
    {marca : "Marca", modelo : "NHS Bivolt", potencia : 420, link : "link.com.br", value : 3},
    {marca : "Marca", modelo : "nhss", potencia : 350, link : "link.com.br", value : 4},

    {marca : "Marca", modelo : "MarcaModelo", potencia : 550, link : "link.com.br", value : 1},
    {marca : "Marca", modelo : "MarcaModelo", potencia : 750, link : "link.com.br", value : 2},
    {marca : "Marca", modelo : "MarcaModelo", potencia : 700, link : "link.com.br", value : 3},
    {marca : "Marca", modelo : "MarcaModelo", potencia : 550, link : "link.com.br", value : 4},
    
    {marca : "Marca", modelo : "MarcaModelo", potencia : 800, link : "link.com.br", value : 1},
    {marca : "Marca", modelo : "MarcaModelo", potencia : 950, link : "link.com.br", value : 2},
    {marca : "Marca", modelo : "MarcaModelo", potencia : 1000, link : "link.com.br",value : 3},
    {marca : "Marca", modelo : "MarcaModelo", potencia : 850, link : "link.com.br", value : 4},
    
];

window.addEventListener("load", (event) => {
    for(let i = 0; i < obj.length; i++){
        if(obj[i].potencia <= 500){
           createList(obj[i].marca, obj[i].modelo, obj[i].potencia, obj[i].value);
        }
    }

});

buttonCoice.addEventListener('click', e => {
    const choice = input.value;
    if(choice == " ") return;

    for(let i = 0; i < obj.length; i++){
        if(choice.toUpperCase().toLowerCase() == obj[i].modelo){
           console.log(obj[i].marca, obj[i].modelo, obj[i].potencia);
        }
    }
})


