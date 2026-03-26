const questoes = [
  {
    id: 1,
    titulo: "Problema 01",
    enunciado: "Uma empresa de ônibus utiliza um sistema de vendas de passagens que fornece a imagem de todos os assentos do ônibus, diferenciando os assentos já vendidos, por uma cor mais escura, dos assentos ainda disponíveis. A empresa monitora permanentemente o número de assentos já vendidos e compara-o com o número total de assentos do ônibus para avaliar a necessidade de alocação de veículos extras. Na Figura abaixo tem-se a informação dos assentos já vendidos e dos ainda disponíveis em um determinado instante. A razão entre o número de assentos já vendidos e o total de assentos desse ônibus, no instante considerado na Figura 01",
    alternativas: {
      A: "16/42",
      B: "16/25",
      C: "26/42",
      D: "42/26",
      E: "2/16"
    },
    correta: "C",
    imagem: "img/onibus.png",
    ajuda: {
  tipo: "input",
  conteudo: `
  <div class="ajuda-container">

    <p><strong>Solução do problema 01:</strong> 
    Preencha as lacunas corretamente para resolver o problema.</p>

    <p>
      O total de assento no ônibus é 
      <input data-resposta="7"> × <input data-resposta="6"> 
      = <input data-resposta="42">.
    </p>

    <p>Na Figura 1 o número de assentos escuros é contado como segue:</p>

    <ul>
      <li>na 1ª linha: <input data-resposta="6"> assentos escuros.</li>
      <li>na 2ª linha: <input data-resposta="7"> assentos escuros.</li>
      <li>na 3ª linha: <input data-resposta="7"> assentos escuros.</li>
      <li>na 4ª linha: <input data-resposta="6"> assentos escuros.</li>
    </ul>

    <p>
      Existem <input data-resposta="26"> assentos escuros.
      Portanto, a razão entre o número de assentos já vendidos e o total de assentos é 
      <input data-resposta="26/42">.
    </p>

    <p>
      obs: O total de assentos claros é 
      <input data-resposta="16">.
    </p>

  </div>
  `
}
  },

  {
    id: 2,
    titulo: "Problema 02",
    enunciado: "Os incas desenvolveram uma maneira de registrar quantidades e representar números utilizando um sistema de numeração decimal posicional: um conjunto de cordas com nós denominado quipus. O número da representação do quipus da Figura 2, em base decimal, é",
    alternativas: {
      A: "364",
      B: "463",
      C: "3.064",
      D: "4.603",
      E: "4.012"
    },
    correta: "E",
    imagem: "img/quipus.jpg"
  },

  {
    id: 3,
    titulo: "Problema 03",
    enunciado: "Uma mãe recorreu à bula para verificar a dosagem de um remédio que precisava dar a seu filho. Na bula, recomendava-se a seguinte dosagem: 5 gotas para cada 2 kg de massa corporal a cada 8 horas. Se a mãe ministrou corretamente 30 gotas ao seu filho a cada 8 horas, então a massa corporal dele é de",
    alternativas: {
      A: "12 kg",
      B: "16 kg",
      C: "24 kg",
      D: "36 kg",
      E: "75 kg"
    },
    correta: "C"
  },

  {
    id: 4,
    titulo: "Problema 04",
    enunciado: "Uma ponte precisa ser dimensionada de forma que possa ter três pontos de sustentação. Sabe-se que a carga máxima suportada pela ponte será de 12t. O ponto de sustentação central receberá 60% da carga da ponte, e o restante da carga será distribuído igualmente entre os outros dois pontos de sustentação. No caso da carga máxima, as cargas recebidas pelos três pontos de sustentação serão, respectivamente,",
    alternativas: {
      A: "1,8t; 8,4t; 1,8t",
      B: "3,0t; 6,0t; 3,0t",
      C: "2,4t; 7,2t; 2,4t",
      D: "3,6t; 4,8t; 3,6t",
      E: "4,2t; 3,6t; 4,2t"
    },
    correta: "C"
  },

  {
    id: 5,
    titulo: "Problema 05",
    enunciado: "Um mecânico de uma equipe de corrida necessita que as seguintes medidas realizadas em um carro mostrado na figura sejam obtidas em metros: a) distância entre os eixos dianteiro e traseiro; b) altura entre o solo e o encosto do piloto. Ao optar pelas medidas a e b em metros, obtém-se, respectivamente,",
    alternativas: {
      A: "0,23 e 0,16",
      B: "2,3 e 1,6",
      C: "23 e 16",
      D: "230 e 160",
      E: "2300 e 1600"
    },
    correta: "B",
    imagem: "img/carro.png"
  }
];

let estado = {
  questaoAtual: 0
};

function abrirQuestao(id) {
  estado.questaoAtual = id;

  document.getElementById("tela-inicio").style.display = "none";
  document.getElementById("tela-questao").style.display = "block";
  document.getElementById("tela-resultado").style.display = "none";

  const q = questoes[id];

  // 🔥 AGORA CORRETO
  document.getElementById("numero-questao").innerText = q.titulo;
  document.getElementById("enunciado-questao").innerText = q.enunciado;

  const altDiv = document.getElementById("alternativas");
  altDiv.innerHTML = "";

  for (let letra in q.alternativas) {
    const div = document.createElement("div");
    div.classList.add("alt");

    div.innerHTML = `
      <div class="circulo">${letra}</div>
      <span>${q.alternativas[letra]}</span>
    `;

    div.onclick = () => responder(letra);

    altDiv.appendChild(div);
  }

  const img = document.getElementById("imagem-questao");

  if (q.imagem) {
    img.src = q.imagem;
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
}

function responder(letra) {
  const q = questoes[estado.questaoAtual];
  const acertou = letra === q.correta;
  mostrarResultado(acertou);
}

function mostrarResultado(acertou) {
  document.getElementById("tela-questao").style.display = "none";
  document.getElementById("tela-resultado").style.display = "block";

  const titulo = document.getElementById("resultado-titulo");
  const img = document.getElementById("resultado-img");

  if (acertou) {
    titulo.innerText = "Parabéns, resposta CERTA!";
    img.src = "img/acerto.jpeg";
  } else {
    titulo.innerText = "Resposta ERRADA";
    img.src = "img/erro.jpg";
  }
}

function voltarInicio() {
  document.getElementById("tela-inicio").style.display = "block";
  document.getElementById("tela-questao").style.display = "none";
  document.getElementById("tela-resultado").style.display = "none";
  
}

function proximaQuestao() {
  let proxima = estado.questaoAtual + 1;

  if (proxima >= questoes.length) {
    voltarInicio();
  } else {
    abrirQuestao(proxima);
  }
}

function ajuda() {
  const q = questoes[estado.questaoAtual];

  if (!q.ajuda) {
    alert("Ajuda ainda não disponível para essa questão");
    return;
  }

  document.getElementById("tela-questao").style.display = "none";
  document.getElementById("tela-ajuda").style.display = "block";

  document.getElementById("titulo-ajuda").innerText =
    "Solução do " + q.titulo;

  document.getElementById("conteudo-ajuda").innerHTML =
    q.ajuda.conteudo;

  const img = document.getElementById("imagem-ajuda");

  if (q.imagem) {
    img.src = q.imagem;
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }

  renderAlternativasAjuda(q);
}
function validarAjuda() {
  const inputs = document.querySelectorAll("#conteudo-ajuda input");

  inputs.forEach(input => {
    const correta = input.dataset.resposta;
    const valor = input.value.trim();

    input.classList.remove("input-correto", "input-errado");

    if (valor === correta) {
      input.classList.add("input-correto");
    } else {
      input.classList.add("input-errado");
    }
  });
}
function voltarQuestao() {
  document.getElementById("tela-ajuda").style.display = "none";
  document.getElementById("tela-questao").style.display = "block";
}
function renderAlternativasAjuda(q) {
  const altDiv = document.getElementById("alternativas-ajuda");
  altDiv.innerHTML = "";

  for (let letra in q.alternativas) {
    const div = document.createElement("div");
    div.classList.add("alt");

    div.innerHTML = `
      <div class="circulo">${letra}</div>
      <span>${q.alternativas[letra]}</span>
    `;

    div.onclick = () => selecionarAltAjuda(div, letra, q.correta);

    altDiv.appendChild(div);
  }
}

function selecionarAltAjuda(elemento, letra, correta) {
  document.querySelectorAll("#alternativas-ajuda .circulo")
    .forEach(c => c.classList.remove("alt-correta", "alt-errada"));

  const circulo = elemento.querySelector(".circulo");

  if (letra === correta) {
    circulo.classList.add("alt-correta");
  } else {
    circulo.classList.add("alt-errada");
  }
}

function mostrarGabaritoAjuda() {
  const q = questoes[estado.questaoAtual];
  alert("Resposta correta: " + q.correta);
}