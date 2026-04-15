
const questoes = [
  {
    "id": 1,
    "titulo": "Problema 1",
    "enunciado": "Para estimar a quantidade de tijolos a ser usada na construção de uma parede, é necessário saber como o tijolo será assentado, pois a estimativa depende de qual face do tijolo ficará aparente na parede. Em uma obra, um pedreiro deverá construir uma parede, na qual haverá uma janela, ambas em formato retangular, utilizando tijolos em forma de blocos de faces também retangulares, com as medidas indicadas na figura abaixo. Segundo as orientações que recebeu, a janela não poderá ser tão pequena a ponto de a medida de sua área equivaler à área da face aparente de 100 tijolos, e nem tão grande a ponto de ocupar uma área de medida maior ou igual a 1/6 da medida da área da parede, na situação em que não houvesse janela na parede. Despreze a espessura da massa para assentar esses tijolos. Nessas condições, as quantidades mínima e máxima de tijolos que poderão ser utilizados na construção dessa parede são, respectivamente,",
    "alternativas": {
      "A": "100 e 2400",
      "B": "2000 e 2300",
      "C": "2500 e 2800",
      "D": "2900 e 3200",
      "E": "3300 e 3600"
    },
    "correta": "C",
    "imagem": "https://static.wixstatic.com/media/b05a8a_1a2ec31b186a4ed694728b0cd97f3de0~mv2.png/v1/fill/w_338,h_282,al_c,lg_1,q_85,enc_avif,quality_auto/01-prob_01_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, devemos calcular os limites de tijolos com base na área da parede e da janela:</p><ul><li>1. Primeiro, determine a área da face aparente do tijolo (AF) em m²: <input data-resposta=\"0.02\">.</li><li>2. Calcule o número total de tijolos necessários para a parede inteira sem janela (N): <input data-resposta=\"3000\">.</li><li>3. A janela mínima equivale a 100 tijolos. Portanto, a quantidade máxima de tijolos na parede é N - 100 (ou ajuste conforme o projeto): <input data-resposta=\"2800\">.</li><li>4. A janela máxima é 1/6 da área da parede. Em termos de tijolos, isso representa N / 6 = <input data-resposta=\"500\"> tijolos a menos.</li><li>5. A quantidade mínima de tijolos será N - 500 = <input data-resposta=\"2500\">.</li></ul>"
    }
  },
  {
    "id": 2,
    "titulo": "Problema 2",
    "enunciado": "Na construção de um avião de papel, uma criança dobrou uma folha retangular sobrepondo o lado DC ao lado AB. Assim, ela obteve dois novos retângulos, sendo um deles o retângulo DCNM, conforme a figura 1. Em seguida, ela fez uma nova dobradura, mantendo N fixo e sobrepondo o lado CN, de DCNM, a um segmento de MN. Essa sobreposição determinou um ponto P em MN e também um ponto Q em DC, conforme a figura 2. Considerando as classificações quanto à medida dos ângulos e à medida dos lados, o triângulo NPQ é",
    "alternativas": {
      "A": "acutângulo e escaleno.",
      "B": "acutângulo e isósceles não equilátero.",
      "C": "acutângulo e equilátero.",
      "D": "retângulo e escaleno.",
      "E": "retângulo e isósceles não equilátero."
    },
    "correta": "E",
    "imagem": "https://static.wixstatic.com/media/b05a8a_9192c6dd6fbb42a9931ec9e26b1e61da~mv2.png/v1/fill/w_568,h_202,al_c,q_85,enc_avif,quality_auto/02-prob_02_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, analisamos as propriedades da dobra:</p><ul><li>Pela primeira dobra, temos o retângulo DCNM.</li><li>Na segunda dobra, o lado CN é sobreposto a um segmento de MN, logo <b>CN = PN</b>.</li><li>A linha de dobra NQ atua como bissetriz do ângulo reto em N, portanto o ângulo PNQ mede 45°.</li><li>No triângulo retângulo NCQ, temos que CQ = CN e, por Pitágoras, NQ = CN√2.</li><li>No triângulo NPQ, aplicando a Lei dos Cossenos: PQ² = PN² + NQ² - 2·PN·NQ·cos(45°). Substituindo os valores, encontramos PQ = CN.</li></ul><p>Como PN = PQ, o triângulo é <b>isósceles</b>. Como PN² + PQ² = NQ² (CN² + CN² = 2CN²), o triângulo é <b>retângulo</b> em P. Portanto, a classificação correta é a letra <input data-resposta=\"E\">.</p>"
    }
  },
  {
    "id": 3,
    "titulo": "Problema 3",
    "enunciado": "Uma fábrica de produtos químicos utiliza, para armazenar a sua produção, recipientes na forma de cilindros circulares retos, com 1 metro de altura e raio externo da base igual a 25 cm. Para facilitar o transporte desse tipo de recipiente, cada um deles será colocado dentro de uma caixa, na forma de paralelepípedo retangular reto de base quadrada, e com a mesma altura do cilindro. A empresa deseja construir a menor caixa possível em que possa colocar cada cilindro. De acordo com o texto, a medida interna do lado da base da caixa, em centímetro, a ser construída será igual a",
    "alternativas": {
      "A": "25",
      "B": "50",
      "C": "75",
      "D": "100",
      "E": "125"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>A menor caixa em forma de paralelepípedo, na qual cabe o cilindro, tem que ter o lado do quadrado da base igual ao diâmetro da base do cilindro.</p><p>O diâmetro é o dobro do raio. Se o raio da base do cilindro mede 25 cm, o lado da base da caixa deve medir 2 &times; 25 = <input data-resposta=\"50\"> cm.</p>"
    }
  },
  {
    "id": 4,
    "titulo": "Problema 4",
    "enunciado": "Uma empresa produz embalagens para acomodar seu produto. As embalagens atuais são cilíndricas e medem 16 cm de diâmetro e 20 cm de altura. A pedido da direção, as embalagens terão um novo formato. Elas serão na forma de paralelepípedos retos retângulos, de base quadrada, de lado medindo 16 cm. A capacidade delas deverá ser, pelo menos, 400 mL maior que a das embalagens atuais. Use 3 como valor aproximado de π. O valor aproximado da medida da altura das novas embalagens, em centímetro, é",
    "alternativas": {
      "A": "16,56",
      "B": "17,56",
      "C": "18,56",
      "D": "19,56",
      "E": "20,56"
    },
    "correta": "A",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, siga os passos abaixo:</p><ol><li>Calcule o volume da embalagem cilíndrica atual: $V = \\pi \\cdot r^2 \\cdot h$. O raio é $16/2 = 8$ cm. Logo, $V = 3 \\cdot 8^2 \\cdot 20 = 3 \\cdot 64 \\cdot 20 = 3840$ cm³.</li><li>Determine o volume da nova embalagem (pelo menos 400 mL maior): $3840 + 400 = 4240$ cm³.</li><li>Calcule a altura ($h$) do paralelepípedo de base quadrada ($16 \\times 16$): $16 \\cdot 16 \\cdot h = 4240 \\Rightarrow 256 \\cdot h = 4240$.</li><li>Divida o volume pela área da base: $h = 4240 / 256 = 16,5625$ cm.</li></ol><p>O valor aproximado da altura é: <input data-resposta=\"16,56\"></p>"
    }
  },
  {
    "id": 5,
    "titulo": "Problema 5",
    "enunciado": "O Esquema I mostra a configuração de uma quadra de basquete. Os trapézios em cinza, chamados de garrafões, correspondem a áreas restritivas. Visando atender as orientações do Comitê Central da Federação Internacional de Basquete (Fiba) em 2010, que unificou as marcações das diversas ligas, foi prevista uma modificação nos garrafões das quadras, que passariam a ser retângulos, como mostra o Esquema II. Após executadas as modificações previstas, houve uma alteração na área ocupada por cada garrafão, que corresponde a um(a)",
    "alternativas": {
      "A": "aumento de 580 cm²",
      "B": "aumento de 754 cm²",
      "C": "aumento de 0,58 m²",
      "D": "aumento de 0,754 m²",
      "E": "diminuição de 0,58 m²"
    },
    "correta": "C",
    "imagem": "https://static.wixstatic.com/media/b05a8a_60905d54c6c54c95b5562c0ea303acba~mv2.png/v1/fill/w_307,h_159,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/05-prob_05-a_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "Para encontrar a alteração na área, calculamos a área de cada garrafão:<br>1. Área do trapézio (Esquema I): A = [(B + b) * h] / 2 = [(6 + 3,6) * 5,8] / 2 = <input data-resposta=\"27,84\"> m².<br>2. Área do retângulo (Esquema II): A = b * h = 4,9 * 5,8 = <input data-resposta=\"28,42\"> m².<br>3. Diferença: 28,42 - 27,84 = <input data-resposta=\"0,58\"> m².<br>Como o valor final é maior que o inicial, houve um aumento de 0,58 m²."
    }
  },
  {
    "id": 6,
    "titulo": "Problema 6",
    "enunciado": "(ENEM 2024) Uma microempresa pretende fabricar pipas para vender no próximo verão. Um modelo de pipa está representado pelo quadrilátero ABCD. Nessa representação, os segmentos AB, BC e CE medem, respectivamente, 20 cm, 34 cm e 30 cm. Além disso, E pertence ao segmento AC e é ponto médio do segmento BD. A medida da área, em centímetro quadrado, desse modelo de pipa é",
    "alternativas": {
      "A": "336",
      "B": "528",
      "C": "672",
      "D": "1 056",
      "E": "1 344"
    },
    "correta": "C",
    "imagem": "https://static.wixstatic.com/media/b05a8a_b106f8c8f78949c9a055ee7e2e17fe6f~mv2.png/v1/fill/w_276,h_225,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/06-prob_06_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para encontrar a área da pipa, precisamos calcular o comprimento das diagonais AC e BD.</p><ul><li>No triângulo retângulo BCE, aplicamos Pitágoras: 30² + BE² = 34² → 900 + BE² = 1156 → BE² = 256 → BE = <input data-resposta=\"16\"> cm.</li><li>Como E é ponto médio de BD, a diagonal BD = 16 + 16 = <input data-resposta=\"32\"> cm.</li><li>No triângulo retângulo ABE, aplicamos Pitágoras: AE² + 16² = 20² → AE² + 256 = 400 → AE² = 144 → AE = <input data-resposta=\"12\"> cm.</li><li>A diagonal AC é a soma de AE + EC = 12 + 30 = <input data-resposta=\"42\"> cm.</li><li>A área do quadrilátero (pipa) é dada pelo produto das diagonais dividido por 2: (42 * 32) / 2 = 1344 / 2 = <input data-resposta=\"672\"> cm².</li></ul>"
    }
  },
  {
    "id": 7,
    "titulo": "Problema 7",
    "enunciado": "(ENEM 2024) Uma indústria faz uma parceria com uma distribuidora de sucos para lançar no mercado dois tipos de embalagens. Para a fabricação dessas embalagens, a indústria dispõe de folhas de alumínio retangulares, de dimensões 10 cm por 20 cm. Cada uma dessas folhas é utilizada para formar a superfície lateral da embalagem, em formato de cilindro circular reto, que posteriormente recebe fundo e tampa circulares. A figura ilustra, dependendo de qual das duas extensões será utilizada como altura, as duas opções para formar a possível embalagem. Dentre essas duas embalagens, a de maior capacidade apresentará volume, em centímetro cúbico, igual a",
    "alternativas": {
      "A": "500/π",
      "B": "1000/π",
      "C": "2000/π",
      "D": "4000/π",
      "E": "8000/π"
    },
    "correta": "B",
    "imagem": "https://static.wixstatic.com/media/b05a8a_aced6dc7afc84f8089ddc6c5b88ed471~mv2.png/v1/fill/w_427,h_166,al_c,lg_1,q_85,enc_avif,quality_auto/07-prob_07_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>O volume de um cilindro é calculado pela fórmula V = πR²h. O raio R é obtido através do comprimento da circunferência da base (C = 2πR).</p><p><b>Caso 1:</b> Altura (h) = 10 cm e Comprimento (C) = 20 cm.<br>2πR = 20 → R = 10/π.<br>V₁ = π(10/π)² · 10 = π(100/π²) · 10 = <input data-resposta=\"1000/π\"> cm³.</p><p><b>Caso 2:</b> Altura (h) = 20 cm e Comprimento (C) = 10 cm.<br>2πR = 10 → R = 5/π.<br>V₂ = π(5/π)² · 20 = π(25/π²) · 20 = <input data-resposta=\"500/π\"> cm³.</p><p>Comparando os volumes, o maior valor é <input data-resposta=\"1000/π\"> cm³.</p>"
    }
  },
  {
    "id": 8,
    "titulo": "Problema 8",
    "enunciado": "A prefeitura de uma cidade planeja construir três postos de saúde. Esses postos devem ser construídos em locais equidistantes entre si e de forma que as distâncias desses três postos ao hospital dessa cidade sejam iguais. Foram conseguidos três locais para a construção dos postos de saúde que apresentam as características desejadas, e que distam 10 km entre si, conforme o esquema, no qual o ponto H representa o local onde está construído o hospital; os pontos P₁, P₂ e P₃, os postos de saúde; e esses quatro pontos estão em um mesmo plano. Qual a distância, em quilômetros, de cada um dos postos de saúde ao hospital?",
    "alternativas": {
      "A": "10√3/3",
      "B": "5√3",
      "C": "10√3",
      "D": "5√3/3",
      "E": "20√3/3"
    },
    "correta": "A",
    "imagem": "https://static.wixstatic.com/media/b05a8a_2251645c3be04a90bb6ad2731043f7da~mv2.png/v1/fill/w_311,h_279,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/08-prob_08_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, considere as seguintes observações:</p><ul><li>(i) O triângulo ΔP₁P₂P₃ é equilátero, pois os postos distam 10 km entre si.</li><li>(ii) O ponto H é equidistante dos vértices, logo é o circuncentro e baricentro do triângulo.</li><li>(iii) A altura (h) de um triângulo equilátero de lado 10 é h = (10√3)/2.</li><li>(iv) A distância do vértice ao baricentro (H) corresponde a 2/3 da altura.</li></ul><p>Cálculo: Distância = (2/3) * (10√3)/2 = 20√3/6.</p><p>Insira o valor da distância (simplificando apenas o necessário para a alternativa): <input data-resposta=\"10√3/3\"></p>"
    }
  },
  {
    "id": 9,
    "titulo": "Problema 9",
    "enunciado": "Um proprietário pretende instalar um sensor de presença para a proteção de seu imóvel. O sensor deverá detectar movimentos de objetos e pessoas numa determinada região plana. A figura ilustra a vista superior da área de cobertura (setor circular em azul) de um sensor colocado no ponto S. Essa área depende da medida do ângulo α, em grau, e do raio R, em metro. Ao aumentar o ângulo α ou o raio R aumenta-se a área de cobertura do sensor. Entretanto, quanto maior essa área, maior o preço do sensor. Para esse fim, há cinco tipos de sensores disponíveis no mercado, cada um com as seguintes características:\n\n• tipo I: α = 15° e R = 20 m;\n• tipo II: α = 30° e R = 22 m;\n• tipo III: α = 40° e R = 12 m;\n• tipo IV: α = 60° e R = 16 m;\n• tipo V: α = 90° e R = 10 m.\n\nEsse proprietário pretende adquirir um desses sensores que seja capaz de cobrir, no mínimo, uma área de medida 70 m², com o menor preço possível. Use 3 como valor aproximado para π. O proprietário do imóvel deverá adquirir o sensor do tipo",
    "alternativas": {
      "A": "I",
      "B": "II",
      "C": "III",
      "D": "IV",
      "E": "V"
    },
    "correta": "E",
    "imagem": "https://static.wixstatic.com/media/b05a8a_89215f9e005b4c99beb83c4d99eb1cf6~mv2.png/v1/fill/w_296,h_184,al_c,q_85,enc_avif,quality_auto/09-prob_09_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, utilizamos a fórmula da área do setor circular: <b>A = (α/360) * π * R²</b>. Com π = 3, a fórmula simplificada é <b>A = (α * R²) / 120</b>.</p><p>Calcule a área de cada tipo de sensor:</p><ul><li>Tipo I: (15 * 20²) / 120 = <input data-resposta=\"50\"> m²</li><li>Tipo II: (30 * 22²) / 120 = <input data-resposta=\"121\"> m²</li><li>Tipo III: (40 * 12²) / 120 = <input data-resposta=\"48\"> m²</li><li>Tipo IV: (60 * 16²) / 120 = <input data-resposta=\"128\"> m²</li><li>Tipo V: (90 * 10²) / 120 = <input data-resposta=\"75\"> m²</li></ul><p>O proprietário busca uma área ≥ 70 m² com o menor custo (menor área possível dentro do critério). O sensor que atende é o Tipo V.</p>"
    }
  },
  {
    "id": 10,
    "titulo": "Problema 10",
    "enunciado": "O estádio do Maracanã passou por algumas modificações estruturais para a realização da Copa do Mundo de 2014, como, por exemplo, as dimensões do campo retangular. Para se adaptar aos padrões da Fifa, as dimensões do campo foram reduzidas de 110 m × 75 m para 105 m × 68 m. Em quantos metros quadrados a área do campo do Maracanã foi reduzida?",
    "alternativas": {
      "A": "1110 m²",
      "B": "1100 m²",
      "C": "1050 m²",
      "D": "1000 m²",
      "E": "950 m²"
    },
    "correta": "A",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Considerando que o campo é retangular e a área de um retângulo com lados medindo x e y é A = xy, temos as seguintes situações:</p><p>(i) Antes da reforma: A0 = <input data-resposta=\"8250\"> m².</p><p>(ii) Após a reforma: A1 = <input data-resposta=\"7140\"> m².</p><p>Logo, a área do campo foi reduzida em: <input data-resposta=\"1110\"> m².</p>"
    }
  },
  {
    "id": 11,
    "titulo": "Problema 11",
    "enunciado": "Para obter um sólido de revolução (rotação de 360º em torno de um eixo fixo), uma professora realizou as seguintes etapas:\n\n• recortou o trapézio retângulo PQRS de um material rígido;\n• afixou o lado PS do trapézio em uma vareta fixa retilínea (eixo de rotação);\n• girou o trapézio 360º em torno da vareta e obteve um sólido de revolução.\n\nObserve a figura que apresenta o trapézio afixado na vareta e o sentido de giro.",
    "alternativas": {
      "A": "um cone",
      "B": "um cilindro",
      "C": "um tronco de cone",
      "D": "uma esfera",
      "E": "um tronco de pirâmide"
    },
    "correta": "C",
    "imagem": "https://static.wixstatic.com/media/b05a8a_a7ffc4cda8a746ee9995f285f32bf7ff~mv2.png/v1/fill/w_141,h_194,al_c,q_85,enc_avif,quality_auto/11-prob_11_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para visualizar o sólido, estenda o segmento RQ até encontrar a vareta no ponto T para construir o triângulo ΔTRS. Ao girar o trapézio retângulo em torno do eixo que contém sua altura (lado PS), o sólido resultante é um <input data-resposta=\"tronco de cone\">.</p>"
    }
  },
  {
    "id": 12,
    "titulo": "Problema 12",
    "enunciado": "(ENEM 2022) Um carcinicultor tem um viveiro de camarão cuja cerca na superfície tem formato de um trapézio isósceles. A base maior e a altura desse trapézio têm medidas, respectivamente, de 45 e 20 metros. Para manter uma produção de qualidade, ele segue o padrão de 10 camarões para cada metro quadrado da área delimitada para o viveiro, com uma produção atual correspondente a 6 000 camarões. Mantendo o padrão de qualidade, ele pretende aumentar a capacidade produtiva desse viveiro em 2 400 unidades de camarão, com a ampliação da área delimitada para o viveiro, modificando apenas a medida da base menor do trapézio. Em quantos metros ele deverá aumentar a medida da base menor do trapézio para alcançar a capacidade produtiva desejada?",
    "alternativas": {
      "A": "12",
      "B": "24",
      "C": "39",
      "D": "48",
      "E": "84"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Siga os passos para resolver o problema:</p><ol><li>Calcule a área atual do viveiro dividindo a produção pelo padrão: 6000 / 10 = <input data-resposta=\"600\"> m².</li><li>Utilize a fórmula da área do trapézio A = ((B + b) * h) / 2 para encontrar a base menor atual (b): 600 = ((45 + b) * 20) / 2. Logo, b = <input data-resposta=\"15\"> m.</li><li>Calcule a nova produção total: 6000 + 2400 = <input data-resposta=\"8400\"> camarões.</li><li>Calcule a nova área necessária: 8400 / 10 = <input data-resposta=\"840\"> m².</li><li>Calcule a nova base menor (b') para essa área: 840 = ((45 + b') * 20) / 2. Logo, b' = <input data-resposta=\"39\"> m.</li><li>O aumento na base menor será a diferença: 39 - 15 = <input data-resposta=\"24\"> m.</li></ol>"
    }
  },
  {
    "id": 13,
    "titulo": "Problema 13",
    "enunciado": "(ENEM 2022) Um engenheiro fará um projeto de uma casa cujo terreno tem o formato de um retângulo de 36 m de comprimento por 9 m de largura. Para isso, ele fará um desenho de um retângulo de 24 cm de comprimento por 6 cm de largura. Qual deve ser a escala utilizada pelo engenheiro?",
    "alternativas": {
      "A": "1 : 150",
      "B": "1 : 15",
      "C": "1 : 1,5",
      "D": "1 : 1 500",
      "E": "1 : 0,15"
    },
    "correta": "A",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>A escala é obtida através da razão entre a medida no desenho e a medida real. Primeiro, devemos igualar as unidades de medida.</p><p>Converta 36 m para centímetros: 36 &times; 100 = <input data-resposta=\"3600\"> cm.</p><p>Agora, estabeleça a razão da escala: 24/3600.</p><p>Simplificando a fração 24/3600 por 24, chegamos ao resultado de 1/<input data-resposta=\"150\">.</p>"
    }
  },
  {
    "id": 14,
    "titulo": "Problema 14",
    "enunciado": "(ENEM 2022) Uma indústria de sucos utiliza uma embalagem no formato de prisma reto de base quadrada, com aresta da base de medida a e altura de medida h, ambas de mesma unidade de medida, como representado na figura 12. Deseja-se criar uma linha de produção para uma nova embalagem de igual formato, mas que deverá ter uma capacidade igual ao triplo da atual. A altura da nova embalagem será igual a 4/3 da altura da embalagem atual. As arestas da base da nova embalagem serão denominadas de x. Qual a relação de dependência entre a medida x da nova aresta da base e a medida a da aresta atual?",
    "alternativas": {
      "A": "x = 3/2 a",
      "B": "x = 9/4 a",
      "C": "x = √3 a",
      "D": "x = 9/16 a",
      "E": "x = (√3/2) a"
    },
    "correta": "A",
    "imagem": "https://static.wixstatic.com/media/b05a8a_b84f52afbd0a4df491fcb5966af25086~mv2.png/v1/fill/w_124,h_203,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/14-prob_14_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>O volume do prisma original é V₀ = a²h. O volume da nova embalagem deve ser V₁ = 3V₀.</p><p>A nova embalagem tem altura h₁ = 4/3 h e aresta da base x, logo V₁ = x² · (4/3)h.</p><p>Igualando as expressões: x² · (4/3)h = 3a²h.</p><p>Cancelando h e isolando x², temos: x² = 3a² · (3/4) = <input data-resposta=\"9/4\"> a².</p><p>Extraindo a raiz quadrada de ambos os lados, obtemos: x = <input data-resposta=\"3/2\"> a.</p>"
    }
  },
  {
    "id": 15,
    "titulo": "Problema 15",
    "enunciado": "(ENEM 2022) Uma cidade enfrenta racionamento no abastecimento de água. Para minimizar os efeitos da falta de água para seus hóspedes, o gerente de um hotel pretende substituir a caixa-d’água existente por um reservatório. Sabe-se que o consumo médio diário do hotel é de 10 mil litros de água. Mantido o consumo médio diário, o gerente quer que o novo reservatório, uma vez cheio, seja capaz de suprir as necessidades do hotel por, pelo menos, 6 dias completos, mesmo que não haja abastecimento de água nesse período. O espaço de que o hotel dispõe para instalar o novo reservatório tem formato retangular com largura de 5 m e comprimento de 6 m. O gerente analisa cinco opções disponíveis para esse reservatório. A opção de reservatório que atende à necessidade do hotel e que cabe no espaço disponível é:",
    "alternativas": {
      "A": "I",
      "B": "II",
      "C": "III",
      "D": "IV",
      "E": "V"
    },
    "correta": "B",
    "imagem": "https://static.wixstatic.com/media/b05a8a_7d5f49701e404efb9957a81901fa68be~mv2.png/v1/fill/w_311,h_128,al_c,q_85,enc_avif,quality_auto/15-prob_15-A_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, primeiro calculamos o volume mínimo necessário:</p><p>Consumo diário: 10.000 litros</p><p>Dias necessários: 6</p><p>Volume total = 10.000 &times; 6 = <input data-resposta=\"60000\"> litros.</p><p>Sabendo que 1.000 litros = 1 m&sup3;, o volume em metros cúbicos é <input data-resposta=\"60\"> m&sup3;.</p><p>A área da base disponível é 5 m &times; 6 m = <input data-resposta=\"30\"> m&sup2;.</p><p>Devemos escolher a opção que tenha volume maior ou igual a 60 m&sup3; e área da base menor ou igual a 30 m&sup2;.</p>"
    }
  },
  {
    "id": 16,
    "titulo": "Problema 16",
    "enunciado": "Um novo produto, denominado bolo de caneca no micro-ondas, foi lançado no mercado com o objetivo de atingir ao público que não tem muito tempo para cozinhar. Para prepará-lo, uma pessoa tem à sua disposição duas opções de canecas, apresentadas na figura. A caneca A tem formato de um prisma reto regular hexagonal de lado L = 4 cm, e a caneca B tem formato de um cilindro circular reto de diâmetro d = 6 cm. Sabe-se que ambas têm a mesma altura h = 10 cm, e que essa pessoa escolherá a caneca com maior capacidade. Considere π = 3,1 e √3 = 1,7. A medida da capacidade, em centímetro cúbico, da caneca escolhida é",
    "alternativas": {
      "A": "279",
      "B": "282",
      "C": "408",
      "D": "432",
      "E": "480"
    },
    "correta": "C",
    "imagem": "https://static.wixstatic.com/media/b05a8a_0b4ac170ce3e44738188a1ca8b0a4836~mv2.png/v1/fill/w_371,h_212,al_c,lg_1,q_85,enc_avif,quality_auto/16-prob_16_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver, calculamos o volume de ambas as canecas:</p><p><strong>Caneca A (Prisma Hexagonal):</strong><br>Área da base = 3 * L² * √3 / 2 = 3 * 4² * 1,7 / 2 = <input data-resposta=\"40.8\"> cm².<br>Volume A = Área da base * h = 40,8 * 10 = <input data-resposta=\"408\"> cm³.</p><p><strong>Caneca B (Cilindro):</strong><br>Raio (r) = d / 2 = 6 / 2 = 3 cm.<br>Área da base = π * r² = 3,1 * 3² = <input data-resposta=\"27.9\"> cm².<br>Volume B = Área da base * h = 27,9 * 10 = <input data-resposta=\"279\"> cm³.</p><p>A maior capacidade entre as duas é <input data-resposta=\"408\"> cm³.</p>"
    }
  },
  {
    "id": 17,
    "titulo": "Problema 17",
    "enunciado": "Uma indústria planeja produzir caixa-d’água, em formato cilíndrico, com 1 m de altura, capaz de armazenar 0,4 m³ de água. A medida do raio da base dessa caixa-d’água, em metro, deve ser",
    "alternativas": {
      "A": "√(0,4/π)",
      "B": "0,4/π",
      "C": "√(0,4π)",
      "D": "0,4π",
      "E": "0,2/π"
    },
    "correta": "A",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>O volume de um cilindro com altura <b>h</b> e raio da base <b>R</b> é dado pela fórmula: <b>V = πR²h</b>.</p><p>De acordo com os dados do problema:</p><ul><li>V = 0,4 m³</li><li>h = 1 m</li></ul><p>Substituindo na fórmula: 0,4 = π * R² * 1</p><p>Isolando o raio (R):</p><p>R² = 0,4/π</p><p>R = <input data-resposta=\"√(0,4/π)\"></p>"
    }
  },
  {
    "id": 18,
    "titulo": "Problema 18",
    "enunciado": "Na planta baixa de um clube, a piscina é representada por um quadrado cuja área real mede 400 m². Ao redor dessa piscina, será construída uma calçada, de largura constante igual a 5 m. Qual é a medida da área, em metro quadrado, ocupada pela calçada?",
    "alternativas": {
      "A": "200",
      "B": "300",
      "C": "400",
      "D": "500",
      "E": "600"
    },
    "correta": "D",
    "imagem": "https://static.wixstatic.com/media/b05a8a_69c5b590680f420c9d383121fb4ade0a~mv2.png/v1/fill/w_352,h_264,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/18-prob_18_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "Se a piscina forma um quadrado de área Ap = 400 m², então o lado da piscina mede <input data-resposta=\"20\"> m. Como a calçada possui largura de 5 m em todos os lados, o lado do quadrado maior (piscina + calçada) mede 20 + 5 + 5 = <input data-resposta=\"30\"> m. A área do quadrado maior é 30² = <input data-resposta=\"900\"> m². Subtraindo a área da piscina, a área da calçada é 900 - 400 = <input data-resposta=\"500\"> m²."
    }
  },
  {
    "id": 19,
    "titulo": "Problema 19",
    "enunciado": "As figuras pintadas no quadro da sala de estar de uma residência representam as silhuetas de parte das torres de um castelo e, ao fundo, a de uma lua cheia. A lua foi pintada na forma de um círculo, e o telhado da torre mais alta, na forma de triângulo equilátero, foi pintado sobrepondo parte da lua. O centro da lua coincide com um dos vértices do telhado da torre mais alta. Nesse quadro, a parte da lua escondida atrás da torre mais alta do castelo pode ser representada por um",
    "alternativas": {
      "A": "setor circular",
      "B": "segmento circular",
      "C": "triângulo isósceles",
      "D": "arco de circunferência",
      "E": "cone"
    },
    "correta": "A",
    "imagem": "https://static.wixstatic.com/media/b05a8a_76f057a5072147ffbc0324eb64ed884c~mv2.png/v1/fill/w_262,h_245,al_c,q_85,enc_avif,quality_auto/19-prob_19_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos lembrar que um <b>setor circular</b> é a parte do círculo limitada por dois raios e um arco. Como o centro da lua coincide com o vértice do triângulo equilátero, a área sobreposta é definida pelo ângulo interno desse triângulo. Sabendo que o triângulo é equilátero, qual é a medida do seu ângulo interno em graus? <input data-resposta=\"60\">°.</p>"
    }
  },
  {
    "id": 20,
    "titulo": "Problema 20",
    "enunciado": "Num certo momento de um jogo digital, a tela apresenta a imagem representada na figura. O ponto Q₁ representa a posição de um jogador que está com a bola, os pontos Q₂, Q₃, Q₄, Q₅ e Q₆ também indicam posições de jogadores da mesma equipe, e os pontos A e B indicam os dois pés da trave mais próxima deles. No momento da partida retratado, o jogador Q₁ tem a posse da bola, que será passada para um dos outros jogadores das posições Qₙ, n ∈ {2, 3, 4, 5, 6}, cujo ângulo ∠AQₙB tenha a mesma medida do ângulo α = ∠AQ₁B. Qual é o jogador que receberá a bola?",
    "alternativas": {
      "A": "Q₂",
      "B": "Q₃",
      "C": "Q₄",
      "D": "Q₅",
      "E": "Q₆"
    },
    "correta": "C",
    "imagem": "https://static.wixstatic.com/media/b05a8a_c5d1d1613f674072bff8d9feb0dc99d3~mv2.png/v1/fill/w_419,h_228,al_c,q_85,enc_avif,quality_auto/20-prob_20_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para que o ângulo ∠AQₙB tenha a mesma medida que α, o ponto Qₙ deve estar localizado sobre o mesmo arco de circunferência que contém Q₁ e tem extremidades em A e B (arco capaz). Observando a imagem, o único jogador que pertence a essa circunferência é o jogador <input data-resposta=\"Q₄\">.</p>"
    }
  },
  {
    "id": 21,
    "titulo": "Problema 21",
    "enunciado": "Um artista plástico esculpe uma escultura a partir de um bloco de madeira de lei, em etapas. Inicialmente, esculpe um cone reto com 36 cm de altura e diâmetro da base medindo 18 cm. Em seguida, remove desse cone um cone menor, cujo diâmetro da base mede 6 cm, obtendo, assim, um tronco de cone, conforme ilustrado na figura. Em seguida, perfura esse tronco de cone, removendo um cilindro reto, de diâmetro 6 cm, cujo eixo de simetria é o mesmo do cone original. Dessa forma, ao final, a escultura tem a forma de um tronco de cone com uma perfuração cilíndrica de base a base. O tipo de madeira utilizada para produzir essa escultura tem massa igual a 0,6 g por centímetro cúbico de volume. Utilize 3 como aproximação para π. Qual é a massa, em grama, dessa escultura?",
    "alternativas": {
      "A": "1 296",
      "B": "1 350",
      "C": "1 728",
      "D": "1 836",
      "E": "2 160"
    },
    "correta": "A",
    "imagem": "https://static.wixstatic.com/media/b05a8a_a7718e514882438e89f514d08e08116f~mv2.png/v1/fill/w_356,h_262,al_c,q_85,enc_avif,quality_auto/21-prob_21_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para encontrar a massa, siga os passos:</p><ol><li>Determine a altura (h) do cone menor por semelhança de triângulos: h/36 = 3/9. A altura é <input data-resposta=\"12\"> cm.</li><li>Calcule a altura do tronco (H): 36 - 12 = <input data-resposta=\"24\"> cm.</li><li>Volume do cone maior (V1): 1/3 * 3 * 9² * 36 = <input data-resposta=\"2916\"> cm³.</li><li>Volume do cone menor removido (V2): 1/3 * 3 * 3² * 12 = <input data-resposta=\"108\"> cm³.</li><li>Volume do cilindro removido (V3): 3 * 3² * 24 = <input data-resposta=\"648\"> cm³.</li><li>Volume final da escultura: V1 - V2 - V3 = <input data-resposta=\"2160\"> cm³.</li><li>Massa final: 2160 * 0,6 = <input data-resposta=\"1296\"> g.</li></ol>"
    }
  },
  {
    "id": 22,
    "titulo": "Problema 22",
    "enunciado": "O preço médio cobrado por um pintor para executar um serviço consiste em uma taxa fixa de R$ 25,00 mais uma quantia proporcional à área pintada. O quadro apresenta os valores cobrados por ele em trabalhos recentes:\n\nÁrea pintada (m²) | Total a pagar (R$)\n5 | 35,00\n10 | 45,00\n20 | 65,00\n40 | 105,00\n80 | 185,00\n\nQual o preço cobrado para realizar um serviço de pintura de uma área de 150 m²?",
    "alternativas": {
      "A": "R$ 300,00",
      "B": "R$ 315,00",
      "C": "R$ 325,00",
      "D": "R$ 350,00",
      "E": "R$ 375,00"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, primeiro identificamos a taxa por metro quadrado. Subtraindo a taxa fixa de R$ 25,00 de qualquer valor da tabela, por exemplo: 35 - 25 = 10. Dividindo pela área: 10 / 5 = <input data-resposta=\"2\"> reais por m².</p><p>Agora, aplicamos a fórmula para 150 m²: Valor = 25 + (150 * 2). O resultado final é R$ <input data-resposta=\"325\">.</p>"
    }
  },
  {
    "id": 23,
    "titulo": "Problema 23",
    "enunciado": "Uma empresa produz painéis solares de energia elétrica, com a forma de retângulo, que geram 5 MWh (megawatts-hora) por metro quadrado. Cada painel tem 3 m de largura e 6 m de comprimento. O selo verde de eficiência é obtido se cada painel solar gerar, no mínimo, 150 MWh de energia solar. Para obter o selo verde, a empresa decide alterar apenas a largura dos seus painéis solares. O número mínimo, em metro, que a empresa deve aumentar na largura dos seus painéis solares é",
    "alternativas": {
      "A": "2",
      "B": "5",
      "C": "10",
      "D": "24",
      "E": "30"
    },
    "correta": "A",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>A área de um painel é A = <input data-resposta=\"18\"> m2. Se a energia gerada é 5 MWh por m2, então um único painel gera E = <input data-resposta=\"90\"> MWh.</p><p>Para atingir o selo verde de 150 MWh, a área necessária deve ser 150 / 5 = <input data-resposta=\"30\"> m2.</p><p>Mantendo o comprimento de 6 m, a nova largura deve ser 30 / 6 = <input data-resposta=\"5\"> m.</p><p>O aumento necessário na largura é 5 - 3 = <input data-resposta=\"2\"> m.</p>"
    }
  },
  {
    "id": 24,
    "titulo": "Problema 24",
    "enunciado": "(ENEM 2021) Um agricultor utilizava toda a área de uma região plana, em formato retangular, com 50 m de largura e 240 m de comprimento, para o plantio de mudas. Seguindo recomendações técnicas, cada muda é plantada no centro de uma pequena região retangular de 10 cm de largura por 20 cm de comprimento. Esse agricultor decidiu ampliar a área destinada ao plantio de mudas, utilizando agora um terreno, também plano, em formato retangular, com 100 m de comprimento por 200 m de largura. As mudas deverão ser plantadas respeitando-se as mesmas recomendações técnicas. Com o aumento da área destinada ao plantio, a quantidade máxima de mudas que poderão ser plantadas a mais é",
    "alternativas": {
      "A": "40 000",
      "B": "100 000",
      "C": "400 000",
      "D": "600 000",
      "E": "1 000 000"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Primeiro, calculamos a área inicial: 50 m × 240 m = <input data-resposta=\"12000\"> m².</p><p>A nova área é: 100 m × 200 m = <input data-resposta=\"20000\"> m².</p><p>A área ocupada por cada muda (em metros) é: 0,10 m × 0,20 m = <input data-resposta=\"0.02\"> m².</p><p>A quantidade de mudas a mais é a diferença das áreas dividida pela área de cada muda: (20000 - 12000) / 0,02 = <input data-resposta=\"400000\">.</p>"
    }
  },
  {
    "id": 25,
    "titulo": "Problema 25",
    "enunciado": "(ENEM 2021) Um ciclista faz um treino para uma prova, em um circuito oval, cujo percurso é de 800 m. Nesse treino, realiza 20 voltas. Ele divide seu treino em 3 etapas. Na primeira etapa, inicializa seu cronômetro e realiza as cinco primeiras voltas com velocidade média de 4 m/s. Na segunda etapa, faz mais cinco voltas, mas com velocidade média 25% maior que a da etapa anterior. Na última etapa, finaliza o treino mantendo a velocidade média da primeira etapa. Ao final do treino, o cronômetro estará marcando, em segundos.",
    "alternativas": {
      "A": "700",
      "B": "800",
      "C": "1 000",
      "D": "3 500",
      "E": "3 800"
    },
    "correta": "E",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para encontrar o tempo total, calculamos o tempo gasto em cada uma das três etapas:</p><ul><li><strong>Etapa 1:</strong> 5 voltas de 800m a 4 m/s. Distância = 4000m. Tempo = 4000 / 4 = <input data-resposta=\"1000\"> s.</li><li><strong>Etapa 2:</strong> 5 voltas de 800m. Velocidade = 4 m/s + 25% = 5 m/s. Tempo = 4000 / 5 = <input data-resposta=\"800\"> s.</li><li><strong>Etapa 3:</strong> Restam 10 voltas (20 total - 5 - 5) a 4 m/s. Distância = 8000m. Tempo = 8000 / 4 = <input data-resposta=\"2000\"> s.</li></ul><p>Somando os tempos: 1000 + 800 + 2000 = <input data-resposta=\"3800\"> s.</p>"
    }
  },
  {
    "id": 26,
    "titulo": "Problema 26",
    "enunciado": "(ENEM 2021) Um brinquedo muito comum em parques de diversões é o balanço. O assento de um balanço fica a uma altura de meio metro do chão, quando não está em uso. Cada uma das correntes que o sustenta tem medida do comprimento, em metro, indicada por x. A estrutura do balanço é feita com barras de ferro, nas dimensões, em metro, conforme a figura. Nessas condições, o valor, em metro, de x é igual a",
    "alternativas": {
      "A": "√2 - 0,5",
      "B": "√2 + 0,5",
      "C": "√8 - 0,5",
      "D": "√8 + 0,5",
      "E": "√10 - 0,5"
    },
    "correta": "C",
    "imagem": "https://static.wixstatic.com/media/b05a8a_90f4dd2b6d4248eeaab712eaaf9c8f71~mv2.png/v1/fill/w_323,h_280,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26-prob_26_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Na figura, temos um triângulo isósceles com lados medindo 3 m e base medindo 2 m. A altura <b>H</b> desse triângulo em relação à base divide-a em dois segmentos de 1 m.</p><p>Aplicando o Teorema de Pitágoras: H² + 1² = 3²</p><p>H² + 1 = 9</p><p>H² = <input data-resposta=\"8\"></p><p>Portanto, H = √8. A altura total da estrutura (H) é a soma do comprimento da corrente (x) com a altura do assento ao chão (0,5 m). Logo: x + 0,5 = √8 &rarr; x = √8 - 0,5.</p>"
    }
  },
  {
    "id": 27,
    "titulo": "Problema 27",
    "enunciado": "(ENEM 2021) Uma pessoa comprou uma caneca para tomar sopa, conforme na figura. Sabe-se que 1 cm³ = 1 mL e que o topo da caneca é uma circunferência de diâmetro (D) medindo 10 cm, e a base é um círculo de diâmetro (d) medindo 8 cm. Além disso, sabe-se que a altura (h) dessa caneca mede 12 cm (distância entre o centro das circunferências do topo e da base). Utilize 3 como aproximação para π. Qual é a capacidade volumétrica, em mililitro, dessa caneca?",
    "alternativas": {
      "A": "216",
      "B": "408",
      "C": "732",
      "D": "1 080",
      "E": "2 196"
    },
    "correta": "C",
    "imagem": "https://static.wixstatic.com/media/b05a8a_d23c155213a4476fb6fd27eb5b2fdf3a~mv2.png/v1/fill/w_302,h_220,al_c,q_85,enc_avif,quality_auto/27-prob_27_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>A caneca tem o formato de um tronco de cone circular reto. A fórmula do volume (V) é: V = (π · h / 3) · (R² + R · r + r²).</p><p>1. Identifique os raios: Se o diâmetro do topo é 10 cm, o raio R = <input data-resposta=\"5\"> cm. Se o diâmetro da base é 8 cm, o raio r = <input data-resposta=\"4\"> cm.</p><p>2. Substitua os valores (h = 12 e π = 3): V = (3 · 12 / 3) · (5² + 5 · 4 + 4²)</p><p>3. Calcule: V = 12 · (25 + 20 + 16) = 12 · 61 = <input data-resposta=\"732\"> mL.</p>"
    }
  },
  {
    "id": 28,
    "titulo": "Problema 28",
    "enunciado": "(ENEM 2021) Um povoado com 100 habitantes está passando por uma situação de seca prolongada e os responsáveis pela administração pública local decidem contratar a construção de um reservatório. Ele deverá ter a forma de um cilindro circular reto, cuja base tenha 5 metros de diâmetro interno, e atender à demanda de água da população por um período de exatamente sete dias consecutivos. No oitavo dia, o reservatório vazio é completamente reabastecido por carros-pipa. Considere que o consumo médio diário por habitante é de 120 litros de água. Use 3 como aproximação para π. Nas condições apresentadas, o reservatório deverá ser construído com uma altura interna mínima, em metro, igual a",
    "alternativas": {
      "A": "1,12",
      "B": "3,13",
      "C": "4,48",
      "D": "12,80",
      "E": "22,40"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, primeiro calculamos o volume total de água necessário para os 7 dias:</p><p>Volume = 100 habitantes &times; 120 litros/dia &times; 7 dias = 84.000 litros.</p><p>Como 1.000 litros = 1 m&sup3;, o volume &eacute; de 84 m&sup3;.</p><p>A f&oacute;rmula do volume do cilindro &eacute; V = &pi; &middot; r&sup2; &middot; h. O di&acirc;metro &eacute; 5m, logo o raio (r) &eacute; 2,5m. Substituindo os valores:</p><p>84 = 3 &middot; (2,5)&sup2; &middot; h</p><p>84 = 3 &middot; 6,25 &middot; h</p><p>84 = 18,75 &middot; h</p><p>h = 84/18,75</p><p>A altura m&iacute;nima &eacute; <input data-resposta=\"4,48\"> metros.</p>"
    }
  },
  {
    "id": 29,
    "titulo": "Problema 29",
    "enunciado": "(ENEM 2021) O dono de uma loja pretende usar cartões imantados para a divulgação de sua loja. A empresa que fornecerá o serviço lhe informa que o custo de fabricação do cartão é de R$ 0,01 por centímetro quadrado e que disponibiliza modelos tendo como faces úteis para impressão: um triângulo equilátero de lado 12 cm; um quadrado de lado 8 cm; um retângulo de lados 11 cm e 8 cm; um hexágono regular de lado 6 cm; um círculo de diâmetro 10 cm. O dono da loja está disposto a pagar, no máximo, R$ 0,80 por cartão. Ele escolherá, dentro desse limite de preço, o modelo que tiver maior área de impressão. Use 3 como aproximação para π e use 1,7 como aproximação para √3. Nessas condições, o modelo que deverá ser escolhido tem como face útil para impressão um",
    "alternativas": {
      "A": "triângulo equilátero.",
      "B": "quadrado.",
      "C": "retângulo.",
      "D": "hexágono regular.",
      "E": "círculo."
    },
    "correta": "E",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para encontrar a solução, calculamos a área de cada modelo e verificamos se o custo (Área × 0,01) ultrapassa R$ 0,80 (ou seja, se a área ultrapassa 80 cm²):</p><ul><li>Triângulo: (12² × 1,7) / 4 = <input data-resposta=\"61.2\"> cm²</li><li>Quadrado: 8² = <input data-resposta=\"64\"> cm²</li><li>Retângulo: 11 × 8 = <input data-resposta=\"88\"> cm² (Custo: R$ 0,88 - Acima do limite)</li><li>Hexágono: 6 × (6² × 1,7) / 4 = <input data-resposta=\"91.8\"> cm² (Custo: R$ 0,918 - Acima do limite)</li><li>Círculo (raio 5): 3 × 5² = <input data-resposta=\"75\"> cm²</li></ul><p>Comparando as áreas dentro do limite de 80 cm², a maior é a do círculo.</p>"
    }
  },
  {
    "id": 30,
    "titulo": "Problema 30",
    "enunciado": "(ENEM 2020) Um piscicultor cria uma espécie de peixe em um tanque cilíndrico. Devido às características dessa espécie, o tanque deve ter, exatamente, 2 metros de profundidade e ser dimensionado de forma a comportar 5 peixes para cada metro cúbico de água. Atualmente, o tanque comporta um total de 750 peixes. O piscicultor deseja aumentar a capacidade do tanque para que ele comporte 900 peixes, mas sem alterar a sua profundidade. Considere 3 como aproximação para π. O aumento da medida do raio do tanque, em metro, deve ser de",
    "alternativas": {
      "A": "√30 - 5",
      "B": "√30 - 25",
      "C": "√15 - 5",
      "D": "0,5",
      "E": "2,0"
    },
    "correta": "A",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver o problema, seguimos os passos:</p><ul><li>Volume atual: 750 peixes / 5 peixes por m³ = <input data-resposta=\"150\"> m³.</li><li>Raio atual (r): Usando V = π &middot; r² &middot; h &rarr; 150 = 3 &middot; r² &middot; 2 &rarr; 150 = 6r² &rarr; r² = 25 &rarr; r = <input data-resposta=\"5\"> m.</li><li>Novo volume: 900 peixes / 5 peixes por m³ = <input data-resposta=\"180\"> m³.</li><li>Novo raio (R): 180 = 3 &middot; R² &middot; 2 &rarr; 180 = 6R² &rarr; R² = 30 &rarr; R = <input data-resposta=\"√30\"> m.</li><li>O aumento do raio é a diferença entre o novo raio e o raio atual: <input data-resposta=\"√30 - 5\"> m.</li></ul>"
    }
  },
  {
    "id": 31,
    "titulo": "Problema 31",
    "enunciado": "(ENEM 2020) Considere o guindaste mostrado nas figuras, em duas posições (1 e 2). Na posição 1, o braço de movimentação forma um ângulo reto com o cabo de aço CB que sustenta uma esfera metálica na sua extremidade inferior. Na posição 2, o guindaste elevou seu braço de movimentação e o novo ângulo formado entre o braço e o cabo de aço ED, que sustenta a bola metálica, é agora igual a 60°. Assuma que os pontos A, B e C, na posição 1, formam o triângulo T₁ e que os pontos A, D e E, na posição 2, formam o triângulo T₂, os quais podem ser classificados em obtusângulo, retângulo ou acutângulo, e também em equilátero, isósceles ou escaleno. Segundo as classificações citadas, os triângulos T₁ e T₂ são identificados, respectivamente, como",
    "alternativas": {
      "A": "retângulo escaleno e acutângulo isósceles.",
      "B": "retângulo escaleno e acutângulo equilátero.",
      "C": "retângulo isósceles e acutângulo escaleno.",
      "D": "acutângulo isósceles e retângulo escaleno.",
      "E": "acutângulo escaleno e retângulo isósceles."
    },
    "correta": "B",
    "imagem": "https://static.wixstatic.com/media/b05a8a_08e351e9caeb457e8853325e4151913d~mv2.png/v1/fill/w_600,h_281,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/31-prob_31_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<div><p>No triângulo T₁, o enunciado afirma que o braço forma um ângulo reto (90°) com o cabo, logo ele é <b>retângulo</b>. Como os catetos possuem medidas diferentes (12 e 5), ele é <b>escaleno</b>.</p><p>No triângulo T₂, os lados AE e ED medem <input data-resposta=\"12\"> unidades. Como o ângulo entre eles é de <input data-resposta=\"60\">°, e a soma dos ângulos internos de um triângulo é 180°, os outros dois ângulos também devem medir 60°. Portanto, T₂ é <b>acutângulo equilátero</b>.</p></div>"
    }
  },
  {
    "id": 32,
    "titulo": "Problema 32",
    "enunciado": "(ENEM 2020) Uma associação desportiva contratou uma empresa especializada para construir um campo de futebol, em formato retangular, com 250 metros de perímetro. Foi elaborada uma planta para esse campo na escala 1 : 2 000. Na planta, a medida do perímetro do campo de futebol, em metro, é",
    "alternativas": {
      "A": "0,000125",
      "B": "0,0125",
      "C": "0,125",
      "D": "125",
      "E": "250 000"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "A escala 1 : 2 000 indica que a medida na planta (mP) é a medida real (mR) dividida por 2 000. <br> x = 250 / 2000 <br> x = <input data-resposta=\"0,125\"> metros."
    }
  },
  {
    "id": 33,
    "titulo": "Problema 33",
    "enunciado": "(ENEM 2020) Um fazendeiro possui uma cisterna com capacidade de 10 000 litros para coletar a água da chuva. Ele resolveu ampliar a área de captação da água da chuva e consultou um engenheiro que lhe deu a seguinte explicação: “Nesta região, o índice pluviométrico anual médio é de 400 milímetros. Como a área de captação da água da chuva de sua casa é um retângulo de 3 m de largura por 7 m de comprimento, sugiro que aumente essa área para que, em um ano, com esse índice pluviométrico, o senhor consiga encher a cisterna, estando ela inicialmente vazia”. Sabe-se que o índice pluviométrico de um milímetro corresponde a um litro de água por metro quadrado. Considere que as previsões pluviométricas são cumpridas e que não há perda, por nenhum meio, no armazenamento da água. Em quantos metros quadrados, no mínimo, o fazendeiro deve aumentar a área de captação para encher a cisterna em um ano?",
    "alternativas": {
      "A": "1,6",
      "B": "2,0",
      "C": "4,0",
      "D": "15,0",
      "E": "25,0"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>O índice pluviométrico de 400 mm significa que a captação anual de água é de 400 L/m², ou seja, 1 m² capta 400 litros no ano.</p><p>Para encher a cisterna de 10 000 litros, a área total necessária é 10 000 / 400 = <input data-resposta=\"25\"> m².</p><p>A área de captação atual é 3 m × 7 m = <input data-resposta=\"21\"> m².</p><p>Portanto, o aumento necessário na área é 25 - 21 = <input data-resposta=\"4\"> m².</p>"
    }
  },
  {
    "id": 34,
    "titulo": "Problema 34",
    "enunciado": "(ENEM 2020) O proprietário de um apartamento decidiu instalar porcelanato no piso da sala. Essa sala tem formato retangular com 3,2 m de largura e 3,6 m de comprimento. As peças do porcelanato têm formato de um quadrado com lado medindo 80 cm. Esse porcelanato é vendido em dois tipos de caixas, com os preços indicados a seguir.\n\n• Caixas do tipo A: 4 unidades de piso, R$ 35,00;\n• Caixas do tipo B: 3 unidades de piso, R$ 27,00.\n\nNa instalação do porcelanato, as peças podem ser recortadas e devem ser assentadas sem espaçamento entre elas, aproveitando-se ao máximo os recortes feitos. A compra que atende às necessidades do proprietário, proporciona a menor sobra de pisos e resulta no menor preço é",
    "alternativas": {
      "A": "5 caixas do tipo A.",
      "B": "3 caixas do tipo A e 2 caixas do tipo B.",
      "C": "6 caixas do tipo B.",
      "D": "1 caixa do tipo A e 4 caixas do tipo B.",
      "E": "5 caixas do tipo A e 1 caixa do tipo B."
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Primeiro, calculamos a área da sala: 3,2 m × 3,6 m = <input data-resposta=\"11,52\"> m².</p><p>Em seguida, calculamos a área de uma peça de porcelanato (80 cm = 0,8 m): 0,8 m × 0,8 m = <input data-resposta=\"0,64\"> m².</p><p>O número total de peças necessárias é 11,52 / 0,64 = <input data-resposta=\"18\"> peças.</p><p>Avaliando a opção B: 3 caixas A (12 peças) + 2 caixas B (6 peças) = <input data-resposta=\"18\"> peças. O custo será (3 × 35) + (2 × 27) = R$ <input data-resposta=\"159\">.</p>"
    }
  },
  {
    "id": 35,
    "titulo": "Problema 35",
    "enunciado": "(ENEM 2020) Um piscicultor cria uma espécie de peixe em um tanque cilíndrico. Devido às características dessa espécie, o tanque deve ter, exatamente, 2 metros de profundidade e ser dimensionado de forma a comportar 5 peixes para cada metro cúbico de água. Atualmente, o tanque comporta um total de 750 peixes. O piscicultor deseja aumentar a capacidade do tanque para que ele comporte 900 peixes, mas sem alterar a sua profundidade. Considere 3 como aproximação para π. O aumento da medida do raio do tanque, em metro, deve ser de",
    "alternativas": {
      "A": "√30 - 5",
      "B": "√30 - 25",
      "C": "√15 - 5",
      "D": "0,5",
      "E": "0,1"
    },
    "correta": "A",
    "imagem": "https://static.wixstatic.com/media/b05a8a_603f3b42851b41659cb84e7c3a75a6d8~mv2.png/v1/fill/w_214,h_294,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/35-prob_35_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, siga os passos:</p><ol><li>Calcule o volume atual (V1) baseado na densidade: 750 peixes / 5 peixes/m³ = <input data-resposta=\"150\"> m³.</li><li>Encontre o raio atual (r) usando a fórmula do volume do cilindro (V = π · r² · h): 150 = 3 · r² · 2 &rarr; 150 = 6r² &rarr; r² = 25 &rarr; r = <input data-resposta=\"5\"> m.</li><li>Calcule o novo volume necessário (V2): 900 peixes / 5 peixes/m³ = <input data-resposta=\"180\"> m³.</li><li>Encontre o novo raio (R): 180 = 3 · R² · 2 &rarr; 180 = 6R² &rarr; R² = 30 &rarr; R = √30 m.</li><li>O aumento do raio é a diferença entre o novo raio e o raio antigo: <input data-resposta=\"√30 - 5\">.</li></ol>"
    }
  },
  {
    "id": 36,
    "titulo": "Problema 36",
    "enunciado": "(ENEM 2020) A lei municipal para a edificação de casas em lotes de uma cidade determina que sejam obedecidos os seguintes critérios:\n\n• afastamento mínimo de 4 m da rua;\n\n• afastamento mínimo de 1 m da divisa com outro lote;\n\n• área total construída da casa entre 40% e 50% da área total do lote.\n\nUm construtor submeteu para aprovação na prefeitura dessa cidade uma planta com propostas para a construção de casas em seus 5 lotes. Cada lote tem área medindo 200 m². A imagem apresenta um esquema, sem escala, no qual estão representados os lotes, as ruas e os afastamentos considerados nos projetos entre as casas e as divisas dos lotes. As medidas indicadas no esquema estão expressas em metro.",
    "alternativas": {
      "A": "Lote I",
      "B": "Lote II",
      "C": "Lote III",
      "D": "Lote IV",
      "E": "Lote V"
    },
    "correta": "E",
    "imagem": "https://static.wixstatic.com/media/b05a8a_0d0c51f877c7462da4314744a1189f70~mv2.png/v1/fill/w_423,h_419,al_c,lg_1,q_85,enc_avif,quality_auto/36-prob_36_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "Para que o projeto seja aprovado, a área construída deve estar entre 40% e 50% da área total do lote (200 m²).<br>Área mínima: 200 * 0,40 = <input data-resposta=\"80\"> m².<br>Área máxima: 200 * 0,50 = <input data-resposta=\"100\"> m².<br><br>Analisando o Lote V com as relações fornecidas (a + x + c = 10 e b + y + d = 20):<br>No Lote V, os afastamentos são a = 3, c = 1, b = 4 e d = 1.<br>Largura (x): 10 - 3 - 1 = <input data-resposta=\"6\"> m.<br>Comprimento (y): 20 - 4 - 1 = <input data-resposta=\"15\"> m.<br>Área construída: 6 * 15 = <input data-resposta=\"90\"> m².<br><br>Como 90 m² está entre 80 m² e 100 m², o Lote V atende a todos os critérios."
    }
  },
  {
    "id": 37,
    "titulo": "Problema 37",
    "enunciado": "(ENEM 2022) Um processo de aeração, que consiste na introdução de ar num líquido, acontece do seguinte modo: uma bomba B retira o líquido de um tanque T1 e o faz passar pelo aerador A1, que aumenta o volume do líquido em 15%, e em seguida pelo aerador A2, ganhando novo aumento de volume de 10%. Ao final, ele fica armazenado num tanque T2, de acordo com a figura. Os tanques T1 e T2 são prismas retos de bases retangulares, sendo que a base de T1 tem comprimento c e largura L, e a base de T2 tem comprimento c/2 e largura 2L. Para finalizar o processo de aeração sem derramamento do líquido em T2, o responsável deve saber a relação entre a altura da coluna de líquido que já saiu de T1, denotada por x, e a altura da coluna de líquido que chegou a T2, denotada por y. A equação que relaciona as medidas das alturas y e x é dada por",
    "alternativas": {
      "A": "y = 1,265x",
      "B": "y = 1,250x",
      "C": "y = 1,125x",
      "D": "y = 1,120x",
      "E": "y = 1,000x"
    },
    "correta": "A",
    "imagem": "https://static.wixstatic.com/media/b05a8a_6b7880226d084a378e7d66247a171e84~mv2.png/v1/fill/w_600,h_245,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/37-prob_37_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>O volume de líquido que sai de T1 é dado por V1 = c &middot; L &middot; x. Após passar pelos aeradores, o volume sofre dois aumentos sucessivos: V_final = V1 &middot; 1,15 &middot; 1,10 = V1 &middot; 1,265.</p><p>O volume no tanque T2 é V2 = (c/2) &middot; (2L) &middot; y = c &middot; L &middot; y.</p><p>Para que não haja derramamento, igualamos os volumes: c &middot; L &middot; y = c &middot; L &middot; x &middot; 1,265. Simplificando os termos comuns, obtemos a relação: y = <input data-resposta=\"1,265\">x.</p>"
    }
  },
  {
    "id": 38,
    "titulo": "Problema 38",
    "enunciado": "(ENEM 2020) Uma das Sete Maravilhas do Mundo Moderno é o Templo de Kukulkán, localizado na cidade de Chichén Itzá, no México. Geometricamente, esse templo pode ser representado por um tronco reto de pirâmide de base quadrada. As quantidades de cada tipo de figura plana que formam esse tronco de pirâmide são",
    "alternativas": {
      "A": "2 quadrados e 4 retângulos.",
      "B": "1 retângulo e 4 triângulos isósceles.",
      "C": "2 quadrados e 4 trapézios isósceles.",
      "D": "1 quadrado, 3 retângulos e 2 trapézios retângulos.",
      "E": "2 retângulos, 2 quadrados e 2 trapézios retângulos."
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "Observando a figura, temos <input data-resposta=\"2\"> quadrados nas bases e <input data-resposta=\"4\"> trapézios nas laterais."
    }
  },
  {
    "id": 39,
    "titulo": "Problema 39",
    "enunciado": "(ENEM 2019) Em um trabalho escolar, um aluno fez uma planta do seu bairro, utilizando a escala 1 : 500, sendo que as quadras possuem as mesmas medidas, conforme a figura. O professor constatou que o aluno esqueceu de colocar a medida do comprimento da ponte na planta, mas foi informado por ele que ela media 73 m. O valor a ser colocado na planta, em centímetro, referente ao comprimento da ponte deve ser",
    "alternativas": {
      "A": "1,46",
      "B": "14,6",
      "C": "146",
      "D": "1 460",
      "E": "14 600"
    },
    "correta": "B",
    "imagem": "https://static.wixstatic.com/media/b05a8a_136d3409dffc45aba678c3d91abdca8a~mv2.png/v1/fill/w_439,h_166,al_c,lg_1,q_85,enc_avif,quality_auto/39-prob_39_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Considerando mp a medida da planta e mr a medida real, a escala é o valor da razão mp/mr.</p><p>1. Converta a medida real para centímetros: 73 m = 7300 cm.</p><p>2. Aplique a escala: 1/500 = mp / 7300.</p><p>3. mp = 7300 / 500 = <input data-resposta=\"14,6\"> cm.</p>"
    }
  },
  {
    "id": 40,
    "titulo": "Problema 40",
    "enunciado": "(ENEM 2019) No trapézio isósceles mostrado na figura a seguir, M é o ponto médio do segmento BC, e os pontos P e Q são obtidos dividindo o segmento AD em três partes iguais. Pelos pontos B, M, C, P e Q são traçados segmentos de reta, determinando cinco triângulos internos ao trapézio, conforme a figura. A razão entre BC e AD que determina áreas iguais para os cinco triângulos mostrados na figura é:",
    "alternativas": {
      "A": "1/3",
      "B": "2/5",
      "C": "5/8",
      "D": "2/3",
      "E": "3/4"
    },
    "correta": "D",
    "imagem": "https://static.wixstatic.com/media/b05a8a_8af188c6ceff4f4eaf973fa1b6e41c82~mv2.png/v1/fill/w_325,h_158,al_c,lg_1,q_85,enc_avif,quality_auto/40-probl_40_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "Seja h a altura do trapézio. A base do triângulo ABP é AD/3, logo sua área é (1/2) * (AD/3) * h = (AD * h) / 6. Para que os cinco triângulos tenham áreas iguais, a área total do trapézio deve ser 5 vezes a área de um triângulo: Área Total = 5 * (AD * h / 6). Usando a fórmula da área do trapézio: ((AD + BC) * h) / 2 = 5 * AD * h / 6. Simplificando a equação, temos: (AD + BC) / 2 = 5 * AD / 6 => 3 * (AD + BC) = 5 * AD => 3 * AD + 3 * BC = 5 * AD => 3 * BC = 2 * AD. Portanto, a razão BC/AD é <input data-resposta=\"2/3\">."
    }
  },
  {
    "id": 41,
    "titulo": "Problema 41",
    "enunciado": "(ENEM 2019) Muitos restaurantes servem refrigerantes em copos contendo limão e gelo. Suponha um copo de formato cilíndrico, com as seguintes medidas: diâmetro = 6 cm e altura = 15 cm. Nesse copo, há três cubos de gelo, cujas arestas medem 2 cm cada, e duas rodelas cilíndricas de limão, com 4 cm de diâmetro e 0,5 cm de espessura cada. Considere que, ao colocar o refrigerante no copo, os cubos de gelo e os limões ficarão totalmente imersos. (Use 3 como aproximação para π). O volume máximo de refrigerante, em centímetro cúbico, que cabe nesse copo contendo as rodelas de limão e os cubos de gelo com suas dimensões inalteradas, é igual a",
    "alternativas": {
      "A": "375",
      "B": "369",
      "C": "333",
      "D": "438",
      "E": "393"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>O volume de um cilindro é dado por V = πR²h e o de um cubo por V = a³.</p><p>(1) Volume do copo (R=3, h=15): Vc = 3 * 3² * 15 = <input data-resposta=\"405\"> cm³.</p><p>(2) Volume das 2 rodelas de limão (R=2, h=0,5): Vl = 2 * (3 * 2² * 0,5) = <input data-resposta=\"12\"> cm³.</p><p>(3) Volume dos 3 cubos de gelo (a=2): Vg = 3 * (2³) = <input data-resposta=\"24\"> cm³.</p><p>Volume de refrigerante = Vc - Vl - Vg = 405 - 12 - 24 = <input data-resposta=\"369\"> cm³.</p>"
    }
  },
  {
    "id": 42,
    "titulo": "Problema 42",
    "enunciado": "(ENEM 2022) Um pintor cobra R$ 240,00 por dia de trabalho, que equivale a 8 horas de trabalho num dia. Quando é chamado para um serviço, esse pintor trabalha 8 horas por dia com exceção, talvez, do seu último dia nesse serviço. Nesse último dia, caso trabalhe até 4 horas, ele cobra metade do valor de um dia de trabalho. Caso trabalhe mais de 4 horas, cobra o valor correspondente a um dia de trabalho. Esse pintor gasta 8 horas para pintar uma vez uma área de 40 m². Um cliente deseja pintar as paredes de sua casa, com uma área total de 260 m². Ele quer que essa área seja pintada o maior número possível de vezes para que a qualidade da pintura seja a melhor possível. O orçamento desse cliente para a pintura é de R$ 4.600,00. Quantas vezes, no máximo, as paredes da casa poderão ser pintadas com o orçamento do cliente?",
    "alternativas": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "5",
      "E": "6"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, primeiro calculamos o tempo necessário para cada demão (pintar a área uma vez):</p><p>Tempo por demão = (260/40) * 8 = 52 horas.</p><p>Agora, analisamos o custo por número de demãos:</p><ul><li><strong>1 demão (52h):</strong> 52 / 8 = 6 dias e 4 horas. Custo: (6 * 240) + 120 = R$ 1.560,00.</li><li><strong>2 demãos (104h):</strong> 104 / 8 = 13 dias exatos. Custo: 13 * 240 = R$ 3.120,00.</li><li><strong>3 demãos (156h):</strong> 156 / 8 = 19 dias e 4 horas. Custo: (19 * 240) + 120 = R$ 4.680,00.</li></ul><p>Como o orçamento máximo é de R$ 4.600,00, o pintor só poderá realizar o serviço 2 vezes.</p><p>Resposta: <input data-resposta=\"2\"></p>"
    }
  },
  {
    "id": 43,
    "titulo": "Problema 43",
    "enunciado": "(ENEM 2019) Construir figuras de diversos tipos, apenas dobrando e cortando papel, sem cola e sem tesoura, é a arte do origami (ori = dobrar; kami = papel), que tem um significado altamente simbólico no Japão. A base do origami é o conhecimento do mundo por base do tato. Uma jovem resolveu construir um cisne usando a técnica do origami, utilizando uma folha de papel de 18 cm por 12 cm. Assim, começou por dobrar a folha conforme a figura. Após essa primeira dobradura, a medida do segmento AE, em centímetro, é:",
    "alternativas": {
      "A": "6√3",
      "B": "12",
      "C": "12√2",
      "D": "6√5",
      "E": "12√3"
    },
    "correta": "C",
    "imagem": "https://static.wixstatic.com/media/b05a8a_b5518654ad4b4fdb92f61d8c73f21799~mv2.png/v1/fill/w_297,h_177,al_c,lg_1,q_85,enc_avif,quality_auto/43-prob_43_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "Observando a figura, temos que o segmento AD = <input data-resposta=\"12\"> cm e o segmento DE = <input data-resposta=\"12\"> cm. Aplicando o Teorema de Pitágoras no triângulo ADE, obtemos AE² = 12² + 12², resultando em AE = <input data-resposta=\"12√2\"> cm."
    }
  },
  {
    "id": 44,
    "titulo": "Problema 44",
    "enunciado": "(ENEM 2019) Uma administração municipal encomendou a pintura de dez placas de sinalização para colocar em seu pátio de estacionamento. O profissional contratado para o serviço inicial pintará o fundo de dez placas e cobrará um valor de acordo com a área total dessas placas. O formato de cada placa é um círculo de diâmetro d = 40 cm, que tangencia lados de um retângulo, sendo que o comprimento total da placa é h = 60 cm, conforme ilustrado na figura. Use 3,14 como aproximação para π. Qual é a soma das medidas das áreas, em centímetros quadrados, das dez placas?",
    "alternativas": {
      "A": "16 000",
      "B": "22 280",
      "C": "28 560",
      "D": "41 120",
      "E": "66 240"
    },
    "correta": "B",
    "imagem": "https://static.wixstatic.com/media/b05a8a_15736e1a28cc41fe97cd0f1f316219de~mv2.png/v1/fill/w_249,h_254,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/44-prob_44_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, devemos calcular a área de uma placa e multiplicar por 10.</p><p>1. O raio do semicírculo é r = d/2 = 40/2 = <input data-resposta=\"20\"> cm.</p><p>2. A placa é composta por um retângulo e um semicírculo. A altura do retângulo é h - r = 60 - 20 = <input data-resposta=\"40\"> cm.</p><p>3. Área do retângulo (base x altura): 40 * 40 = <input data-resposta=\"1600\"> cm².</p><p>4. Área do semicírculo (π * r² / 2): (3,14 * 20²) / 2 = <input data-resposta=\"628\"> cm².</p><p>5. Área de uma placa: 1600 + 628 = <input data-resposta=\"2228\"> cm².</p><p>6. Área total das dez placas: 10 * 2228 = <input data-resposta=\"22280\"> cm².</p>"
    }
  },
  {
    "id": 45,
    "titulo": "Problema 45",
    "enunciado": "(ENEM 2018) Uma pessoa possui um terreno em forma de um pentágono, como ilustrado na figura. Sabe-se que a diagonal AD mede 50 m e é paralela ao lado BC, que mede 29 m. A distância do ponto B a AD é de 8 m e a distância do ponto E a AD é de 20 m. A área, em metro quadrado, deste terreno é igual a",
    "alternativas": {
      "A": "435",
      "B": "535",
      "C": "816",
      "D": "915",
      "E": "1 135"
    },
    "correta": "C",
    "imagem": "https://static.wixstatic.com/media/b05a8a_d6c49a29ddf84594bb52bb283051e36a~mv2.png/v1/fill/w_395,h_251,al_c,q_85,enc_avif,quality_auto/45-prob_45_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para calcular a área total do pentágono, devemos somar a área do trapézio ABCD e a área do triângulo AED.</p><p>1. <b>Área do trapézio ABCD:</b> A fórmula é ((Base Maior + Base Menor) * altura) / 2.<br>Cálculo: ((50 + 29) * 8) / 2 = 79 * 4 = <input data-resposta=\"316\"> m².</p><p>2. <b>Área do triângulo AED:</b> A fórmula é (base * altura) / 2.<br>Cálculo: (50 * 20) / 2 = 1000 / 2 = <input data-resposta=\"500\"> m².</p><p>3. <b>Área Total:</b> Somando as duas áreas encontradas: 316 + 500 = <input data-resposta=\"816\"> m².</p>"
    }
  },
  {
    "id": 46,
    "titulo": "Problema 46",
    "enunciado": "(ENEM 2018) Um brinquedo chamado pula-pula, quando visto de cima, consiste de uma cama elástica com contorno em formato de um hexágono regular. Se a área do círculo inscrito no hexágono é 3π metros quadrados, então a área do hexágono, em metro quadrado, é",
    "alternativas": {
      "A": "2√3",
      "B": "4√3",
      "C": "6√3",
      "D": "9√3",
      "E": "12√3"
    },
    "correta": "C",
    "imagem": "https://static.wixstatic.com/media/b05a8a_47518275de154e8dba579c2e24ae6584~mv2.png/v1/fill/w_237,h_255,al_c,lg_1,q_85,enc_avif,quality_auto/46-prob_46_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, siga os passos:</p><ol><li>A área do círculo inscrito é &pi;r&sup2; = 3&pi;, logo r&sup2; = 3 e o raio r = &radic;3.</li><li>Em um hexágono regular, o raio do círculo inscrito é igual ao apótema (a). Portanto, a = &radic;3.</li><li>A fórmula do apótema em função do lado (L) é a = (L&radic;3)/2. Substituindo: &radic;3 = (L&radic;3)/2, o que resulta em L = 2.</li><li>A área do hexágono regular é dada por A = (3L&sup2;&radic;3)/2. Substituindo L = 2: A = (3 &middot; 4 &middot; &radic;3)/2 = 6&radic;3.</li></ol><p>Insira o valor da área: <input data-resposta=\"6√3\"></p>"
    }
  },
  {
    "id": 47,
    "titulo": "Problema 47",
    "enunciado": "(ENEM 2018) Uma fábrica comercializa chocolates em uma caixa de madeira, como na figura. A caixa de madeira tem a forma de um paralelepípedo reto-retângulo cujas dimensões externas, em centímetro, estão indicadas na figura. Sabe-se também que a espessura da madeira, em todas as suas faces, é de 0,5 cm. Qual é o volume de madeira utilizado, em centímetro cúbico, na construção de uma caixa de madeira como a descrita para embalar os chocolates?",
    "alternativas": {
      "A": "654",
      "B": "532",
      "C": "268",
      "D": "100",
      "E": "80"
    },
    "correta": "C",
    "imagem": "https://static.wixstatic.com/media/b05a8a_db297b8df04349ac9d09668a497ea3b2~mv2.png/v1/fill/w_353,h_260,al_c,q_85,enc_avif,quality_auto/47-probl_47_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para encontrar o volume de madeira, calculamos a diferença entre o volume externo e o volume interno da caixa.</p><p>1. <b>Volume Externo:</b> As dimensões são 20 cm, 8 cm e 5 cm.<br>V_ext = 20 * 8 * 5 = <input data-resposta=\"800\"> cm³.</p><p>2. <b>Dimensões Internas:</b> Subtraímos a espessura (0,5 cm) de cada lado (totalizando 1 cm a menos em cada dimensão).<br>Comprimento: 20 - 1 = 19 cm<br>Largura: 8 - 1 = 7 cm<br>Altura: 5 - 1 = 4 cm</p><p>3. <b>Volume Interno:</b><br>V_int = 19 * 7 * 4 = <input data-resposta=\"532\"> cm³.</p><p>4. <b>Volume de Madeira:</b><br>V_madeira = 800 - 532 = <input data-resposta=\"268\"> cm³.</p>"
    }
  },
  {
    "id": 48,
    "titulo": "Problema 48",
    "enunciado": "(ENEM 2018) Um quebra-cabeça consiste em recobrir um quadrado com triângulos retângulos isósceles, como ilustra a figura. Uma artesã confecciona um quebra-cabeça como o descrito, de tal modo que a menor das peças é um triângulo retângulo isósceles cujos catetos medem 2 cm. O quebra-cabeça, quando montado, resultará em um quadrado cuja medida do lado, em centímetro, é",
    "alternativas": {
      "A": "14",
      "B": "12",
      "C": "7√2",
      "D": "6 + 4√2",
      "E": "12 + 2√2"
    },
    "correta": "A",
    "imagem": "https://static.wixstatic.com/media/b05a8a_4ff2ade6f1f149a98c10763e4bd68f9a~mv2.png/v1/fill/w_208,h_206,al_c,lg_1,q_85,enc_avif,quality_auto/48-prob_48_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>A partir da análise da figura e das propriedades dos triângulos retângulos isósceles, identificamos que as medidas dos lados seguem uma progressão geométrica baseada na hipotenusa de cada triângulo anterior.</p><p>Sendo a menor peça com catetos a1 = 2 cm, temos:</p><ul><li>a1 = 2</li><li>a2 = 2√2</li><li>a3 = 4</li><li>a4 = 4√2</li><li>a5 = 8</li></ul><p>Conforme a solução indicada, o lado do quadrado é dado pela soma: ℓ = a1 + a3 + a5.</p><p>ℓ = 2 + 4 + 8 = <input data-resposta=\"14\"> cm.</p>"
    }
  },
  {
    "id": 49,
    "titulo": "Problema 49",
    "enunciado": "(ENEM 2018) Um produtor de milho utiliza uma área de 160 hectares para as suas atividades agrícolas. Essa área é dividida em duas partes: uma de 40 hectares, com maior produtividade, e outra, de 120 hectares, com menor produtividade. A produtividade é dada pela razão entre a produção, em tonelada, e a área cultivada. Sabe-se que a área de 40 hectares tem produtividade igual a 2,5 vezes à da outra. Esse fazendeiro pretende aumentar sua produção total em 15%, aumentando o tamanho da sua propriedade. Para tanto, pretende comprar uma parte de uma fazenda vizinha, que possui a mesma produtividade da parte de 120 hectares de suas terras. Qual é a área mínima, em hectare, que o produtor precisará comprar?",
    "alternativas": {
      "A": "24",
      "B": "33",
      "C": "36",
      "D": "150",
      "E": "172"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Seja <i>p</i> a produtividade da área de 120 ha. A produtividade da área de 40 ha é 2,5<i>p</i>.</p><p>Produção total inicial: (40 * 2,5<i>p</i>) + (120 * <i>p</i>) = 100<i>p</i> + 120<i>p</i> = 220<i>p</i>.</p><p>O aumento desejado é de 15% sobre a produção total: 0,15 * 220<i>p</i> = 33<i>p</i>.</p><p>Como a nova área possui produtividade <i>p</i>, a área <i>x</i> necessária para produzir 33<i>p</i> é:</p><p><i>p</i> * <i>x</i> = 33<i>p</i></p><p><i>x</i> = <input data-resposta=\"33\"> hectares.</p>"
    }
  },
  {
    "id": 50,
    "titulo": "Problema 50",
    "enunciado": "(ENEM 2018) O remo de assento deslizante é um esporte que faz uso de um barco e dois remos do mesmo tamanho. A figura mostra uma das posições de uma técnica chamada afastamento. Nessa posição, os dois remos se encontram no ponto A e suas outras extremidades estão indicadas pelos pontos B e C. Esses três pontos formam um triângulo ABC cujo ângulo BÂC tem medida de 170°. O tipo de triângulo com vértices nos pontos A, B e C, no momento em que o remador está nessa posição, é",
    "alternativas": {
      "A": "retângulo escaleno",
      "B": "acutângulo escaleno",
      "C": "acutângulo isósceles",
      "D": "obtusângulo escaleno",
      "E": "obtusângulo isósceles"
    },
    "correta": "E",
    "imagem": "https://static.wixstatic.com/media/b05a8a_62f6ca4caf4348758bee5036766c076f~mv2.png/v1/fill/w_373,h_230,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/50-prob_50_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para classificar o triângulo, observe que os remos têm o mesmo tamanho, logo os lados AB e AC são iguais, tornando o triângulo <b>isósceles</b>. Como o ângulo BÂC mede <input data-resposta=\"170\">°, que é maior que 90°, ele é classificado como <b>obtusângulo</b>.</p>"
    }
  }
];