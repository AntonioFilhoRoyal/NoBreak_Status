> Nome: NoBrealk Status
> Data de Criação: 07/07/2023
> Desenvolvedor(a): Antonio Filho
Tecnologias:
Descrição: O sistema analisa a carga de um Nobrealk para dectar o quanto de equipamento podemos concetar,
quando a carga for ultrapassada o sistema emiti um alerta e lista três novos nobrealk para o uso, cada um
com mais capacidade que o nobrealk atual.

> R1 - FUNCIONAL
 Ao iniciar a aplicação ira aparece ne tela três nobrealk com cargas de 300va inicial. Na tela tera dois campos de
textos mais um botão, os campos serão para adiciona o nome do equipamento e a voltagem de ele consome, o botão sera
para adicionar o equipamento ao nobrealk e a lista de equipamentos. Em baixo vai ter duas tela uma de uma lista e a
outra de entradas, em cima da tela de entradas tera uma porcentagem de carga "0/cargaNobrealk", qunato mais equipamentos 
forem adicionados, mais a carga ira aumenta, ao ultrapassa a carga maxima do nobrealk ira aparece na tela um alerta
afirmando que o nobrealk ja ultrapassou sua carga, e tambem uma lista de trê novos nobrealks mais potentes, então
a tela volta a tela inicial.
--------------------

> R1 - NÃO FUNCIONAL
 Quando a aplicação é iniciada o sistema faz uma requisição ao banco de dados/API e puxa três nobreaks de baixa capacidade
apos isso é criada uma lista com as informações dos três nobreak. Apos isso é feito a escolha do nobreak clicando em cima
dele, a tela muda para uma tela de formulario com os campo nome do equipamento(texto), consumo(texto) e um botão, depois de
preenche os campo e clica no botão ele enviara o equipamento ate uma lista que fica ligada com o nobreak, é puxado o consumo
do equipamento para calcula com a capacidade do nobreak, caso o consumo seja inferior a capacidade a adição de equipamentos
continua, assim o usuario final podera adiciona mais equipamentos ate a capacidade fica excedida. O calculo da capacidade e
consumo e simples, é pego a capacidade maxima do nobreak e o consumo do equipamento, colocados em uma condicional para sabe
se o consumo e superior a capacidade. Capacidade excedida o sistema parar e emiti um alerta e mais uma lista com mais três
novos nobreak com mais capacidade, apos feito a escolha o sistema voltara ao normal com o novo nobreak alocado.
--------------------

Por que?:
Pra ajuda na hora da troca de equipamentos, compras, vendas, avaliações da capacidade do nobreak.

Como?:
O sistema faz requisições em um banco de dados ou API (preferencia do cliente), puxando informações para calculo de capacidade
avaliação de preço, idetenficação de modelos mais usados e melhores modelos avaliados pelo mercado.

O que?: 
Puxando as informações, o sistema analisa o equipamento adicionado pegando seu consumo e somando com a carga atual do nobreak
caso a carga atual seja superior a carga maxima o sistema parar ie mostrado uma nova lista de nobreaks mais potentes.

Custo?:
O custo total do aplicativo sera para publica na play store: R$ 125,00. Por enquanto.
--------------------

05/07/2023 - Documentação
Preparação de metodos, nome, linguagens etc... Começando a documentação do software.
Fase 1 - Preparação dos designers para diversos dispositovs (OBS: software padrão sera mobile).
Fase 2 - Començando o desenvolvimento: Estrutura HTML5 e estilização CSS3
Fase 3 - Script para listar os equipamento: Estrutura do script que enviara para a lista os equipamentos junto com o consumo deles, salvando brevemente na lista ate o final do uso do NoBreak atual.
Fase 4 - Script de calculo consumoEquipamento x cargaMaxNobreak.

11/07/2023 - Telas
Criação dos design das tela, Desktop, notebook, Tablet e Smartphone.
--------------------

12/07/2023 - Inicio da tela para smartphone: 320x480
Criação da tela: 320x480
Interface web
Organização dos elementos HTML5 dentro da web
Estilização da aplicação com CSS3
Definição de cada parte da aplicação
--------------------

12/07/2023 part2 - Reajustes na tela e inserção de scripts
Feito a inserção do script que enviara a lista para o nobreak
ajustes na estilização

function createdLi(){
    const li = document.createElement("li");
    li.classList.add("item-list");
    li.classList.add("font-public-sans");
    return li;
}

function listNobreak(equipament, consumption){
    const li = createdLi();
    li.innerText = `${equipament} - ${consumption}V`;
    ulList.appendChild(li);
    clearInput();
}

criando um elemento "li" e lançando ele como um filho de "ul", carregando os itens dentro da lista
--------------------

12/07/2023 - Script de calculo do consumo atual e consumo maximo
Começa o script para calcular o currentConsumption(consumo do equipamento) e maxConsumption(Carga maxima do NoBreak)
--------------------

19/07/2023 - Lista Inicial
Criado a lista de incio, onde ira listar nobreaks entre 300-500v
apos a escolha a lista some

20/07/2023 - TESTE #1 FAILED
Testando calculos pro estado do Nobreak

25/07/2023 - TESTE #2 FAILED
Testes de calculo do consumo do nobreak e lançamento de lista

27/07/2023 - TESTE #3 SUCCESS
Mais um teste de calculo.
Com a ajuda de um amigo do discord, imnotgabriel_, conseguimos realizar o calculo e da um avanço no projeto.

  if (currentConsumption + con <= maxConsumption) {
    currentConsumption += con; // Adiciona o valor inserido pelo usuário à carga atual
  } else {
    alert("Carga excedida. O valor total não pode ultrapassar 500.");
    

  }

28/07/2023 - ESCOLHA DE CASO
Começando a lista de itens que ser alançada apos o nobreak de error de capacidad excedida