const controleContainer = document.querySelectorAll(".controle");

controleContainer.forEach((controle) => {
    const operador = controle.querySelectorAll(".controle-ajuste");
    const elementoValor = controle.querySelector(".controle-contador");

    operador.forEach((elementoOperador) => {
        elementoOperador.addEventListener("click", () => {
            manipulaValor( elementoOperador.textContent, elementoValor );
        })
    })
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