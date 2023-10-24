function verificarResposta(pergunta, respostaCorreta) {
    const inputElement = document.getElementById('input' + pergunta);
    const respostaUsuario = inputElement.value.trim().toLowerCase(); // Use o trim para remover espaços em branco

    if (respostaUsuario === respostaCorreta) {
        inputElement.style.backgroundColor = 'lightgreen';
        inputElement.disabled = true;

        const mensagemCerta = inputElement.nextElementSibling.nextElementSibling;
        mensagemCerta.style.display = 'block';

        if (todasRespostasCorretas()) {
            exibirImagemCerta();
            mostrarBotaoFinish();
        }
    } else {
        inputElement.style.backgroundColor = 'lightcoral';

        const mensagemErrada = inputElement.nextElementSibling.nextElementSibling.nextElementSibling;
        mensagemErrada.style.display = 'block';
    }
}

function todasRespostasCorretas() {
    for (let i = 1; i <= 5; i++) {
        const inputElement = document.getElementById('input' + i);
        if (inputElement.value.trim().toLowerCase() !== inputElement.getAttribute('resposta-correta')) {
            return false;
        }
    }
    return true;
}
    var respostasCorretas = 0; // Inicialize o contador de respostas corretas

    function verificarResposta(pergunta, respostaCorreta) {
        const inputElement = document.getElementById('input' + pergunta);
        const respostaUsuario = inputElement.value.trim().toLowerCase();

        if (respostaUsuario === respostaCorreta) {
            inputElement.style.backgroundColor = 'lightgreen';
            inputElement.disabled = true;

            const mensagemCerta = inputElement.nextElementSibling.nextElementSibling;
            mensagemCerta.style.display = 'block';

            respostasCorretas++; // Incrementa o contador de respostas corretas

            if (respostasCorretas === 5) {
                exibirImagemCerta();
                mostrarBotaoFinish();
            }
        } else {
            inputElement.style.backgroundColor = 'lightcoral';

            const mensagemErrada = inputElement.nextElementSibling.nextElementSibling.nextElementSibling;
            mensagemErrada.style.display = 'block';
        }
    }

    function exibirImagemCerta() {
        const imagemCerta = document.getElementById('imagemCerta');
        imagemCerta.style.display = 'block';
    }

    function mostrarBotaoFinish() {
        const finishButton = document.getElementById('finishButton');
        finishButton.style.display = 'block';
    }
    let contador = 0 
const html = document.querySelector("html")
html.addEventListener("click", contarclicks)
function contarclicks() {
    contador++
    localStorage.setItem("click37",contador  )

}
