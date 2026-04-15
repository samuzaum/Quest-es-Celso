
const questoes = [
  {
    "id": 1,
    "titulo": "Problema 1",
    "enunciado": "No entorno de uma lagoa circular, cujo raio mede 1 km, há um uma ciclovia. Devido aos frequentes roubos de bicicleta, a prefeitura planeja alocar policiais em posições estratégicas para patrulhar essa ciclovia, de forma a torná-la totalmente protegida. Um ponto da ciclovia é considerado protegido se houver pelo menos um policial a, no máximo, 200 m de distância daquele ponto, posicionado sobre a ciclovia. A figura ilustra um ponto P sobre a ciclovia, que estará protegido se houver pelo menos um policial posicionado sobre a região de cor cinza escuro. Desconsidere a largura da pista da ciclovia e utilize 3 como aproximação para π. Nessas condições, a quantidade mínima necessária de policiais a serem alocados ao longo dessa ciclovia para torná-la protegida é",
    "alternativas": {
      "A": "5",
      "B": "10",
      "C": "15",
      "D": "20",
      "E": "30"
    },
    "correta": "C",
    "imagem": "https://static.wixstatic.com/media/b05a8a_b00c2463c2564e3b9e5c4ffd1705441a~mv2.png/v1/fill/w_299,h_260,al_c,lg_1,q_85,enc_avif,quality_auto/01%20-%20Prob_136_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, siga os passos:</p><ol><li>Converta o raio para metros: 1 km = 1000 m.</li><li>Calcule o comprimento total da ciclovia (C = 2 * π * R): 2 * 3 * 1000 = <input data-resposta=\"6000\"> metros.</li><li>Determine a área de cobertura de cada policial: se ele protege 200m para cada lado, sua cobertura total é de <input data-resposta=\"400\"> metros.</li><li>Divida o comprimento total pela cobertura individual: 6000 / 400 = <input data-resposta=\"15\">.</li></ol>"
    }
  },
  {
    "id": 2,
    "titulo": "Problema 2",
    "enunciado": "Em um laboratório, um recipiente contém 10 litros de uma solução composta apenas pelas substâncias S1 e S2. Dessa solução, 99,95% é de S1. Uma quantidade de S1 será retirada dessa solução, mantendo a quantidade inicial de S2, de modo que 99,90% da nova solução seja de S1. Qual é a quantidade de S1, em litro, que será retirada?",
    "alternativas": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4",
      "E": "5"
    },
    "correta": "E",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Acompanhando o enunciado, temos os seguintes dados: (i) S1 corresponde a 99,95% de 10 litros, portanto, S2 corresponde a 0,05% de 10 litros.</p><ul><li>1. Calcule o volume de S2: 0,05% de 10 = <input data-resposta=\"0,005\"> litros.</li><li>2. Na nova solução, S1 será 99,90%, logo S2 será 0,10%.</li><li>3. Se 0,10% da nova solução é 0,005 litros, o volume total da nova solução é <input data-resposta=\"5\"> litros.</li><li>4. A quantidade de S1 retirada é a diferença entre o volume inicial e o final: 10 - 5 = <input data-resposta=\"5\"> litros.</li></ul>"
    }
  },
  {
    "id": 3,
    "titulo": "Problema 3",
    "enunciado": "Uma distribuidora de combustível possui caminhões-tanque com capacidade de 30.000 litros cada. Em qualquer transporte realizado por esses caminhões, um mesmo volume de combustível é descartado, pois fica com muitas impurezas. Esse volume descartado independe da quantidade transportada. Um posto de combustível encomendou 10.000 litros de gasolina dessa distribuidora, que enviou 10.200 litros, considerando o volume descartado no transporte. Mesmo assim, a quantidade de gasolina entregue ao posto foi de 9.900 litros. Em um novo pedido, esse posto solicitou que fosse entregue exatamente o dobro do volume de gasolina encomendado no pedido anterior. Utilizando o mesmo caminhão da entrega anterior, qual é o volume mínimo de gasolina, em litro, que a distribuidora deverá enviar para garantir a entrega da quantidade encomendada nesse novo pedido?",
    "alternativas": {
      "A": "20.000",
      "B": "20.100",
      "C": "20.300",
      "D": "20.400",
      "E": "20.600"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver o problema, primeiro identificamos o volume fixo de descarte:</p><ul><li>Volume enviado (1ª vez): 10.200 L</li><li>Volume entregue (1ª vez): 9.900 L</li><li>Descarte = 10.200 - 9.900 = <input data-resposta=\"300\"> L</li></ul><p>Agora, calculamos o novo pedido:</p><ul><li>Novo pedido = 2 × 10.000 = <input data-resposta=\"20000\"> L</li></ul><p>O volume total a enviar deve cobrir o pedido mais o descarte fixo:</p><ul><li>Volume total = 20.000 + 300 = <input data-resposta=\"20300\"> L</li></ul>"
    }
  },
  {
    "id": 4,
    "titulo": "Problema 4",
    "enunciado": "Uma empresa de tecnologia vai padronizar a velocidade de conexão de internet que oferece a seus clientes em dez cidades. A direção da empresa decide que seu novo padrão de velocidade de referência será mediana dos valores das velocidades de referência de conexões nessas dez cidades. Esses valores, em megabyte por segundo (MB/s), são apresentados no quadro: 10, 15, 20, 25, 30, 35, 40, 45, 50, 55. A velocidade de referência, em megabyte por segundo, a ser adotada por essa empresa é",
    "alternativas": {
      "A": "30",
      "B": "32,5",
      "C": "35",
      "D": "40",
      "E": "45"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>A mediana de um conjunto de valores é o valor central de um conjunto de dados ordenado. Como temos 10 valores (número par), a mediana será a média aritmética dos dois termos centrais (5º e 6º termos).</p><p>1. Colocando em ordem: 10, 15, 20, 25, <strong>30</strong>, <strong>35</strong>, 40, 45, 50, 55.</p><p>2. Identificando os termos centrais: 30 e 35.</p><p>3. Cálculo: (30 + 35) / 2 = <input data-resposta=\"32,5\"></p>"
    }
  },
  {
    "id": 5,
    "titulo": "Problema 5",
    "enunciado": "Na cantina de uma escola, há cinco alimentos vendidos em pacotes com diferentes quantidades de porções. As informações nutricionais contidas nos rótulos desses produtos estão indicadas nas imagens. Uma estudante opta sempre pelo alimento com a menor quantidade total de sódio por pacote. Qual desses produtos deve ser o escolhido pela estudante?",
    "alternativas": {
      "A": "Batata chips",
      "B": "Palitos salgados",
      "C": "Biscoitos multigrãos",
      "D": "Biscoito de polvilho",
      "E": "Biscoito água e sal"
    },
    "correta": "E",
    "imagem": "https://static.wixstatic.com/media/b05a8a_f83d6787c8e349a9b750f2cdb3e85407~mv2.png/v1/fill/w_387,h_192,al_c,q_85,enc_avif,quality_auto/03%20-%20Prob_140a_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para encontrar o alimento com a menor quantidade de sódio, calculamos o total por pacote multiplicando o sódio da porção pela quantidade de porções (Peso Total / Peso da Porção):</p><ul><li>Batata chips: (100/25) * 100 = <input data-resposta=\"400\"> mg</li><li>Palitos salgados: (100/25) * 50 = <input data-resposta=\"200\"> mg</li><li>Biscoitos multigrãos: (100/25) * 80 = <input data-resposta=\"320\"> mg</li><li>Biscoito de polvilho: (100/25) * 90 = <input data-resposta=\"360\"> mg</li><li>Biscoito água e sal: (100/25) * 40 = <input data-resposta=\"160\"> mg</li></ul><p>O menor valor encontrado foi <input data-resposta=\"160\"> mg, referente ao Biscoito água e sal.</p>"
    }
  },
  {
    "id": 6,
    "titulo": "Problema 6",
    "enunciado": "Uma fábrica utilizou uma impressora 3D para produzir o protótipo de uma peça. O protótipo tem forma de um poliedro convexo, obtido pela justaposição de dois sólidos distintos, um com a forma de um prisma hexagonal regular reto e o outro com a forma de um tronco de pirâmide hexagonal reta. A base maior do tronco de pirâmide coincide com uma das bases do prisma. Após a impressão do protótipo, ele foi encaminhado ao setor de customização para realização da pintura de sua superfície. O critério definido para realização da pintura considera que faces congruentes entre si devem ser pintadas com uma mesma cor, e faces não congruentes entre si devem apresentar cores distintas. Qual é a quantidade de cores utilizadas para pintar o protótipo?",
    "alternativas": {
      "A": "2",
      "B": "4",
      "C": "6",
      "D": "8",
      "E": "12"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>É suficiente contar o número de tipos de faces congruentes do protótipo:</p><ul><li><strong>Topo:</strong> há 01 face hexagonal menor: <input data-resposta=\"1\"> cor.</li><li><strong>Lateral superior:</strong> há <input data-resposta=\"6\"> faces trapezoidais congruentes: <input data-resposta=\"1\"> cor.</li><li><strong>Lateral inferior:</strong> há <input data-resposta=\"6\"> faces retangulares congruentes: <input data-resposta=\"1\"> cor.</li><li><strong>Base:</strong> há 01 face hexagonal maior: <input data-resposta=\"1\"> cor.</li></ul><p>Total de cores distintas: <input data-resposta=\"4\">.</p>"
    }
  },
  {
    "id": 7,
    "titulo": "Problema 7",
    "enunciado": "Pesquisas na área de neurobiologia confirmam que a prática meditativa é responsável por diminuir consideravelmente a frequência respiratória para praticantes avançados, que, após iniciarem a meditação, têm suas frequências respiratórias reduzidas até se estabilizarem em um nível mais baixo. O gráfico apresenta a relação da frequência respiratória, em incursões de respirações por minuto (rpm), em relação ao tempo, em minuto, de um praticante avançado, em que (f1) representa a frequência no instante t1, no qual se inicia a prática meditativa; e (f2), a frequência no instante t2, a partir do qual esta se estabiliza durante a meditação. A partir do instante t1, em que se inicia a prática meditativa, o comportamento da frequência respiratória, em relação ao tempo,",
    "alternativas": {
      "A": "mantém-se constante",
      "B": "é diretamente proporcional ao tempo.",
      "C": "é inversamente proporcional ao tempo.",
      "D": "diminui até o instante t2, a partir do qual se torna constante.",
      "E": "diminui de forma proporcional ao tempo, tanto entre t1 e t2 quanto após t2."
    },
    "correta": "D",
    "imagem": "https://static.wixstatic.com/media/b05a8a_be21e002246a4502ba1e5ebefd11069a~mv2.png/v1/fill/w_308,h_226,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/05%20-%20Prob_142_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Ao analisar o gráfico e o enunciado, observamos que no instante t1 a frequência começa a cair. O texto afirma que as frequências são reduzidas até se estabilizarem em um nível mais baixo (f2) a partir do instante t2. Portanto, o comportamento é de queda entre t1 e t2, e após t2 a frequência permanece <input data-resposta=\"constante\">.</p>"
    }
  },
  {
    "id": 8,
    "titulo": "Problema 8",
    "enunciado": "No atletismo, um grande desafio da prova de 100 metros rasos é a sua conclusão num tempo abaixo da marca de referência dos 10,00 segundos. Vários atletas já alcançaram esse feito. Em 2009, o jamaicano Usain Bolt estabeleceu o recorde mundial masculino dessa prova, com o tempo de 9,58 segundos. Qual é a diferença, em segundo, entre a marca de referência e a marca estabelecida por Usain Bolt em 2009?",
    "alternativas": {
      "A": "0,42",
      "B": "0,52",
      "C": "1,42",
      "D": "1,52",
      "E": "19,58"
    },
    "correta": "A",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, devemos realizar a subtração entre a marca de referência e o tempo recorde estabelecido.</p><p>Cálculo: 10,00 - 9,58 = <input data-resposta=\"0,42\"></p>"
    }
  },
  {
    "id": 9,
    "titulo": "Problema 9",
    "enunciado": "Em um jogo de computador, um cubo se encontra inicialmente posicionado conforme indicado na figura. Cada deslocamento efetuado por esse cubo se dá sempre em uma das direções definidas pelos três eixos coordenados. Ao se movimentar a partir da posição inicial, esse cubo se aproximou 3 unidades do plano yz, se afastou 5 unidades do plano xz e se aproximou 4 unidades do plano xy. A figura que apresenta as projeções ortogonais desse cubo sobre os três planos coordenados, após efetuar as movimentações descritas, é",
    "alternativas": {
      "A": "Figura A",
      "B": "Figura B",
      "C": "Figura C",
      "D": "Figura D",
      "E": "Figura E"
    },
    "correta": "A",
    "imagem": "https://static.wixstatic.com/media/b05a8a_4f7c822e522a4f19b1dc80baded91e76~mv2.png/v1/fill/w_278,h_226,al_c,q_85,enc_avif,quality_auto/06%20-%20Prob_144a_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "Para resolver, considere um vértice do cubo, por exemplo V=(6, 1, 7). <br>1. Aproximar 3 unidades do plano yz (eixo x): 6 - 3 = <input data-resposta=\"3\">. <br>2. Afastar 5 unidades do plano xz (eixo y): 1 + 5 = <input data-resposta=\"6\">. <br>3. Aproximar 4 unidades do plano xy (eixo z): 7 - 4 = <input data-resposta=\"3\">. <br>As novas coordenadas do vértice são (3, 6, 3), o que define as projeções nos eixos."
    }
  },
  {
    "id": 10,
    "titulo": "Problema 10",
    "enunciado": "A reportagem de uma revista abordou o uso de redes sociais pelos internautas brasileiros. Alguns dos dados apurados pela reportagem estão apresentados no infográfico. Segundo os dados do infográfico, ao se escolher aleatoriamente um internauta brasileiro no período ao qual se refere a reportagem, a probabilidade de ele ser um homem que acessa alguma rede social é",
    "alternativas": {
      "A": "16/25",
      "B": "16/42",
      "C": "16/50",
      "D": "16/100",
      "E": "16/125"
    },
    "correta": "C",
    "imagem": "https://static.wixstatic.com/media/b05a8a_5e1591a5c4654f388216f66b6152353d~mv2.png/v1/fill/w_363,h_282,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/08%20-%20Prob_145_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>De acordo com o infográfico, o percentual de internautas que são homens e acessam redes sociais é de 32% em relação ao total de internautas brasileiros.</p><p>A probabilidade é calculada pela razão entre a frequência do evento e o total: 32/100.</p><p>Mantendo a forma original apresentada nas alternativas, simplificamos a fração por 2 para obter: <input data-resposta=\"16/50\"></p>"
    }
  },
  {
    "id": 11,
    "titulo": "Problema 11",
    "enunciado": "Uma pessoa pretende instalar um kit de gás natural veicular (GNV) em seu carro. Na loja que escolheu para realizar a compra e instalação desse kit, havia cinco modelos de cilindro para armazenamento do gás, cujas capacidades, em metro cúbico, eram, respectivamente: 10, 14, 17, 21 e 25. O preço do cilindro é proporcional à sua capacidade. Esse carro rodará 30 km diariamente, 7 dias por semana, e o consumo do GNV é de 1 m3 a cada 13 km rodados. A pessoa escolherá o modelo de cilindro de menor preço e que garanta apenas um abastecimento semanal. Nessas condições, qual será a capacidade, em metro cúbico, do cilindro escolhido por essa pessoa?",
    "alternativas": {
      "A": "10",
      "B": "14",
      "C": "17",
      "D": "21",
      "E": "25"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, devemos calcular o consumo semanal de gás natural.</p><p>1. Calcule a distância total percorrida em uma semana: 30 km/dia × 7 dias = <input data-resposta=\"210\"> km.</p><p>2. Calcule o consumo 'x' de gás necessário para essa distância: 210 / 13 ≈ <input data-resposta=\"16.15\"> m³.</p><p>3. Como a pessoa quer o cilindro de menor preço (menor capacidade) que garanta a autonomia semanal, ela deve escolher o primeiro valor disponível maior que 16.15, que é: <input data-resposta=\"17\"> m³.</p>"
    }
  },
  {
    "id": 12,
    "titulo": "Problema 12",
    "enunciado": "Em um jogo digital, há três personagens: um herói e dois vilões. A programação é feita de tal forma que o herói sempre será atacado pelo vilão que estiver mais próximo dele. Uma das maneiras de \"confundir\" os vilões é movimentar o herói por trajetórias que o mantenha equidistante dos vilões, gerando indefinição entre eles e, com isso, não sendo atacado. Para a programação de uma das etapas desse jogo, o programador considerou, no plano cartesiano, o quadrado STUV como a região de movimentação dos personagens, onde V e T representam as posições fixas dos vilões, e S, a posição inicial do herói, como apresentado na figura. Qual é a equação da trajetória em que o herói poderá se movimentar sem ser atacado?",
    "alternativas": {
      "A": "y = x",
      "B": "y = -x + 8",
      "C": "y = 0",
      "D": "x = 0",
      "E": "x² + y² = 64"
    },
    "correta": "A",
    "imagem": "https://static.wixstatic.com/media/b05a8a_4992e83be6aa4251a8a75e2d81394974~mv2.png/v1/fill/w_278,h_255,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/09%20-%20Prob_147_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para que o herói não seja atacado, ele deve estar à mesma distância de ambos os vilões. No plano cartesiano, os vilões ocupam as posições V(0, 8) e T(8, 0). A trajetória equidistante a esses pontos é a mediatriz do segmento VT, que corresponde à diagonal do quadrado que passa pela origem (0,0). Portanto, a equação da trajetória é y = <input data-resposta=\"x\">.</p>"
    }
  },
  {
    "id": 13,
    "titulo": "Problema 13",
    "enunciado": "Uma livraria comercializa livros dos seguintes gêneros literários: ficção científica, autoajuda, romance e biografia. O gráfico apresenta o estoque dos livros que essa livraria tem, por gênero literário e por nacionalidade do autor, bem como a demanda por gênero literário, obtida por meio de uma enquete feita com seus clientes habituais. O gerente da livraria fará a encomenda de novos exemplares somente do gênero cuja quantidade em estoque seja insuficiente para atender a demanda constatada pela enquete. O gênero de livro do qual o gerente deverá encomendar mais exemplares é",
    "alternativas": {
      "A": "ficção, pois é o que apresenta maior demanda.",
      "B": "biografia, pois é o gênero que tem a menor demanda.",
      "C": "autoajuda, pois a quantidade em estoque é inferior à demanda.",
      "D": "biografia, pois é o gênero que tem a menor quantidade de livros em estoque.",
      "E": "romance, pois é o que apresenta o menor estoque de livros de autores brasileiros."
    },
    "correta": "C",
    "imagem": "https://static.wixstatic.com/media/b05a8a_34591fca83ad4e0a8bcda5c93f0a2767~mv2.png/v1/fill/w_334,h_261,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/10%20-%20Prob_148_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para determinar qual gênero precisa de encomenda, devemos somar o estoque (brasileiros + estrangeiros) e comparar com a demanda de cada categoria:</p><ul><li>Ficção: 30 + 50 = 80 (Demanda: 70)</li><li>Autoajuda: 20 + 30 = <input data-resposta=\"50\"> (Demanda: 60)</li><li>Romance: 40 + 40 = 80 (Demanda: 80)</li><li>Biografia: 20 + 60 = 80 (Demanda: 40)</li></ul><p>O único gênero onde o estoque total é menor que a demanda é o de autoajuda.</p>"
    }
  },
  {
    "id": 14,
    "titulo": "Problema 14",
    "enunciado": "Uma escola de idiomas oferece cursos de inglês, espanhol, francês e alemão. Os gráficos apresentam a distribuição percentual das matrículas, por idioma, em 2023, e a distribuição da quantidade de matrículas, por idioma, em 2024. Para planejar as atividades de 2025, o gerente da escola estimou que o total de matrículas será o mesmo de 2024, e a distribuição percentual das matrículas, por idioma, será igual à registrada em 2023. Segundo essa estimativa, o número de matrículas no curso de francês para o ano de 2025 será",
    "alternativas": {
      "A": "50",
      "B": "70",
      "C": "80",
      "D": "100",
      "E": "120"
    },
    "correta": "B",
    "imagem": "https://static.wixstatic.com/media/b05a8a_188f510bb1034a0b9783178224cf4672~mv2.png/v1/fill/w_600,h_262,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/12-Prob_149.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, siga os passos:</p><p>1. Calcule o total de matrículas em 2024 somando os valores do gráfico de barras: 120 + 100 + 80 + 50 = <input data-resposta=\"350\">.</p><p>2. Identifique no gráfico de setores o percentual referente ao curso de francês em 2023, que é de 20%.</p><p>3. Como o total de 2025 será igual ao de 2024, calcule 20% de 350: (20/100) * 350 = <input data-resposta=\"70\">.</p>"
    }
  },
  {
    "id": 15,
    "titulo": "Problema 15",
    "enunciado": "O controle remoto de um carrinho de brinquedo vem equipado com uma tela que ajusta automaticamente a escala empregada na exibição de cada deslocamento. A tela apresenta a imagem do deslocamento, a escala utilizada na geração dessa imagem e o comprimento desse deslocamento, em centímetro, em conformidade com a escala empregada. As figuras representam a tela do controle remoto exibindo os dados de cinco deslocamentos realizados por esse carrinho. A opção que indica o deslocamento de maior comprimento realizado pelo carrinho de brinquedo é",
    "alternativas": {
      "A": "I",
      "B": "II",
      "C": "III",
      "D": "IV",
      "E": "V"
    },
    "correta": "E",
    "imagem": "https://static.wixstatic.com/media/b05a8a_ddd72a2a63f94543ab7be64da42c79d7~mv2.png/v1/fill/w_737,h_130,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/13%20-%20Prob_150_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para calcular o comprimento real (x), multiplicamos o comprimento na tela pelo denominador da escala (1/E):</p><ul><li>Deslocamento I: 10 * 100 = <input data-resposta=\"1000\"> cm</li><li>Deslocamento II: 20 * 20 = <input data-resposta=\"400\"> cm</li><li>Deslocamento III: 25 * 25 = <input data-resposta=\"625\"> cm</li><li>Deslocamento IV: 30 * 50 = <input data-resposta=\"1500\"> cm</li><li>Deslocamento V: 40 * 80 = <input data-resposta=\"3200\"> cm</li></ul><p>Comparando os resultados, o maior deslocamento é o V.</p>"
    }
  },
  {
    "id": 16,
    "titulo": "Problema 16",
    "enunciado": "A cúpula pentagonal giralongada é um poliedro de Johnson, cujas faces são polígonos regulares, mas que não é um poliedro de Platão, de Arquimedes, prisma ou antiprisma. As figuras apresentam esse poliedro em duas posições e uma de suas planificações. Com base nas figuras espaciais do poliedro e na análise de seus elementos, determine o número total de vértices desse sólido.",
    "alternativas": {
      "A": "15",
      "B": "20",
      "C": "25",
      "D": "30",
      "E": "35"
    },
    "correta": "C",
    "imagem": "https://static.wixstatic.com/media/b05a8a_df51845a08474d3aa084efdc915ff4ac~mv2.png/v1/fill/w_600,h_219,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/15%20-%20Prob_151.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para encontrar o número total de vértices, analisamos os conjuntos de pontos destacados na estrutura:</p><ul><li>Vértices do decágono vermelho (base inferior): <input data-resposta=\"10\"></li><li>Vértices do decágono sobre o qual se apoiam os quadrados amarelos (intermediário): <input data-resposta=\"10\"></li><li>Vértices do pentágono verde (topo): <input data-resposta=\"5\"></li></ul><p>Somando todos os conjuntos, o total de vértices é: 10 + 10 + 5 = <input data-resposta=\"25\"></p>"
    }
  },
  {
    "id": 17,
    "titulo": "Problema 17",
    "enunciado": "Uma fábrica de tijolos ecológicos com 3 funcionários, cada um trabalhando 6 horas diárias, produz 720 unidades por dia. Para atender ao crescimento da demanda por esse tipo de tijolo, essa fábrica passou a ter 5 funcionários, cada um trabalhando 9 horas por dia, aumentando, assim, sua capacidade de produção. Todos os funcionários produzem igual quantidade de tijolos a cada hora, independentemente de trabalharem 6 ou 9 horas diárias. O número de tijolos fabricados diariamente após o aumento da capacidade de produção é",
    "alternativas": {
      "A": "600",
      "B": "840",
      "C": "1200",
      "D": "1800",
      "E": "2000"
    },
    "correta": "D",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Inicialmente, se cada um dos três funcionários trabalha 6 horas e produz 720 tijolos, então:</p><p>O número total de horas trabalhadas é 3 * 6 = <input data-resposta=\"18\">.</p><p>O número de tijolos produzidos por hora é 720/18 = <input data-resposta=\"40\">.</p><p>Com a nova configuração de 5 funcionários trabalhando 9 horas, o novo total de horas é 5 * 9 = <input data-resposta=\"45\">.</p><p>O número de tijolos fabricados diariamente será 45 * 40 = <input data-resposta=\"1800\">.</p>"
    }
  },
  {
    "id": 18,
    "titulo": "Problema 18",
    "enunciado": "Para acompanhar o fluxo de visitantes em seu prédio, uma empresa estabeleceu um código de identificação para a visitação. De acordo com a regra estabelecida, cada visitante será identificado com um código sequencial numérico com 7 dígitos, determinado, da esquerda para a direita, da seguinte forma:\n• o primeiro dígito indica o andar ao qual o visitante se dirige, que é um número de 1 a 4;\n• os dois próximos dígitos correspondem ao número do setor da empresa ao qual o visitante se destina. Esse número varia de 01 a 20;\n• os três dígitos seguintes correspondem ao número do funcionário da empresa com quem o visitante irá se reunir. Esse número varia de 001 a 135;\n• o último dígito indica se o visitante chegou à empresa pela manhã, dígito 0, ou à tarde, dígito 1.\n\nUm visitante chegou à empresa às 10 horas da manhã para se reunir com o funcionário identificado pelo número 109, que trabalha no setor 08 da empresa, localizado no 2º andar. O código de identificação desse visitante é:",
    "alternativas": {
      "A": "2081090",
      "B": "281090",
      "C": "2081091",
      "D": "281091",
      "E": "1081090"
    },
    "correta": "A",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para compor o código de 7 dígitos, siga as informações do enunciado:</p><ul><li>Andar (1 dígito): 2º andar -> <input data-resposta=\"2\"></li><li>Setor (2 dígitos): Setor 08 -> <input data-resposta=\"08\"></li><li>Funcionário (3 dígitos): Número 109 -> <input data-resposta=\"109\"></li><li>Turno (1 dígito): 10h da manhã -> <input data-resposta=\"0\"></li></ul><p>O código completo é: <input data-resposta=\"2081090\"></p>"
    }
  },
  {
    "id": 19,
    "titulo": "Problema 19",
    "enunciado": "Quatro candidatos se apresentaram para realizar a prova de um concurso. Antes de iniciar a prova, os celulares dos quatro candidatos foram recolhidos pelo aplicador, que os guardou, cada um, dentro de um envelope preto. Ao término da prova, o aplicador devolveu os quatro envelopes com os celulares aos quatro candidatos, de maneira aleatória, já que não havia feito a identificação dos envelopes. A probabilidade de que todos os candidatos tenham recebido de volta os envelopes com os seus respectivos celulares é",
    "alternativas": {
      "A": "1/4",
      "B": "1/8",
      "C": "1/12",
      "D": "1/16",
      "E": "1/24"
    },
    "correta": "E",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, devemos calcular o número total de formas possíveis de distribuir os 4 celulares entre os 4 candidatos (espaço amostral) e identificar quantas dessas formas são favoráveis.</p><p>O número total de permutações de 4 elementos é dado por 4! (fatorial de 4):<br>4! = 4 × 3 × 2 × 1 = <input data-resposta=\"24\"></p><p>Como existe apenas 1 maneira correta de todos os candidatos receberem seus próprios celulares, a probabilidade é 1 dividido pelo total de possibilidades: 1/<input data-resposta=\"24\">.</p>"
    }
  },
  {
    "id": 20,
    "titulo": "Problema 20",
    "enunciado": "Em uma escola, todos os estudantes do ensino médio praticam uma das três modalidades esportivas oferecidas como atividade física, e cada um deles pratica somente uma dessas atividades. Os gráficos trazem alguns dados relativos aos quantitativos de estudantes que praticam essas modalidades esportivas nessa escola, apesar de algumas quantidades não terem sido informadas. Qual é a quantidade de estudantes no ensino médio dessa escola?",
    "alternativas": {
      "A": "150",
      "B": "210",
      "C": "300",
      "D": "390",
      "E": "450"
    },
    "correta": "D",
    "imagem": "https://static.wixstatic.com/media/b05a8a_0c0983e708dc4a6f8fb2bcf2c49dd0ae~mv2.png/v1/fill/w_600,h_291,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/16%20-%20Prob_155.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<div><p>Para resolver o problema, analisamos a escala <i>k</i> baseada no gráfico de barras e no gráfico de setores. De acordo com a proporção das retas horizontais:</p><ul><li><b>1ª Série:</b> Basquete (k), Vôlei (k), Futebol (2k) → Total = 4k</li><li><b>2ª Série:</b> Basquete (2k), Vôlei (2k), Futebol (3k) → Total = 7k</li><li><b>3ª Série:</b> Basquete (3k), Vôlei (4k), Futebol (5k) → Total = 12k</li></ul><p>A soma total de estudantes é dada por 4k + 7k + 12k = 23k. Identificando o valor da constante k através dos dados fornecidos no gráfico (onde k = 15), realizamos o cálculo: 23 × 15 + 45 = 390.</p><p>Insira o valor total de estudantes calculado: <input data-resposta=\"390\"></p></div>"
    }
  },
  {
    "id": 21,
    "titulo": "Problema 21",
    "enunciado": "O dono de uma embarcação deve partir do ponto P e chegar ao ponto R por meio de dois deslocamentos lineares e navegando a uma velocidade constante. Essa viagem será feita durante a noite, e como ele dispõe somente de uma bússola e de um relógio, planejou sua rota da seguinte forma:\n1º - partir do ponto P na direção 110 e navegar por 4 horas, alcançando um ponto Q;\n2º - partir do ponto Q na direção 90 e navegar por 2 horas, alcançando o ponto de destino R.\nNo entanto, ao direcionar o barco para o primeiro deslocamento, o fez na direção 340, em vez de 110. Com isso, realizou os seguintes deslocamentos:\n1º - partiu do ponto P na direção 340 e navegou por 4 horas, alcançando um ponto S;\n2º - partiu do ponto S na direção 90 e navegou por 2 horas, alcançando o ponto T.\nA figura apresenta a bússola, a rota planejada e a rota executada. Para atingir o ponto R, partindo do ponto T, o dono da embarcação deve navegar na direção:",
    "alternativas": {
      "A": "135 e 7 horas e 15 minutos",
      "B": "45 e 7 horas e 15 minutos",
      "C": "135 e 12 horas",
      "D": "135 e 6 horas",
      "E": "45 e 6 horas."
    },
    "correta": "C",
    "imagem": "https://static.wixstatic.com/media/b05a8a_59ed2a5d6a124aa2996726e9a4bb2c81~mv2.png/v1/fill/w_198,h_197,al_c,q_85,enc_avif,quality_auto/17%20-%20Prob_156a_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão é necessário calcular os ângulos α e β mostrados na Figura. O deslocamento de T para R é paralelo ao deslocamento de S para Q. A direção necessária é de <input data-resposta=\"135\"> graus e o tempo total de navegação é de <input data-resposta=\"12\"> horas.</p>"
    }
  },
  {
    "id": 22,
    "titulo": "Problema 22",
    "enunciado": "Em um estudo clínico, 55 mulheres foram distribuídas, aleatoriamente, em 5 grupos de 11 pessoas. Para testar uma nova medicação, será escolhido um grupo no qual a maioria das mulheres tenham idades entre 20 e 30 anos. Os demais grupos tomarão placebo ou medicações já existentes no mercado. O quadro, parcialmente preenchido, informa alguns dados relativos às idades das mulheres desses grupos. Mesmo com o quadro incompleto, foi possível selecionar um desses grupos porque, apenas com os dados apresentados no quadro, foi identificado um grupo que, certamente, atendia ao critério de escolha. O grupo escolhido foi o",
    "alternativas": {
      "A": "I",
      "B": "II",
      "C": "III",
      "D": "IV",
      "E": "V"
    },
    "correta": "A",
    "imagem": "https://static.wixstatic.com/media/b05a8a_83d66bb42ab145e29a23bd86dfc97c40~mv2.png/v1/fill/w_656,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/19%20-%20Prob_157_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "Para que um grupo atenda ao critério, a maioria (pelo menos 6 das 11 mulheres) deve ter entre 20 e 30 anos. No Grupo I, a mediana é 25, o que garante que pelo menos 6 mulheres têm idade menor ou igual a 25 anos. <p>Em um grupo de 11 pessoas, qual o número mínimo de integrantes para se ter a maioria? <input data-resposta=\"6\"></p>"
    }
  },
  {
    "id": 23,
    "titulo": "Problema 23",
    "enunciado": "”Pace” ´e um termo usado por um corredor para denominar o seu ritmo médio em uma corrida. Representa o tempo médio, em segundo, que esse corredor leva para percorrer 1 km. O esquema apresenta o tempo, em segundo, que um corredor levou para cruzar as marcas que definem os quatro primeiros trechos de 1 km, em uma corrida de 5 km, e o tempo gasto para percorrer cada trecho de 1 km. O melhor pace que esse corredor alcançou em corridas de 5 km foi 281 s/km. Para que consiga repetir nessa corrida seu melhor pace em corridas de 5 km, seu tempo, no 5o trecho, deve ser quantos segundos menor do que o que ele gastou para percorrer o 4o trecho?",
    "alternativas": {
      "A": "10",
      "B": "21",
      "C": "31",
      "D": "35",
      "E": "41"
    },
    "correta": "C",
    "imagem": "https://static.wixstatic.com/media/b05a8a_e4f31414eaca403caf866b80f85ec2d2~mv2.png/v1/fill/w_740,h_205,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/20%20-%20Prob_158_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para atingir o pace de 281 s/km em uma prova de 5 km, o tempo total deve ser: 5 * 281 = 1405 segundos.</p><p>Somando os tempos dos 4 primeiros trechos apresentados na imagem: 285 + 286 + 283 + 291 = 1145 segundos.</p><p>O tempo necessário para o 5º trecho (t5) é: 1405 - 1145 = 260 segundos.</p><p>A questão pede a diferença entre o 4º trecho (291s) e o 5º trecho (260s): 291 - 260 = <input data-resposta=\"31\"></p>"
    }
  },
  {
    "id": 24,
    "titulo": "Problema 24",
    "enunciado": "Um recipiente tem um formato que faz com que, ao ser enchido de água com uma vazão constante, a distância D da lâmina de água ao tampo da mesa, em centímetro, aumente em relação ao tempo T, em minuto, de acordo com uma função do tipo D = k + tg[p(T + m)], sendo os parâmetros k, p e m números reais, para T variando entre 0 e 4 minutos, conforme ilustrado na figura, na qual estão apresentadas assíntotas verticais da função tangente utilizada na definição de D. A expressão algébrica que representa a relação entre D e T é:",
    "alternativas": {
      "A": "D = 10 + tg[π/8(T - 2)]",
      "B": "D = 10 + tg[π/8(T + 2)]",
      "C": "D = 10 + tg[π/2(T - 2)]",
      "D": "D = 10 + tg[π/2(T + 2)]",
      "E": "D = 10 + tg[π/8T]"
    },
    "correta": "A",
    "imagem": "https://static.wixstatic.com/media/b05a8a_555d0f5558fe4b5a892ff31beffa272b~mv2.png/v1/fill/w_355,h_352,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/21%20-%20Prob_159_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<div><p>1. O período (P) da função é a distância entre as assíntotas verticais: P = 6 - (-2) = <input data-resposta=\"8\">.</p><p>2. O parâmetro p é calculado pela fórmula do período da tangente (π/p): p = π / <input data-resposta=\"8\">.</p><p>3. Observando o gráfico, o ponto central entre as assíntotas está em T = 2, onde D = 10. Portanto, o deslocamento vertical k = <input data-resposta=\"10\">.</p><p>4. Para que o argumento da tangente seja zero em T = 2, temos (T + m) = 0, logo m = <input data-resposta=\"-2\">.</p></div>"
    }
  },
  {
    "id": 25,
    "titulo": "Problema 25",
    "enunciado": "Os quadrados em cinza na figura representam os quarteirões de uma parte do bairro onde moram João e seu amigo. O quadrado pequeno (A), pintado em preto e localizado no canto superior esquerdo de um quadrado maior, indica a casa do amigo de João. João também mora em uma casa de esquina, mas na extremidade nordeste de um quarteirão. Para chegar à casa de seu amigo, ao sair de casa, João deve caminhar pelo quarteirão onde mora na direção oeste, dobrar à direita, caminhar por três quarteirões na direção norte e dobrar à esquerda. A casa de seu amigo fica no segundo quarteirão a oeste. O quarteirão onde se encontra a casa de João é representado pelo quadrado com a letra",
    "alternativas": {
      "A": "P",
      "B": "Q",
      "C": "R",
      "D": "S",
      "E": "T"
    },
    "correta": "A",
    "imagem": "https://static.wixstatic.com/media/b05a8a_54bfc88375034b2180a5213f1e13951f~mv2.png/v1/fill/w_365,h_269,al_c,q_85,enc_avif,quality_auto/22%20-%20Prob_160_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, devemos realizar o caminho inverso a partir da casa do amigo (A):</p><ul><li>A casa do amigo está no 2º quarteirão a oeste após a última conversão. Voltando 2 quarteirões para o <b>Leste</b>, chegamos ao ponto de virada.</li><li>João caminhou 3 quarteirões para o Norte. Voltando 3 quarteirões para o <b>Sul</b>, chegamos ao quarteirão de origem.</li><li>João havia dobrado à direita (vindo do Oeste). O quarteirão onde ele mora, considerando a posição nordeste da casa, é o <input data-resposta=\"P\">.</li></ul>"
    }
  },
  {
    "id": 26,
    "titulo": "Problema 26",
    "enunciado": "Uma empresa produziu, em um determinado mês, 110 toneladas de plástico a partir de derivados de petróleo e 80 toneladas a partir de plásticos reciclados. O custo para reciclar uma tonelada de plástico é de R$ 500,00, que equivale a 5% do custo para produzir a mesma quantidade de plástico a partir de derivados de petróleo. Para o mês seguinte, a meta dessa empresa é produzir a mesma quantidade de plástico que foi produzida nesse mês, mas com redução de, pelo menos, 50% no custo de produção. Para que no mês seguinte a empresa atinja a meta, a quantidade mínima de toneladas de plástico que devem ser produzidas a partir de reciclagem deverá ser",
    "alternativas": {
      "A": "130",
      "B": "140",
      "C": "150",
      "D": "160",
      "E": "180"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, siga os passos:</p><ol><li>Calcule o custo de produção por petróleo (x): 5% de x = 500. Logo, x = 500 / (5/100) = R$ <input data-resposta=\"10000\">.</li><li>Calcule o custo total do mês atual: (110 * 10000) + (80 * 500) = R$ <input data-resposta=\"1140000\">.</li><li>Determine a meta de custo (redução de 50%): 1140000 / 2 = R$ <input data-resposta=\"570000\">.</li><li>A produção total deve ser 110 + 80 = 190 toneladas. Seja 'r' a quantidade reciclada e (190 - r) a de petróleo.</li><li>Monte a inequação: 500r + 10000(190 - r) ≤ 570000.</li><li>Resolvendo a equação para o valor mínimo: -9500r ≤ 570000 - 1900000 => -9500r ≤ -1330000.</li><li>r = 1330000 / 9500 = <input data-resposta=\"140\"> toneladas.</li></ol>"
    }
  },
  {
    "id": 27,
    "titulo": "Problema 27",
    "enunciado": "Dez casais fundaram um grupo de dança e decidiram constituir uma diretoria com três cargos: presidente, secretário e tesoureiro. Para maior representatividade, decidiu-se que no máximo uma pessoa por casal poderá ocupar um cargo nessa diretoria. Quantas diretorias diferentes podem ser constituídas por esses 10 casais?",
    "alternativas": {
      "A": "20 x 18 x 16",
      "B": "20 x 19 x 18",
      "C": "10 x 9 x 8 x 2",
      "D": "20 x 18 x 16 x 2",
      "E": "5760"
    },
    "correta": "A",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para o cargo de presidente, temos 20 opções (qualquer uma das 20 pessoas). Para o cargo de secretário, não podemos escolher o presidente nem seu cônjuge, restando 18 opções. Para o cargo de tesoureiro, não podemos escolher os dois já eleitos nem seus respectivos cônjuges, restando 16 opções. O cálculo final é 20 &times; 18 &times; 16 = <input data-resposta=\"5760\"></p>"
    }
  },
  {
    "id": 28,
    "titulo": "Problema 28",
    "enunciado": "Um artista, que costuma fazer desenhos com areia na praia, pediu a um banhista que fizesse um pequeno desenho, que serviria de esboço para uma grande obra de arte a ser feita na areia. Esse desenho está representado na figura. Após a conclusão, a obra de arte obtida manteve as mesmas proporções do desenho feito pelo banhista, sendo que as medidas indicadas na figura foram ampliadas para 30 m. Em qual escala esse desenho representa a obra de arte?",
    "alternativas": {
      "A": "1 : 3",
      "B": "1 : 30",
      "C": "1 : 300",
      "D": "1 : 3 000",
      "E": "1 : 30 000"
    },
    "correta": "C",
    "imagem": "https://static.wixstatic.com/media/b05a8a_ac4996e7b83e4999830a66aa84f4b18e~mv2.png/v1/fill/w_324,h_293,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/23%20-%20Prob_163_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "A escala é a razão entre a medida do desenho e a medida real. A maior medida indicada no desenho é 10 cm, que corresponde a 30 m na obra real. Primeiro, converta a medida real para centímetros: 30 m = <input data-resposta=\"3000\"> cm. A escala é dada pela razão 10/3000. Simplificando a razão por 10, obtemos a escala de 1 para <input data-resposta=\"300\">."
    }
  },
  {
    "id": 29,
    "titulo": "Problema 29",
    "enunciado": "O cortisol é um hormônio produzido pelas glândulas adrenais e pode ser considerado um importante marcador do estresse fisiológico. Em um estudo desenvolvido com enfermeiros, foi verificado que a concentração de cortisol salivar em um dia de trabalho, denotada por T, era, em média, 1,59 vezes a concentração de cortisol salivar em um dia de folga, denotada por F. Nesse estudo, a relação obtida entre T e F foi:",
    "alternativas": {
      "A": "T = 1,59 / F",
      "B": "T = 1,59 + F",
      "C": "T = 1,59 . F",
      "D": "F = 1,59 / T",
      "E": "F = 1,59 . T"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>O enunciado afirma que a concentração T é 1,59 <b>vezes</b> a concentração F. Na linguagem matemática, o termo 'vezes' indica uma operação de multiplicação.</p><p>Portanto, a relação correta é T = <input data-resposta=\"1,59\"> . F</p>"
    }
  },
  {
    "id": 30,
    "titulo": "Problema 30",
    "enunciado": "Um estacionamento possui 120 vagas para veículos, e todas essas vagas estão ocupadas. Cada cliente paga uma mensalidade para utilizar uma vaga, que é calculada com base nas despesas mensais do estacionamento e no lucro pretendido. As despesas mensais do estacionamento são: R$ 14.240,00 com manutenção mais R$ 36,00 de seguro por veículo. O lucro do estacionamento é determinado pela diferença do valor arrecadado com as mensalidades pelas despesas efetuadas. A partir do mês seguinte, o valor do seguro por veículo aumentará em 20%, e as despesas com manutenção permanecerão sem alterações. Com isso, o dono do estacionamento reajustará as mensalidades para obter um lucro mensal de R$ 10.000,00. Apesar desse reajuste, todas as vagas continuarão ocupadas. O valor, em real, da mensalidade reajustada será",
    "alternativas": {
      "A": "202,00",
      "B": "245,20",
      "C": "248,00",
      "D": "252,40",
      "E": "285,20"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, devemos calcular o novo custo total e somar ao lucro desejado.</p><ul><li>Novo valor do seguro por veículo: 36 * 1,20 = R$ <input data-resposta=\"43,20\"></li><li>Custo total de seguro (120 vagas): 120 * 43,20 = R$ <input data-resposta=\"5184,00\"></li><li>Despesa total (Manutenção + Seguro): 14.240 + 5.184 = R$ <input data-resposta=\"19424,00\"></li><li>Arrecadação necessária (Despesa + Lucro): 19.424 + 10.000 = R$ <input data-resposta=\"29424,00\"></li><li>Nova mensalidade por vaga: 29.424 / 120 = R$ <input data-resposta=\"245,20\"></li></ul>"
    }
  },
  {
    "id": 31,
    "titulo": "Problema 31",
    "enunciado": "O dono de uma sorveteria armazena sorvete em potes de 20.000 cm3. Ele serve o sorvete em taças, em porções de 250 mL. A quantidade de taças que ele consegue servir a partir de um pote cheio de sorvete é",
    "alternativas": {
      "A": "40",
      "B": "50",
      "C": "80",
      "D": "100",
      "E": "120"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, primeiro converta a unidade de volume do pote para mililitros (mL). Sabemos que 1 cm³ é igual a 1 mL. Portanto, 20.000 cm³ equivalem a <input data-resposta=\"20000\"> mL.</p><p>Agora, divida o volume total do pote pelo volume de cada porção: 20.000 / 250 = <input data-resposta=\"80\">.</p>"
    }
  },
  {
    "id": 32,
    "titulo": "Problema 32",
    "enunciado": "A produtividade de soja em uma área cultivada é a média da quantidade de sacas de 50 quilogramas que são produzidas por hectare. O quadro apresenta a área cultivada e a produtividade de soja em certa propriedade, ao longo de cinco safras, com períodos de um ano, de 2011 a 2016. O gráfico de linhas que representa a produção de soja dessa propriedade, em tonelada, nessas cinco safras é:",
    "alternativas": {
      "A": "Gráfico com pontos em 2500, 2500, 2500, 2500, 2500.",
      "B": "Gráfico com pontos em 50, 45, 50, 60, 55.",
      "C": "Gráfico com pontos em 1000, 800, 1200, 1500, 800.",
      "D": "Gráfico com pontos em 2500, 1800, 3000, 4500, 2200.",
      "E": "Gráfico com pontos em 50000, 36000, 60000, 90000, 44000."
    },
    "correta": "D",
    "imagem": "https://static.wixstatic.com/media/b05a8a_c81bf2e9e7444687b73c44e6898dad4a~mv2.png/v1/fill/w_693,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/24%20-%20Prob_167a_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para encontrar a produção em toneladas, utilize a fórmula: <b>Produção = (Área × Produtividade × 50) / 1000</b>.</p><p>Calcule os valores para cada safra:</p><ul><li>2011/2012: (1000 × 50 × 50) / 1000 = <input data-resposta=\"2500\"></li><li>2012/2013: (800 × 45 × 50) / 1000 = <input data-resposta=\"1800\"></li><li>2013/2014: (1200 × 50 × 50) / 1000 = <input data-resposta=\"3000\"></li><li>2014/2015: (1500 × 60 × 50) / 1000 = <input data-resposta=\"4500\"></li><li>2015/2016: (800 × 55 × 50) / 1000 = <input data-resposta=\"2200\"></li></ul>"
    }
  },
  {
    "id": 33,
    "titulo": "Problema 33",
    "enunciado": "A figura ilustra o projeto visual para confecção de uma medalha comemorativa, com a forma de um cilindro circular reto, de diâmetro 6 cm e espessura 3 mm. A figura ABCD tem a forma de um quadrado e é a base de um prisma que atravessa toda a medalha. A região da medalha externa a esse prisma será cunhada em ouro. Pretende-se cunhar 100 dessas medalhas. Considere 3,1 como valor aproximado para π. Qual é o volume de ouro, em centímetro cúbico, necessário para a confeção dessas medalhas?",
    "alternativas": {
      "A": "132",
      "B": "186",
      "C": "248",
      "D": "297",
      "E": "341"
    },
    "correta": "D",
    "imagem": "https://static.wixstatic.com/media/b05a8a_45f5898d52a74ec5a4215e12daae6d9b~mv2.png/v1/fill/w_476,h_216,al_c,lg_1,q_85,enc_avif,quality_auto/25%20-%20Prob_168_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "Para resolver este problema, siga os passos abaixo: <br> 1. Converta a espessura de mm para cm: 3 mm = 0,3 cm. <br> 2. Calcule o volume do cilindro (Vc): Vc = π · r² · h = 3,1 · 3² · 0,3 = <input data-resposta=\"8,37\"> cm³. <br> 3. Calcule a área do quadrado ABCD inscrito na base circular (diagonal = 6 cm): Área = (d²)/2 = 36/2 = 18 cm². <br> 4. Calcule o volume do prisma (Vp): Vp = Área_base · h = 18 · 0,3 = <input data-resposta=\"5,4\"> cm³. <br> 5. O volume de ouro por medalha é a diferença: Vc - Vp = <input data-resposta=\"2,97\"> cm³. <br> 6. Para 100 medalhas, o volume total necessário é 100 · 2,97 = <input data-resposta=\"297\"> cm³."
    }
  },
  {
    "id": 34,
    "titulo": "Problema 34",
    "enunciado": "Três dados cúbicos, com faces numeradas de 1 a 6, foram utilizados em um jogo. Artur escolheu dois dados, e João ficou com o terceiro. O jogo consiste em ambos lançarem seus dados, observarem os números nas faces voltadas para cima e compararem o maior número obtido por Artur com o número obtido por João. Vence o jogador que obtiver o maior número. Em caso de empate, a vitória é de João. O jogador que tem a maior probabilidade de vitória é",
    "alternativas": {
      "A": "Artur, pois sua probabilidade de vencer é 1/2.",
      "B": "Artur, pois sua probabilidade de vencer é 125/216.",
      "C": "João, pois sua probabilidade de vencer é 1/2.",
      "D": "João, pois sua probabilidade de vencer é 125/216.",
      "E": "João, pois sua probabilidade de vencer é 91/216."
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>O espaço amostral total é de 6 &times; 6 &times; 6 = 216 possibilidades. João vence se o valor do seu dado (J) for maior ou igual ao máximo dos dados de Artur (A1, A2). O número de casos em que João vence é a soma dos quadrados de 1 a 6: 1² + 2² + 3² + 4² + 5² + 6² = <input data-resposta=\"91\">. A probabilidade de João vencer é 91/216. Portanto, a probabilidade de Artur vencer é a diferença: (216 - 91)/216 = <input data-resposta=\"125/216\">.</p>"
    }
  },
  {
    "id": 35,
    "titulo": "Problema 35",
    "enunciado": "A luminância de um objeto é a grandeza que descreve a quantidade de luz produzida ou refletida por sua superfície. Ela está definida como a razão entre a intensidade luminosa, medida em candela (cd), e o quadrado da distância do objeto até o foco de luz, medida em metro (m). A unidade de medida da luminância de um objeto é",
    "alternativas": {
      "A": "cd/m",
      "B": "cd²/m",
      "C": "cd/m²",
      "D": "cd²/m²",
      "E": "cd · m²"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>De acordo com o enunciado, a luminância (L) é definida pela razão entre a intensidade luminosa (I) e o quadrado da distância (d²). Matematicamente: L = I / d².</p><p>Substituindo pelas unidades de medida fornecidas: I é medido em candela (cd) e d é medido em metro (m). Assim, d² será medido em m².</p><p>Portanto, a unidade resultante é cd/m². Qual o valor do expoente da unidade de medida do denominador? <input data-resposta=\"2\"></p>"
    }
  },
  {
    "id": 36,
    "titulo": "Problema 36",
    "enunciado": "Quatro amigos, cada um com 100 moedas, criaram um jogo, no qual cada um assume uma das quatro posições, 1, 2, 3 ou 4, indicadas na figura, e nela permanece até o final. O desenvolvimento do jogo se dá em rodadas e, em todas elas, cada jogador transfere e recebe uma quantidade de moedas, da seguinte maneira:\n• o jogador na posição 1 transfere 1 moeda para o jogador na posição 2;\n• o jogador na posição 2 transfere 2 moedas para o jogador na posição 3;\n• o jogador na posição 3 transfere 3 moedas para o jogador na posição 4;\n• o jogador na posição 4 transfere 4 moedas para o jogador na posição 1, completando a rodada.\nAo final da rodada n, qual é a expressão algébrica que representa o número de moedas do jogador na posição 1?",
    "alternativas": {
      "A": "100 + 3n",
      "B": "100 - 3n",
      "C": "100 + 5n",
      "D": "100 - 5n",
      "E": "100 + n"
    },
    "correta": "A",
    "imagem": "https://static.wixstatic.com/media/b05a8a_e539f8bf3ea1415ab6d28523cb7d33f2~mv2.png/v1/fill/w_224,h_222,al_c,lg_1,q_85,enc_avif,quality_auto/26%20-%20Prob_171_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, analisamos o fluxo de moedas do jogador na posição 1 em cada rodada:</p><ul><li>O jogador 1 começa com 100 moedas.</li><li>Ele transfere (perde) 1 moeda para o jogador 2.</li><li>Ele recebe 4 moedas do jogador 4.</li></ul><p>O saldo líquido de moedas por rodada para o jogador 1 é: 4 - 1 = <input data-resposta=\"3\"> moedas.</p><p>Após n rodadas, o ganho total será de 3 vezes n. Somando ao valor inicial, temos a expressão: 100 + 3n.</p>"
    }
  },
  {
    "id": 37,
    "titulo": "Problema 37",
    "enunciado": "Uma pessoa tem um carro bicombustível, que funciona a gás natural veicular (GNV) e a gasolina. O rendimento do carro, medido em km/m3, no caso do gás, ou medido em km/L, no caso da gasolina, depende, entre outros fatores, da velocidade, em km/h, em que o carro trafega. Essa relação está em conformidade com estes gráficos. Durante um feriado, essa pessoa realizou uma viagem de 240 km. Para obter uma estimativa de gasto de combustível, assuma que em todo o trajeto se manteve uma velocidade constante de 60 km/h. Considere que, durante metade do caminho, foi utilizado apenas GNV e, na outra metade, apenas gasolina. O que foi pago pelo metro cúbico de GNV e pelo litro de gasolina correspondeu, respectivamente, a R$ 2,00 e a R$ 3,00. Qual foi a diferença, em real, entre os gastos totais com gasolina e com GNV?",
    "alternativas": {
      "A": "12,00",
      "B": "14,00",
      "C": "20,00",
      "D": "24,00",
      "E": "28,00"
    },
    "correta": "C",
    "imagem": "https://static.wixstatic.com/media/b05a8a_039d187a0b9e4856a8bc82a0b7293c4d~mv2.png/v1/fill/w_490,h_232,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/27%20-%20prob_172_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<div><p>1. Analisando o gráfico para a velocidade de 60 km/h:</p><ul><li>Rendimento GNV: 15 km/m³</li><li>Rendimento Gasolina: 10 km/L</li></ul><p>2. Cálculo para metade do trajeto (120 km):</p><ul><li>Consumo GNV: 120 / 15 = <input data-resposta=\"8\"> m³</li><li>Consumo Gasolina: 120 / 10 = <input data-resposta=\"12\"> L</li></ul><p>3. Cálculo dos gastos:</p><ul><li>Gasto GNV: 8 * 2,00 = R$ 16,00</li><li>Gasto Gasolina: 12 * 3,00 = R$ 36,00</li></ul><p>4. Diferença de gastos:</p>36,00 - 16,00 = R$ <input data-resposta=\"20\"></div>"
    }
  },
  {
    "id": 38,
    "titulo": "Problema 38",
    "enunciado": "Em um país, a primeira etapa para obtenção da carteira de motorista é a contratação de três produtos: pacote com 20 aulas teóricas; pacote com 10 aulas práticas; aluguel do veículo para realização das aulas práticas. Uma pessoa que pretende obter a carteira de motorista pesquisou o valor do aluguel do veículo e os valores de cada aula teórica e de cada aula prática em três autoescolas. O quadro apresenta esses valores. Ela contratará os três produtos numa mesma autoescola de modo que o custo total nessa primeira etapa seja o menor possível. A autoescola que será contratada é a",
    "alternativas": {
      "A": "I, com o custo total de R$ 1 400,00.",
      "B": "II, com o custo total de R$ 280,00.",
      "C": "II, com o custo total de R$ 1 300,00.",
      "D": "III, com o custo total de R$ 460,00.",
      "E": "III, com o custo total de R$ 1 200,00."
    },
    "correta": "E",
    "imagem": "https://static.wixstatic.com/media/b05a8a_c3e801343f7c4e7db4955d7e5cb8cf2a~mv2.png/v1/fill/w_600,h_82,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28%20-%20prob_173_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, devemos calcular o custo total em cada autoescola seguindo a fórmula: (20 &times; valor da aula teórica) + (10 &times; valor da aula prática) + valor do aluguel.</p><ul><li><strong>Autoescola I:</strong> (20 &times; 30) + (10 &times; 40) + 400 = 600 + 400 + 400 = R$ <input data-resposta=\"1400\"></li><li><strong>Autoescola II:</strong> (20 &times; 25) + (10 &times; 50) + 300 = 500 + 500 + 300 = R$ <input data-resposta=\"1300\"></li><li><strong>Autoescola III:</strong> (20 &times; 20) + (10 &times; 60) + 200 = 400 + 600 + 200 = R$ <input data-resposta=\"1200\"></li></ul><p>Comparando os valores, a Autoescola III oferece o menor custo total.</p>"
    }
  },
  {
    "id": 39,
    "titulo": "Problema 39",
    "enunciado": "Uma caixa de descarga, acoplada a um vaso sanitário, tem a forma de paralelepípedo reto retângulo cujas dimensões internas da base são 2,5 dm e 1,5 dm. Nessa caixa há uma boia que interrompe o abastecimento quando a altura da coluna de água atinge 2 dm, conforme a figura. A cada acionamento da descarga, todo o volume de água contida na caixa é despejado no vaso. Para reduzir o volume de água despejado a cada acionamento, uma pessoa colocará, no interior dessa caixa, garrafas de 300 mL, cheias de areia e tampadas, de modo a ficarem submersas quando o abastecimento for interrompido. Para garantir o funcionamento eficiente, o mínimo de água despejada a cada acionamento deve ser de 5 L. A quantidade máxima de garrafas que serão colocadas nessa caixa, garantindo um funcionamento eficiente, é igual a",
    "alternativas": {
      "A": "2",
      "B": "8",
      "C": "9",
      "D": "15",
      "E": "25"
    },
    "correta": "B",
    "imagem": "https://static.wixstatic.com/media/b05a8a_ad1655fb9ad34e0d873c93a5f7bcf3f4~mv2.png/v1/fill/w_600,h_234,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/29%20-%20probl_174.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<div><p>1. Calcule o volume total de água na caixa (V = largura x comprimento x altura): 2,5 dm * 1,5 dm * 2 dm = <input data-resposta=\"7,5\"> L.</p><p>2. Subtraia o volume mínimo necessário para o funcionamento (5 L) do volume total para encontrar o volume que pode ser ocupado pelas garrafas: 7,5 - 5 = <input data-resposta=\"2,5\"> L.</p><p>3. Converta o volume de uma garrafa para litros: 300 mL = <input data-resposta=\"0,3\"> L.</p><p>4. Divida o volume disponível pelo volume de cada garrafa: 2,5 / 0,3 = 8,33... O número máximo de garrafas inteiras é <input data-resposta=\"8\">.</p></div>"
    }
  },
  {
    "id": 40,
    "titulo": "Problema 40",
    "enunciado": "Um confeiteiro passou a produzir tortas em formato de cilindro circular reto, com raio da base variando entre 12 cm e 16 cm e altura de 6 cm. Essas tortas deverão ser embaladas em caixas com formato de prisma reto de base quadrada, de modo que seja possível acomodar a torta em seu interior e ainda restar pelo menos 1 cm de distância entre a torta e as superfícies internas da caixa, lateral e superior. Ele dispõe, originalmente, de caixas no formato pretendido, cujas dimensões internas são 14 cm de comprimento do lado da base e 7 cm de altura, que não atendem às suas necessidades. Portanto, ele comprará novas caixas, com o mesmo formato das caixas originais, mas com comprimento do lado da base maior, que sejam adequadas para embalar todos os tipos de torta que produz. A aresta da base das novas caixas deve ser, no mínimo, quantos centímetros maior do que a das caixas originais?",
    "alternativas": {
      "A": "11",
      "B": "12",
      "C": "19",
      "D": "20",
      "E": "33"
    },
    "correta": "D",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para encontrar a nova aresta, considere o maior raio produzido (16 cm). O diâmetro dessa torta é 32 cm. Como deve haver 1 cm de folga em cada lado, o lado da nova caixa deve ser 32 + 1 + 1 = <input data-resposta=\"34\"> cm. A diferença entre a nova aresta e a original (14 cm) é 34 - 14 = <input data-resposta=\"20\"> cm.</p>"
    }
  },
  {
    "id": 41,
    "titulo": "Problema 41",
    "enunciado": "Um empresário utiliza máquinas cuja pressão interna P, em atmosfera, depende do tempo contínuo de utilização t, em hora, e de um parâmetro positivo K, que define o modelo da máquina, segundo a expressão: P(t) = log₂(Kt + 4). O fabricante dessas máquinas recomenda ao usuário que a pressão interna desse tipo de máquina não ultrapasse 10 atmosferas durante seu funcionamento. O empresário pretende comprar novas máquinas desse tipo que deverão funcionar, diariamente, por um período contínuo de 10 horas. Para isso, precisa definir o modelo de máquina a ser adquirida escolhendo o maior valor possível do parâmetro K, atendendo à recomendação do fabricante. O maior valor a ser escolhido para K é",
    "alternativas": {
      "A": "96",
      "B": "102",
      "C": "102,4",
      "D": "512",
      "E": "1 020"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "Para que a pressão não ultrapasse 10 atmosferas em 10 horas de funcionamento, temos a condição P(10) ≤ 10. <br> Utilizando a expressão P(t) = log₂(Kt + 4): <br> log₂(K · 10 + 4) ≤ 10 <br> 10K + 4 ≤ 2¹⁰ <br> 10K + 4 ≤ 1024 <br> 10K ≤ 1020 <br> K ≤ 1020/10 <br> K ≤ <input data-resposta=\"102\">"
    }
  },
  {
    "id": 42,
    "titulo": "Problema 42",
    "enunciado": "Em uma cidade, será construído um túnel que atravessa uma montanha para facilitar o trânsito de automóveis e bicicletas. Dois projetos foram elaborados e os esquemas com as vistas frontais desses projetos são apresentados na figura. O Projeto 1 conta com dois túneis, um exclusivo para bicicletas e o outro, para automóveis. O Projeto 2 conta com um único túnel, com espaços reservados para o trânsito exclusivo de bicicletas e automóveis. Nos dois projetos, os túneis têm o formato de semicilindro reto de mesma extensão, com vias de ida e volta para os dois tipos de veículos, separados por muretas. O projeto a ser aprovado será aquele que apresentar a menor área da seção transversal, pois implicará menor volume de material retirado da montanha. Considere 3 como aproximação para π e desconsidere as espessuras das muretas. O projeto a ser aprovado é",
    "alternativas": {
      "A": "o Projeto 1, pois sua área é 36 m² menor que a do Projeto 2.",
      "B": "o Projeto 1, pois sua área é 42 m² menor que a do Projeto 2.",
      "C": "o Projeto 1, pois sua área é 108 m² menor que a do Projeto 2.",
      "D": "o Projeto 2, pois sua área é 36 m² menor que a do Projeto 1.",
      "E": "o Projeto 2, pois sua área é 108 m² menor que a do Projeto 1."
    },
    "correta": "A",
    "imagem": "https://static.wixstatic.com/media/b05a8a_82232db401644cebbf87d9b4ccd333c4~mv2.png/v1/fill/w_600,h_169,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/31%20-%20Prob_177.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para o Projeto 1, calculamos a área dos dois semicírculos (raios 6m e 2m): A1 = (1/2 * 3 * 6²) + (1/2 * 3 * 2²) = 54 + 6 = <input data-resposta=\"60\"> m². Para o Projeto 2, o raio total é a soma dos diâmetros do Projeto 1 (6+2=8m), logo a área é A2 = 1/2 * 3 * 8² = <input data-resposta=\"96\"> m². A diferença entre as áreas é 96 - 60 = <input data-resposta=\"36\"> m².</p>"
    }
  },
  {
    "id": 43,
    "titulo": "Problema 43",
    "enunciado": "Um carro que custa 60 mil reais é comercializado por uma revendedora que oferece duas opções de pagamento, todas sem entrada e sem juros:\n• opção 1: pagamento em n parcelas iguais;\n• opção 2: pagamento em 6 parcelas a mais do que na opção 1 e, com isso, o valor de cada parcela se torna R$ 500,00 menor do que o valor da parcela na opção 1.\nNas duas opções de pagamento, o valor total a ser pago pelo carro é o mesmo. Qual é a quantidade n de parcelas contidas na opção 1 de pagamento?",
    "alternativas": {
      "A": "20",
      "B": "24",
      "C": "30",
      "D": "36",
      "E": "40"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Seja <b>p</b> o valor da parcela na opção 1. De acordo com o enunciado, temos o seguinte sistema:</p><p>(i) 60000 = n &middot; p</p><p>(ii) 60000 = (n + 6)(p - 500)</p><p>Substituindo p = 60000/n na segunda equação:</p><p>(n + 6)(60000/n - 500) = 60000</p><p>60000 - 500n + 360000/n - 3000 = 60000</p><p>-500n + 360000/n - 3000 = 0</p><p>Multiplicando toda a equação por n e dividindo por -100, obtemos a equação de segundo grau:</p><p>5n² + 30n - 3600 = 0</p><p>Dividindo por 5:</p><p>n² + 6n - 720 = 0</p><p>Resolvendo a equação, encontramos o valor positivo de n = <input data-resposta=\"24\">.</p>"
    }
  },
  {
    "id": 44,
    "titulo": "Problema 44",
    "enunciado": "Um pai comprou oito presentes diferentes (dentre os quais, uma bicicleta e um celular) para dar a seus três filhos. Ele pretende distribuir os presentes de modo que o filho mais velho e o mais novo recebam três presentes cada um, e o do meio receba os dois presentes restantes. O mais velho ganhará, entre seus presentes, ou uma bicicleta ou um celular, mas não ambos. De quantas maneiras distintas a distribuição dos presentes pode ser feita?",
    "alternativas": {
      "A": "150",
      "B": "300",
      "C": "450",
      "D": "560",
      "E": "600"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Analisaremos as possibilidades para cada filho dividindo em dois casos exclusivos:</p><ul><li><strong>Caso 1: O mais velho ganha a bicicleta (e não o celular).</strong><br>Ele deve escolher mais 2 presentes entre os 6 restantes (excluindo o celular): C(6, 2) = 15. O filho do meio escolhe 2 entre os 5 restantes (incluindo o celular): C(5, 2) = 10. O mais novo fica com os 3 restantes. Total = 15 &times; 10 = 150.</li><li><strong>Caso 2: O mais velho ganha o celular (e não a bicicleta).</strong><br>O cálculo é idêntico ao anterior, pois as restrições são simétricas. Total = 150.</li></ul><p>Somando as duas situações, temos o total de maneiras: 150 + 150 = <input data-resposta=\"300\"></p>"
    }
  },
  {
    "id": 45,
    "titulo": "Problema 45",
    "enunciado": "A final de um campeonato de futebol foi disputada em 2 tempos regulamentares, de 45 minutos cada, sem acréscimos, com uma prorrogação de 30 minutos, também sem acréscimos. Um jogador entrou no início do segundo tempo, com um equipamento para medir a distância percorrida durante sua participação no jogo. Ao final do segundo tempo regulamentar, esse jogador havia percorrido 4,5 km. Ele manteve na prorrogação a mesma velocidade média que havia mantido no segundo tempo regulamentar. A distância percorrida por esse jogador durante sua participação na partida, em quilômetro, foi",
    "alternativas": {
      "A": "4,5",
      "B": "6,0",
      "C": "7,5",
      "D": "9,0",
      "E": "12,0"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>O jogador atuou por 45 minutos no segundo tempo e percorreu 4,5 km. Na prorrogação de 30 minutos, ele manteve a mesma velocidade média.</p><p>Primeiro, calculamos a distância percorrida na prorrogação usando a proporção: (4,5 / 45) * 30 = <input data-resposta=\"3,0\"> km.</p><p>A distância total percorrida durante toda a sua participação (segundo tempo + prorrogação) é: 4,5 + 3,0 = <input data-resposta=\"7,5\"> km.</p>"
    }
  }
];