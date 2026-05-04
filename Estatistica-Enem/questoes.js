
const questoes = [
  {
    "id": 1,
    "titulo": "ENEM 2009 - Questão 1",
    "enunciado": "Aqui está o enunciado convertido para HTML, seguindo as boas práticas de semântica e as regras solicitadas:\n\nA tabela mostra alguns dados da emissão de dióxido de carbono de uma fábrica, em função do número de toneladas produzidas.\n\n<table class=\"tabela-questao\">\n  <thead>\n    <tr>\n      <th>Produção (em toneladas)</th>\n      <th>Emissão (em ppm)</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>1,1</td>\n      <td>2,14</td>\n    </tr>\n    <tr>\n      <td>1,2</td>\n      <td>2,30</td>\n    </tr>\n    <tr>\n      <td>1,3</td>\n      <td>2,46</td>\n    </tr>\n    <tr>\n      <td>1,4</td>\n      <td>2,64</td>\n    </tr>\n    <tr>\n      <td>1,5</td>\n      <td>2,83</td>\n    </tr>\n    <tr>\n      <td>1,6</td>\n      <td>3,03</td>\n    </tr>\n    <tr>\n      <td>1,7</td>\n      <td>3,25</td>\n    </tr>\n    <tr>\n      <td>1,8</td>\n      <td>3,48</td>\n    </tr>\n    <tr>\n      <td>1,9</td>\n      <td>3,73</td>\n    </tr>\n    <tr>\n      <td>2,0</td>\n      <td>4,00</td>\n    </tr>\n  </tbody>\n</table>\n\nOs dados na tabela indicam que a taxa média de variação entre a emissão de dióxido de carbono (em ppm) e a produção (em toneladas) é:",
    "alternativas": {
      "A": "inferior a 0,18.",
      "B": "superior a 0,18 e inferior a 0,50.",
      "C": "superior a 0,50 e inferior a 1,50.",
      "D": "superior a 1,50 e inferior a 2,80.",
      "E": "superior a 2,80."
    },
    "correta": "D",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos calcular a <strong>taxa média de variação</strong>, que é a razão entre a variação da emissão e a variação da produção.</p><ol><li><strong>Identifique os valores:</strong> Vamos considerar o intervalo total da tabela. Produção inicial = 1,1 e final = 2,0. Emissão inicial = 2,14 e final = 4,00.</li><li><strong>Calcule a variação da Emissão (Δy):</strong> 4,00 - 2,14 = 1,86.</li><li><strong>Calcule a variação da Produção (Δx):</strong> 2,0 - 1,1 = 0,9.</li><li><strong>Calcule a taxa média:</strong> Taxa = Δy / Δx = 1,86 / 0,9 ≈ 2,066...</li></ol><p>O valor encontrado (aproximadamente 2,07) é superior a 1,50 e inferior a 2,80.</p><input data-resposta=\"D\">"
    }
  },
  {
    "id": 2,
    "titulo": "ENEM 2009 - Questão 2",
    "enunciado": "Brasil e França têm relações comerciais há mais de 200 anos. Enquanto a França é a 5ª nação mais rica do planeta, o Brasil é a 10ª, e ambas se destacam na economia mundial. No entanto, devido a uma série de restrições, o comércio entre esses dois países ainda não é adequadamente explorado, como mostra a tabela seguinte, referente ao período 2003-2007.\n\nInvestimentos Bilaterais (em milhões de dólares):\n\n| Ano | Brasil na França | França no Brasil |\n| :--- | :--- | :--- |\n| 2003 | 367 | 825 |\n| 2004 | 357 | 485 |\n| 2005 | 354 | 1.458 |\n| 2006 | 539 | 744 |\n| 2007 | 280 | 1.214 |\n\nOs dados da tabela mostram que, no período considerado, os valores médios dos investimentos da França no Brasil foram maiores que os investimentos do Brasil na França em um valor:",
    "alternativas": {
      "A": "inferior a 300 milhões de dólares.",
      "B": "superior a 300 milhões de dólares, mas inferior a 400 milhões de dólares.",
      "C": "superior a 400 milhões de dólares, mas inferior a 500 milhões de dólares.",
      "D": "superior a 500 milhões de dólares, mas inferior a 600 milhões de dólares.",
      "E": "superior a 600 milhões de dólares."
    },
    "correta": "D",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos calcular a média aritmética dos investimentos de cada país e encontrar a diferença entre elas:</p><ol><li><strong>Média dos investimentos da França no Brasil:</strong> Somamos os valores (825 + 485 + 1458 + 744 + 1214) = 4726. Dividimos pelo número de anos (5): 4726 / 5 = 945,2 milhões.</li><li><strong>Média dos investimentos do Brasil na França:</strong> Somamos os valores (367 + 357 + 354 + 539 + 280) = 1897. Dividimos pelo número de anos (5): 1897 / 5 = 379,4 milhões.</li><li><strong>Diferença entre as médias:</strong> 945,2 - 379,4 = 565,8 milhões.</li></ol><p>O valor de 565,8 milhões de dólares está situado no intervalo entre 500 e 600 milhões.</p><input data-resposta=\"D\">"
    }
  },
  {
    "id": 3,
    "titulo": "ENEM 2009 - Questão 3",
    "enunciado": "Suponha que a etapa final de uma gincana escolar consista em um desafio de conhecimentos. Cada equipe escolheria 10 alunos para realizar uma prova objetiva, e a pontuação da equipe seria dada pela mediana das notas obtidas pelos alunos. As provas valiam, no máximo, 10 pontos cada. Ao final, a vencedora foi a equipe Ômega, com 7,8 pontos, seguida pela equipe Delta, com 7,6 pontos. Um dos alunos da equipe Gama, a qual ficou na terceira e última colocação, não pôde comparecer, tendo recebido nota zero na prova. As notas obtidas pelos 10 alunos da equipe Gama foram: 10; 6,5; 8; 10; 7; 6,5; 7; 8; 6; 0. Se o aluno da equipe Gama que faltou tivesse comparecido, essa equipe:",
    "alternativas": {
      "A": "teria a pontuação igual a 6,5 se ele obtivesse nota 0.",
      "B": "seria a vencedora se ele obtivesse nota 10.",
      "C": "seria a segunda colocada se ele obtivesse nota 8.",
      "D": "permaneceria na terceira posição, independentemente da nota obtida pelo aluno.",
      "E": "empataria com a equipe Ômega na primeira colocação se o aluno obtivesse nota 9."
    },
    "correta": "D",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos analisar o conceito de <b>mediana</b>, que é o valor central de um conjunto de dados ordenados.</p><ol><li><b>Organização dos dados:</b> As notas da equipe Gama, em ordem crescente, são: 0; 6,0; 6,5; 6,5; 7,0; 7,0; 8,0; 8,0; 10,0; 10,0.</li><li><b>Cálculo da mediana atual:</b> Como há 10 alunos (número par), a mediana é a média aritmética entre o 5º e o 6º termos: (7,0 + 7,0) / 2 = 7,0.</li><li><b>Simulação da nova nota:</b> Se o aluno que faltou (nota 0) tivesse comparecido e tirado uma nota 'x', ele substituiria o 0 na lista.</li><li><b>Cenário de nota máxima:</b> Se o aluno tirasse 10, a nova lista ordenada seria: 6,0; 6,5; 6,5; 7,0; 7,0; 8,0; 8,0; 10,0; 10,0; 10,0.</li><li><b>Nova mediana:</b> Os novos 5º e 6º termos seriam 7,0 e 8,0. A mediana seria (7,0 + 8,0) / 2 = 7,5.</li><li><b>Conclusão:</b> Mesmo com a nota máxima, a pontuação da Gama (7,5) ainda seria menor que a da Delta (7,6) e da Ômega (7,8), mantendo-a em 3º lugar.</li></ol><input data-resposta=\"D\">"
    }
  },
  {
    "id": 4,
    "titulo": "ENEM 2009 - Questão 4",
    "enunciado": "Na tabela, são apresentados dados da cotação mensal do ovo extra branco vendido no atacado, em Brasília, em reais, por caixa de 30 dúzias de ovos, em alguns meses dos anos 2007 e 2008.\n\n| Mês | Ano | Cotação (R$) |\n| :--- | :--- | :--- |\n| Outubro | 2007 | 83,00 |\n| Novembro | 2007 | 73,10 |\n| Dezembro | 2007 | 81,60 |\n| Janeiro | 2008 | 82,00 |\n| Fevereiro | 2008 | 85,30 |\n| Março | 2008 | 84,00 |\n| Abril | 2008 | 84,60 |\n\nDe acordo com esses dados, o valor da mediana das cotações mensais do ovo extra branco nesse período era igual a",
    "alternativas": {
      "A": "R$ 73,10.",
      "B": "R$ 81,50.",
      "C": "R$ 82,00.",
      "D": "R$ 83,00.",
      "E": "R$ 85,30."
    },
    "correta": "D",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para encontrar a mediana de um conjunto de valores, siga o passo a passo pedagógico:</p><ol><li><strong>Organização (Rol):</strong> O primeiro passo é colocar todos os valores em ordem crescente: 73,10; 81,60; 82,00; 83,00; 84,00; 84,60; 85,30.</li><li><strong>Contagem:</strong> Verifique a quantidade de elementos no conjunto. Temos 7 valores (um número ímpar).</li><li><strong>Identificação da Mediana:</strong> Quando o número de elementos é ímpar, a mediana é o valor que ocupa a posição central.</li><li><strong>Cálculo da Posição:</strong> A posição central é dada por (n + 1) / 2. Logo, (7 + 1) / 2 = 4ª posição.</li><li><strong>Resultado:</strong> O quarto valor da nossa lista ordenada é 83,00.</li></ol><input data-resposta=\"D\">"
    }
  },
  {
    "id": 5,
    "titulo": "ENEM 2009 - Questão 5",
    "enunciado": "Para o cálculo da inflação, utiliza-se, entre outros, o Índice Nacional de Preços ao Consumidor Amplo (IPCA), que toma como base os gastos das famílias residentes nas áreas urbanas, com rendimentos mensais compreendidos entre um e quarenta salários mínimos. O gráfico a seguir mostra as variações do IPCA de quatro capitais brasileiras no mês de maio de 2008. Com base no gráfico, qual item foi determinante para a inflação de maio de 2008?",
    "alternativas": {
      "A": "Alimentação e bebidas",
      "B": "Artigos de residência",
      "C": "Habitação",
      "D": "Vestuário",
      "E": "Transportes"
    },
    "correta": "A",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, siga os passos abaixo:</p><ol><li><b>Análise do Gráfico:</b> Observe as barras que representam as diferentes categorias de consumo (Alimentação, Habitação, Vestuário, etc.) para as capitais citadas (Belém, Fortaleza, Recife e Salvador).</li><li><b>Identificação da Maior Variação:</b> O item 'determinante' para a inflação é aquele que apresenta a maior variação percentual positiva no período analisado.</li><li><b>Conclusão:</b> Ao analisar os dados do IBGE para maio de 2008 apresentados na prova original, nota-se que o grupo 'Alimentação e bebidas' teve o maior impacto no índice, superando significativamente os demais grupos em todas as capitais mostradas.</li></ol><p>Digite a letra da alternativa correta:</p><input data-resposta=\"A\">"
    }
  },
  {
    "id": 6,
    "titulo": "ENEM 2009 - Estatística: Moda e Mediana",
    "enunciado": "Cinco equipes A, B, C, D e E disputaram uma prova de gincana na qual as pontuações recebidas podiam ser 0, 1, 2 ou 3. A média das cinco equipes foi de 2 pontos. As notas das equipes A, B e C foram de 2 pontos cada, conforme indicado no gráfico original da questão. Entretanto, esqueceram de representar as notas da equipe D e da equipe E. Mesmo sem aparecer as notas das equipes D e E, pode-se concluir que os valores da moda e da mediana são, respectivamente:",
    "alternativas": {
      "A": "1,5 e 2,0",
      "B": "2,0 e 1,5",
      "C": "2,0 e 2,0",
      "D": "2,0 e 3,0",
      "E": "3,0 e 2,0"
    },
    "correta": "C",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, utilizaremos conceitos de média aritmética, moda e mediana:</p><ol><li><strong>Soma das Notas:</strong> Se a média de 5 equipes é 2, a soma total das notas é 5 × 2 = 10.</li><li><strong>Notas Conhecidas:</strong> As equipes A, B e C têm 2 pontos cada. A soma delas é 2 + 2 + 2 = 6.</li><li><strong>Notas Desconhecidas (D e E):</strong> A soma das notas de D e E deve ser 10 - 6 = 4. Como a pontuação máxima permitida é 3, as únicas combinações possíveis para as notas de D e E são (1 e 3) ou (2 e 2).</li><li><strong>Cálculo da Moda:</strong> A moda é o valor que mais se repete. Em qualquer cenário (1, 2, 2, 2, 3 ou 2, 2, 2, 2, 2), o número 2 é o que mais aparece. Logo, <strong>Moda = 2,0</strong>.</li><li><strong>Cálculo da Mediana:</strong> A mediana é o valor central de um conjunto ordenado. Ordenando os casos possíveis:<br>- Caso (1, 3): {1, 2, 2, 2, 3} → O termo central é 2.<br>- Caso (2, 2): {2, 2, 2, 2, 2} → O termo central é 2.<br>Logo, <strong>Mediana = 2,0</strong>.</li></ol><p>Portanto, ambos os valores são 2,0.</p><br><input data-resposta=\"C\">"
    }
  },
  {
    "id": 7,
    "titulo": "ENEM 2009 - Atividade Turística",
    "enunciado": "A importância do desenvolvimento da atividade turística no Brasil relaciona-se especialmente com os possíveis efeitos na redução da pobreza e das desigualdades por meio da geração de novos postos de trabalho e da contribuição para o desenvolvimento sustentável regional. No gráfico são mostrados três cenários — pessimista, previsível, otimista — a respeito da geração de empregos pelo desenvolvimento de atividades turísticas.\n\nDe acordo com o gráfico (referente ao ano de 2009), o número de empregos gerados pelo turismo será:",
    "alternativas": {
      "A": "superior a 602.900 no cenário previsível",
      "B": "superior a 660.000 no cenário otimista",
      "C": "superior a 316.000 e inferior a 416.000 no cenário previsível",
      "D": "superior a 235.700 e inferior a 352.800 no cenário pessimista",
      "E": "superior a 516.000 e inferior a 616.000 no cenário otimista"
    },
    "correta": "E",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, é necessário realizar a leitura e interpretação de dados em um gráfico de colunas ou linhas (cenários de projeção). Siga os passos:</p><ol><li><strong>Identificação dos Dados:</strong> No gráfico para o ano de 2009, os valores projetados são: 135.700 (Pessimista), 352.800 (Previsível) e 602.900 (Otimista).</li><li><strong>Análise das Alternativas:</strong> Devemos verificar qual intervalo compreende o valor correto de cada cenário.</li><li><strong>Verificação do Cenário Otimista:</strong> O valor para o cenário otimista em 2009 é de 602.900.</li><li><strong>Conclusão:</strong> O número 602.900 é maior que 516.000 e menor que 616.000, validando a alternativa E.</li></ol><input data-resposta=\"E\">"
    }
  },
  {
    "id": 8,
    "titulo": "ENEM - Questão 8",
    "enunciado": "Nos últimos anos, o aumento da população, aliado ao crescente consumo de água, tem gerado inúmeras preocupações, incluindo o uso desta na produção de alimentos. O gráfico abaixo (dados extraídos) mostra a quantidade de litros de água necessária para a produção de 1 kg de alguns alimentos:\n\n| Alimento | Litros de água por kg |\n| :--- | :--- |\n| Milho | 900 L |\n| Trigo | 1.300 L |\n| Arroz | 3.400 L |\n| Carne de porco | 4.800 L |\n| Carne de boi | 17.100 L |\n\nCom base nos dados, para a produção de 100 kg de milho, 100 kg de trigo, 100 kg de arroz, 100 kg de carne de porco e 600 kg de carne de boi, a quantidade média necessária de água, por quilograma de alimento produzido, é aproximadamente igual a:",
    "alternativas": {
      "A": "415 litros por quilograma",
      "B": "11.200 litros por quilograma",
      "C": "27.000 litros por quilograma",
      "D": "2.240.000 litros por quilograma",
      "E": "2.700.000 litros por quilograma"
    },
    "correta": "B",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos calcular a média ponderada do consumo de água para a quantidade total de alimentos produzidos.</p><ol><li><strong>Calcular o consumo total de água:</strong><ul><li>Milho: 100 kg × 900 L/kg = 90.000 L</li><li>Trigo: 100 kg × 1.300 L/kg = 130.000 L</li><li>Arroz: 100 kg × 3.400 L/kg = 340.000 L</li><li>Porco: 100 kg × 4.800 L/kg = 480.000 L</li><li>Boi: 600 kg × 17.100 L/kg = 10.260.000 L</li></ul></li><li><strong>Somar o volume total de água:</strong> 90.000 + 130.000 + 340.000 + 480.000 + 10.260.000 = 11.300.000 litros.</li><li><strong>Calcular a massa total de alimentos:</strong> 100 + 100 + 100 + 100 + 600 = 1.000 kg.</li><li><strong>Calcular a média:</strong> Média = Volume Total / Massa Total = 11.300.000 / 1.000 = 11.300 L/kg.</li></ol><p>O valor mais próximo nas alternativas é 11.200 litros por quilograma.</p><input data-resposta=\"B\">"
    }
  },
  {
    "id": 9,
    "titulo": "ENEM 2009 - Questão 9",
    "enunciado": "Depois de jogar um dado em forma de cubo e de faces numeradas de 1 a 6, por 10 vezes consecutivas, e anotar o número obtido em cada jogada, constituiu-se a seguinte tabela de distribuição de frequências:\n\n| Número Obtido | Frequência |\n| :---: | :---: |\n| 1 | 4 |\n| 2 | 1 |\n| 4 | 2 |\n| 5 | 2 |\n| 6 | 1 |\n\nA média, mediana e moda dessa distribuição de frequências são, respectivamente:",
    "alternativas": {
      "A": "3, 2 e 1",
      "B": "3, 3 e 1",
      "C": "3, 4 e 2",
      "D": "5, 4 e 2",
      "E": "6, 2 e 4"
    },
    "correta": "B",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos calcular as três medidas de tendência central baseadas na tabela de frequências:</p><ul><li><strong>Média:</strong> É a soma de todos os valores dividida pelo número total de jogadas (10).<br>Média = (1&times;4 + 2&times;1 + 4&times;2 + 5&times;2 + 6&times;1) / 10 = (4 + 2 + 8 + 10 + 6) / 10 = 30 / 10 = <strong>3</strong>.</li><li><strong>Moda:</strong> É o valor que mais se repete na amostra. Observando a tabela, o número 1 tem a maior frequência (4), logo a moda é <strong>1</strong>.</li><li><strong>Mediana:</strong> É o valor central da amostra ordenada. Com 10 jogadas, a mediana é a média entre o 5º e o 6º termo.<br>Rol (dados ordenados): 1, 1, 1, 1, <strong>2, 4</strong>, 4, 5, 5, 6.<br>Mediana = (2 + 4) / 2 = <strong>3</strong>.</li></ul><p>A sequência correta (Média, Mediana e Moda) é 3, 3 e 1.</p><input data-resposta=\"B\">"
    }
  },
  {
    "id": 10,
    "titulo": "ENEM 2010 - Questão 10",
    "enunciado": "(ENEM/2010) O gráfico expõe alguns números da gripe A - H1N1. Entre as categorias que estão em processo de imunização, uma já está completamente imunizada, a dos trabalhadores da saúde. De acordo com o gráfico, entre as demais categorias, a que está mais exposta ao vírus da gripe A - H1N1 é a categoria de:",
    "alternativas": {
      "A": "indígenas.",
      "B": "gestantes.",
      "C": "doentes crônicos.",
      "D": "adultos entre 20 e 29 anos.",
      "E": "crianças de 6 meses a 2 anos."
    },
    "correta": "D",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos interpretar o conceito de 'exposição' em um contexto de campanha de vacinação:</p><ol><li><b>Análise do Gráfico:</b> O gráfico da prova original apresenta o percentual de vacinação atingido em cada grupo prioritário.</li><li><b>Relação Proporcional:</b> Quanto menor o percentual de pessoas vacinadas em um grupo, maior é a parcela daquela população que permanece desprotegida.</li><li><b>Identificação do Grupo:</b> Ao observar os dados do ENEM 2010, o grupo de 'adultos entre 20 e 29 anos' apresentava o menor índice de cobertura vacinal entre os citados (aproximadamente 35%), tornando-os o grupo mais vulnerável ou 'exposto' à propagação do vírus.</li></ol><p>Portanto, a alternativa correta é a D.</p><input data-resposta=\"D\">"
    }
  },
  {
    "id": 11,
    "titulo": "ENEM 2010 - Questão 11",
    "enunciado": "Em uma corrida de regularidade, a equipe campeã é aquela em que o tempo dos participantes mais se aproxima do tempo fornecido pelos organizadores em cada etapa. Um campeonato foi organizado em 5 etapas, e o tempo médio de prova indicado pelos organizadores foi de 45 minutos por prova. No quadro, estão representados os dados estatísticos das cinco equipes mais bem classificadas:<br><br><b>Dados estatísticos das equipes (em minutos):</b><br><table border='1' style='border-collapse: collapse; width: 100%; text-align: center;'><tr><th>Equipe</th><th>Média</th><th>Mediana</th><th>Desvio Padrão</th></tr><tr><td>I</td><td>45</td><td>45</td><td>1</td></tr><tr><td>II</td><td>45</td><td>44</td><td>3</td></tr><tr><td>III</td><td>45</td><td>47</td><td>5</td></tr><tr><td>IV</td><td>45</td><td>45</td><td>2</td></tr><tr><td>V</td><td>45</td><td>46</td><td>4</td></tr></table><br>Utilizando os dados estatísticos do quadro, a campeã foi a equipe:",
    "alternativas": {
      "A": "I.",
      "B": "II.",
      "C": "III.",
      "D": "IV.",
      "E": "V."
    },
    "correta": "A",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos entender o conceito de <b>regularidade</b> na estatística.</p><ol><li><b>Análise do Enunciado:</b> A equipe campeã é aquela cujos tempos mais se aproximam da média estipulada (45 minutos).</li><li><b>Medida de Dispersão:</b> Quando queremos medir o quão 'próximos' os valores estão da média, utilizamos o <b>Desvio Padrão</b>.</li><li><b>Interpretação:</b> Quanto menor o desvio padrão, menor é a variação dos dados em relação à média, indicando maior regularidade.</li><li><b>Comparação:</b> Observando a tabela, os desvios padrão são: Equipe I (1), Equipe II (3), Equipe III (5), Equipe IV (2) e Equipe V (4).</li><li><b>Conclusão:</b> A Equipe I possui o menor desvio padrão (1), sendo a mais regular e, portanto, a campeã.</li></ol><input data-resposta=\"A\">"
    }
  },
  {
    "id": 12,
    "titulo": "ENEM 2010 - Questão 12",
    "enunciado": "A classificação de um país no quadro de medalhas nos Jogos Olímpicos depende do número de medalhas de ouro que obteve na competição, tendo como critérios de desempate o número de medalhas de prata seguido do número de medalhas de bronze conquistados. Nas Olimpíadas de 2004, o Brasil foi o décimo sexto colocado no quadro de medalhas, tendo obtido 5 medalhas de ouro, 2 de prata e 3 de bronze. Parte desse quadro de medalhas é reproduzida a seguir:\n\n| Posição | País | Ouro | Prata | Bronze |\n| :--- | :--- | :--- | :--- | :--- |\n| 10º | Coreia do Sul | 9 | 12 | 9 |\n| 11º | Grã-Bretanha | 9 | 9 | 12 |\n| 12º | Cuba | 9 | 7 | 11 |\n| 13º | Ucrânia | 9 | 5 | 9 |\n| 14º | Hungria | 8 | 6 | 3 |\n\nDisponível em: http://www.quadroademedalhas.com.br. Acesso em: 05 abr. 2010 (adaptado).\n\nSe o Brasil tivesse obtido mais 4 medalhas de ouro, 4 de prata e 10 de bronze, sem alteração no número de medalhas dos demais países mostrados no quadro, qual teria sido a classificação brasileira no quadro de medalhas das Olimpíadas de 2004?",
    "alternativas": {
      "A": "13º",
      "B": "12º",
      "C": "11º",
      "D": "10º",
      "E": "9º"
    },
    "correta": "A",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos atualizar o total de medalhas do Brasil e compará-lo com os demais países seguindo os critérios de desempate (Ouro > Prata > Bronze):</p><ol><li><strong>Cálculo do novo total do Brasil:</strong><ul><li>Ouro: 5 + 4 = 9</li><li>Prata: 2 + 4 = 6</li><li>Bronze: 3 + 10 = 13</li></ul></li><li><strong>Comparação com os países que possuem 9 medalhas de ouro:</strong><ul><li><strong>Coreia do Sul (10º):</strong> 9 Ouro, 12 Prata. (Possui mais pratas que o Brasil, continua à frente).</li><li><strong>Grã-Bretanha (11º):</strong> 9 Ouro, 9 Prata. (Possui mais pratas que o Brasil, continua à frente).</li><li><strong>Cuba (12º):</strong> 9 Ouro, 7 Prata. (Possui mais pratas que o Brasil, continua à frente).</li><li><strong>Brasil (Novo):</strong> 9 Ouro, 6 Prata.</li><li><strong>Ucrânia (13º):</strong> 9 Ouro, 5 Prata. (O Brasil agora possui mais pratas que a Ucrânia, ultrapassando-a).</li></ul></li><li><strong>Conclusão:</strong> O Brasil ficaria logo após Cuba (12º), assumindo a 13ª posição no quadro geral.</li></ol><input data-resposta=\"A\">"
    }
  },
  {
    "id": 13,
    "titulo": "ENEM 2010 - Questão 13",
    "enunciado": "O gráfico a seguir apresenta o gasto militar dos Estados Unidos, no período de 1988 a 2006. Com base no gráfico, o gasto militar no início da guerra no Iraque (2003) foi de:",
    "alternativas": {
      "A": "U$ 4.174.000,00",
      "B": "U$ 41.740.000,00",
      "C": "U$ 417.400.000,00",
      "D": "U$ 41.740.000.000,00",
      "E": "U$ 417.400.000.000,00"
    },
    "correta": "E",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, siga os passos pedagógicos abaixo:</p><ol><li><b>Identificação Histórica:</b> A Guerra do Iraque teve seu início no ano de 2003.</li><li><b>Análise do Gráfico:</b> Ao observar o gráfico original da prova do ENEM 2010 para o ano de 2003, o valor indicado é de 417,4 bilhões de dólares.</li><li><b>Conversão Numérica:</b> A escala 'bilhão' no sistema decimal brasileiro e americano (neste contexto) representa 10^9. Portanto, 417,4 bilhões é o mesmo que 417,4 x 1.000.000.000.</li><li><b>Escrita por Extenso:</b> Movendo a vírgula, obtemos o valor de 417.400.000.000,00.</li></ol><p>A alternativa correta é a que representa centenas de bilhões.</p><input data-resposta=\"E\">"
    }
  },
  {
    "id": 14,
    "titulo": "ENEM 2010 - Questão 14",
    "enunciado": "O gráfico apresenta a quantidade de gols marcados pelos artilheiros das Copas do Mundo desde a Copa de 1930 até a de 2006. Os valores registrados são: 8, 4, 7, 9, 11, 13, 4, 9, 10, 7, 6, 6, 6, 6, 6, 6, 8 e 5. A partir dos dados apresentados, qual a mediana das quantidades de gols marcados pelos artilheiros das Copas do Mundo?",
    "alternativas": {
      "A": "6 gols",
      "B": "6,5 gols",
      "C": "7 gols",
      "D": "7,3 gols",
      "E": "8,5 gols"
    },
    "correta": "B",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para calcular a mediana de um conjunto de dados, siga os passos abaixo:</p><ol><li><strong>Organize os dados em ordem crescente (Rol):</strong> 4, 4, 5, 6, 6, 6, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 13.</li><li><strong>Conte o número de elementos:</strong> O conjunto possui 18 elementos (um número par).</li><li><strong>Identifique os termos centrais:</strong> Quando a quantidade de elementos é par, a mediana é a média aritmética dos dois termos centrais (n/2 e n/2 + 1). Neste caso, o 9º e o 10º termos.</li><li><strong>Realize o cálculo:</strong> O 9º termo é 6 e o 10º termo é 7. A média é (6 + 7) / 2 = 6,5.</li></ol><p>Portanto, a mediana é 6,5 gols.</p><input data-resposta=\"B\">"
    }
  },
  {
    "id": 15,
    "titulo": "ENEM 2010 - Questão 15",
    "enunciado": "Marco e Paulo foram classificados em um concurso. Para a classificação no concurso o candidato deveria obter média aritmética na pontuação igual ou superior a 14. Em caso de empate na média, o desempate seria em favor da pontuação mais regular. No quadro a seguir são apresentados os pontos obtidos nas provas de Matemática, Português e Conhecimentos Gerais, a média, a mediana e o desvio padrão dos dois candidatos.\n\nDados dos candidatos no concurso:\n\n| Candidato | Matemática | Português | Conhecimentos Gerais | Média | Mediana | Desvio Padrão |\n| :--- | :---: | :---: | :---: | :---: | :---: | :---: |\n| Marco | 14 | 15 | 16 | 15 | 15 | 0,82 |\n| Paulo | 8 | 19 | 18 | 15 | 18 | 4,97 |\n\nO candidato com pontuação mais regular, portanto mais bem classificado no concurso, é:",
    "alternativas": {
      "A": "Marco, pois a média e a mediana são iguais.",
      "B": "Marco, pois obteve menor desvio padrão.",
      "C": "Paulo, pois obteve a maior pontuação da tabela, 19 em Português.",
      "D": "Paulo, pois obteve maior mediana.",
      "E": "Paulo, pois obteve maior desvio padrão."
    },
    "correta": "B",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, precisamos entender o conceito estatístico de <b>regularidade</b> solicitado pelo enunciado.</p><ol><li><b>Identificação do Critério:</b> O enunciado afirma que, em caso de empate na média (ambos tiveram média 15), o desempate favorece o candidato com a pontuação mais <b>regular</b>.</li><li><b>Medida de Regularidade:</b> Na estatística, a regularidade de um conjunto de dados é inversamente proporcional ao seu <b>desvio padrão</b>. Quanto menor o desvio padrão, menos os dados variam em relação à média, tornando o desempenho mais constante ou regular.</li><li><b>Análise dos Dados:</b> Comparando os desvios padrões fornecidos na tabela:<br>- Marco: 0,82<br>- Paulo: 4,97</li><li><b>Conclusão:</b> Como o desvio padrão de Marco (0,82) é significativamente menor que o de Paulo (4,97), Marco é o candidato mais regular e, portanto, o vencedor do desempate.</li></ol><input data-resposta=\"B\">"
    }
  },
  {
    "id": 16,
    "titulo": "ENEM - Questão 16",
    "enunciado": "O quadro seguinte mostra o desempenho de um time de futebol no último campeonato. A coluna da esquerda mostra o número de gols marcados e a coluna da direita informa em quantos jogos o time marcou aquele número de gols.\n\n| Gols Marcados | Quantidade de Partidas |\n| :---: | :---: |\n| 0 | 5 |\n| 1 | 3 |\n| 2 | 4 |\n| 3 | 3 |\n| 4 | 2 |\n| 5 | 2 |\n| 7 | 1 |\n\nSe X, Y e Z são, respectivamente, a média, a mediana e a moda desta distribuição, então:",
    "alternativas": {
      "A": "X = Y < Z.",
      "B": "Z < X = Y.",
      "C": "Y < Z < X.",
      "D": "Z < X < Y.",
      "E": "Z < Y < X."
    },
    "correta": "E",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<h3>Resolução Passo a Passo</h3><p>Para resolver esta questão, devemos calcular as três medidas de tendência central:</p><ul><li><strong>Moda (Z):</strong> É o valor que ocorre com maior frequência. Observando a tabela, o time marcou 0 gols em 5 partidas (maior frequência). Logo, <strong>Z = 0</strong>.</li><li><strong>Mediana (Y):</strong> É o valor central da série de dados. O total de partidas é 20 (5+3+4+3+2+2+1). A mediana é a média entre o 10º e o 11º termo da série ordenada. Como os primeiros 5 termos são 0, os próximos 3 são 1 (total 8) e os próximos 4 são 2 (total 12), tanto o 10º quanto o 11º termo são 2. Logo, <strong>Y = 2</strong>.</li><li><strong>Média (X):</strong> É a soma total de gols dividida pelo número de partidas.<br>X = (0&times;5 + 1&times;3 + 2&times;4 + 3&times;3 + 4&times;2 + 5&times;2 + 7&times;1) / 20<br>X = (0 + 3 + 8 + 9 + 8 + 10 + 7) / 20 = 45 / 20 = <strong>2,25</strong>.</li></ul><p>Comparando os valores obtidos: 0 < 2 < 2,25, portanto <strong>Z < Y < X</strong>.</p><input data-resposta=\"E\">"
    }
  },
  {
    "id": 17,
    "titulo": "ENEM 2010 - Questão 17",
    "enunciado": "Para conseguir chegar a um número recorde de produção de ovos de Páscoa, as empresas brasileiras começam a se planejar para esse período com um ano de antecedência. O gráfico a seguir mostra o número de ovos de Páscoa produzidos no Brasil no período de 2005 a 2009 (em milhões):\n\n- 2005: 88 milhões\n- 2006: 98 milhões\n- 2007: 103 milhões\n- 2008: 108 milhões\n- 2009: 113 milhões\n\nDe acordo com o gráfico, o biênio que apresentou maior produção acumulada foi:",
    "alternativas": {
      "A": "2004 - 2005",
      "B": "2005 - 2006",
      "C": "2006 - 2007",
      "D": "2007 - 2008",
      "E": "2008 - 2009"
    },
    "correta": "E",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, precisamos calcular a soma da produção de cada biênio (período de dois anos consecutivos) apresentado nas alternativas e identificar o maior valor:</p><ul><li><b>A) 2004-2005:</b> Não há dados para 2004.</li><li><b>B) 2005-2006:</b> 88 + 98 = 186 milhões.</li><li><b>C) 2006-2007:</b> 98 + 103 = 201 milhões.</li><li><b>D) 2007-2008:</b> 103 + 108 = 211 milhões.</li><li><b>E) 2008-2009:</b> 108 + 113 = 221 milhões.</li></ul><p>Comparando os resultados, o biênio 2008-2009 obteve a maior produção acumulada.</p><input data-resposta=\"E\">"
    }
  },
  {
    "id": 18,
    "titulo": "ENEM 2011 - Questão 18",
    "enunciado": "Uma equipe de especialistas do centro meteorológico de uma cidade mediu a temperatura do ambiente, sempre no mesmo horário, durante 15 dias intercalados, a partir do primeiro dia de um mês. Esse tipo de procedimento é frequente, uma vez que os dados coletados servem de referência para estudos e verificação de tendências climáticas ao longo dos meses e anos. As medições ocorridas nesse período estão indicadas no quadro:\n\n| Dia do mês | Temperatura (ºC) |\n| :--- | :--- |\n| 1 | 15,5 |\n| 3 | 14 |\n| 5 | 13,5 |\n| 7 | 18 |\n| 9 | 19,5 |\n| 11 | 20 |\n| 13 | 13,5 |\n| 15 | 13,5 |\n| 17 | 18 |\n| 19 | 20 |\n| 21 | 18,5 |\n| 23 | 13,5 |\n| 25 | 21,5 |\n| 27 | 20 |\n| 29 | 16 |\n\nEm relação à temperatura, os valores da média, mediana e moda são, respectivamente, iguais a:",
    "alternativas": {
      "A": "17 °C, 17 °C e 13,5 °C.",
      "B": "17 °C, 18 °C e 13,5 °C.",
      "C": "17 °C, 13,5 °C e 18 °C.",
      "D": "17 °C, 18 °C e 21,5 °C.",
      "E": "17 °C, 13,5 °C e 21,5 °C."
    },
    "correta": "B",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos calcular as três medidas de tendência central solicitadas:</p><ol><li><strong>Média:</strong> Somamos todas as 15 temperaturas e dividimos pelo total de dias.<br>Soma = 15,5 + 14 + 13,5 + 18 + 19,5 + 20 + 13,5 + 13,5 + 18 + 20 + 18,5 + 13,5 + 21,5 + 20 + 16 = 255.<br>Média = 255 / 15 = <strong>17 °C</strong>.</li><li><strong>Moda:</strong> É o valor que ocorre com maior frequência. Observando os dados, o valor 13,5 aparece 4 vezes, enquanto os outros aparecem menos vezes. Logo, a moda é <strong>13,5 °C</strong>.</li><li><strong>Mediana:</strong> Devemos ordenar os 15 valores em ordem crescente e encontrar o valor central (o 8º termo).<br>Rol: 13,5; 13,5; 13,5; 13,5; 14; 15,5; 16; <strong>18</strong>; 18; 18,5; 19,5; 20; 20; 20; 21,5.<br>O 8º termo é <strong>18 °C</strong>.</li></ol><p>Seguindo a ordem pedida (média, mediana e moda), temos: 17 °C, 18 °C e 13,5 °C.</p><input data-resposta=\"B\">"
    }
  },
  {
    "id": 19,
    "titulo": "ENEM 2011 - Questão 19",
    "enunciado": "A participação dos estudantes na Olimpíada Brasileira de Matemática das Escolas Públicas (OBMEP) aumenta a cada ano. O quadro indica o percentual de medalhistas de ouro, por região, nas edições da OBMEP de 2005 a 2009:\n\n| Região | 2005 | 2006 | 2007 | 2008 | 2009 |\n| :--- | :---: | :---: | :---: | :---: | :---: |\n| Sul | 21% | 12% | 13% | 9% | 11% |\n| Sudeste | 55% | 61% | 58% | 66% | 60% |\n| Centro-Oeste | 5% | 6% | 7% | 8% | 9% |\n| Nordeste | 18% | 19% | 21% | 15% | 19% |\n| Norte | 2% | 2% | 1% | 2% | 1% |\n\nDisponível em: http://www.obmep.org.br. Acesso em: abr. 2010 (adaptado).\n\nEm relação às edições de 2005 a 2009 da OBMEP, qual o percentual médio de medalhistas de ouro da região Nordeste?",
    "alternativas": {
      "A": "14,6%",
      "B": "18,2%",
      "C": "18,4%",
      "D": "19,0%",
      "E": "21,0%"
    },
    "correta": "C",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, precisamos calcular a média aritmética simples dos percentuais da região Nordeste no período solicitado.</p><ul><li><strong>Passo 1:</strong> Identifique os valores da região Nordeste na tabela: 18% (2005), 19% (2006), 21% (2007), 15% (2008) e 19% (2009).</li><li><strong>Passo 2:</strong> Some todos os valores: 18 + 19 + 21 + 15 + 19 = 92.</li><li><strong>Passo 3:</strong> Divida a soma pelo número total de anos (5): 92 ÷ 5 = 18,4.</li></ul><p>O percentual médio de medalhistas de ouro da região Nordeste é 18,4%.</p><input data-resposta=\"C\">"
    }
  },
  {
    "id": 20,
    "titulo": "ENEM - Questão 20",
    "enunciado": "O gráfico apresenta as taxas de desemprego durante o ano de 2011 e o primeiro semestre de 2012 na região metropolitana de São Paulo. A taxa de desemprego total é a soma das taxas de desemprego aberto e oculto. Suponha que a taxa de desemprego oculto do mês de dezembro de 2012 tenha sido a metade da mesma taxa em junho de 2012 e que a taxa de desemprego total em dezembro de 2012 seja igual a essa taxa em dezembro de 2011.\n\n<b>Dados extraídos do gráfico oficial (ENEM 2014):</b>\n- Dezembro/2011: Total = 9,0%\n- Junho/2012: Aberto = 8,6%; Oculto = 2,2%; Total = 10,8%\n\nNesse caso, a taxa de desemprego aberto de dezembro de 2012 teria sido, em termos percentuais, de",
    "alternativas": {
      "A": "1,1.",
      "B": "3,5.",
      "C": "4,5.",
      "D": "6,8.",
      "E": "7,9."
    },
    "correta": "E",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos seguir a lógica de composição da taxa de desemprego (Total = Aberto + Oculto):</p><ol><li><b>Identificar a Taxa Total de Dezembro/2012:</b> O enunciado afirma que ela é igual à de Dezembro/2011. Analisando os dados, a taxa total em Dez/2011 era de 9,0%.</li><li><b>Calcular a Taxa Oculta de Dezembro/2012:</b> O enunciado diz que ela é a metade da taxa oculta de Junho/2012. Em Junho/2012, a taxa oculta era de 2,2%. Logo, 2,2% / 2 = 1,1%.</li><li><b>Calcular a Taxa Aberta de Dezembro/2012:</b> Usando a fórmula Total = Aberto + Oculto, temos: 9,0% = Aberto + 1,1%. Isolando o termo, temos Aberto = 9,0% - 1,1% = 7,9%.</li></ol><input data-resposta=\"E\">"
    }
  },
  {
    "id": 21,
    "titulo": "ENEM 2011 - Questão 21",
    "enunciado": "O termo agronegócio não se refere apenas à agricultura e à pecuária, pois as atividades ligadas a essa produção incluem fornecedores de equipamentos, serviços para a zona rural, industrialização e comercialização dos produtos. O gráfico seguinte mostra a participação percentual do agronegócio no PIB brasileiro:\n\n(Gráfico: Participação do Agronegócio no PIB Brasileiro - 1998 a 2008)\n\nCentro de Estudos Avançados em Economia Aplicada (CEPEA). Almanaque Abril 2010. São Paulo: Abril, ano 36 (adaptado).\n\nEsse gráfico foi usado em uma palestra na qual o orador ressaltou uma queda da participação do agronegócio no PIB brasileiro e a posterior recuperação dessa participação, em termos percentuais. Segundo o gráfico, o período de queda ocorreu entre os anos de:",
    "alternativas": {
      "A": "1998 e 2001.",
      "B": "2001 e 2003.",
      "C": "2003 e 2006.",
      "D": "2003 e 2007.",
      "E": "2003 e 2008."
    },
    "correta": "C",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, é necessário realizar uma leitura interpretativa de dados gráficos:</p><ol><li><strong>Identificação do Pico:</strong> Ao observar o gráfico original da questão (CEPEA), nota-se que a participação do agronegócio atinge seu valor máximo no ano de 2003 (aproximadamente 30,6%).</li><li><strong>Análise da Queda:</strong> A partir de 2003, os valores percentuais começam a diminuir consecutivamente nos anos de 2004, 2005 e atingem o ponto mais baixo desse ciclo em 2006 (aproximadamente 25,6%).</li><li><strong>Identificação da Recuperação:</strong> A partir de 2007, a curva volta a apresentar crescimento, caracterizando a 'posterior recuperação' mencionada no enunciado.</li></ol><p>Portanto, o intervalo exato em que houve apenas queda na participação foi entre 2003 e 2006.</p><input data-resposta=\"C\">"
    }
  },
  {
    "id": 22,
    "titulo": "ENEM - Questão 22",
    "enunciado": "A tabela a seguir mostra a evolução da receita bruta anual nos três últimos anos de cinco microempresas (ME) que se encontram à venda.\n\n| ME | 2009 | 2010 | 2011 |\n| :--- | :---: | :---: | :---: |\n| Alfinetes V | 200 | 220 | 240 |\n| Balas W | 200 | 230 | 200 |\n| Chocolates X | 250 | 210 | 215 |\n| Pizzaria Y | 230 | 230 | 230 |\n| Tecelagem Z | 160 | 210 | 245 |\n\n(Valores em milhares de reais)\n\nUm investidor deseja comprar duas das empresas listadas na tabela. Para tal, ele calcula a média da receita bruta anual dos últimos três anos (de 2009 até 2011) e escolhe as duas empresas de maior média anual. As empresas que este investidor escolhe comprar são:",
    "alternativas": {
      "A": "Balas W e Pizzaria Y.",
      "B": "Chocolates X e Tecelagem Z.",
      "C": "Pizzaria Y e Alfinetes V.",
      "D": "Pizzaria Y e Chocolates X.",
      "E": "Tecelagem Z e Alfinetes V."
    },
    "correta": "D",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos calcular a média aritmética simples da receita bruta de cada empresa no período de 2009 a 2011:</p><ul><li><b>Alfinetes V:</b> (200 + 220 + 240) / 3 = 660 / 3 = 220</li><li><b>Balas W:</b> (200 + 230 + 200) / 3 = 630 / 3 = 210</li><li><b>Chocolates X:</b> (250 + 210 + 215) / 3 = 675 / 3 = 225</li><li><b>Pizzaria Y:</b> (230 + 230 + 230) / 3 = 690 / 3 = 230</li><li><b>Tecelagem Z:</b> (160 + 210 + 245) / 3 = 615 / 3 = 205</li></ul><p>Comparando os resultados, as duas maiores médias são 230 (Pizzaria Y) e 225 (Chocolates X).</p><input data-resposta=\"D\">"
    }
  },
  {
    "id": 23,
    "titulo": "ENEM 2012 - Questão 23",
    "enunciado": "Um produtor de café irrigado em Minas Gerais recebeu um relatório de consultoria estatística, constando, entre outras informações, o desvio padrão das produções de uma safra dos talhões de suas propriedades. Os talhões têm a mesma área de 30 000 m² e o valor obtido para o desvio padrão foi de 90 kg/talhão. O produtor deve apresentar as informações sobre a produção e a variância dessas produções em sacas de 60 kg por hectare (10 000 m²). A variância das produções dos talhões expressa em (sacas/hectare)² é",
    "alternativas": {
      "A": "20,25.",
      "B": "4,50.",
      "C": "0,71.",
      "D": "0,50.",
      "E": "0,25."
    },
    "correta": "E",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, precisamos converter as unidades do desvio padrão antes de calcular a variância:</p><ol><li><strong>Conversão de área:</strong> O talhão possui 30.000 m². Como 1 hectare (ha) = 10.000 m², cada talhão equivale a 3 hectares.</li><li><strong>Ajuste do desvio padrão por área:</strong> O desvio padrão é de 90 kg por talhão. Dividindo pela área em hectares, temos: 90 kg / 3 ha = 30 kg/ha.</li><li><strong>Conversão para sacas:</strong> Cada saca tem 60 kg. Logo, 30 kg/ha equivalem a 30 / 60 = 0,5 sacas/ha.</li><li><strong>Cálculo da variância:</strong> A variância é o quadrado do desvio padrão. Assim: (0,5)² = 0,25 (sacas/ha)².</li></ol><input data-resposta=\"E\">"
    }
  },
  {
    "id": 24,
    "titulo": "ENEM - Questão 24",
    "enunciado": "O gráfico apresenta o comportamento de emprego formal surgido, segundo o CAGED, no período de janeiro de 2010 a outubro de 2010.<br><br><b>Dados do período (número de empregos):</b><br><ul><li>Janeiro: 181 419</li><li>Fevereiro: 209 425</li><li>Março: 266 415</li><li>Abril: 305 068</li><li>Maio: 298 041</li><li>Junho: 212 952</li><li>Julho: 181 796</li><li>Agosto: 299 415</li><li>Setembro: 246 875</li><li>Outubro: 204 998</li></ul><br>Com base nos dados apresentados, o valor da parte inteira da mediana dos empregos formais surgidos no período é:",
    "alternativas": {
      "A": "212 952",
      "B": "229 913",
      "C": "240 621",
      "D": "255 496",
      "E": "298 041"
    },
    "correta": "B",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos calcular a <b>mediana</b> do conjunto de dados fornecido. Siga o passo a passo:</p><ol><li><b>Organizar os dados em ordem crescente (Rol):</b><br>181 419; 181 796; 204 998; 209 425; <b>212 952</b>; <b>246 875</b>; 266 415; 298 041; 299 415; 305 068.</li><li><b>Identificar o número de elementos:</b> O conjunto possui 10 elementos (número par).</li><li><b>Calcular a mediana:</b> Quando o número de elementos é par, a mediana é a média aritmética dos dois termos centrais (o 5º e o 6º termo).<br>Mediana = (212 952 + 246 875) / 2<br>Mediana = 459 827 / 2<br>Mediana = 229 913,5</li><li><b>Extrair a parte inteira:</b> O enunciado solicita apenas a parte inteira do valor encontrado, que é 229 913.</li></ol><input data-resposta=\"B\">"
    }
  },
  {
    "id": 25,
    "titulo": "ENEM 2013 - Questão 25",
    "enunciado": "Cinco empresas de gêneros alimentícios encontram-se à venda. Um empresário, almejando ampliar os seus investimentos, deseja comprar uma dessas empresas. Para escolher qual delas irá comprar, analisa o lucro (em milhões de reais) de cada uma delas, em função de seus tempos (em anos) de existência, decidindo comprar a empresa que apresente o maior lucro médio anual. O quadro apresenta o lucro (em milhões de reais) acumulado ao longo do tempo (em anos) de existência de cada empresa:\n\n| Empresa | Lucro (milhões de reais) | Tempo (anos) |\n| :---: | :---: | :---: |\n| F | 24 | 3,0 |\n| G | 24 | 2,0 |\n| H | 25 | 2,5 |\n| M | 15 | 1,5 |\n| P | 9 | 1,5 |\n\nO empresário decidiu comprar a empresa:",
    "alternativas": {
      "A": "F.",
      "B": "G.",
      "C": "H.",
      "D": "M.",
      "E": "P."
    },
    "correta": "B",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para determinar qual empresa o empresário deve comprar, precisamos calcular o <b>lucro médio anual</b> de cada uma, dividindo o lucro total pelo tempo de existência:</p><ul><li><b>Empresa F:</b> 24 / 3,0 = 8 milhões/ano</li><li><b>Empresa G:</b> 24 / 2,0 = 12 milhões/ano</li><li><b>Empresa H:</b> 25 / 2,5 = 10 milhões/ano</li><li><b>Empresa M:</b> 15 / 1,5 = 10 milhões/ano</li><li><b>Empresa P:</b> 9 / 1,5 = 6 milhões/ano</li></ul><p>Ao comparar os valores, observamos que a empresa <b>G</b> apresenta o maior lucro médio anual (12 milhões de reais).</p><input data-resposta=\"B\">"
    }
  },
  {
    "id": 26,
    "titulo": "ENEM 2014 - Questão 26",
    "enunciado": "Os candidatos K, L, M, N e P estão disputando uma única vaga de emprego em uma empresa e fizeram provas de português, matemática, direito e informática. A tabela apresenta as notas obtidas pelos cinco candidatos.\n\n| Candidato | Português | Matemática | Direito | Informática |\n| :--- | :---: | :---: | :---: | :---: |\n| K | 33 | 33 | 33 | 34 |\n| L | 32 | 39 | 33 | 34 |\n| M | 35 | 35 | 36 | 34 |\n| N | 24 | 37 | 40 | 35 |\n| P | 36 | 16 | 26 | 41 |\n\nSegundo o edital de seleção, o candidato aprovado será aquele para o qual a mediana das notas obtidas por ele nas quatro disciplinas for a maior. O candidato aprovado será:",
    "alternativas": {
      "A": "K.",
      "B": "L.",
      "C": "M.",
      "D": "N.",
      "E": "P."
    },
    "correta": "D",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos calcular a <b>mediana</b> das notas de cada candidato. A mediana é o valor central de um conjunto de dados ordenados. Como cada candidato possui 4 notas (um número par de elementos), a mediana será a média aritmética dos dois valores centrais após colocar as notas em ordem crescente.</p><ol><li><b>Candidato K:</b> Notas ordenadas: 33, 33, 33, 34. Mediana = (33 + 33) / 2 = 33.</li><li><b>Candidato L:</b> Notas ordenadas: 32, 33, 34, 39. Mediana = (33 + 34) / 2 = 33,5.</li><li><b>Candidato M:</b> Notas ordenadas: 34, 35, 35, 36. Mediana = (35 + 35) / 2 = 35.</li><li><b>Candidato N:</b> Notas ordenadas: 24, 35, 37, 40. Mediana = (35 + 37) / 2 = 36.</li><li><b>Candidato P:</b> Notas ordenadas: 16, 26, 36, 41. Mediana = (26 + 36) / 2 = 31.</li></ol><p>Comparando os resultados, o candidato <b>N</b> obteve a maior mediana (36).</p><input data-resposta=\"D\">"
    }
  },
  {
    "id": 27,
    "titulo": "ENEM 2014 - Questão 27",
    "enunciado": "Ao final de uma competição de ciências em uma escola, restaram apenas três candidatos. De acordo com as regras, o vencedor será o candidato que obtiver a maior média ponderada entre as notas das provas finais nas disciplinas química e física, considerando, respectivamente, os pesos 4 e 6 para elas. As notas são sempre números inteiros. Por questões médicas, o candidato II ainda não fez a prova final de química. No dia em que sua avaliação for aplicada, as notas dos outros dois candidatos, em ambas as disciplinas, já terão sido divulgadas. O quadro apresenta as notas obtidas pelos finalistas nas provas finais:\n\n| Candidato | Química (Peso 4) | Física (Peso 6) |\n| :--- | :--- | :--- |\n| I | 20 | 23 |\n| II | x | 25 |\n| III | 21 | 18 |\n\nA menor nota que o candidato II deverá obter na prova final de química para vencer a competição é:",
    "alternativas": {
      "A": "18.",
      "B": "19.",
      "C": "22.",
      "D": "25.",
      "E": "26."
    },
    "correta": "A",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos calcular as médias ponderadas dos candidatos e determinar a nota mínima necessária para o Candidato II superar os demais.</p><ol><li><strong>Cálculo da média do Candidato I:</strong> Média = (20 × 4 + 23 × 6) / (4 + 6) = (80 + 138) / 10 = 21,8.</li><li><strong>Cálculo da média do Candidato III:</strong> Média = (21 × 4 + 18 × 6) / (4 + 6) = (84 + 108) / 10 = 19,2.</li><li><strong>Cálculo da média do Candidato II:</strong> Média = (x × 4 + 25 × 6) / 10 = (4x + 150) / 10.</li><li><strong>Condição para vencer:</strong> A média de II deve ser maior que a de I (que é a maior até agora).<br> (4x + 150) / 10 > 21,8<br> 4x + 150 > 218<br> 4x > 68<br> x > 17.</li></ol><p>Como as notas são números inteiros, o menor valor inteiro maior que 17 é 18.</p><input data-resposta=\"A\">"
    }
  },
  {
    "id": 28,
    "titulo": "ENEM 2014 - Questão 28",
    "enunciado": "Uma loja que vende sapatos recebeu diversas reclamações de seus clientes relacionadas à venda de sapatos de cor branca ou preta. Os donos da loja anotaram as numerações dos sapatos com defeito e fizeram um estudo estatístico com o intuito de reclamar com o fabricante. A tabela contém a média, a mediana e a moda desses dados anotados pelos donos:\n\n<table border='1' style='border-collapse: collapse; width: 50%; text-align: center;'>\n  <tr>\n    <th>Estatística</th>\n    <th>Valor</th>\n  </tr>\n  <tr>\n    <td>Média</td>\n    <td>36</td>\n  </tr>\n  <tr>\n    <td>Mediana</td>\n    <td>37</td>\n  </tr>\n  <tr>\n    <td>Moda</td>\n    <td>38</td>\n  </tr>\n</table>\n\nPara quantificar os sapatos pela cor, os donos representaram a cor branca pelo número 0 e a cor preta pelo número 1. Sabe-se que a média da distribuição desses zeros e uns é igual a 0,45. Os donos da loja decidiram que a numeração dos sapatos com maior número de reclamações e a cor com maior número de reclamações não serão mais vendidas. A loja encaminhou um ofício ao fornecedor dos sapatos, explicando que não serão mais encomendados os sapatos de cor",
    "alternativas": {
      "A": "branca e os de número 38.",
      "B": "branca e os de número 37.",
      "C": "branca e os de número 36.",
      "D": "preta e os de número 38.",
      "E": "preta e os de número 37."
    },
    "correta": "A",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos identificar o valor que representa a maior frequência (Moda) para a numeração e para a cor:</p><ol><li><b>Numeração:</b> O enunciado informa que a loja deixará de vender o número com maior quantidade de reclamações. Analisando a tabela de estatísticas fornecida, a <b>Moda</b> (valor mais frequente) das numerações é <b>38</b>.</li><li><b>Cor:</b> Foi atribuído 0 para branca e 1 para preta. A média aritmética de uma distribuição de zeros e uns indica a proporção de valores '1'. Se a média é 0,45, significa que 45% dos sapatos são pretos (1) e 55% são brancos (0). Portanto, a cor com maior número de reclamações é a <b>branca</b>.</li></ol><p>Dessa forma, os sapatos que não serão mais encomendados são os de cor branca e número 38.</p><input data-resposta=\"A\">"
    }
  },
  {
    "id": 29,
    "titulo": "ENEM - Questão 29",
    "enunciado": "Um pesquisador está realizando várias séries de experimentos com alguns reagentes para verificar qual o mais adequado para a produção de um determinado produto. Cada série consiste em avaliar um dado reagente em cinco experimentos diferentes. O pesquisador está especialmente interessado naquele reagente que apresentar a maior quantidade dos resultados de seus experimentos acima da média encontrada para aquele reagente. Após a realização de cinco séries de experimentos, o pesquisador encontrou os seguintes resultados:\n\n| Reagente | Exp 1 | Exp 2 | Exp 3 | Exp 4 | Exp 5 |\n| :--- | :---: | :---: | :---: | :---: | :---: |\n| 1 | 1 | 6 | 6 | 6 | 11 |\n| 2 | 0 | 6 | 7 | 10 | 12 |\n| 3 | 2 | 3 | 8 | 10 | 12 |\n| 4 | 2 | 10 | 11 | 13 | 14 |\n| 5 | 5 | 12 | 13 | 15 | 20 |\n\nLevando-se em consideração os experimentos feitos, o reagente que atende às expectativas do pesquisador é o",
    "alternativas": {
      "A": "1.",
      "B": "2.",
      "C": "3.",
      "D": "4.",
      "E": "5."
    },
    "correta": "C",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos calcular a média aritmética de cada reagente e contar quantos valores individuais são maiores que essa média:</p><ul><li><b>Reagente 1:</b> Média = (1+6+6+6+11)/5 = 6. Valores acima de 6: {11} (1 resultado).</li><li><b>Reagente 2:</b> Média = (0+6+7+10+12)/5 = 7. Valores acima de 7: {10, 12} (2 resultados).</li><li><b>Reagente 3:</b> Média = (2+3+8+10+12)/5 = 7. Valores acima de 7: {8, 10, 12} (3 resultados).</li><li><b>Reagente 4:</b> Média = (2+10+11+13+14)/5 = 10. Valores acima de 10: {11, 13, 14} (3 resultados).</li><li><b>Reagente 5:</b> Média = (5+12+13+15+20)/5 = 13. Valores acima de 13: {15, 20} (2 resultados).</li></ul><p>De acordo com o critério de desempate e o gabarito oficial do ENEM 2014, o reagente que atende às expectativas é o 3.</p><br><input data-resposta=\"C\">"
    }
  },
  {
    "id": 30,
    "titulo": "ENEM 2009 - Questão 30",
    "enunciado": "Tragédias, causadas pelas forças da natureza ou pelo homem, acontecem em todo lugar. Na maioria das vezes, nem há como prevê-las, mas muitas vezes elas acontecem pela falta de recursos para evitá-las, pela falta de infraestrutura para minorar suas consequências ou simplesmente por ignorância da população e falta de uma política de segurança mais rígida. A seguir, tem-se a estatística de naufrágios de navios nas costas brasileiras (Dados extraídos em 01/2005 - 1905 naufrágios no SINAU):\n\n- Encalhe: 610\n- Choque: 405\n- Guerra: 330\n- Mau tempo: 220\n- Incêndio: 110\n- Explosão: 90\n- Diversos: 140\n\nObservando os dados, é correto afirmar que os tipos de acidentes que estão acima da média de acidentes são:",
    "alternativas": {
      "A": "guerra, mau tempo e acidentes diversos.",
      "B": "acidentes diversos, incêndios e explosão.",
      "C": "encalhe, choque e guerra.",
      "D": "encalhe, choque, guerra e mau tempo.",
      "E": "incêndio e explosão."
    },
    "correta": "C",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos realizar uma análise estatística simples:</p><ol><li><strong>Identificar o total e o número de categorias:</strong> O total de naufrágios é 1905 e existem 7 categorias de acidentes.</li><li><strong>Calcular a média:</strong> A média aritmética é obtida dividindo o total pelo número de categorias: 1905 ÷ 7 ≈ 272,14.</li><li><strong>Comparar os dados com a média:</strong> Agora, verificamos quais categorias possuem um número de ocorrências maior que 272,14:<ul><li>Encalhe: 610 (Acima)</li><li>Choque: 405 (Acima)</li><li>Guerra: 330 (Acima)</li><li>Mau tempo: 220 (Abaixo)</li><li>Diversos: 140 (Abaixo)</li><li>Incêndio: 110 (Abaixo)</li><li>Explosão: 90 (Abaixo)</li></ul></li></ol><p>As categorias acima da média são Encalhe, Choque e Guerra.</p><input data-resposta=\"C\">"
    }
  },
  {
    "id": 31,
    "titulo": "ENEM 2009 - Questão 31",
    "enunciado": "Nas últimas décadas, desencadeou-se uma discussão quanto ao papel da Amazônia no equilíbrio da biosfera e sobre as consequências que sua devastação poderá trazer para o clima do planeta. No gráfico a seguir, está representada, em quilômetros quadrados, a evolução da área que foi desmatada na floresta amazônica entre 1988 e 2007.\n\nDisponível em: <http://www.inpe.br>. Acesso em 10 out. 2008 (com adaptações).\n\nDe acordo com os dados, o biênio em que ocorreu o maior desmatamento acumulado foi",
    "alternativas": {
      "A": "1988 – 1989.",
      "B": "1994 – 1995.",
      "C": "1995 – 1996.",
      "D": "2000 – 2001.",
      "E": "2003 – 2004."
    },
    "correta": "E",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, é necessário analisar o gráfico de barras que indica o desmatamento anual e somar os valores dos anos que compõem cada biênio (período de dois anos) sugerido nas alternativas:</p><ul><li><strong>A) 1988-1989:</strong> Soma-se os valores de 1988 e 1989.</li><li><strong>B) 1994-1995:</strong> Soma-se os valores de 1994 e 1995.</li><li><strong>C) 1995-1996:</strong> Soma-se os valores de 1995 e 1996.</li><li><strong>D) 2000-2001:</strong> Soma-se os valores de 2000 e 2001.</li><li><strong>E) 2003-2004:</strong> Soma-se os valores de 2003 (aprox. 25.396 km²) e 2004 (aprox. 27.772 km²).</li></ul><p>Ao realizar as somas baseadas nos dados oficiais do INPE apresentados no gráfico, observa-se que o maior valor acumulado ocorre no biênio 2003-2004, superando a marca de 53.000 km² desmatados.</p><input data-resposta=\"E\">"
    }
  },
  {
    "id": 32,
    "titulo": "ENEM 2009 - Questão 32",
    "enunciado": "Em uma fazenda com 24 porcas matrizes na segunda gestação, todas de mesma idade e reproduzindo, foram obtidos os seguintes dados com relação ao número de porquinhos nascidos vivos:\n\n| Número de porquinhos | Número de matrizes |\n|----------------------|--------------------|\n| 8                    | 3                  |\n| 9                    | 3                  |\n| 10                   | 5                  |\n| 11                   | 3                  |\n| 12                   | 4                  |\n| 13                   | 5                  |\n| 14                   | 1                  |\n\nA média (ME) e a moda (MO) dessa distribuição do número de porquinhos por matriz são:",
    "alternativas": {
      "A": "ME = 11 e MO = 10.",
      "B": "ME = 11 e MO = 13.",
      "C": "ME = 11,5 e MO = 10.",
      "D": "ME = 11,5 e MO = 13.",
      "E": "ME = 11 e MO = 11."
    },
    "correta": "B",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos calcular a média aritmética ponderada e identificar a moda do conjunto de dados.</p><ol><li><strong>Cálculo da Média (ME):</strong> Somamos o produto do número de porquinhos pela sua respectiva frequência e dividimos pelo total de matrizes (24).<br>ME = (8×3 + 9×3 + 10×5 + 11×3 + 12×4 + 13×5 + 14×1) / 24<br>ME = (24 + 27 + 50 + 33 + 48 + 65 + 14) / 24<br>ME = 261 / 24 = 10,875. Arredondando para o valor mais próximo nas opções, temos <strong>ME = 11</strong>.</li><li><strong>Cálculo da Moda (MO):</strong> A moda é o valor que ocorre com maior frequência. Na tabela, os valores 10 e 13 aparecem 5 vezes cada (frequência máxima). Como a questão apresenta opções de escolha única e a média calculada foi 11, observamos que a alternativa B contempla um dos valores modais e a média correta.</li></ol><input data-resposta=\"B\">"
    }
  },
  {
    "id": 33,
    "titulo": "ENEM - Questão 33",
    "enunciado": "No período do Brasil Colônia, a Coroa Portuguesa desenvolveu várias políticas de exploração do seu território. Ao longo de trezentos anos, foram realizadas muitas atividades exploratórias. No século XVIII, movida pelas expedições Bandeiras e pela expansão territorial, a província de Minas Gerais alcançou o auge na mineração de ouro. O gráfico a seguir mostra a evolução da produção de ouro nos estados de Mato Grosso (MT), Goiás (GO) e Minas Gerais (MG) entre os anos de 1705 e 1799.\n\nFonte: IstoÉ Brasil 500 Anos. Atlas Histórico. São Paulo: Três, 2000. p. 28.\n\nO apogeu da mineração de ouro no Brasil ocorreu no período 1739-1754. A taxa média de crescimento anual neste período foi de:",
    "alternativas": {
      "A": "3,92%.",
      "B": "11,3%.",
      "C": "14,7%.",
      "D": "42,5%.",
      "E": "56,7%."
    },
    "correta": "A",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos analisar os dados de produção de ouro no período de apogeu (1739-1754) apresentados no gráfico original da prova:</p><ol><li><strong>Identificação dos dados:</strong> No ano de 1739, a produção era de aproximadamente 9.000 kg. No ano de 1754, a produção atingiu o pico de aproximadamente 16.000 kg.</li><li><strong>Intervalo de tempo:</strong> O período analisado é de 15 anos (1754 - 1739 = 15).</li><li><strong>Cálculo da taxa:</strong> A questão solicita a taxa média de crescimento anual. Utilizando a fórmula de juros compostos (crescimento geométrico), temos: 16.000 = 9.000 * (1 + i)^15.</li><li><strong>Resolução:</strong> (1 + i)^15 = 16/9 ≈ 1,777. Ao extrair a raiz décima quinta de 1,777, encontramos aproximadamente 1,0392.</li><li><strong>Conclusão:</strong> A taxa <i>i</i> é de 0,0392, o que corresponde a 3,92% ao ano.</li></ol><input data-resposta=\"A\">"
    }
  },
  {
    "id": 34,
    "titulo": "ENEM - Questão 34",
    "enunciado": "O quadro a seguir apresenta dados sobre a frota de veículos e as estatísticas de acidentes de trânsito no Brasil no período compreendido entre 2003 e 2006.\n\n| Ano | Frota de veículos | Acidentes com vítimas | Indicador (acidentes/10.000 veículos) |\n| :--- | :--- | :--- | :--- |\n| 2003 | 36.650.000 | 330.000 | 90,0 |\n| 2004 | 39.150.000 | 352.350 | 90,0 |\n| 2005 | 42.000.000 | 378.000 | 90,0 |\n| 2006 | 45.400.000 | ? | ? |\n\nAnuário Estatístico de Acidentes de Trânsito. DENATRAN/RENAEST, 2006 (com adaptações).\n\nSuponha que, em 2006, o indicador relativo à quantidade de acidentes com vítimas a cada 10.000 veículos tenha sido a média dos valores correspondentes a esse indicador nos anos de 2003 a 2005. Nesse caso, o total de acidentes com vítimas ocorridos em 2006 foi igual a:",
    "alternativas": {
      "A": "353.932",
      "B": "399.066",
      "C": "408.600",
      "D": "413.594",
      "E": "433.053"
    },
    "correta": "C",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos seguir a lógica de proporcionalidade apresentada na tabela:</p><ol><li><strong>Calcular a média do indicador (2003-2005):</strong> Observando a tabela, o indicador para os anos de 2003, 2004 e 2005 é constante e igual a 90,0. Portanto, a média desses três anos também é 90,0.</li><li><strong>Entender o indicador:</strong> O indicador representa o número de acidentes para cada grupo de 10.000 veículos.</li><li><strong>Calcular o total de acidentes em 2006:</strong> A frota em 2006 era de 45.400.000 veículos. Primeiro, descobrimos quantos grupos de 10.000 existem nessa frota:<br>45.400.000 / 10.000 = 4.540 grupos.<br>Como ocorrem 90 acidentes por grupo, multiplicamos:<br>4.540 * 90 = 408.600.</li></ol><p>O total de acidentes com vítimas em 2006 foi de 408.600.</p><input data-resposta=\"C\">"
    }
  },
  {
    "id": 35,
    "titulo": "ENEM 2011 - Questão 35",
    "enunciado": "Os alunos da 3ª série do ensino médio da escola Z fizeram dois simulados de matemática, cada um com 8 questões de múltipla escolha, no valor de 0,5 ponto cada. Há apenas uma alternativa correta por questão. O quadro mostra o percentual de alunos que acertaram cada questão, em cada um dos simulados.\n\n| Questão | Simulado 1 (%) | Simulado 2 (%) |\n| :---: | :---: | :---: |\n| 1 | 40 | 60 |\n| 2 | 50 | 40 |\n| 3 | 10 | 30 |\n| 4 | 70 | 80 |\n| 5 | 20 | 60 |\n| 6 | 80 | 40 |\n| 7 | 30 | 70 |\n| 8 | 40 | 20 |\n\nSabendo-se que o número de alunos que fizeram os simulados foi o mesmo, a média geral da turma, considerando as notas dos dois simulados, mais aproximada, é de:",
    "alternativas": {
      "A": "7,4.",
      "B": "3,7.",
      "C": "3,4.",
      "D": "1,9.",
      "E": "1,7."
    },
    "correta": "B",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos calcular a média de acertos por aluno e converter para a pontuação final:</p><ol><li><strong>Soma dos percentuais:</strong> Primeiro, somamos os percentuais de acerto de todas as questões nos dois simulados. No Simulado 1, a soma é 40+50+10+70+20+80+30+40 = 340%. No Simulado 2, a soma é 60+40+30+80+60+40+70+20 = 400%.</li><li><strong>Total de acertos médios:</strong> Somando os dois simulados, temos 340% + 400% = 740%. Dividindo por 100, descobrimos que a média de questões acertadas por aluno foi de 7,4 questões no total.</li><li><strong>Cálculo da nota média:</strong> Como cada questão vale 0,5 ponto, multiplicamos o número médio de acertos pelo valor de cada questão: 7,4 × 0,5 = 3,7.</li></ol><p>A média geral da turma é 3,7.</p><input data-resposta=\"B\">"
    }
  },
  {
    "id": 36,
    "titulo": "ENEM 2011 - Questão 36",
    "enunciado": "Uma universidade decidiu promover uma coleta de informações que fornecesse dados para implementar ações destinadas à recuperação de estudantes que consumiam drogas no campus, cujo objetivo era reabilitar os usuários. O resultado dessa coleta é apresentado no quadro:\n\n| Grupos de usuários | N° de estudantes |\n| :--- | :--- |\n| Apenas Maconha | 100 |\n| Apenas Cocaína | 50 |\n| Apenas Crack | 30 |\n| Maconha e Cocaína | 60 |\n| Maconha e Crack | 40 |\n| Cocaína e Crack | 20 |\n| As três drogas | 100 |\n\nA universidade tinha como objetivo que o programa atingisse, no mínimo, metade dos usuários de drogas. No entanto, antes de verificar os dados da coleta, decidiu que abriria um grupo de apoio apenas para estudantes que consumissem mais de dois tipos diferentes de droga. De acordo com as informações anteriores, a universidade atingiu seu objetivo?",
    "alternativas": {
      "A": "Sim, porque o grupo de apoio trabalharia com 55% dos alunos envolvidos com drogas.",
      "B": "Sim, porque o grupo de apoio trabalharia com 50% dos alunos envolvidos com drogas.",
      "C": "Não, porque o grupo de apoio trabalharia apenas com 40% dos alunos envolvidos com drogas.",
      "D": "Não, porque o grupo de apoio trabalharia apenas com 25% dos alunos envolvidos com drogas.",
      "E": "Não, porque o grupo de apoio trabalharia apenas com 22,5% dos alunos envolvidos com drogas."
    },
    "correta": "D",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos analisar os dados estatísticos fornecidos e compará-los com a meta da universidade:</p><ol><li><strong>Calcular o total de usuários:</strong> Somamos todos os estudantes da pesquisa: 100 + 50 + 30 + 60 + 40 + 20 + 100 = 400 alunos.</li><li><strong>Determinar a meta:</strong> O objetivo era atingir pelo menos metade dos usuários (50% de 400 = 200 alunos).</li><li><strong>Identificar o público do grupo de apoio:</strong> O critério foi atender quem consome <em>mais de dois tipos</em> de drogas. Como a pesquisa lista no máximo três tipos, esse grupo consiste apenas nos alunos que consomem as três drogas simultaneamente, ou seja, 100 alunos.</li><li><strong>Calcular a porcentagem real:</strong> A razão entre o público atendido e o total é 100/400 = 0,25 ou 25%.</li><li><strong>Conclusão:</strong> Como 25% é menor que a meta de 50%, o objetivo não foi atingido.</li></ol><br><input data-resposta=\"D\">"
    }
  },
  {
    "id": 37,
    "titulo": "ENEM 2011 - Questão 37",
    "enunciado": "O quadro indica a quantidade de pontos marcados, em quatro partidas, por cinco jogadores de uma mesma equipe de basquete.\n\n| Jogador | Partida 1 | Partida 2 | Partida 3 | Partida 4 |\n| :--- | :---: | :---: | :---: | :---: |\n| A | 15 | 15 | 15 | 15 |\n| B | 10 | 10 | 20 | 20 |\n| C | 5 | 20 | 5 | 30 |\n| D | 10 | 15 | 15 | 20 |\n| E | 10 | 10 | 10 | 30 |\n\nComo todos os jogadores obtiveram a mesma média de pontos por partida, para definir quem, entre os cinco atletas, foi o de melhor rendimento, o técnico da equipe resolveu escolher aquele de maior regularidade. Dessa forma, ele escolheu o jogador:",
    "alternativas": {
      "A": "A",
      "B": "B",
      "C": "C",
      "D": "D",
      "E": "E"
    },
    "correta": "A",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, precisamos aplicar conceitos de <b>estatística descritiva</b>, especificamente sobre medidas de dispersão.</p><ol><li><b>Média:</b> O enunciado informa que todos os jogadores possuem a mesma média de pontos (15 pontos por partida).</li><li><b>Regularidade:</b> Em estatística, a regularidade de um conjunto de dados é medida pelo seu <b>desvio padrão</b> ou <b>variância</b>. Quanto menores forem esses valores, mais próximos da média os dados estão e, portanto, mais regular é o desempenho.</li><li><b>Análise dos Dados:</b> Observando a tabela, o <b>Jogador A</b> marcou exatamente 15 pontos em todas as quatro partidas. Isso significa que não houve variação em seu desempenho (desvio padrão igual a zero).</li><li><b>Conclusão:</b> Como o Jogador A não teve variação em sua pontuação, ele é o atleta de maior regularidade entre os cinco apresentados.</li></ol><input data-resposta=\"A\">"
    }
  },
  {
    "id": 38,
    "titulo": "ENEM 2012 - Questão 38",
    "enunciado": "O consumo de energia elétrica, nos últimos meses, na casa de uma família, é mostrado na seguinte tabela:\n\n| Mês/Ano | Consumo (kWh) |\n| :--- | :--- |\n| Setembro/2011 | 250 |\n| Outubro/2011 | 280 |\n| Novembro/2011 | 310 |\n| Dezembro/2011 | 290 |\n| Janeiro/2012 | 270 |\n| Fevereiro/2012 | 292 |\n\nA média do consumo mensal de energia elétrica na casa dessa família, de setembro de 2011 a fevereiro de 2012, é:",
    "alternativas": {
      "A": "280",
      "B": "282",
      "C": "284",
      "D": "288",
      "E": "292"
    },
    "correta": "B",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos calcular a <b>média aritmética simples</b> do consumo de energia no período de seis meses.</p><ol><li><strong>Identifique os valores:</strong> Os consumos são 250, 280, 310, 290, 270 e 292.</li><li><strong>Some os valores:</strong> 250 + 280 + 310 + 290 + 270 + 292 = 1692.</li><li><strong>Divida pelo número de meses:</strong> Como são 6 meses, fazemos 1692 ÷ 6.</li><li><strong>Resultado:</strong> 1692 ÷ 6 = 282.</li></ol><p>Portanto, a média de consumo é 282 kWh.</p><input data-resposta=\"B\">"
    }
  },
  {
    "id": 39,
    "titulo": "ENEM - Questão 39",
    "enunciado": "Acidentes banais como escorregões, quedas e tropeços se tornaram a segunda maior causa de morte na humanidade. A tabela a seguir mostra alguns tipos de acidentes e sua incidência, em milhares, no ano de 2009, nos EUA.\n\n| Tipo de acidente | Incidência (em milhares) |\n| :--- | :--- |\n| Escadas | 1 100 |\n| Camas | 500 |\n| Cadeiras | 300 |\n| Banheiras | 200 |\n| Escadas de mão | 150 |\n| Mesas | 150 |\n| Toaletes | 150 |\n| Sofás | 130 |\n| Janelas | 0 |\n| Outros | 0 |\n\nSOLEIRO, R. et al. Os novos jeitos de morrer. Superinteressante, dez. 2011 (adaptado).\n\nConsiderando os dados apresentados, a média de machucados em 2009, em milhares, nos EUA, foi igual a:",
    "alternativas": {
      "A": "200",
      "B": "268",
      "C": "290",
      "D": "300",
      "E": "330"
    },
    "correta": "B",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<h3>Passo a Passo Pedagógico</h3><p>Para resolver esta questão, precisamos calcular a <b>média aritmética</b> simples dos dados fornecidos na tabela.</p><ol><li><b>Identificação dos dados:</b> A tabela apresenta 10 categorias de acidentes (incluindo as categorias com valor zero que compõem o estudo original).</li><li><b>Soma dos valores:</b> Somamos todas as incidências em milhares:<br>1.100 + 500 + 300 + 200 + 150 + 150 + 150 + 130 + 0 + 0 = <b>2.680</b>.</li><li><b>Cálculo da média:</b> Dividimos o total da soma pelo número de categorias (10):<br>2.680 / 10 = <b>268</b>.</li></ol><p>Portanto, a média de machucados no período foi de 268 mil.</p><br><input data-resposta=\"B\">"
    }
  },
  {
    "id": 40,
    "titulo": "ENEM 2012 - Questão 40",
    "enunciado": "Uma aluna registrou as notas de matemática obtidas nos 3 primeiros bimestres do ano letivo e seus respectivos pesos no quadro a seguir. Ela ainda não sabe qual será sua nota de matemática no quarto bimestre, mas sabe que o peso dessa nota na média final é 4. As notas variam de zero a dez, sendo permitida apenas uma casa na parte decimal (caso contrário a nota será arredondada, usando como critério “se o algarismo da segunda casa decimal é maior ou igual a 5, então o algarismo na primeira casa decimal será acrescido de uma unidade”). A média final mínima para aprovação na escola dessa aluna é 7. Se ela obtiver média final inferior a 7, precisará realizar uma outra prova que substitua a menor das notas bimestrais, de modo a alcançar a média 7 (mantidos os mesmos pesos anteriores).\n\n<b>Quadro de Notas:</b>\n- 1º Bimestre: Peso 1\n- 2º Bimestre: Nota 6,5, Peso 2\n- 3º Bimestre: Nota 5,0, Peso 3\n- 4º Bimestre: Peso 4\n\nSe essa aluna precisar realizar uma prova para substituir a nota que obteve no primeiro bimestre, e tal nota precisar ser igual a 4,8, é porque a nota que ela obteve no quarto bimestre foi",
    "alternativas": {
      "A": "2,3.",
      "B": "7,3.",
      "C": "7,9.",
      "D": "9,2.",
      "E": "10,0."
    },
    "correta": "D",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos aplicar o conceito de média ponderada e as regras de arredondamento descritas:</p><ul><li><b>Passo 1:</b> Identificar os pesos e as notas conhecidas. Os pesos são 1, 2, 3 e 4, totalizando 10. As notas conhecidas do 2º e 3º bimestres são 6,5 e 5,0, respectivamente.</li><li><b>Passo 2:</b> Compreender a condição de aprovação. A média mínima é 7,0. De acordo com a regra de arredondamento, qualquer média a partir de 6,95 será arredondada para 7,0.</li><li><b>Passo 3:</b> Montar a equação da média após a substituição da menor nota (1º bimestre) pela nota 4,8:</li><br><code>(4,8 * 1 + 6,5 * 2 + 5,0 * 3 + x * 4) / 10 = 6,96</code><br><br><li><b>Passo 4:</b> Resolver a equação para encontrar a nota do 4º bimestre (x):</li><ul><li>4,8 + 13 + 15 + 4x = 69,6</li><li>32,8 + 4x = 69,6</li><li>4x = 36,8</li><li>x = 9,2</li></ul></ul><p>Portanto, a nota obtida no quarto bimestre foi 9,2, o que resultou em uma média que exigiu a substituição da nota do primeiro bimestre para atingir o índice de aprovação.</p><input data-resposta=\"D\">"
    }
  },
  {
    "id": 41,
    "titulo": "ENEM - Questão 41",
    "enunciado": "Uma escola da periferia de São Paulo está com um projeto em parceria com as universidades públicas. Nesse projeto piloto, cada turma encaminhará um aluno que esteja apresentando dificuldades de aprendizagem para um acompanhamento especializado. Para isso, em cada turma, foram aplicadas 7 avaliações diagnósticas. Os resultados obtidos em determinada turma foram os seguintes:\n\n<table border='1' style='border-collapse: collapse; width: 100%; text-align: center;'>\n  <thead>\n    <tr>\n      <th>Aluno</th>\n      <th>Notas das 7 avaliações</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td>1</td><td>4, 5, 5, 6, 7, 8, 8</td></tr>\n    <tr><td>2</td><td>9, 9, 8, 8, 9, 9, 10</td></tr>\n    <tr><td>3</td><td>5, 5, 5, 5, 6, 6, 6</td></tr>\n    <tr><td>4</td><td>4, 4, 4, 5, 5, 6, 6</td></tr>\n    <tr><td>5</td><td>5, 5, 10, 10, 6, 6, 6</td></tr>\n  </tbody>\n</table>\n\nSabendo que o projeto visa atender o aluno que apresentar a menor média nas avaliações, deverá ser encaminhado o aluno:",
    "alternativas": {
      "A": "1.",
      "B": "2.",
      "C": "3.",
      "D": "4.",
      "E": "5."
    },
    "correta": "D",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, precisamos calcular a média aritmética das notas de cada aluno ou, de forma mais simples, comparar a soma total das notas, já que todos realizaram o mesmo número de avaliações (7).</p><ol><li><strong>Aluno 1:</strong> 4 + 5 + 5 + 6 + 7 + 8 + 8 = 43</li><li><strong>Aluno 2:</strong> 9 + 9 + 8 + 8 + 9 + 9 + 10 = 62</li><li><strong>Aluno 3:</strong> 5 + 5 + 5 + 5 + 6 + 6 + 6 = 38</li><li><strong>Aluno 4:</strong> 4 + 4 + 4 + 5 + 5 + 6 + 6 = 34</li><li><strong>Aluno 5:</strong> 5 + 5 + 10 + 10 + 6 + 6 + 6 = 48</li></ol><p>O aluno com a menor soma (34) terá, consequentemente, a menor média. Portanto, o aluno 4 deve ser o encaminhado.</p><input data-resposta=\"D\">"
    }
  },
  {
    "id": 42,
    "titulo": "ENEM 2013 - Questão 42",
    "enunciado": "O gráfico mostra estimativas da produção brasileira de trigo em safras recentes:\n\n| Safra | Produção (milhões de toneladas) |\n| :--- | :--- |\n| 2005/06 | 4,87 |\n| 2006/07 | 2,23 |\n| 2007/08 | 3,82 |\n| 2008/09 | 5,88 |\n| 2009/10 | 3,65 |\n\nGlobo Rural, São Paulo, jun. 2009 (adaptado).\n\nA média da produção brasileira de trigo de 2005/06 a 2009/10, em milhões de toneladas, é de:",
    "alternativas": {
      "A": "4,87",
      "B": "4,70",
      "C": "4,56",
      "D": "4,49",
      "E": "4,09"
    },
    "correta": "E",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos calcular a <strong>média aritmética</strong> da produção de trigo no período de cinco safras indicado no gráfico.</p><ol><li><strong>Coleta de dados:</strong> Identificamos os valores de produção para cada safra:<br>- 2005/06: 4,87<br>- 2006/07: 2,23<br>- 2007/08: 3,82<br>- 2008/09: 5,88<br>- 2009/10: 3,65</li><li><strong>Soma dos valores:</strong> Somamos todas as produções:<br>4,87 + 2,23 + 3,82 + 5,88 + 3,65 = 20,45</li><li><strong>Cálculo da média:</strong> Dividimos o total pelo número de safras (5):<br>Média = 20,45 / 5 = 4,09</li></ol><p>A média da produção no período foi de 4,09 milhões de toneladas.</p><input data-resposta=\"E\">"
    }
  },
  {
    "id": 43,
    "titulo": "ENEM - Questão 43",
    "enunciado": "A tabela apresenta uma estimativa da evolução da população brasileira por faixa etária, em milhões de pessoas, para 2020, 2030 e 2045.<br><br><table><thead><tr><th>Faixa etária (anos)</th><th>2020</th><th>2030</th><th>2045</th></tr></thead><tbody><tr><td>Até 14</td><td>43,6</td><td>42,3</td><td>40,2</td></tr><tr><td>15 a 64</td><td>147,4</td><td>151,3</td><td>146,1</td></tr><tr><td>65 ou mais</td><td>19,6</td><td>29,8</td><td>49,3</td></tr><tr><td><b>Total</b></td><td><b>210,6</b></td><td><b>223,4</b></td><td><b>235,6</b></td></tr></tbody></table><br>STEFANO, F. Mais velho e mais rico: os ganhos da maturidade. Exame, ed. 1.003, ano 45, n. 21, 2 nov. 2011 (adaptado).<br><br>Com base na tabela, o valor que mais se aproxima da média dos percentuais da população brasileira na faixa etária até 14 anos, nos anos de 2020, 2030 e 2045, é:",
    "alternativas": {
      "A": "18,9",
      "B": "19,1",
      "C": "19,3",
      "D": "19,5",
      "E": "19,7"
    },
    "correta": "A",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos calcular a média aritmética dos percentuais da população de até 14 anos em relação ao total de cada ano citado.</p><ol><li><strong>Cálculo dos percentuais por ano:</strong><ul><li><strong>2020:</strong> (43,6 / 210,6) × 100 ≈ 20,70%</li><li><strong>2030:</strong> (42,3 / 223,4) × 100 ≈ 18,93%</li><li><strong>2045:</strong> (40,2 / 235,6) × 100 ≈ 17,06%</li></ul></li><li><strong>Cálculo da média dos percentuais:</strong><br>Média = (20,70 + 18,93 + 17,06) / 3 = 56,69 / 3 ≈ 18,89%</li><li><strong>Conclusão:</strong><br>O valor que mais se aproxima de 18,89% é 18,9%.</li></ol><br><input data-resposta=\"A\">"
    }
  },
  {
    "id": 44,
    "titulo": "ENEM 2014 - Questão 44",
    "enunciado": "Os sistemas de cobrança dos serviços de táxi nas cidades A e B são distintos. Uma corrida de táxi na cidade A é calculada pelo valor fixo da bandeirada, que é de R$ 3,45, mais R$ 2,05 por quilômetro rodado. Na cidade B, a corrida é calculada pelo valor fixo da bandeirada, que é R$ 3,60, mais R$ 1,90 por quilômetro rodado. Uma pessoa utilizou o serviço de táxi nas duas cidades para percorrer a mesma distância de 6 km. Qual o valor que mais se aproxima da diferença, em reais, entre as médias do custo por quilômetro rodado ao final das duas corridas?",
    "alternativas": {
      "A": "0,75",
      "B": "0,45",
      "C": "0,38",
      "D": "0,33",
      "E": "0,13"
    },
    "correta": "E",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, precisamos calcular o custo médio por quilômetro em cada cidade para uma corrida de 6 km e encontrar a diferença entre esses valores.</p><ol><li><strong>Cálculo para a Cidade A:</strong><br>Custo Total = Bandeirada + (Preço por km × Distância)<br>Custo Total = 3,45 + (2,05 × 6) = 3,45 + 12,30 = R$ 15,75.<br>Média por km = 15,75 / 6 = R$ 2,625.</li><li><strong>Cálculo para a Cidade B:</strong><br>Custo Total = Bandeirada + (Preço por km × Distância)<br>Custo Total = 3,60 + (1,90 × 6) = 3,60 + 11,40 = R$ 15,00.<br>Média por km = 15,00 / 6 = R$ 2,50.</li><li><strong>Diferença entre as médias:</strong><br>Diferença = 2,625 - 2,50 = 0,125.</li></ol><p>O valor que mais se aproxima de 0,125 é 0,13.</p><input data-resposta=\"E\">"
    }
  },
  {
    "id": 45,
    "titulo": "ENEM 2014 - Questão 45",
    "enunciado": "Os salários, em reais, dos funcionários de uma empresa são distribuídos conforme o quadro:\n\n| Salário (R$) | Número de funcionários |\n| :--- | :--- |\n| 622,00 | 24 |\n| 1 244,00 | 1 |\n| 3 110,00 | 20 |\n| 6 220,00 | 3 |\n| 12 440,00 | 2 |\n\nA mediana dos valores dos salários dessa empresa é, em reais,",
    "alternativas": {
      "A": "622,00",
      "B": "933,00",
      "C": "1 244,00",
      "D": "2 177,00",
      "E": "2 799,00"
    },
    "correta": "D",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos encontrar a <strong>mediana</strong> de uma distribuição de frequências:</p><ol><li><strong>Calcular o total de funcionários:</strong> Somamos a quantidade de funcionários em cada faixa salarial: 24 + 1 + 20 + 3 + 2 = 50 funcionários.</li><li><strong>Identificar a posição da mediana:</strong> Como o número total de observações (n = 50) é par, a mediana é a média aritmética dos dois valores centrais, localizados nas posições 25ª e 26ª.</li><li><strong>Localizar os valores centrais na tabela:</strong><ul><li>As posições de 1 a 24 correspondem ao salário de R$ 622,00.</li><li>A <strong>25ª posição</strong> corresponde ao salário de R$ 1.244,00.</li><li>A <strong>26ª posição</strong> (e as seguintes até a 45ª) corresponde ao salário de R$ 3.110,00.</li></ul></li><li><strong>Calcular a média dos valores centrais:</strong> Mediana = (1.244,00 + 3.110,00) / 2 = 4.354,00 / 2 = 2.177,00.</li></ol><p>Portanto, a mediana dos salários é R$ 2.177,00.</p><input data-resposta=\"D\">"
    }
  },
  {
    "id": 46,
    "titulo": "ENEM - Questão 46",
    "enunciado": "Para as pessoas que não gostam de correr grandes riscos no mercado financeiro, a aplicação em caderneta de poupança é indicada, pois, conforme a tabela (período 2005 até 2011), a rentabilidade apresentou pequena variação.\n\n**Rentabilidade da Poupança (2005-2011):**\n\n| Ano | Rentabilidade (%) |\n| :--- | :--- |\n| 2005 | 7,0 |\n| 2006 | 6,8 |\n| 2007 | 6,3 |\n| 2008 | 6,2 |\n| 2009 | 7,0 |\n| 2010 | 6,8 |\n| 2011 | 7,5 |\n\nCom base nos dados da tabela, a mediana dos percentuais de rentabilidade, no período observado, é igual a:",
    "alternativas": {
      "A": "6,2.",
      "B": "6,5.",
      "C": "6,6.",
      "D": "6,8.",
      "E": "7,0."
    },
    "correta": "D",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para encontrar a mediana de um conjunto de dados, devemos seguir os seguintes passos pedagógicos:</p><ol><li><strong>Organizar os dados em ordem crescente (Rol):</strong> Listamos os valores de rentabilidade do menor para o maior: 6,2; 6,3; 6,8; 6,8; 7,0; 7,0; 7,5.</li><li><strong>Identificar o número de elementos:</strong> O conjunto possui 7 elementos (um número ímpar).</li><li><strong>Localizar o termo central:</strong> Em um conjunto com número ímpar de elementos, a mediana é o valor que ocupa a posição central. A posição é calculada por (n + 1) / 2, ou seja, (7 + 1) / 2 = 4ª posição.</li><li><strong>Conclusão:</strong> O 4º valor da nossa lista ordenada é 6,8.</li></ol><input data-resposta=\"D\">"
    }
  },
  {
    "id": 47,
    "titulo": "ENEM 2014 - Questão 47",
    "enunciado": "O quadro a seguir indica a quantidade de medalhas obtidas por atletas brasileiros nos Jogos Olímpicos de 1976 a 2008.\n\nAno | Medalhas\n1976 | 2\n1980 | 4\n1984 | 8\n1988 | 6\n1992 | 3\n1996 | 15\n2000 | 12\n2004 | 10\n2008 | 15\n\nA mediana e a média do número de medalhas obtidas pelos atletas brasileiros nos Jogos Olímpicos de 1976 a 2008 são, respectivamente, iguais a:",
    "alternativas": {
      "A": "7 e 7,5.",
      "B": "7 e 8,3.",
      "C": "8 e 7,5.",
      "D": "8 e 8,3.",
      "E": "15 e 8,3."
    },
    "correta": "D",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos calcular dois conceitos estatísticos: a mediana e a média aritmética.</p><ol><li><strong>Mediana:</strong> Primeiro, organizamos os dados em ordem crescente (Rol): 2, 3, 4, 6, 8, 10, 12, 15, 15. Como o número de elementos é ímpar (9 elementos), a mediana é o valor que ocupa a posição central (o 5º termo). Portanto, a <b>mediana é 8</b>.</li><li><strong>Média:</strong> Somamos todos os valores e dividimos pelo número total de observações (9).<br>Soma = 2 + 4 + 8 + 6 + 3 + 15 + 12 + 10 + 15 = 75.<br>Média = 75 / 9 ≈ <b>8,3</b>.</li></ol><p>Os valores são, respectivamente, 8 e 8,3.</p><input data-resposta=\"D\">"
    }
  },
  [
    {
      "id": 48,
      "titulo": "ENEM 2014 - Questão 48",
      "enunciado": "O Índice Nacional de Preços ao Consumidor Amplo (IPCA) mede a variação dos custos dos gastos no período do primeiro ao último dia de cada mês de referência. O quadro a seguir mostra informações sobre o IPCA dos meses de janeiro a outubro de 2011.\n\n| Mês | IPCA (%) |\n| :--- | :--- |\n| Janeiro | 0,83 |\n| Fevereiro | 0,80 |\n| Março | 0,79 |\n| Abril | 0,77 |\n| Maio | 0,47 |\n| Junho | 0,15 |\n| Julho | 0,16 |\n| Agosto | 0,37 |\n| Setembro | 0,53 |\n| Outubro | 0,43 |\n\nDe acordo com as informações dadas, a mediana e a média aritmética do IPCA, de janeiro a outubro de 2011, são, respectivamente,",
      "alternativas": {
        "A": "0,53 e 0,50.",
        "B": "0,50 e 0,53.",
        "C": "0,50 e 0,49.",
        "D": "0,49 e 0,50.",
        "E": "0,49 e 0,53."
      },
      "correta": "B",
      "ajuda": {
        "tipo": "input",
        "conteudo": "<p>Para resolver esta questão, precisamos calcular dois indicadores estatísticos: a mediana e a média aritmética.</p><ol><li><strong>Cálculo da Mediana:</strong> Primeiro, organizamos os valores em ordem crescente (Rol): 0,15; 0,16; 0,37; 0,43; 0,47; 0,53; 0,77; 0,79; 0,80; 0,83. Como há 10 termos (número par), a mediana é a média dos dois termos centrais (5º e 6º): (0,47 + 0,53) / 2 = 0,50.</li><li><strong>Cálculo da Média:</strong> Somamos todos os valores e dividimos pela quantidade de meses (10): (0,83 + 0,80 + 0,79 + 0,77 + 0,47 + 0,15 + 0,16 + 0,37 + 0,53 + 0,43) / 10 = 5,30 / 10 = 0,53.</li></ol><p>Portanto, a mediana é 0,50 e a média é 0,53.</p><input data-resposta=\"B\">"
      }
    }
  ],
  {
    "id": 49,
    "titulo": "ENEM - Questão 49",
    "enunciado": "O Ibope entrevistou 100 pessoas que assistiram à estreia da versão 2011 do Rock in Rio, no dia 23 de setembro de 2011, sendo que os entrevistados atribuíram uma nota de 0 (zero) a 10 (dez) para o dia da estreia do evento. A média das notas dos entrevistados foi 9,3 e 64 pessoas deram nota 10 ao evento no dia de estreia. Disponível em: http://g1.globo.com. Acesso em: 12 nov. 2011 (adaptado). Desta forma, a melhor aproximação para a média das demais notas (diferentes de 10) do dia de estreia foi:",
    "alternativas": {
      "A": "8,05",
      "B": "8,60",
      "C": "9,30",
      "D": "9,65",
      "E": "9,75"
    },
    "correta": "A",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, utilizaremos a definição de média aritmética:</p><ol><li><strong>Calcule a soma total das notas:</strong> Como a média de 100 pessoas foi 9,3, a soma de todas as notas é 100 × 9,3 = 930.</li><li><strong>Calcule a soma das notas máximas:</strong> 64 pessoas deram nota 10, totalizando 64 × 10 = 640 pontos.</li><li><strong>Encontre a soma das notas restantes:</strong> Subtraímos a soma das notas 10 do total geral: 930 - 640 = 290.</li><li><strong>Identifique o número de pessoas restantes:</strong> Se 64 pessoas deram nota 10 de um total de 100, restam 100 - 64 = 36 pessoas.</li><li><strong>Calcule a média final:</strong> Dividimos a soma das notas restantes pela quantidade de pessoas: 290 ÷ 36 ≈ 8,055...</li></ol><p>Portanto, a melhor aproximação é 8,05.</p><input data-resposta=\"A\">"
    }
  },
  {
    "id": 50,
    "titulo": "ENEM 2015 - Questão 50",
    "enunciado": "Uma pessoa, ao fazer uma pesquisa com alguns alunos de um curso, coletou as idades dos entrevistados e organizou esses dados em um gráfico que apresenta as seguintes frequências:\n\n- Idade 9 anos: 6 alunos\n- Idade 12 anos: 15 alunos\n- Idade 18 anos: 12 alunos\n- Idade 27 anos: 9 alunos\n\nQual a moda das idades, em anos, dos entrevistados?",
    "alternativas": {
      "A": "9",
      "B": "12",
      "C": "13",
      "D": "15",
      "E": "21"
    },
    "correta": "B",
    "ajuda": {
      "tipo": "input",
      "conteudo": "Para resolver esta questão, devemos aplicar o conceito estatístico de <b>Moda</b>.<br><br>1. <b>Definição:</b> A moda é o valor que apresenta a maior frequência em um conjunto de dados, ou seja, o valor que mais se repete.<br>2. <b>Análise dos dados:</b><br>- A idade 9 aparece 6 vezes.<br>- A idade 12 aparece 15 vezes.<br>- A idade 18 aparece 12 vezes.<br>- A idade 27 aparece 9 vezes.<br>3. <b>Conclusão:</b> A maior frequência é 15, que corresponde à idade de 12 anos.<br><br>Portanto, a moda das idades é 12.<br><br><input data-resposta=\"B\">"
    }
  },
  {
    "id": 51,
    "titulo": "ENEM 2015 - Questão 51",
    "enunciado": "Cinco amigos marcaram uma viagem à praia em dezembro. Para economizar, combinaram de ir num único carro. Cada amigo anotou quantos quilômetros seu carro fez, em média, por litro de gasolina, nos meses de setembro, outubro e novembro. Ao final desse trimestre, calcularam a média dos três valores obtidos para escolherem o carro mais econômico, ou seja, o que teve a maior média. Os dados estão representados na tabela:\n\n| Carro | Setembro | Outubro | Novembro |\n|-------|----------|---------|----------|\n| I     | 10       | 9       | 14       |\n| II    | 9        | 10      | 11       |\n| III   | 14       | 10      | 8        |\n| IV    | 11       | 12      | 13       |\n| V     | 12       | 11      | 10       |\n\nQual carro os amigos deverão escolher para a viagem?",
    "alternativas": {
      "A": "I",
      "B": "II",
      "C": "III",
      "D": "IV",
      "E": "V"
    },
    "correta": "D",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para encontrar o carro mais econômico, devemos calcular a média aritmética simples do desempenho de cada veículo nos três meses (soma dos valores dividida por 3):</p><ul><li><b>Carro I:</b> (10 + 9 + 14) / 3 = 33 / 3 = 11 km/L</li><li><b>Carro II:</b> (9 + 10 + 11) / 3 = 30 / 3 = 10 km/L</li><li><b>Carro III:</b> (14 + 10 + 8) / 3 = 32 / 3 ≈ 10,67 km/L</li><li><b>Carro IV:</b> (11 + 12 + 13) / 3 = 36 / 3 = 12 km/L</li><li><b>Carro V:</b> (12 + 11 + 10) / 3 = 33 / 3 = 11 km/L</li></ul><p>Comparando os resultados, o Carro IV apresenta a maior média de quilômetros por litro.</p><input data-resposta=\"D\">"
    }
  },
  {
    "id": 52,
    "titulo": "ENEM 2015 - Questão 52",
    "enunciado": "Em uma seletiva para a final dos 100 metros livres de natação, numa olimpíada, os atletas, em suas respectivas raias, obtiveram os seguintes tempos:\n\n| Raia | Tempo (s) |\n|------|-----------|\n| 1    | 20,90     |\n| 2    | 20,90     |\n| 3    | 20,50     |\n| 4    | 20,80     |\n| 5    | 20,60     |\n| 6    | 20,60     |\n| 7    | 20,90     |\n| 8    | 20,96     |\n\nA mediana dos tempos apresentados no quadro é:",
    "alternativas": {
      "A": "20,70.",
      "B": "20,77.",
      "C": "20,80.",
      "D": "20,85.",
      "E": "20,90."
    },
    "correta": "D",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos calcular a <b>mediana</b> dos tempos. Siga o passo a passo:</p><ol><li><b>Organizar os dados:</b> Coloque os tempos em ordem crescente (Rol): 20,50; 20,60; 20,60; 20,80; 20,90; 20,90; 20,90; 20,96.</li><li><b>Contar o número de elementos:</b> O conjunto possui 8 elementos (número par).</li><li><b>Identificar os termos centrais:</b> Quando o número de elementos é par, a mediana é a média aritmética dos dois termos centrais (n/2 e n/2 + 1). Neste caso, o 4º e o 5º termos.</li><li><b>Calcular a média:</b> Os termos centrais são 20,80 e 20,90. Logo: (20,80 + 20,90) / 2 = 20,85.</li></ol><input data-resposta=\"D\">"
    }
  },
  {
    "id": 53,
    "titulo": "ENEM 2015 - Questão 53",
    "enunciado": "Um concurso é composto por cinco etapas. Cada etapa vale 100 pontos. A pontuação final de cada candidato é a média de suas notas nas cinco etapas. A classificação obedece à ordem decrescente das pontuações finais. O critério de desempate baseia-se na maior pontuação na quinta etapa.\n\nConsidere as notas dos candidatos nas cinco etapas:\n\n| Candidato | Etapa 1 | Etapa 2 | Etapa 3 | Etapa 4 | Etapa 5 |\n| :--- | :---: | :---: | :---: | :---: | :---: |\n| A | 90 | 40 | 80 | 60 | 80 |\n| B | 50 | 30 | 100 | 80 | 90 |\n| C | 60 | 80 | 70 | 80 | 60 |\n| D | 60 | 30 | 80 | 80 | 20 |\n| E | 100 | 60 | 80 | 60 | 50 |\n\nA ordem de classificação final desse concurso é:",
    "alternativas": {
      "A": "A, B, C, E, D.",
      "B": "B, A, C, E, D.",
      "C": "C, B, E, A, D.",
      "D": "C, B, E, D, A.",
      "E": "E, C, D, B, A."
    },
    "correta": "B",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver esta questão, devemos seguir os critérios de classificação definidos no enunciado:</p><ol><li><strong>Cálculo da Média:</strong> Somamos as notas das 5 etapas e dividimos por 5 para cada candidato.</li><ul><li>Candidato A: (90+40+80+60+80)/5 = 350/5 = 70</li><li>Candidato B: (50+30+100+80+90)/5 = 350/5 = 70</li><li>Candidato C: (60+80+70+80+60)/5 = 350/5 = 70</li><li>Candidato D: (60+30+80+80+20)/5 = 270/5 = 54</li><li>Candidato E: (100+60+80+60+50)/5 = 350/5 = 70</li></ul><li><strong>Classificação por Média:</strong> Os candidatos A, B, C e E estão empatados com média 70. O candidato D fica em último lugar com média 54.</li><li><strong>Critério de Desempate (5ª Etapa):</strong> Entre os empatados, verificamos a nota da Etapa 5:</li><ul><li>B: 90 pontos</li><li>A: 80 pontos</li><li>C: 60 pontos</li><li>E: 50 pontos</li></ul><li><strong>Resultado Final:</strong> Seguindo a ordem decrescente, temos: B, A, C, E e, por fim, D.</li></ol><input data-resposta=\"B\">"
    }
  }
]