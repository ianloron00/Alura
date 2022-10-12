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

function getElItem(item) {
    const elItem = document.createElement("li")
    elItem.setAttribute("class", "item")
    elItem.setAttribute("data-item", item.id)
    elItem.innerHTML = `
        <strong>${item.quantidade}</strong> 
        ${item.nome}
    `
    
    const deletaBtn = document.createElement("input")
    deletaBtn.setAttribute("type", "button")
    deletaBtn.setAttribute("value", "X")
    deletaBtn.setAttribute("data-deleta", item.id)
    deletaBtn.addEventListener("click", function() {
        deletarItem(this.parentNode)
    })
    
    elItem.appendChild(deletaBtn)
    return elItem
}

function deletarItem(elItem) {
    const id = parseInt(
        elItem.getAttribute("data-item")
    )
    itens.splice(itens.findIndex( 
        (item) => id === item.id
        ), 1)
    localStorage.setItem("itens", JSON.stringify(itens))
    elItem.remove()
}

function addItem(item) {
    lista.appendChild( getElItem(item) )
}

function atualizaItem(item) {
    const oldElItem = 
        lista.querySelector("[data-item='"+item.id+"']")
    lista.replaceChild( getElItem(item), oldElItem )
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
        item.id = itens.length
        itens.push(item);
        addItem(item)
    }
    localStorage.setItem( "itens", JSON.stringify(itens) );
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
