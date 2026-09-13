const inputItem = document.getElementById("inputItem");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const listaItens = document.getElementById("listaItens");
const contador = document.getElementById("contador");
function atualizarContador() {
    const quantidade = listaItens.children.length;
    if (quantidade === 1) {
        contador.textContent = "1 item";
    } else {
        contador.textContent = quantidade + " itens";
    }
}
function adicionarItem() {
    const texto = inputItem.value.trim();
    if (texto === "") {
        alert("Digite um item para adicionar!");
        return;
    }
    const novoItem = document.createElement("li");
    novoItem.innerHTML = `
        <span>${texto}</span>
        <button class="remover">×</button>
    `;
    listaItens.appendChild(novoItem);
    inputItem.value = "";
    atualizarContador();
}
botaoAdicionar.addEventListener("click", adicionarItem);
inputItem.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionarItem();
    }
});
listaItens.addEventListener("click", function(event) {
    if (event.target.classList.contains("remover")) {
        event.target.parentElement.remove();
        atualizarContador();
    }
});
atualizarContador();