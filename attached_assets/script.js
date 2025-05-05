function analisarTexto() {
    const userInput = document.getElementById('userInput').value;
    const respostaIA = document.getElementById('respostaIA');

    if (userInput.trim() === "") {
        respostaIA.innerText = "Por favor, escreva algo para analisarmos.";
        return;
    }

    // Aqui é onde a chamada da API da OpenAI será feita futuramente
    respostaIA.innerText = "Estamos analisando com carinho... (simulação de resposta)";
}
