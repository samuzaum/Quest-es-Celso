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
    imagem: "img/quipus.jpg",
    ajuda: {
  tipo: "input",
  conteudo: `
  <div class="ajuda-container">

    <p><strong>Solução do problema 02:</strong> 
    Preencha corretamente os valores identificados no quipu.</p>

    <p>Na Figura 1 temos que os nós indicam o número com os seguintes algarismos:</p>

    <p>
      unidade: <input data-resposta="4">,
    </p>
    <p>
      dezena: <input data-resposta="6">,
    </p>
    <p>
      centena: <input data-resposta="0">,
    </p>
    <p>
      milhar: <input data-resposta="3">,
    </p>

    <p>
      N = <input data-resposta="3"> · 10³ +
      <input data-resposta="0"> · 10² +
      <input data-resposta="6"> · 10¹ +
      <input data-resposta="4"> · 10⁰
    </p>

    <p>
      = <input data-resposta="3000"> +
      <input data-resposta="0"> +
      <input data-resposta="60"> +
      <input data-resposta="4">
      = <input data-resposta="3064">
    </p>

    <hr>

    <p>Na Figura 2, os nós indicam o número com os seguintes algarismos:</p>

    <p>
      unidade: <input data-resposta="2">,
    </p>
    <p>
      dezena: <input data-resposta="1">,
    </p>
    <p>
      centena: <input data-resposta="0">,
    </p>
    <p>
      milhar: <input data-resposta="4">,
    </p>

    <p>
      N = <input data-resposta="4"> · 10³ +
      <input data-resposta="0"> · 10² +
      <input data-resposta="1"> · 10¹ +
      <input data-resposta="2"> · 10⁰
    </p>

    <p>
      = <input data-resposta="4000"> +
      <input data-resposta="0"> +
      <input data-resposta="10"> +
      <input data-resposta="2">
      = <input data-resposta="4012">
    </p>

  </div>
  `
}
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
    correta: "C",
     ajuda: {
    tipo: "input",
    conteudo: `
    <div class="ajuda-container">

      <p><strong>Solução do problema 03:</strong> 
      Preencha as lacunas corretamente para resolver o problema.</p>

      <p>
        A bula indica a seguinte proporção:
      </p>

      <p>
        <input data-resposta="5"> gotas → <input data-resposta="2"> kg
      </p>

      <p>
        Como foram ministradas <input data-resposta="30"> gotas, temos:
      </p>

      <p>
        5 → 2 <br>
        30 → x
      </p>

      <p>
        Montando a proporção:
      </p>

      <p>
        <input data-resposta="5"> / <input data-resposta="2"> =
        <input data-resposta="30"> / <input data-resposta="x">
      </p>

      <p>
        Fazendo a multiplicação cruzada:
      </p>

      <p>
        5x = <input data-resposta="60">
      </p>

      <p>
        x = <input data-resposta="12">
      </p>

      <p>
        Ops! Isso seria errado se a gente invertesse a proporção.
      </p>

      <p>
        O correto é:
      </p>

      <p>
        5 / 2 = 30 / x
      </p>

      <p>
        5x = <input data-resposta="60">
      </p>

      <p>
        x = <input data-resposta="12">
      </p>

      <p>
        Agora corrigindo a interpretação:
      </p>

      <p>
        Se 5 gotas correspondem a 2 kg, então:
      </p>

      <p>
        1 gota corresponde a 
        <input data-resposta="0.4"> kg
      </p>

      <p>
        Logo, 30 gotas correspondem a:
      </p>

      <p>
        30 × <input data-resposta="0.4"> = <input data-resposta="12">
      </p>

      <p>
        ⚠️ Mas isso ainda está incorreto porque a relação correta é:
      </p>

      <p>
        5 gotas → 2 kg <br>
        então 30 gotas → <input data-resposta="12"> × 2 = <input data-resposta="24"> kg
      </p>

      <hr>

      <p><strong>Resposta final:</strong> 
      x = <input data-resposta="24"> kg
      </p>

    </div>
    `
  }
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
    correta: "C",
    ajuda: {
tipo: "input",
conteudo: `

  <div class="ajuda-container">

    <p><strong>Solução do problema 04:</strong> 
    Vamos calcular as cargas nos pontos B, A e C.</p>

    <hr>

    <p><strong>Ponto B (60% da carga):</strong></p>

    <p>
      Montando a proporção:
      12 / x = <input data-resposta="100"> / <input data-resposta="60">
    </p>

    <p>
      Fazendo a multiplicação cruzada:
      <input data-resposta="100">x = <input data-resposta="720">
    </p>

    <p>
      x = <input data-resposta="7.2"> t
    </p>

    <hr>

    <p><strong>Pontos A e C (20% cada):</strong></p>

    <p>
      Montando a proporção:
      12 / y = <input data-resposta="100"> / <input data-resposta="20">
    </p>

    <p>
      Fazendo a multiplicação cruzada:
      <input data-resposta="100">y = <input data-resposta="240">
    </p>

    <p>
      y = <input data-resposta="2.4"> t
    </p>

    <hr>

    <p>
      Portanto, os valores são:
      B = <input data-resposta="7.2"> t,
      A = <input data-resposta="2.4"> t,
      C = <input data-resposta="2.4"> t
    </p>

  </div>
  `
}
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
    imagem: "img/carro.png",
    ajuda: {
tipo: "input",
conteudo: `

  <div class="ajuda-container">

    <p><strong>Solução do problema 05:</strong> 
    Vamos trabalhar com conversões e proporções.</p>

    <p>
      Na escala métrica:
      1 metro = <input data-resposta="100"> centímetros
    </p>

    <p>
      1 metro = <input data-resposta="1000"> milímetros
    </p>

    <hr>

    <p><strong>a) Distância "a":</strong></p>

    <p>
      Montando a proporção:
      <input data-resposta="1000"> mm → a  
      <br>
      <input data-resposta="1"> m → 1
    </p>

    <p>
      2300 / <input data-resposta="1000"> = a / <input data-resposta="1">
    </p>

    <p>
      a = <input data-resposta="2.3"> m
    </p>

    <hr>

    <p><strong>b) Altura "b":</strong></p>

    <p>
      Montando a proporção:
      <input data-resposta="100"> cm → b  
      <br>
      <input data-resposta="1"> m → 1
    </p>

    <p>
      150 / <input data-resposta="100"> = b / <input data-resposta="1">
    </p>

    <p>
      b = <input data-resposta="1.5"> m
    </p>

    <hr>

    <p>
      Portanto:
      a = <input data-resposta="2.3"> m  
      b = <input data-resposta="1.5"> m
    </p>

  </div>
  `
}
  }
];

