function inserirNome () {
    let nomeUsuario = prompt("informe o seu nome:");
    let elemento = document.querySelector ("#nome-usuario");
    elemento.textContent = nomeUsuario;
}

inserirNome ()