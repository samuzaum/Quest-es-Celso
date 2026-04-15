// ==========================================
// ARQUIVO: script.js (LÓGICA DO APLICATIVO)
// ==========================================

let estado = {
  questaoAtual: 0
};

// --- FUNÇÕES AUXILIARES DE TELA ---

function mostrarTela(telaId) {
  const telas = ["tela-inicio", "tela-questao", "tela-resultado", "tela-ajuda"];
  telas.forEach(tela => {
    const elemento = document.getElementById(tela);
    if (elemento) {
      if (tela === telaId) {
        elemento.classList.remove("hidden");
      } else {
        elemento.classList.add("hidden");
      }
    }
  });
}

function renderizarAlternativas(q, containerId, callbackClique) {
  const altDiv = document.getElementById(containerId);
  altDiv.innerHTML = "";

  for (let letra in q.alternativas) {
    const div = document.createElement("div");
    div.classList.add("alt");

    div.innerHTML = `
      <div class="circulo">${letra}</div>
      <span>${q.alternativas[letra]}</span>
    `;

    div.onclick = () => callbackClique(div, letra, q.correta);
    altDiv.appendChild(div);
  }
}

// --- LÓGICA DE PROGRESSO E ACERTOS (LOCALSTORAGE) ---

function marcarComoConcluida(id) {
  let concluidas = JSON.parse(localStorage.getItem("concluidas_lista_01")) || [];
  if (!concluidas.includes(id)) {
    concluidas.push(id);
    localStorage.setItem("concluidas_lista_01", JSON.stringify(concluidas));
  }
}

function atualizarBotoesConcluidos() {
  let concluidas = JSON.parse(localStorage.getItem("concluidas_lista_01")) || [];
  const botoes = document.querySelectorAll(".botoes button");
  
  botoes.forEach((btn, index) => {
    if (concluidas.includes(index)) {
      btn.classList.add("botao-concluido");
    } else {
      btn.classList.remove("botao-concluido");
    }
  });
}

function continuarDeOndeParou() {
  const idSalvo = localStorage.getItem("progresso_lista_01");
  if (idSalvo !== null) {
    abrirQuestao(parseInt(idSalvo));
  } else {
    alert("Você ainda não começou esta lista!");
  }
}

// --- LÓGICA PRINCIPAL DO APLICATIVO ---

function abrirQuestao(id) {
  estado.questaoAtual = id;
  localStorage.setItem("progresso_lista_01", id); 

  const q = questoes[id];
  mostrarTela("tela-questao");

  document.getElementById("numero-questao").innerText = q.titulo;
  document.getElementById("enunciado-questao").innerText = q.enunciado;

  renderizarAlternativas(q, "alternativas", (elemento, letra) => responder(letra));

  const img = document.getElementById("imagem-questao");
  img.src = q.imagem || "";
  img.style.display = q.imagem ? "block" : "none";
}

function responder(letra) {
  const q = questoes[estado.questaoAtual];
  mostrarResultado(letra === q.correta);
}

function mostrarResultado(acertou) {
  mostrarTela("tela-resultado");

  const titulo = document.getElementById("resultado-titulo");
  const img = document.getElementById("resultado-img");
  const acoesDiv = document.getElementById("acoes-resultado");

  if (acertou) {
    titulo.innerText = "Parabéns, resposta CERTA!";
    img.src = "img/acerto.jpeg";
    marcarComoConcluida(estado.questaoAtual);
    
    // Verifica se é a última questão para mudar o texto do botão
    const ehUltimaQuestao = estado.questaoAtual >= questoes.length - 1;
    const textoBotaoAvancar = ehUltimaQuestao ? "Finalizar Lista 🎉" : "Próxima Questão →";
    
    acoesDiv.innerHTML = `
      <button onclick="proximaQuestao()" style="padding: 14px 28px; background: #3f6f4a; color: white; border: none; border-radius: 30px; cursor: pointer; font-size: 16px;">${textoBotaoAvancar}</button>
      <button onclick="voltarInicio()" style="padding: 14px 28px; background: #7c9aa0; color: white; border: none; border-radius: 30px; cursor: pointer; font-size: 16px;">Menu de Problemas</button>
    `;
  } else {
    titulo.innerText = "Resposta ERRADA";
    img.src = "img/erro.jpg";

    acoesDiv.innerHTML = `
      <button onclick="voltarQuestao()" style="padding: 14px 28px; background: #e74c3c; color: white; border: none; border-radius: 30px; cursor: pointer; font-size: 16px;">↻ Tentar Novamente</button>
      <button onclick="ajuda()" style="padding: 14px 28px; background: #f39c12; color: white; border: none; border-radius: 30px; cursor: pointer; font-size: 16px;">Ver Ajuda</button>
      <button onclick="voltarInicio()" style="padding: 14px 28px; background: #7c9aa0; color: white; border: none; border-radius: 30px; cursor: pointer; font-size: 16px;">Menu de Problemas</button>
    `;
  }
}

function voltarInicio() {
  mostrarTela("tela-inicio");
  atualizarBotoesConcluidos();
  
  if (estado.questaoAtual >= questoes.length - 1) {
    localStorage.removeItem("progresso_lista_01");
    estado.questaoAtual = 0;
  }
}

function proximaQuestao() {
  let proxima = estado.questaoAtual + 1;
  if (proxima >= questoes.length) {
    voltarInicio();
  } else {
    abrirQuestao(proxima);
  }
}

// --- LÓGICA DA TELA DE AJUDA ---

function ajuda() {
  const q = questoes[estado.questaoAtual];

  if (!q.ajuda) {
    alert("Ajuda ainda não disponível para essa questão");
    return;
  }

  mostrarTela("tela-ajuda");

  document.getElementById("titulo-ajuda").innerText = "Solução do " + q.titulo;
  document.getElementById("conteudo-ajuda").innerHTML = q.ajuda.conteudo;

  const img = document.getElementById("imagem-ajuda");
  img.src = q.imagem || "";
  img.style.display = q.imagem ? "block" : "none";

  renderizarAlternativas(q, "alternativas-ajuda", (elemento, letra, correta) => selecionarAltAjuda(elemento, letra, correta));
}

function validarAjuda() {
  const inputs = document.querySelectorAll("#conteudo-ajuda input");

  inputs.forEach(input => {
    let correta = input.dataset.resposta.toLowerCase();
    let valor = input.value.toLowerCase();

    // Remove espaços vazios e converte vírgula do Brasil para ponto
    correta = correta.replace(/\s/g, '').replace(',', '.');
    valor = valor.replace(/\s/g, '').replace(',', '.');

    input.classList.remove("input-correto", "input-errado");

    if (valor === correta) {
      input.classList.add("input-correto");
    } else {
      input.classList.add("input-errado");
    }
  });
}

function voltarQuestao() {
  mostrarTela("tela-questao");
}

function selecionarAltAjuda(elemento, letra, correta) {
  document.querySelectorAll("#alternativas-ajuda .circulo")
    .forEach(c => c.classList.remove("alt-correta", "alt-errada"));

  const circulo = elemento.querySelector(".circulo");
  circulo.classList.add(letra === correta ? "alt-correta" : "alt-errada");
}

function mostrarGabaritoAjuda() {
  const q = questoes[estado.questaoAtual];
  alert("Resposta correta: " + q.correta);
}

// Inicializa o visual dos botões de acerto
window.onload = () => {
  atualizarBotoesConcluidos();
};