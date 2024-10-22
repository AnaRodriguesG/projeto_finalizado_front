let currentQuestion = 1; // índice da pergunta atual
const totalQuestions = 7; // total de perguntas

function mostrarProxima() {
    const respostaSelecionada = document.querySelector(`input[name="questao${currentQuestion}"]:checked`);

    // Verifica se uma resposta foi selecionada
    if (!respostaSelecionada) {
        alert("Por favor, selecione uma resposta antes de continuar.");
        return;
    }

    // Esconde a pergunta atual
    document.getElementById(`questao${currentQuestion}`).style.display = "none";
    currentQuestion++; // Avança para a próxima pergunta

    // Verifica se a pergunta atual é a última
    if (currentQuestion > totalQuestions) {
        exibirResultado(); // Se todas as perguntas foram respondidas, calcula o resultado
    } else {
        document.getElementById(`questao${currentQuestion}`).style.display = "block"; // Mostra a próxima pergunta
    }
}

function exibirResultado() {
    const respostas = [];

    // Coletar as respostas
    for (let i = 1; i <= totalQuestions; i++) {
        const respostaSelecionada = document.querySelector(`input[name="questao${i}"]:checked`);
        respostas.push(respostaSelecionada ? respostaSelecionada.value : null);
    }

    const profissaoMap = {
        "a": "ANALÍTICO E RESOLUTIVO",
        "b": "ESTRUTURADO E ORGANIZADO",
        "c": "SOCIAL E COMUNICATIVO",
        "d": "CRIATIVO E INOVADOR"
    };

    const sugestaoProfissao = {};
    respostas.forEach((respostaSelecionada) => {
        if (respostaSelecionada) {
            const profissao = profissaoMap[respostaSelecionada];
            if (profissao) {
                sugestaoProfissao[profissao] = (sugestaoProfissao[profissao] || 0) + 1;
            }
        }
    });

    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "<h4>Resultado:</h4>";
    const profissaoMaisFrequente = Object.keys(sugestaoProfissao).reduce((a, b) => sugestaoProfissao[a] > sugestaoProfissao[b] ? a : b);
    resultadosDiv.innerHTML += `<p>Perfil Sugerido: <strong>${profissaoMaisFrequente}</strong><br></p>`;
    resultadosDiv.style.display = "block";

    document.getElementById("btnProximo").style.display = "none";

    // Exibe o modal apropriado com base na profissão sugerida
    if (profissaoMaisFrequente === "ANALÍTICO E RESOLUTIVO") {
        showModalResolucao();
    } else if (profissaoMaisFrequente === "ESTRUTURADO E ORGANIZADO") {
        showModalOrganiza();
    } else if (profissaoMaisFrequente === "SOCIAL E COMUNICATIVO") {
        showModalColaboracao(); // Corrigido
    } else if (profissaoMaisFrequente === "CRIATIVO E INOVADOR") {
        showModalCriatividade(); // Corrigido
    }
}

function showModalResolucao() {
    document.getElementById("myModalResolucao").style.display = "block";
}

function hideModalResolucao() {
    document.getElementById("myModalResolucao").style.display = "none";
}

function showModalOrganiza() {
    document.getElementById("myModalOrganiza").style.display = "block";
}

function hideModalOrganiza() {
    document.getElementById("myModalOrganiza").style.display = "none";
}

function showModalColaboracao() { // Corrigido
    document.getElementById("myModalColaboracao").style.display = "block";
}

function hideModalColaboracao() { // Corrigido
    document.getElementById("myModalColaboracao").style.display = "none";
}

function showModalCriatividade() { // Corrigido
    document.getElementById("myModalCriatividade").style.display = "block";
}

function hideModalCriatividade() { // Corrigido
    document.getElementById("myModalCriatividade").style.display = "none";
}

// Fecha os modais ao clicar fora deles
window.onclick = function (event) {
    if (event.target.className.includes("modal")) {
        hideModalResolucao();
        hideModalOrganiza();
        hideModalColaboracao(); // Corrigido
        hideModalCriatividade(); // Corrigido
    }
};

function logout() {
    // Remove o token do localStorage ou sessionStorage
    localStorage.removeItem('usuarioLogado');
    localStorage.removeItem('nomeUsuario');
    
    // Redireciona para a página de login
    window.location.href = 'Login.html';
}
