const controleContainer = document.querySelectorAll(".controle");
const ajuste = document.querySelectorAll("[controle-ajuste]");

ajuste.forEach( (elAjuste) => {
    elAjuste.addEventListener( "click", () => {
        const elValor = elAjuste.parentNode.querySelector("[valor-contador]");
        manipulaValor( elAjuste.textContent, elValor );    
    });
});

function manipulaValor (operacao, elementoValor) {
    const valor = parseInt(elementoValor.value);

    if (operacao === "+") {
        elementoValor.value = valor + 1;
    }
    else if (operacao === "-" && valor > 0) {
        elementoValor.value = valor - 1;
    }
    return;
}