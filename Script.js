function validarFormulario() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || msg === "") {
        alert("Por favor, preencha todos os campos!");
        return false;
    }

    alert("Mensagem enviada com sucesso!");
    return true;
}
