const lista = document.querySelector(".lista");
const submitBtn = document.querySelector(".cadastrar");
const elNome = document.getElementById("nome");
const elQuantidade = document.getElementById("quantidade");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((elemento, id) => {
    const item = {
        nome: elemento.nome,
        quantidade: elemento.quantidade,
        id: id
    }
    addItem(item);
});

function addItem(item) {
    const elItem = `
    <li class="item" data-item="${item.id}">
        <strong>${item.quantidade}</strong> 
        ${item.nome}
        <input type="button" data-deleta="${item.id}" value="X"></input>
    </li>`;
    lista.innerHTML += elItem;
}

/* adicionando ao local storage */
function saveItem(nome, quantidade) {
    const item = {
        nome: nome,
        quantidade: quantidade,
    };

    const idItem = itens.findIndex( (elemento) =>
        elemento.nome === nome
    )

    if (idItem > -1) {
        itens[idItem] = item
        item.id = idItem
        atualizaItem(item)
    } else {
        itens.push(item);
        item.id = itens.length - 1
        addItem(item)
    }
    localStorage.setItem( "itens", JSON.stringify(itens) );
}

function atualizaItem(item) {
    lista.querySelector("[data-item='"+item.id+"']").innerHTML = `
        <strong>${item.quantidade}</strong> 
        ${item.nome}
        <input type="button" data-deleta="${item.id}" value="X"></input>
    `
    console.log(lista)
}

function limparInput() {
    elNome.value = "";
    elQuantidade.value = "";
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const nome = elNome.value;
    const quantidade = elQuantidade.value;
    limparInput();
    saveItem(nome, quantidade);
});
