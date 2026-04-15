
const questoes = [
  {
    "id": 1,
    "titulo": "Problema 1",
    "enunciado": "Numa tarefa escolar, um aluno precisava fazer a planta baixa de sua casa em uma escala 1:40. Ele verificou que a base da casa era retangular, tendo 12 metros de comprimento e 8 metros de largura. O aluno foi a uma papelaria e lá observou que havia cinco tipos de folhas de papel, todas com diferentes dimensões. O quadro contém os cinco tipos de folhas, com seus comprimentos e larguras fornecidos em centímetro. O aluno analisou os cinco tipos de folha e comprou a que possuía as dimensões mínimas necessárias para que ele fizesse a planta de sua casa na escala desejada, deixando exatamente 2 centímetros de margem em cada um dos quatro lados da folha. A folha escolhida pelo aluno foi a de tipo:",
    "alternativas": {
      "A": "tipo I",
      "B": "tipo II",
      "C": "tipo III",
      "D": "tipo IV",
      "E": "tipo V"
    },
    "correta": "D",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para encontrar a folha correta, primeiro calculamos as dimensões da planta na escala 1:40:</p><ul><li>Comprimento: 1200 cm / 40 = <input data-resposta=\"30\"> cm</li><li>Largura: 800 cm / 40 = <input data-resposta=\"20\"> cm</li></ul><p>O problema informa que deve haver uma margem de 2 cm em cada um dos quatro lados. Portanto, somamos 4 cm (2 cm de cada lado) em cada dimensão:</p><ul><li>Comprimento total: 30 + 4 = <input data-resposta=\"34\"> cm</li><li>Largura total: 20 + 4 = <input data-resposta=\"24\"> cm</li></ul><p>Analisando a tabela, a folha que possui exatamente as dimensões 34 cm x 24 cm é a do tipo IV.</p>"
    }
  },
  {
    "id": 2,
    "titulo": "Problema 2",
    "enunciado": "O estado de qualquer substância gasosa é determinada pela medida de três grandezas: o volume (V), a pressão (P) e a temperatura (T) dessa substância. Para os chamados gases “ideais”, o valor do quociente (P.V)/T é sempre constante. Considere um reservatório que está cheio de um gás ideal. Sem vazar o gás, realiza-se uma compressão do reservatório, reduzindo seu volume à metade. Ao mesmo tempo, uma fonte de calor faz a temperatura do gás ser quadruplicada. Considere P0 e P1 respectivamente, os valores da pressão do gás no reservatório, antes e depois do procedimento descrito. A relação entre P0 e P1 é:",
    "alternativas": {
      "A": "P1 = P0 / 8",
      "B": "P1 = P0 / 2",
      "C": "P1 = 2P0",
      "D": "P1 = 4P0",
      "E": "P1 = 8P0"
    },
    "correta": "E",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver a questão, aplicamos a lei dos gases ideais conforme a relação: <strong>(P0 . V0) / T0 = (P1 . V1) / T1</strong>.</p><p>De acordo com o enunciado, temos as seguintes transformações:</p><ul><li>V1 = V0 / 2</li><li>T1 = 4 . T0</li></ul><p>Substituindo na equação original: (P0 . V0) / T0 = (P1 . (V0 / 2)) / (4 . T0).</p><p>Simplificando a expressão, obtemos P0 = P1 / 8. Portanto, a relação final é P1 = <input data-resposta=\"8\"> . P0.</p>"
    }
  },
  {
    "id": 3,
    "titulo": "Problema 3",
    "enunciado": "Em uma corrida de dez voltas disputada por dois carros antigos, A e B, o carro A completou as dez voltas antes que o carro B completasse a oitava volta. Sabe-se que durante toda a corrida os dois carros mantiveram velocidades constantes iguais a 18 m/s e 14 m/s. Sabe-se também que o carro B gastaria 288 segundos para completar oito voltas. A distância, em metro, que o carro B percorreu do início da corrida até o momento em que o carro A completou a décima volta foi mais próxima de:",
    "alternativas": {
      "A": "3500",
      "B": "3920",
      "C": "4000",
      "D": "4032",
      "E": "4200"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, siga os passos abaixo:</p><ol><li>Primeiro, determine a distância total de 8 voltas percorrida pelo carro B: $14 \\text{ m/s} \\times 288 \\text{ s} = <input data-resposta=\"4032\">$ metros.</li><li>Calcule o comprimento de uma única volta: $4032 / 8 = <input data-resposta=\"504\">$ metros.</li><li>Determine a distância total de 10 voltas (percurso do carro A): $10 \\times 504 = <input data-resposta=\"5040\">$ metros.</li><li>Calcule o tempo que o carro A levou para completar as 10 voltas: $5040 / 18 = <input data-resposta=\"280\">$ segundos.</li><li>Finalmente, calcule a distância que o carro B percorreu nesse mesmo intervalo de tempo: $14 \\times 280 = <input data-resposta=\"3920\">$ metros.</li></ol>"
    }
  },
  {
    "id": 4,
    "titulo": "Problema 4",
    "enunciado": "A cor de uma estrela tem relação com a temperatura em sua superfície. Estrelas não muito quentes (cerca de 3 000 K) nos parecem avermelhadas. Já as estrelas amarelas, como o Sol, possuem temperatura em torno dos 6 000 K; as mais quentes são brancas ou azuis porque sua temperatura fica acima dos 10 000 K. A tabela apresenta uma classificação espectral e outros dados para as estrelas dessas classes: luminosidade, massa e raio, tomando o Sol como unidade. Se tomarmos uma estrela que tenha temperatura 5 vezes maior que a temperatura do Sol, qual será a ordem de grandeza de sua luminosidade?",
    "alternativas": {
      "A": "20.000 vezes a luminosidade do Sol",
      "B": "28.000 vezes a luminosidade do Sol",
      "C": "28.850 vezes a luminosidade do Sol",
      "D": "30.000 vezes a luminosidade do Sol",
      "E": "50.000 vezes a luminosidade do Sol"
    },
    "correta": "A",
    "imagem": "https://static.wixstatic.com/media/b05a8a_edc7210a279a4da3800c03a63bfddb8c~mv2.png/v1/fill/w_600,h_109,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/probl%2004_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>A temperatura do Sol é de aproximadamente 6.000 K. Uma estrela com temperatura 5 vezes maior terá <input data-resposta=\"30000\"> K. De acordo com a tabela, essa temperatura corresponde à classe espectral B0, cuja luminosidade é de <input data-resposta=\"20000\"> vezes a do Sol.</p>"
    }
  },
  {
    "id": 5,
    "titulo": "Problema 5",
    "enunciado": "Um produtor de milho utiliza uma área de 160 hectares para as suas atividades agrícolas. Essa área é dividida em duas partes: uma de 40 hectares, com maior produtividade, e outra, de 120 hectares, com menor produtividade. A produtividade é dada pela razão entre a produção, em tonelada, e a área cultivada. Sabe-se que a área de 40 hectares tem produtividade igual a 2,5 vezes a da outra. Esse fazendeiro pretende aumentar sua produção total em 15%, aumentando o tamanho da sua propriedade. Para tanto, pretende comprar uma parte de uma fazenda vizinha, que possui a mesma produtividade da parte de 120 hectares de suas terras. Qual é a área mínima, em hectare, que o produtor precisará comprar?",
    "alternativas": {
      "A": "24",
      "B": "33",
      "C": "36",
      "D": "160",
      "E": "184"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Seja <b>p</b> a produtividade da área de 120 ha. A produtividade da área de 40 ha é <b>2,5p</b>.</p><p>1. Calcule a produção atual total:<br>Produção = (Área 1 &times; Produtividade 1) + (Área 2 &times; Produtividade 2)<br>P = (40 &times; 2,5p) + (120 &times; p) = 100p + 120p = 220p.</p><p>2. Calcule o aumento necessário (15%):<br>Aumento = 0,15 &times; 220p = 33p.</p><p>3. Determine a área a ser comprada (com produtividade <b>p</b>):<br>Área &times; p = 33p<br>Área = <input data-resposta=\"33\"> hectares.</p>"
    }
  },
  {
    "id": 6,
    "titulo": "Problema 6",
    "enunciado": "Para realizar um voo entre duas cidades que distam 2.000 km uma da outra, uma companhia aérea utilizava um modelo de aeronave A, capaz de transportar até 200 passageiros. Quando uma dessas aeronaves está lotada de passageiros, o consumo de combustível é de 0,02 litro por quilômetro e por passageiro. Essa companhia resolveu trocar o modelo de aeronave A pelo modelo de aeronave B, que é capaz de transportar 10% de passageiros a mais do que o modelo A, mas consumindo 10% menos combustível por quilômetro e por passageiro. A quantidade de combustível consumida pelo modelo de aeronave B, em relação à do modelo de aeronave A, em um voo lotado entre as duas cidades, é:",
    "alternativas": {
      "A": "10% menor.",
      "B": "1% menor.",
      "C": "igual.",
      "D": "1% maior.",
      "E": "11% maior."
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Primeiro, calculamos o consumo total da aeronave A:</p><p>Consumo A = 2000 km &times; 200 passageiros &times; 0,02 L/km/pass = 8000 litros.</p><p>Para a aeronave B, calculamos os novos parâmetros:</p><ul><li>Passageiros: 200 &times; 1,10 = <input data-resposta=\"220\"></li><li>Consumo por km/passageiro: 0,02 &times; 0,90 = <input data-resposta=\"0.018\"></li><li>Consumo total B: 2000 &times; 220 &times; 0,018 = <input data-resposta=\"7920\"> litros.</li></ul><p>Comparando B com A: 7920 / 8000 = <input data-resposta=\"0.99\">. Isso representa um valor 1% menor.</p>"
    }
  },
  {
    "id": 7,
    "titulo": "Problema 7",
    "enunciado": "Antônio, Joaquim e José são sócios de uma empresa cujo capital é dividido, entre os três, em partes proporcionais a: 4, 6 e 6, respectivamente. Com a intenção de igualar a participação dos três sócios no capital da empresa, Antônio pretende adquirir uma fração do capital de cada um dos outros dois sócios. A fração do capital de cada sócio que Antônio deverá adquirir é:",
    "alternativas": {
      "A": "1/12",
      "B": "1/9",
      "C": "1/6",
      "D": "4/3",
      "E": "5/6"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "O total das partes do capital é 4 + 6 + 6 = <input data-resposta=\"16\">. Para igualar as participações, cada sócio deve terminar com 16/3 do capital. Antônio possui 4 partes, logo ele precisa adquirir 16/3 - 4 = <input data-resposta=\"4/3\"> partes no total. Como ele adquirirá essa quantia igualmente de Joaquim e José, ele retirará de cada um: (4/3) / 2 = <input data-resposta=\"2/3\"> partes. A fração do capital de cada sócio (que possuem 6 partes cada) que Antônio deverá adquirir é (2/3) / 6 = <input data-resposta=\"2/18\">."
    }
  },
  {
    "id": 8,
    "titulo": "Problema 8",
    "enunciado": "José, Carlos e Paulo devem transportar em suas bicicletas uma certa quantidade de laranjas. Decidiram dividir o trajeto a ser percorrido em duas partes, sendo que ao final da primeira parte eles redistribuiriam a quantidade de laranjas que cada um carregava dependendo do cansaço de cada um. Na primeira parte do trajeto, José, Carlos e Paulo dividiram as laranjas na proporção 6:5:4 respectivamente. Na segunda parte do trajeto, José, Carlos e Paulo dividiram as laranjas na proporção 4:4:2 respectivamente. Sabendo-se que um deles levou 50 laranjas a mais no segundo trajeto, qual a quantidade de laranjas que José, Carlos e Paulo, nessa ordem, transportaram na segunda parte do trajeto?",
    "alternativas": {
      "A": "600, 550, 350",
      "B": "300, 300, 150",
      "C": "300, 250, 200",
      "D": "200, 200, 100",
      "E": "100, 100, 50"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Na 1ª parte, o total de partes é 6+5+4 = 15. Carlos carregava 5/15 do total.</p><p>Na 2ª parte, o total de partes é 4+4+2 = 10. Carlos passou a carregar 4/10 do total.</p><p>A diferença que Carlos levou a mais é: 4/10 - 5/15 = <input data-resposta=\"2/30\"> do total.</p><p>Sabendo que 2/30 do total equivale a 50 laranjas, o total de laranjas é <input data-resposta=\"750\">.</p><p>Na 2ª parte, as quantidades são:</p><ul><li>José: 4/10 de 750 = <input data-resposta=\"300\"></li><li>Carlos: 4/10 de 750 = <input data-resposta=\"300\"></li><li>Paulo: 2/10 de 750 = <input data-resposta=\"150\"></li></ul>"
    }
  },
  {
    "id": 9,
    "titulo": "Problema 9",
    "enunciado": "A figura mostra os preços da gasolina no Brasil e nos Estados Unidos (EUA), feita a conversão para reais, considerando o preço total de venda ao consumidor (abaixo dos nomes dos países) e os valores das parcelas correspondentes à refinaria, aos tributos e à distribuição e revenda. Note que, considerando apenas a parte correspondente à refinaria, o preço da gasolina vendida no Brasil é inferior ao preço cobrado nos Estados Unidos, mas os tributos, a distribuição e a revenda aumentam o preço final de venda nos postos brasileiros. Suponha que fosse tomada a decisão de se diminuir o preço final de venda nos postos brasileiros, sem alterar a parcela do preço da gasolina vendida na refinaria, de modo que o preço final se iguale ao cobrado nos postos dos Estados Unidos. O percentual mais aproximado de redução dos valores em tributos, distribuição e revenda seria:",
    "alternativas": {
      "A": "16%",
      "B": "21%",
      "C": "33%",
      "D": "48%",
      "E": "52%"
    },
    "correta": "D",
    "imagem": "https://static.wixstatic.com/media/b05a8a_99fffe503957444488c14b322d1543bc~mv2.png/v1/fill/w_240,h_269,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img9.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, primeiro identificamos os valores atuais no Brasil: Tributos (0,89) + Distribuição/Revenda (0,62) = 1,51. O preço final desejado é o dos EUA (1,86), mantendo a refinaria brasileira (1,08). Assim, o novo valor para tributos e distribuição deve ser 1,86 - 1,08 = 0,78. A redução necessária em reais é 1,51 - 0,78 = 0,73. Para encontrar o percentual de redução sobre o valor original de tributos e distribuição, calculamos 0,73 / 1,51 ≈ <input data-resposta=\"48\">%.</p>"
    }
  },
  {
    "id": 10,
    "titulo": "Problema 10",
    "enunciado": "O governo decidiu reduzir de 25% para 20% o teor de álcool anidro misturado à gasolina vendida nos postos do país. Considere que a média de desempenho, ou seja, a quantidade de quilômetros (km) que um carro anda com 1 litro de combustível, é diretamente proporcional à porcentagem de gasolina presente no combustível, e que a média de desempenho de um carro antes da decisão do governo era de 13,5 km/L. Nas condições do texto, qual será a estimativa da média de desempenho após a redução de álcool anidro no combustível?",
    "alternativas": {
      "A": "12,96",
      "B": "13,50",
      "C": "14,40",
      "D": "15,60",
      "E": "16,875"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>A média de desempenho é diretamente proporcional à porcentagem de gasolina no combustível.</p><ul><li>Antes: 25% de álcool e 75% de gasolina (100% - 25%) = 13,5 km/L</li><li>Depois: 20% de álcool e 80% de gasolina (100% - 20%) = x km/L</li></ul><p>Montando a proporção: 13,5 / 75 = x / 80</p><p>x = (13,5 * 80) / 75</p><p>x = 1080 / 75</p><p>Resultado: <input data-resposta=\"14,40\"> km/L</p>"
    }
  },
  {
    "id": 11,
    "titulo": "Problema 11",
    "enunciado": "Na aferição de um novo semáforo, os tempos são ajustados de modo que, em cada ciclo completo (verde–amarelo–vermelho), a luz amarela permaneça acesa por 5 segundos, e o tempo em que a luz verde permaneça acesa é igual a 2/3 do tempo em que a luz vermelha fique acesa. A luz verde fica acesa, em cada ciclo, durante X segundos e cada ciclo dura Y segundos. Qual a expressão que representa a relação entre X e Y?",
    "alternativas": {
      "A": "5X - 2Y + 10 = 0",
      "B": "3X - 2Y + 15 = 0",
      "C": "2X - 3Y + 15 = 0",
      "D": "5X - 2Y + 5 = 0",
      "E": "3X - 2Y + 10 = 0"
    },
    "correta": "A",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>O tempo de cada luz é: Amarela = 5s, Verde = X, Vermelha = R.</p><p>Pelo enunciado, X = 2/3 R, logo R = <input data-resposta=\"3/2\">X.</p><p>O tempo total do ciclo Y é a soma: Y = X + 5 + R.</p><p>Substituindo R: Y = X + 5 + <input data-resposta=\"3/2\">X.</p><p>Multiplicando a equação por 2 para eliminar o denominador: 2Y = 2X + 10 + 3X.</p><p>Agrupando os termos: 2Y = <input data-resposta=\"5\">X + 10.</p><p>Portanto, a relação é 5X - 2Y + 10 = 0.</p>"
    }
  },
  {
    "id": 12,
    "titulo": "Problema 12",
    "enunciado": "O matemático americano Eduardo Kasner pediu ao filho que desse um nome a um número muito grande, que consistia do algarismo 1 seguido de 100 zeros. Seu filho batizou o número de gugol. Mais tarde, o mesmo matemático criou um número que apelidou de gugolplex, que consistia em 10 elevado a um gugol. Quantos algarismos tem um gugolplex?",
    "alternativas": {
      "A": "100",
      "B": "101",
      "C": "10^100",
      "D": "10^100 + 1",
      "E": "10^101"
    },
    "correta": "D",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para determinar a quantidade de algarismos de uma potência de base 10, como 10<sup>n</sup>, basta observar que o número será composto pelo algarismo 1 seguido de <i>n</i> zeros, totalizando <i>n + 1</i> algarismos. <br><br>O gugolplex é definido como 10 elevado a um gugol (10<sup>gugol</sup>). Como o valor de um gugol é 10<sup>100</sup>, a quantidade de algarismos do gugolplex é o expoente (10<sup>100</sup>) somado a 1. <br><br>Resultado: <input data-resposta=\"10^100 + 1\"></p>"
    }
  },
  {
    "id": 13,
    "titulo": "Problema 13",
    "enunciado": "Barras de cobre cilíndricas são utilizadas para fazer aterramentos elétricos. Durante a instalação de um chuveiro, uma pessoa utilizou uma barra de aterramento de densidade p, massa m, diâmetro D= 2R e altura h. Para fazer um novo aterramento, essa pessoa utilizou uma barra com a mesma densidade, mas com o dobro da massa e o dobro do diâmetro em relação à usada no chuveiro. A densidade é dada por p= m/v e o volume da barra cilíndrica é V= πR²h. Qual a relação da altura da barra utilizada no novo aterramento comparada aquela utilizada no aterramento do chuveiro?",
    "alternativas": {
      "A": "O dobro",
      "B": "A metade",
      "C": "A quarta parte",
      "D": "O quádruplo",
      "E": "A oitava parte"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, considere que o volume do cilindro é dado por V = π(D/2)²h = πD²/4 * h. Como a densidade p = m/V é constante, temos V = m/p. Assim, h = (4m) / (pπD²). Ao dobrar a massa (2m) e o diâmetro (2D), a nova altura h' será calculada por h' = (4 * 2m) / (pπ(2D)²) = 8m / (4pπD²) = 2m / (pπD²). Comparando h' com h, verificamos que a nova altura corresponde a 1/<input data-resposta=\"4\"> da original.</p>"
    }
  },
  {
    "id": 14,
    "titulo": "Problema 14",
    "enunciado": "De forma geral, os pneus radiais trazem em sua lateral uma marcação do tipo abc/deRfg, como 185/65R15. Essa marcação identifica as medidas do pneu da seguinte forma: – abc é a medida da largura do pneu, em milímetro; – de é igual a 100 multiplicado pela razão entre a altura (em milímetro) e a largura do pneu (em milímetro); – R significa radial; – fg é a medida do diâmetro interno do pneu, em polegada. A figura ilustra as variáveis relacionadas com esses dados. O proprietário de um veículo precisa trocar os pneus de seu carro e, ao chegar a uma loja, é informado por um vendedor que há somente pneus com os seguintes códigos: 175/65R15, 175/75R15, 175/80R15, 185/60R15 e 205/55R15. Analisando, juntamente com o vendedor, as opções de pneus disponíveis, concluem que o pneu mais adequado para seu veículo é o que tem a menor altura. Desta forma, o proprietário do veículo deverá comprar o pneu com a marcação:",
    "alternativas": {
      "A": "175/65R15",
      "B": "175/75R15",
      "C": "175/80R15",
      "D": "185/60R15",
      "E": "205/55R15"
    },
    "correta": "D",
    "imagem": "https://static.wixstatic.com/media/b05a8a_b15b1f8556d24c6c98f4dfadcc3a1ecc~mv2.png/v1/fill/w_258,h_177,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img14.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para encontrar a altura (H), utilizamos a fórmula baseada na definição de 'de': <b>de = 100 * (H / abc)</b>. Isolando H, temos: <b>H = (de * abc) / 100</b>.</p><p>Calcule a altura para cada opção:</p><ul><li>175/65R15: H = (65 * 175) / 100 = <input data-resposta=\"113.75\"> mm</li><li>175/75R15: H = (75 * 175) / 100 = <input data-resposta=\"131.25\"> mm</li><li>175/80R15: H = (80 * 175) / 100 = <input data-resposta=\"140\"> mm</li><li>185/60R15: H = (60 * 185) / 100 = <input data-resposta=\"111\"> mm</li><li>205/55R15: H = (55 * 205) / 100 = <input data-resposta=\"112.75\"> mm</li></ul><p>O pneu com a menor altura calculada é o 185/60R15.</p>"
    }
  },
  {
    "id": 15,
    "titulo": "Problema 15",
    "enunciado": "Uma fábrica utiliza sua frota particular de caminhões para distribuir as 90 toneladas de sua produção semanal. Todos os caminhões são do mesmo modelo e, para aumentar a vida útil da frota, adota-se a política de reduzir a capacidade máxima de carga de cada caminhão em meia tonelada. Com essa medida de redução, o número de caminhões necessários para transportar a produção semanal aumenta em 6 unidades em relação ao número de caminhões necessários para transportar a produção, usando a capacidade máxima de carga de cada caminhão. Qual é o número atual de caminhões que essa fábrica usa para transportar a produção semanal, respeitando-se a política de redução de carga?",
    "alternativas": {
      "A": "36",
      "B": "30",
      "C": "19",
      "D": "15",
      "E": "9"
    },
    "correta": "A",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Seja <b>x</b> a capacidade original de cada caminhão e <b>n</b> o número original de caminhões.</p><p>1. Relação inicial: n &middot; x = 90 &rArr; n = 90/x</p><p>2. Com a redução de 0,5t e aumento de 6 caminhões: (n + 6)(x - 0,5) = 90</p><p>3. Substituindo n: (90/x + 6)(x - 0,5) = 90</p><p>4. Desenvolvendo a equação: 90 - 45/x + 6x - 3 = 90 &rArr; 6x - 3 - 45/x = 0</p><p>5. Multiplicando por x e simplificando: 2x² - x - 15 = 0</p><p>6. Resolvendo a equação de segundo grau, encontramos x = 3 toneladas (capacidade original).</p><p>7. O número original de caminhões era n = 90/3 = 30.</p><p>8. O número atual de caminhões, com a redução de carga, é 30 + 6 = <input data-resposta=\"36\"></p>"
    }
  },
  {
    "id": 16,
    "titulo": "Problema 16",
    "enunciado": "Um atleta iniciou seu treinamento visando as competições de fim de ano. Seu treinamento consiste em cinco tipos diferentes de treinos: treino T1, treino T2, treino T3, treino T4, e treino T5. A sequência dos treinamentos deve seguir esta ordem: (conforme imagem). A letra R significa repouso. Após completar a sequência de treinamentos, o atleta começa novamente a sequência a partir do treino T1, e segue a ordem descrita. Após 24 semanas completas de treinamento, se dará o início das competições. A sequência de treinamentos que o atleta realizará na 24ª semana de treinos é:",
    "alternativas": {
      "A": "T1, T2, T3, T4, T5, R, R",
      "B": "R, R, T1, T2, T3, T4, T5",
      "C": "T3, T4, T5, R, R, T1, T2",
      "D": "T5, R, R, T1, T2, T3, T4",
      "E": "R, T1, T2, T3, T4, T5, R"
    },
    "correta": "B",
    "imagem": "https://static.wixstatic.com/media/b05a8a_9b01137aef58473db5023ca1da9209ca~mv2.png/v1/fill/w_530,h_49,al_c,q_85,enc_avif,quality_auto/Probl%2016_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, devemos identificar o ciclo de repetição e a posição dos dias da 24ª semana.</p><p>1. O ciclo de treinamento possui 13 dias (T1, T2, T3, T4, T5, R, R, T1, T2, T3, T4, T5, R).</p><p>2. A 24ª semana começa após 23 semanas completas: 23 &times; 7 = 161 dias. Portanto, a 24ª semana compreende os dias 162 a 168.</p><p>3. Para encontrar a posição do dia 162 no ciclo de 13 dias, realizamos a divisão: 162 = (13 &times; <input data-resposta=\"12\">) + <input data-resposta=\"6\">.</p><p>4. O resto <input data-resposta=\"6\"> indica que o dia 162 corresponde ao 6º elemento da sequência original. Consultando a sequência, o 6º dia é R, o 7º é R, o 8º é T1, e assim sucessivamente, resultando na sequência: R, R, T1, T2, T3, T4, T5.</p>"
    }
  },
  {
    "id": 17,
    "titulo": "Problema 17",
    "enunciado": "O Salto Triplo é uma modalidade do atletismo em que o atleta dá um salto em um só pé, uma passada e um salto, nessa ordem. Sendo que o salto com impulsão em um só pé será feito de modo que o atleta caia primeiro sobre o mesmo pé que deu a impulsão; na passada ele cairá com o outro pé, do qual o salto é realizado. Um atleta da modalidade Salto Triplo, depois de estudar seus movimentos, percebeu que, do segundo para o primeiro salto, o alcance diminuía em 1,2 m, e, do terceiro para o segundo salto, o alcance diminuía 1,5 m. Querendo atingir a meta de 17,4 m nessa prova e considerando os seus estudos, a distância alcançada no primeiro salto teria de estar entre:",
    "alternativas": {
      "A": "4,0 m e 5,0 m",
      "B": "5,0 m e 6,0 m",
      "C": "6,0 m e 7,0 m",
      "D": "7,0 m e 8,0 m",
      "E": "8,0 m e 9,0 m"
    },
    "correta": "D",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Seja <b>x</b> a distância do primeiro salto. De acordo com o enunciado, temos:</p><ul><li>Primeiro salto: x</li><li>Segundo salto: x - 1,2</li><li>Terceiro salto: (x - 1,2) - 1,5 = x - 2,7</li></ul><p>A soma dos três saltos deve ser igual à meta de 17,4 m:</p><p>x + (x - 1,2) + (x - 2,7) = 17,4</p><p>3x - 3,9 = 17,4</p><p>3x = 21,3</p><p>x = <input data-resposta=\"7,1\"> m</p><p>O valor 7,1 m está entre 7,0 m e 8,0 m.</p>"
    }
  },
  {
    "id": 18,
    "titulo": "Problema 18",
    "enunciado": "A insulina é utilizada no tratamento de pacientes com diabetes para o controle glicêmico. Para facilitar sua aplicação, foi desenvolvida uma “caneta” na qual pode ser inserido um refil contendo 3 ml de insulina, como mostra a imagem. Para controle das aplicações, definiu-se a unidade de insulina como 0,01 ml. Antes de cada aplicação, é necessário descartar 2 unidades de insulina, de forma a retirar possíveis bolhas de ar. A um paciente foram prescritas duas aplicações diárias: 10 unidades de insulina pela manhã e 10 à noite. Qual o número máximo de aplicações por refil que o paciente poderá utilizar com a dosagem prescrita?",
    "alternativas": {
      "A": "25",
      "B": "15",
      "C": "13",
      "D": "12",
      "E": "8"
    },
    "correta": "A",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>De acordo com o enunciado, temos os seguintes dados:</p><ul><li>Cada refil: 3mL = <input data-resposta=\"300\"> unidades, pois 1 unidade = 0,01 mL.</li><li>Em cada aplicação: 2 unidades descartadas + <input data-resposta=\"10\"> unidades aplicadas = <input data-resposta=\"12\"> unidades p/ aplicação.</li><li>O número máximo de aplicações por refil é 300 / 12 = <input data-resposta=\"25\">.</li></ul>"
    }
  },
  {
    "id": 19,
    "titulo": "Problema 19",
    "enunciado": "Um produtor de café contratou uma empresa de consultoria para avaliar as produções de suas diversas fazendas. No relatório entregue consta que a variância das produtividades das fazendas foi igual a 9 216 kg²/ha². Esse produtor precisa apresentar essa informação, mas em outra unidade de produtividade: sacas/ha. Ele sabe que a saca de café tem 60 kg, mas tem dúvidas em determinar o valor da variância em sacas²/ha². A variância das produtividades das fazendas de café expressa em sacas²/ha² é:",
    "alternativas": {
      "A": "153,6",
      "B": "2,56",
      "C": "15,36",
      "D": "25,6",
      "E": "1536"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para converter a variância de kg²/ha² para sacas²/ha², devemos considerar a relação quadrática entre as unidades. Se 1 saca = 60 kg, então 1 saca² = (60 kg)² = 3600 kg².</p><p>Divida o valor da variância original pelo fator de conversão: 9216 / 3600 = <input data-resposta=\"2,56\"></p>"
    }
  },
  {
    "id": 20,
    "titulo": "Problema 20",
    "enunciado": "A fabricação da Bandeira Nacional deve obedecer ao descrito na Lei nº 5 700, de 1º de setembro de 1971, que trata dos Símbolos Nacionais. No artigo que se refere às dimensões da Bandeira, observa-se: “Para cálculos das dimensões, será tomada por base a largura, dividindo-a em 14 (quatorze) partes iguais, sendo que cada uma das partes será considerada uma medida ou módulo (M). Os demais requisitos dimensionais seguem o critério abaixo: I. Comprimento será de vinte módulos (20 M); II. A distância dos vértices do losango amarelo ao quadro externo será de um módulo e sete décimos (1,7 M); III. O raio do círculo azul no meio do losango amarelo será de três módulos e meio (3,5 M).” A figura indica as cores da Bandeira do Brasil e localiza o quadro externo a que se refere a Lei nº 5 700. Um torcedor, preparando-se para a Copa do Mundo e dispondo de cortes de tecidos verde (180 cm × 150 cm) e amarelo (o quanto baste), deseja confeccionar a maior Bandeira Nacional possível a partir das medidas do tecido verde. Qual a medida, em centímetro, do lado do menor quadrado de tecido azul que deverá ser comprado para confecção do círculo da bandeira desejada?",
    "alternativas": {
      "A": "27",
      "B": "31,5",
      "C": "36",
      "D": "45",
      "E": "63"
    },
    "correta": "E",
    "imagem": "https://static.wixstatic.com/media/b05a8a_475b1e0a44274295b82565a2763455b7~mv2.png/v1/fill/w_317,h_199,al_c,lg_1,q_85,enc_avif,quality_auto/img20_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>A Lei define as seguintes proporções definidas para a bandeira nacional:</p><ul><li>Comprimento: <input data-resposta=\"20\"> M.</li><li>Largura: <input data-resposta=\"14\"> M.</li><li>Raio do círculo azul: <input data-resposta=\"3.5\"> M.</li></ul><p>Para o tecido de 180 cm x 150 cm, calculamos o módulo M:</p><ul><li>Pelo comprimento: 180 / 20 = <input data-resposta=\"9\"> cm.</li><li>Pela largura: 150 / 14 ≈ 10,71 cm.</li></ul><p>Utilizamos o menor módulo (M = 9) para que a bandeira caiba no tecido. O raio do círculo é 3,5 * 9 = 31,5 cm. O lado do menor quadrado azul deve ser igual ao diâmetro do círculo: 2 * 31,5 = <input data-resposta=\"63\"> cm.</p>"
    }
  },
  {
    "id": 21,
    "titulo": "Problema 21",
    "enunciado": "Determine o resultado da soma entre as frações 10/42 e 6/42.",
    "alternativas": {
      "A": "16/84",
      "B": "16/42",
      "C": "4/42",
      "D": "8/21",
      "E": "1"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para somar frações com o mesmo denominador, somamos apenas os numeradores e mantemos o denominador comum.</p><p>10 + 6 = <input data-resposta=\"16\"></p><p>Portanto, o resultado final é 16/42.</p>"
    }
  },
  {
    "id": 22,
    "titulo": "Problema 22",
    "enunciado": "A energia solar vai abastecer parte da demanda de energia do campus de uma universidade brasileira. A instalação de painéis solares na área dos estacionamentos e na cobertura do hospital pediátrico será aproveitada nas instalações universitárias e também ligada na rede da companhia elétrica distribuidora de energia. O projeto inclui 100 m² de painéis solares que ficarão instalados nos estacionamentos, produzindo energia elétrica e proporcionando sombra para os carros. Sobre o hospital pediátrico serão colocados aproximadamente 300 m² de painéis, sendo 100 m² para gerar energia elétrica utilizada no campus e 200 m² para geração de energia térmica, produzindo aquecimento de água utilizada nas caldeiras do hospital. Suponha que cada metro quadrado de painel solar para energia elétrica gere uma economia de 1 kWh por dia e que cada metro quadrado produzindo energia térmica permita economizar 0,7 kWh por dia para a universidade. Em uma segunda fase do projeto, será aumentada em 75 % a área coberta pelos painéis solares que geram energia elétrica. Nessa fase também deverá ser ampliada a área de cobertura com painéis para geração de energia térmica. Para se obter o dobro da quantidade de energia economizada diariamente em relação à primeira fase, a área total dos painéis que geram energia térmica, em metro quadrado, deverá ter o valor mais próximo de:",
    "alternativas": {
      "A": "231",
      "B": "431",
      "C": "472",
      "D": "523",
      "E": "672"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<b>Dados da 1ª fase:</b><br>Área elétrica: 100 + 100 = <input data-resposta=\"200\"> m².<br>Área térmica: <input data-resposta=\"200\"> m².<br>Economia total: (200 * 1) + (200 * 0,7) = <input data-resposta=\"340\"> kWh/dia.<br><br><b>Dados da 2ª fase:</b><br>Meta de economia (dobro): 340 * 2 = <input data-resposta=\"680\"> kWh/dia.<br>Nova área elétrica: 200 * 1,75 = <input data-resposta=\"350\"> m².<br>Economia elétrica na 2ª fase: 350 * 1 = <input data-resposta=\"350\"> kWh/dia.<br>Economia térmica necessária: 680 - 350 = <input data-resposta=\"330\"> kWh/dia.<br>Área térmica necessária: 330 / 0,7 ≈ <input data-resposta=\"472\"> m²."
    }
  },
  {
    "id": 23,
    "titulo": "Problema 23",
    "enunciado": "Durante uma festa de colégio, um grupo de alunos organizou uma rifa. Oitenta alunos faltaram à festa e não participaram da rifa. Entre os que compareceram, alguns compraram três bilhetes, 45 compraram dois bilhetes e muitos compraram apenas um. O total de alunos que comprou um único bilhete era 20 % do número total de bilhetes vendidos, e o total de bilhetes vendidos excedeu em 33 o número total de alunos do colégio. Quantos alunos compraram somente um bilhete?",
    "alternativas": {
      "A": "32",
      "B": "38",
      "C": "48",
      "D": "54",
      "E": "60"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<div><p>Para resolver, vamos definir:</p><ul><li><b>x</b>: número de alunos que compraram 1 bilhete.</li><li><b>y = 45</b>: número de alunos que compraram 2 bilhetes.</li><li><b>z</b>: número de alunos que compraram 3 bilhetes.</li></ul><p>O total de alunos (S) é: x + 45 + z + 80 = x + z + 125.</p><p>O total de bilhetes (T) é: x(1) + 45(2) + z(3) = x + 90 + 3z.</p><p>De acordo com o enunciado:</p><ol><li>x = 20/100 * T &rarr; T = 5x</li><li>T = S + 33 &rarr; 5x = (x + z + 125) + 33 &rarr; z = 4x - 158</li></ol><p>Substituindo z na equação de T: 5x = x + 90 + 3(4x - 158). Resolvendo a equação, encontramos x = <input data-resposta=\"48\"></p></div>"
    }
  },
  {
    "id": 24,
    "titulo": "Problema 24",
    "enunciado": "Um arquiteto está reformando uma casa. De modo a contribuir com o meio ambiente, decide reaproveitar tábuas de madeira retiradas da casa. Ele dispõe de 40 tábuas de 540 cm, 30 de 810 cm e 10 de 1 080 cm, todas de mesma largura e espessura. Ele pediu a um carpinteiro que cortasse as tábuas em pedaços de mesmo comprimento, sem deixar sobras, e de modo que as novas peças ficassem com o maior tamanho possível, mas de comprimento menor que 2 m. Atendendo ao pedido do arquiteto, o carpinteiro deverá produzir",
    "alternativas": {
      "A": "105 peças.",
      "B": "120 peças.",
      "C": "210 peças.",
      "D": "420 peças.",
      "E": "540 peças."
    },
    "correta": "D",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver, devemos encontrar o Máximo Divisor Comum (MDC) entre 540, 810 e 1080. O MDC(540, 810, 1080) é <input data-resposta=\"270\"> cm. No entanto, o enunciado exige que o comprimento seja menor que 2 m (200 cm). O maior divisor de 270 que é menor que 200 é <input data-resposta=\"135\"> cm. Agora, calculamos a quantidade de peças:</p><ul><li>40 tábuas de 540 cm: 40 * (540 / 135) = <input data-resposta=\"160\"> peças</li><li>30 tábuas de 810 cm: 30 * (810 / 135) = <input data-resposta=\"180\"> peças</li><li>10 tábuas de 1080 cm: 10 * (1080 / 135) = <input data-resposta=\"80\"> peças</li></ul><p>Total de peças: 160 + 180 + 80 = <input data-resposta=\"420\">.</p>"
    }
  },
  {
    "id": 25,
    "titulo": "Problema 25",
    "enunciado": "Uma indústria produz malhas de proteção solar para serem aplicadas em vidros, de modo a diminuir a passagem de luz, a partir de fitas plásticas entrelaçadas perpendicularmente. Nas direções vertical e horizontal, são aplicadas fitas de 1 mm de largura, tal que a distância entre elas é de (d − 1) mm, conforme a figura. O material utilizado não permite a passagem da luz; somente o raio que atinge as lacunas deixadas pelo entrelaçamento consegue transpor essa proteção. A taxa de cobertura do vidro é o percentual da área da região coberta pelas fitas da malha, que são colocadas paralelamente às bordas do vidro. Essa indústria recebeu a encomenda de uma malha de proteção solar para ser aplicada em um vidro retangular de 5 m de largura por 9 m de comprimento. A medida de d, em milímetros, para que a taxa de cobertura da malha seja de 75 % é",
    "alternativas": {
      "A": "2",
      "B": "1",
      "C": "11/3",
      "D": "4/3",
      "E": "2/3"
    },
    "correta": "A",
    "imagem": "https://static.wixstatic.com/media/b05a8a_7d047ce61f294baf89f4cc952c092827~mv2.png/v1/fill/w_334,h_261,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img25.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Considere uma célula quadrada da malha com lado <b>d</b>. A área total dessa célula é <b>d²</b>. A área da lacuna (espaço vazio) é um quadrado de lado <b>(d-1)</b>, logo sua área é <b>(d-1)²</b>.</p><p>A taxa de cobertura é a razão entre a área coberta e a área total: <b>[d² - (d-1)²] / d² = 0,75</b>.</p><p>Podemos reescrever a equação como: 1 - [(d-1)/d]² = 0,75</p><p>[(d-1)/d]² = 0,25</p><p>Extraindo a raiz quadrada: (d-1)/d = <input data-resposta=\"0.5\"></p><p>Multiplicando cruzado: d - 1 = 0,5d</p><p>0,5d = 1</p><p>d = <input data-resposta=\"2\"></p>"
    }
  },
  {
    "id": 26,
    "titulo": "Problema 26",
    "enunciado": "O Índice de Desenvolvimento Humano (IDH) é uma medida usada para classificar os países pelo seu grau de desenvolvimento. Para seu cálculo, são levados em consideração a expectativa de vida ao nascer, tempo de escolaridade e renda per capita, entre outros. O menor valor deste índice é zero e o maior é um. Cinco países foram avaliados e obtiveram os seguintes índices de desenvolvimento humano: o primeiro país recebeu um valor X, o segundo X<sup>1/2</sup>, o terceiro X<sup>1/3</sup>, o quarto X<sup>2</sup> e o último X<sup>3</sup>. Nenhum desses países zerou ou atingiu o índice máximo. Qual desses países obteve o maior IDH?",
    "alternativas": {
      "A": "O primeiro país (X)",
      "B": "O segundo país (X<sup>1/2</sup>)",
      "C": "O terceiro país (X<sup>1/3</sup>)",
      "D": "O quarto país (X<sup>2</sup>)",
      "E": "O quinto país (X<sup>3</sup>)"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para valores de base entre 0 e 1 (0 < X < 1), o comportamento das potências é inversamente proporcional ao valor do expoente. Ou seja, quanto menor o expoente, maior será o resultado final.</p><p>Comparando os expoentes dos cinco países: 1, 1/2, 1/3, 2 e 3. O menor expoente entre eles é <input data-resposta=\"1/3\">. Portanto, o país com o maior IDH é o terceiro país.</p>"
    }
  },
  {
    "id": 27,
    "titulo": "Problema 27",
    "enunciado": "Um motorista de um carro flex (bicombustível) calcula que, abastecido com 45 litros de gasolina ou com 60 litros de etanol, o carro percorre a mesma distância. Chamando de x o valor do litro de gasolina e de y o valor do litro de etanol, a situação em que abastecer com gasolina é economicamente mais vantajosa do que abastecer com etanol é expressa por",
    "alternativas": {
      "A": "x/y < 3/4",
      "B": "x/y < 60/45",
      "C": "x/y > 3/4",
      "D": "x/y > 60/45",
      "E": "x/y = 3/4"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para que o abastecimento com gasolina seja economicamente mais vantajoso, o custo total de 45 litros de gasolina deve ser menor que o custo total de 60 litros de etanol.</p><p>A relação matemática é: 45x < 60y</p><p>Para expressar a vantagem em termos da razão entre os preços (x/y), dividimos ambos os lados da inequação por 45y:</p><p>x/y < <input data-resposta=\"60/45\"></p>"
    }
  },
  {
    "id": 28,
    "titulo": "Problema 28",
    "enunciado": "A figura apresenta dois mapas, em que o estado do Rio de Janeiro é visto em diferentes escalas. Há interesse em estimar o número de vezes que foi ampliada a área correspondente a esse estado no mapa do Brasil. Esse número é",
    "alternativas": {
      "A": "menor que 10.",
      "B": "maior que 10 e menor que 20.",
      "C": "maior que 20 e menor que 30.",
      "D": "maior que 30 e menor que 40.",
      "E": "maior que 40."
    },
    "correta": "D",
    "imagem": "https://static.wixstatic.com/media/b05a8a_c52ca9361f9449c680abf9e516e95345~mv2.png/v1/fill/w_319,h_226,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>A razão entre as escalas lineares (comprimento) é dada pela divisão dos denominadores das escalas: k = 25.000.000 / 4.000.000 = <input data-resposta=\"25/4\">. Como a ampliação da área é o quadrado da ampliação linear, temos k² = (25/4)² = <input data-resposta=\"625/16\">. O resultado da divisão é <input data-resposta=\"39.0625\">, que está entre 30 e 40.</p>"
    }
  },
  {
    "id": 29,
    "titulo": "Problema 29",
    "enunciado": "Uma pessoa tem massa corporal de 167 kg. Sob orientação de um nutricionista, submeteu-se a um regime alimentar em que se projeta que a perda de quilos mensais seja inferior a 5 kg. Após iniciar o regime, observou-se, nos três primeiros meses, uma perda de 4 kg por mês, e nos quatro meses seguintes, uma perda mensal de 3 kg. Daí em diante, segundo as recomendações do nutricionista, deveria haver uma perda mensal fixa em cada um dos meses subsequentes, objetivando alcançar a massa corporal de 71 kg ao final do regime. Segundo as projeções e recomendações do nutricionista, para alcançar seu objetivo, a duração mínima, em mês, que essa pessoa deverá manter o seu regime será de",
    "alternativas": {
      "A": "15",
      "B": "20",
      "C": "22",
      "D": "24",
      "E": "25"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<div><p>Para resolver este problema, siga os passos:</p><ol><li>Calcule a massa total que deve ser perdida: 167 kg - 71 kg = <input data-resposta=\"96\"> kg.</li><li>Calcule a perda nos primeiros 3 meses (4 kg/mês): 3 * 4 = <input data-resposta=\"12\"> kg.</li><li>Calcule a perda nos 4 meses seguintes (3 kg/mês): 4 * 3 = <input data-resposta=\"12\"> kg.</li><li>Soma da perda nos primeiros 7 meses: 12 + 12 = <input data-resposta=\"24\"> kg.</li><li>Massa restante para perder: 96 - 24 = <input data-resposta=\"72\"> kg.</li><li>Como a perda mensal fixa deve ser inferior a 5 kg, dividimos a massa restante pelo limite: 72 / 5 = <input data-resposta=\"14.4\">.</li><li>Como o número de meses deve ser inteiro e a perda inferior a 5 kg, o tempo mínimo para essa etapa é de <input data-resposta=\"15\"> meses.</li><li>Duração total do regime: 3 + 4 + 15 = <input data-resposta=\"22\"> meses.</li></ol></div>"
    }
  },
  {
    "id": 30,
    "titulo": "Problema 30",
    "enunciado": "Para a comunicação entre dois navios é utilizado um sistema de codificação com base em valores numéricos. Para isso, são consideradas as operações triângulo Δ e estrela ∗, definidas sobre o conjunto dos números reais por: x Δ y = x² - y e x ∗ y = x² - y². O navio que deseja enviar uma mensagem deve fornecer um valor de entrada b, que irá gerar um valor de saída, a ser enviado ao navio receptor, dado pela soma das duas maiores soluções da equação p(a) = (a Δ b) ∗ (b Δ a) = 0. Cada valor possível de entrada e saída representa uma mensagem diferente já conhecida pelos dois navios. Um navio deseja enviar ao outro a mensagem “ATENÇÃO!”. Para isso, deve utilizar o valor de entrada b = 1. Dessa forma, o valor recebido pelo navio receptor será:",
    "alternativas": {
      "A": "-2",
      "B": "-1",
      "C": "0",
      "D": "1",
      "E": "2"
    },
    "correta": "D",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, seguimos os passos de substituição e resolução algébrica:</p><ol><li>Substituímos o valor de entrada <b>b = 1</b> na equação: <i>p(a) = (a Δ 1) ∗ (1 Δ a) = 0</i>.</li><li>Aplicamos a definição da operação Δ: <i>(a² - 1) ∗ (1² - a) = 0</i>, o que resulta em <i>(a² - 1) ∗ (1 - a) = 0</i>.</li><li>Aplicamos a definição da operação ∗: <i>(a² - 1)² - (1 - a)² = 0</i>.</li><li>Fatorando a diferença de quadrados ou expandindo, obtemos: <i>(a - 1)²(a + 1)² - (a - 1)² = 0</i>.</li><li>Colocando <i>(a - 1)²</i> em evidência: <i>(a - 1)²[(a + 1)² - 1] = 0</i>, resultando nas raízes <b>a = 1</b>, <b>a = 0</b> e <b>a = -2</b>.</li><li>As duas maiores soluções são 1 e 0. A soma solicitada é 1 + 0 = <input data-resposta=\"1\">.</li></ol>"
    }
  },
  {
    "id": 31,
    "titulo": "Problema 31",
    "enunciado": "No ano em que uma empresa lançou seu novo modelo de celular no mercado brasileiro, investiu 45 milhões de reais no primeiro semestre em cada uma das cinco regiões do país, colocando à venda 30.000 aparelhos por região. No primeiro semestre, todos os aparelhos colocados à venda foram vendidos, gerando um lucro total de 30 milhões de reais. No segundo semestre, a empresa decidiu que faria o mesmo investimento e colocou à venda as mesmas quantidades de aparelhos por região. Por causa da demanda observada, a empresa considerou que todos os aparelhos desse modelo que fossem ofertados seriam vendidos e, além disso, planeja obter um lucro total 10 % maior no segundo semestre do que o que obteve no primeiro. Para que essa empresa alcance o lucro planejado, qual deve ser o valor de venda, em real, de um aparelho celular desse modelo, no segundo semestre desse ano?",
    "alternativas": {
      "A": "R$ 1.650,00",
      "B": "R$ 1.720,00",
      "C": "R$ 1.870,00",
      "D": "R$ 2.500,00",
      "E": "R$ 2.600,00"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>A empresa investiu R$ 45.000.000,00 por região. Como são 5 regiões, o investimento total foi 5 x 45.000.000 = <input data-resposta=\"225.000.000\">.</p><p>Foram vendidos 30.000 aparelhos por região; ao todo 30.000 x 5 = <input data-resposta=\"150.000\"> aparelhos.</p><p>O lucro no 2º semestre deve ser 10% maior que os 30 milhões do 1º: 30.000.000 x 1,1 = <input data-resposta=\"33.000.000\">.</p><p>A receita total necessária no 2º semestre (Investimento + Lucro) é 225.000.000 + 33.000.000 = <input data-resposta=\"258.000.000\">.</p><p>O valor de venda por aparelho é a receita dividida pela quantidade: 258.000.000 / 150.000 = <input data-resposta=\"1.720\">.</p>"
    }
  },
  {
    "id": 32,
    "titulo": "Problema 32",
    "enunciado": "Um professor de matemática desenvolveu uma atividade educacional relacionada aos Jogos Olímpicos e confeccionou uma maquete que representa uma piscina nas dimensões olímpicas. Admitiu que a piscina olímpica deve ter capacidade mínima de 2.500.000 litros e construiu sua maquete, referente a esse valor mínimo, na forma de paralelepípedo reto-retângulo com dimensões internas 2 cm, 25 cm e 50 cm, cujo volume é 2.500 cm³. Considere que 1 L = 10³ cm³. A maquete confeccionada pelo professor foi elaborada na escala",
    "alternativas": {
      "A": "1 : 100",
      "B": "1 : 1.000",
      "C": "1 : 10.000",
      "D": "1 : 100.000",
      "E": "1 : 1.000.000"
    },
    "correta": "A",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para encontrar a escala linear, siga os passos:</p><ol><li>Converta o volume real para cm³: 2.500.000 L * 1.000 = <input data-resposta=\"2500000000\"> cm³.</li><li>Calcule a razão entre o volume da maquete e o volume real: 2.500 / 2.500.000.000 = 1 / <input data-resposta=\"1000000\">.</li><li>Como a escala de volume é o cubo da escala linear (k³), temos k³ = 1/1.000.000. Logo, k = 1 / <input data-resposta=\"100\">.</li></ol>"
    }
  },
  {
    "id": 33,
    "titulo": "Problema 33",
    "enunciado": "A proprietária de uma confecção pretende liquidar as camisas que possui em estoque, por meio de uma promoção na qual fará a venda de lotes com iguais quantidades de camisas. Para a 1ª semana, pretende anunciar a venda de cada lote de camisas por R$ 720,00. Na 2ª semana, para acelerar as vendas, planeja anunciar a venda de lotes com 3 unidades a mais do que os lotes vendidos na primeira semana, ainda por R$ 720,00 cada lote, e de forma que o preço unitário de cada peça seja R$ 20,00 mais baixo do que o valor que teria sido cobrado por peça na 1ª semana de promoção. Quantas camisas deverão conter os lotes que serão colocados à venda na 1ª semana para que seja possível praticar essa promoção?",
    "alternativas": {
      "A": "6",
      "B": "9",
      "C": "12",
      "D": "15",
      "E": "18"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Seja <b>x</b> o número de camisas no lote da 1ª semana. O preço unitário é <b>720/x</b>.</p><p>Na 2ª semana, o lote tem <b>x + 3</b> camisas, com preço unitário de <b>720/(x+3)</b>.</p><p>A diferença entre os preços unitários é de R$ 20,00:</p><p>720/x - 720/(x+3) = 20</p><p>Resolvendo a equação quadrática resultante x² + 3x - 108 = 0, encontramos a quantidade de camisas: <input data-resposta=\"9\"></p>"
    }
  },
  {
    "id": 34,
    "titulo": "Problema 34",
    "enunciado": "Estudantes de psicologia experimental estão analisando um modelo matemático que foi desenvolvido a partir de um experimento com pombos. Nesse experimento, um alimento considerado como uma recompensa reforçadora era fornecido em quantidades (Q) para as aves, com a possibilidade de atraso no tempo de entrega. O modelo matemático que relaciona os valores reforçadores V1 e V2 de duas recompensas em função de suas respectivas quantidades Q1 e Q2 e de seus respectivos tempos de atraso T1 e T2 na disponibilização de cada uma delas é V = Q/T. Ao analisarem o caso em que a quantidade Q1 é o dobro da quantidade Q2, cinco estudantes fizeram as seguintes afirmações sobre em que condição o valor V1 será maior que o valor V2:",
    "alternativas": {
      "A": "estudante 1: sempre, pois Q1 é o dobro de Q2;",
      "B": "estudante 2: apenas quando a razão entre T2 e T1 for maior que 0,5;",
      "C": "estudante 3: apenas quando a razão entre T2 e T1 for menor que 0,5;",
      "D": "estudante 4: apenas quando T1 for igual a T2;",
      "E": "estudante 5: apenas quando a razão entre T2 e T1 for maior que 0,5 e menor que 1."
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para determinar quando V1 > V2, utilizamos a fórmula V = Q/T. Dado que Q1 = 2 * Q2, substituímos na inequação:</p><p>(2 * Q2) / T1 > Q2 / T2</p><p>Dividindo ambos os lados por Q2 (que é um valor positivo), temos:</p><p>2 / T1 > 1 / T2</p><p>Multiplicando os termos para isolar a razão T2/T1:</p><p>2 * T2 > T1</p><p>T2 / T1 > 1/2</p><p>Portanto, a razão entre T2 e T1 deve ser maior que: <input data-resposta=\"0,5\"></p>"
    }
  },
  {
    "id": 35,
    "titulo": "Problema 35",
    "enunciado": "Três amigos realizaram uma viagem de carro entre duas cidades, num tempo total de 31 horas. Para não fazer paradas, revezaram na direção, de forma que cada um deles dirigisse um terço da quilometragem total. O primeiro, mais prudente, dirigiu a uma velocidade média de 75 quilômetros por hora; o segundo, a uma velocidade média de 90 quilômetros por hora; e o último, mais apressado, dirigiu a uma velocidade média de 100 quilômetros por hora. A distância percorrida por eles, em quilômetros, foi de:",
    "alternativas": {
      "A": "2400",
      "B": "2500",
      "C": "2600",
      "D": "2700",
      "E": "2800"
    },
    "correta": "D",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Seja <b>D</b> a distância total percorrida. Como cada amigo dirigiu um terço da distância, cada um percorreu <b>D/3</b> km.</p><p>O tempo total é a soma dos tempos de cada trecho:</p><ul><li>Tempo 1: (D/3) / 75 = D/225</li><li>Tempo 2: (D/3) / 90 = D/270</li><li>Tempo 3: (D/3) / 100 = D/300</li></ul><p>A soma dos tempos é igual a 31 horas:</p><p>D/225 + D/270 + D/300 = 31</p><p>Encontrando o MMC de 225, 270 e 300, que é 2700, temos:</p><p>(12D + 10D + 9D) / 2700 = 31</p><p>31D / 2700 = 31</p><p>D = <input data-resposta=\"2700\"> km</p>"
    }
  },
  {
    "id": 36,
    "titulo": "Problema 36",
    "enunciado": "O chocolate é um dos alimentos mais apreciados e desejados do mundo. Uma loja especializada nesse produto oferece uma promoção para os bombons, que custam R$ 2,00 cada. Cada cliente tem x% de desconto na compra de x bombons. A promoção é válida para a compra de até 40 bombons, ou seja, 40% é o desconto máximo possível. Queremos escrever uma expressão para V em função de x, com x ≤ 40. Qual é a expressão do valor V, em reais, na compra de x bombons da promoção, por cliente?",
    "alternativas": {
      "A": "V = 2x",
      "B": "V = 2x - 0,02x",
      "C": "V = 2x - 0,02x²",
      "D": "V = 2x - 0,2x²",
      "E": "V = 2x - 2x²"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para encontrar a expressão, considere que o preço unitário sem desconto é R$ 2,00. O desconto por bombom é de x% de 2, ou seja, (x/100) * 2 = 0,02x. O preço unitário com desconto é (2 - 0,02x). Multiplicando pela quantidade x, temos: V = x * (2 - 0,02x) = 2x - <input data-resposta=\"0,02\">x².</p>"
    }
  },
  {
    "id": 37,
    "titulo": "Problema 37",
    "enunciado": "Um cinema tem capacidade para 180 pessoas e cobra R$ 30,00 pelo ingresso inteiro e R$ 15,00 pelo ingresso de meia-entrada. A ocupação média é de 100 pessoas e, destas, 60 pagam meia-entrada e as demais, o valor inteiro. O administrador desse cinema realizou algumas pesquisas com os seus frequentadores e constatou que, para cada R$ 2,00 de desconto no preço inteiro e R$ 1,00 de desconto no preço da meia-entrada, a quantidade de frequentadores pagantes do preço inteiro aumentava em 20% e a de pagantes de meia-entrada aumentava em 10% em relação às quantidades iniciais. A hipótese do administrador do cinema é que esse comportamento se mantenha para novos descontos, ou seja, ao duplicar o valor dos descontos, duplicarão também os percentuais de aumento do número de frequentadores de cada tipo. Por isso, ele decidiu criar uma promoção aplicando um desconto de R$ 8,00 no preço inteiro e de R$ 4,00 no preço da meia-entrada, visando aumentar a arrecadação. Ele classificará o sucesso da promoção em função do aumento na arrecadação da seguinte forma: \n– fraco: aumento até R$ 500,00; \n– regular: aumento maior que R$ 500,00 até R$ 800,00; \n– bom: aumento maior que R$ 800,00 até R$ 1 200,00; \n– muito bom: aumento maior que R$ 1 200,00 até R$ 2 000,00; \n– ótimo: aumento maior que R$ 2 000,00. \nCaso a hipótese do administrador do cinema seja confirmada, o sucesso da promoção será classificado como:",
    "alternativas": {
      "A": "fraco",
      "B": "regular",
      "C": "bom",
      "D": "muito bom",
      "E": "ótimo"
    },
    "correta": "A",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<div><p><b>1. Situação Inicial:</b><br>Público: 40 inteiras e 60 meias.<br>Arrecadação: (40 × 30) + (60 × 15) = R$ <input data-resposta=\"2100\"></p><p><b>2. Nova Situação (Desconto de R$ 8,00 e R$ 4,00):</b><br>Novos Preços: Inteira = R$ 22,00; Meia = R$ 11,00.<br>Aumento Inteira: O desconto de R$ 8,00 é 4 vezes o desconto de R$ 2,00, logo o aumento é 4 × 20% = 80%.<br>Novo Público Inteira: 40 + 80% = <input data-resposta=\"72\"><br>Aumento Meia: O desconto de R$ 4,00 é 4 vezes o desconto de R$ 1,00, logo o aumento é 4 × 10% = 40%.<br>Novo Público Meia: 60 + 40% = <input data-resposta=\"84\"></p><p><b>3. Nova Arrecadação:</b><br>(72 × 22) + (84 × 11) = 1584 + 924 = R$ <input data-resposta=\"2508\"></p><p><b>4. Cálculo do Aumento:</b><br>2508 - 2100 = R$ <input data-resposta=\"408\"><br>Como 408 é menor que 500, o sucesso é classificado como fraco.</p></div>"
    }
  },
  {
    "id": 38,
    "titulo": "Problema 38",
    "enunciado": "Um imposto é dito cumulativo se incide em duas ou mais etapas da circulação de mercadorias, sem que na etapa posterior possa ser abatido o montante pago na etapa anterior. PIS e Cofins são exemplos de impostos cumulativos e correspondem a um percentual total de 3,65%, que incide em cada etapa da comercialização de um produto. Considere um produto com preço inicial C. Suponha que ele é revendido para uma loja pelo preço inicial acrescido dos impostos descritos. Em seguida, o produto é revendido por essa loja ao consumidor pelo valor pago acrescido novamente dos mesmos impostos. Qual a expressão algébrica que corresponde ao valor pago em impostos pelo consumidor?",
    "alternativas": {
      "A": "0,0365 · C",
      "B": "0,0365 · C · (1 + 1,0365)",
      "C": "0,0730 · C",
      "D": "C · (1,0365)^2",
      "E": "2 · 0,0365 · C"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, devemos calcular o imposto em cada etapa:</p><ul><li><b>Etapa 1:</b> O imposto é I1 = 0,0365 · C. O valor do produto passa a ser V1 = C + 0,0365 · C = C(1 + 0,0365).</li><li><b>Etapa 2:</b> O imposto incide sobre o valor anterior: I2 = 0,0365 · V1 = 0,0365 · C(1,0365).</li></ul><p>O valor total pago em impostos é a soma de I1 + I2:</p><p>0,0365 · C + 0,0365 · C(1,0365) = 0,0365 · C · (1 + 1,0365).</p><p>Qual o valor decimal da soma dos impostos (I1 + I2) em relação a C? <input data-resposta=\"0,07433225\"></p>"
    }
  },
  {
    "id": 39,
    "titulo": "Problema 39",
    "enunciado": "Para identificar visualmente uma loja de pet shop, um empresário criou uma logomarca que se assemelha a uma marca deixada pela pegada de um gato, como na figura. O maior círculo tem medida de raio igual a 6 cm. O empresário pretende reproduzir o desenho em uma das paredes retangulares da loja. Para isso, fará a ampliação da logomarca utilizando a escala de 1:25. A área mínima, em metro quadrado, que a parede deverá ter para que a logomarca seja aplicada é:",
    "alternativas": {
      "A": "1,125",
      "B": "1,5",
      "C": "2,25",
      "D": "6,25",
      "E": "9,0"
    },
    "correta": "E",
    "imagem": "https://static.wixstatic.com/media/b05a8a_d5fe87d9c6204bf690084a5d49eb8678~mv2.png/v1/fill/w_196,h_200,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/39.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>O raio original do maior círculo é 6 cm. Com a escala de 1:25, o raio ampliado será 6 cm &times; 25 = <input data-resposta=\"150\"> cm.</p><p>Convertendo para metros: 150 cm = <input data-resposta=\"1,5\"> m.</p><p>A largura e altura mínimas da parede devem corresponder ao diâmetro do círculo ampliado para comportar a logomarca: 2 &times; 1,5 m = <input data-resposta=\"3\"> m.</p><p>A área mínima da parede retangular é 3 m &times; 3 m = <input data-resposta=\"9\"> m².</p>"
    }
  },
  {
    "id": 40,
    "titulo": "Problema 40",
    "enunciado": "Se a tartaruga, a lesma e o caramujo apostassem uma corrida, a lesma chegaria em último lugar, o penúltimo colocado seria o caramujo e a primeira seria a tartaruga. Segundo o biólogo americano Branley Allan Branson, a velocidade “recorde” já registrada em pesquisas, por uma lesma, é de 16,5 centímetros por minuto. Para uma reportagem, dispondo das velocidades recordes da tartaruga e do caramujo em metro por segundo, se faz necessário saber o fator de conversão da velocidade recorde da lesma para metro por segundo para divulgar uma comparação. Com base nas informações, o fator de conversão da velocidade recorde da lesma para metro por segundo é:",
    "alternativas": {
      "A": "0,00275",
      "B": "0,0275",
      "C": "0,275",
      "D": "2,75",
      "E": "27,5"
    },
    "correta": "A",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p><b>Passo 1:</b> Converter centímetros para metros. Sabemos que: 1 m = <input data-resposta=\"100\"> cm &rArr; 1 cm = 10<sup>-2</sup> m. Logo, 16,5 cm = <input data-resposta=\"0,165\"> m.</p><p><b>Passo 2:</b> Converter minutos para segundos. Sabemos que: 1 min = <input data-resposta=\"60\"> s.</p><p><b>Passo 3:</b> Calcular a velocidade final em m/s dividindo o valor em metros pelo tempo em segundos: 0,165 / 60 = <input data-resposta=\"0,00275\"> m/s.</p>"
    }
  },
  {
    "id": 41,
    "titulo": "Problema 41",
    "enunciado": "Foi feita uma pesquisa sobre a escolaridade dos funcionários de uma empresa. Verificou-se que 1/4 dos homens que ali trabalham têm o ensino médio completo, enquanto 2/3 das mulheres que trabalham na empresa têm o ensino médio completo. Constatou-se, também, que entre todos os que têm o ensino médio completo, metade são homens. A fração que representa o número de funcionários homens em relação ao total de funcionários dessa empresa é:",
    "alternativas": {
      "A": "1/3",
      "B": "4/11",
      "C": "1/2",
      "D": "8/11",
      "E": "11/8"
    },
    "correta": "D",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Seja <b>H</b> o número de homens e <b>M</b> o número de mulheres. O número de homens com ensino médio é <b>H/4</b> e o de mulheres é <b>2M/3</b>. Se metade dos que têm ensino médio são homens, então a quantidade de homens com ensino médio é igual à quantidade de mulheres com ensino médio:</p><p><b>H/4 = 2M/3</b></p><p>Multiplicando cruzado, temos <b>3H = 8M</b>, ou seja, <b>H = 8M/3</b>.</p><p>O total de funcionários é <b>H + M</b>. Substituindo H: <b>8M/3 + M = 11M/3</b>.</p><p>A fração de homens em relação ao total é (8M/3) / (11M/3), que resulta em: <input data-resposta=\"8/11\"></p>"
    }
  },
  {
    "id": 42,
    "titulo": "Problema 42",
    "enunciado": "Uma partida de futebol tem dois tempos de 45 minutos cada. A duração do intervalo entre cada tempo é de 15 minutos. Eventualmente, por ocasião de paralisações ocorridas durante um dos tempos (como comemorações de gols, atendimento a jogadores que necessitem de maca), ocorre acréscimo ao tempo de jogo. No Brasil, o segundo tempo é iniciado zerando-se o cronômetro, mas em campeonatos europeus, começa com o cronômetro posicionado em 45 minutos. Em uma partida de um campeonato europeu, um time marcou um gol aos 17 minutos e 45 segundos. A outra equipe empatou o jogo aos 54 minutos e 32 segundos. O tempo do intervalo foi respeitado e houve um acréscimo de 2 minutos ao primeiro tempo do jogo. O tempo transcorrido entre os dois gols foi de:",
    "alternativas": {
      "A": "54 minutos e 47 segundos.",
      "B": "53 minutos e 47 segundos.",
      "C": "51 minutos e 47 segundos.",
      "D": "38 minutos e 47 segundos.",
      "E": "36 minutos e 47 segundos."
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>A partida segue o modelo europeu, em que o cronômetro não zera no segundo tempo.</p><p>O 1o tempo teve 2 minutos de acréscimo, então terminou aos: <input data-resposta=\"45\"> + <input data-resposta=\"2\"> = <input data-resposta=\"47\">.</p><p>O 1o gol foi marcado aos <input data-resposta=\"17\"> minutos e <input data-resposta=\"45\"> segundos do 1o tempo.</p><p>O 2o gol foi marcado aos <input data-resposta=\"54\"> minutos e <input data-resposta=\"32\"> segundos do 2o tempo.</p>"
    }
  },
  {
    "id": 43,
    "titulo": "Problema 43",
    "enunciado": "Um laboratório realizou um teste para calcular a velocidade de reprodução de um tipo de bactéria. Para tanto, realizou um experimento para observar a reprodução de uma quantidade x dessas bactérias por um período de duas horas. Após esse período, constava no habitáculo do experimento uma população de 189.440 da citada bactéria. Constatou-se, assim, que a população de bactérias dobrava a cada 0,25 hora. A quantidade inicial de bactérias era de:",
    "alternativas": {
      "A": "740",
      "B": "1.480",
      "C": "2.960",
      "D": "5.920",
      "E": "11.840"
    },
    "correta": "A",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para encontrar a quantidade inicial (x), utilizamos a fórmula de crescimento exponencial: <b>P(t) = x &middot; 2<sup>n</sup></b>, onde <i>n</i> é o número de vezes que a população dobrou.</p><p>1. Calcule o número de períodos de 0,25h em 2 horas: 2 / 0,25 = 8 períodos.</p><p>2. Monte a equação: 189.440 = x &middot; 2<sup>8</sup></p><p>3. Como 2<sup>8</sup> = 256, temos: 189.440 = x &middot; 256</p><p>4. x = 189.440 / 256</p><p>Resultado: <input data-resposta=\"740\"></p>"
    }
  },
  {
    "id": 44,
    "titulo": "Problema 44",
    "enunciado": "A constante elástica C de uma mola helicoidal é dada pela fórmula C = (G * d^4) / (8 * D^3 * n), onde G é o módulo de elasticidade, d é o diâmetro do fio, D é o diâmetro médio da mola e n é o número de espiras. O fabricante de uma mola decide dobrar o diâmetro do fio (d), dobrar o diâmetro médio da mola (D) e manter o mesmo material (G) e o mesmo número de espiras (n). A nova constante elástica C' da mola será:",
    "alternativas": {
      "A": "C' = 1/8 C",
      "B": "C' = 1/4 C",
      "C": "C' = 1/2 C",
      "D": "C' = 2C",
      "E": "C' = 4C"
    },
    "correta": "D",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>O enunciado estabelece a relação entre as grandezas através da fórmula C = (G &middot; d<sup>4</sup>) / (8 &middot; D<sup>3</sup> &middot; n).</p><p>Ao dobrar o diâmetro do fio (2d) e o diâmetro médio (2D), a nova constante C' será:</p><p>C' = (G &middot; (2d)<sup>4</sup>) / (8 &middot; (2D)<sup>3</sup> &middot; n)</p><p>C' = (G &middot; 16d<sup>4</sup>) / (8 &middot; 8D<sup>3</sup> &middot; n)</p><p>C' = (16/8) &middot; [ (G &middot; d<sup>4</sup>) / (8 &middot; D<sup>3</sup> &middot; n) ]</p><p>C' = (16/8) &middot; C</p><p>A razão entre a nova constante e a antiga (C'/C) é: <input data-resposta=\"2\"></p>"
    }
  },
  {
    "id": 45,
    "titulo": "Problema 45",
    "enunciado": "Um vidraceiro é contratado para colocar uma porta de vidro que escorregará em uma canaleta de largura interna igual a 1,45 cm, como mostra a figura. O vidraceiro precisa de uma placa de vidro de maior espessura possível, tal que deixe uma folga total de pelo menos 0,2 cm, para que o vidro possa escorregar na canaleta, e no máximo 0,5 cm para que o vidro não fique batendo com a interferência do vento após a instalação. Para conseguir essa placa de vidro, esse vidraceiro foi até uma loja e lá encontrou placas de vidro com espessuras iguais a: 0,75 cm; 0,95 cm; 1,05 cm; 1,20 cm; 1,40 cm. Para atender às restrições especificadas, o vidraceiro deverá comprar a placa de espessura, em centímetro, igual a:",
    "alternativas": {
      "A": "0,75",
      "B": "0,95",
      "C": "1,05",
      "D": "1,20",
      "E": "1,40"
    },
    "correta": "D",
    "imagem": "https://static.wixstatic.com/media/b05a8a_2522a40c11734213b1f92ede9d1cc1de~mv2.jpeg/v1/fill/w_600,h_79,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/45.jpeg",
    "ajuda": {
      "tipo": "input",
      "conteudo": "Para encontrar a espessura ideal, devemos garantir que a folga (Largura da Canaleta - Espessura do Vidro) esteja entre 0,2 cm e 0,5 cm. <br> Largura da canaleta: 1,45 cm. <br> Testando a maior espessura possível (1,40 cm): 1,45 - <input data-resposta=\"1,40\"> = <input data-resposta=\"0,05\"> (Folga insuficiente, menor que 0,2). <br> Testando a próxima maior espessura (1,20 cm): 1,45 - <input data-resposta=\"1,20\"> = <input data-resposta=\"0,25\">. <br> Como 0,25 está entre 0,2 e 0,5, a placa correta é a de <input data-resposta=\"1,20\"> cm."
    }
  },
  {
    "id": 46,
    "titulo": "Problema 46",
    "enunciado": "O boliche é um esporte cujo objetivo é derrubar, com uma bola, uma série de pinos alinhados em uma pista. A professora de matemática organizou um jogo de boliche em que os pinos são garrafas que possuem rótulos com números, conforme mostra o esquema. O aluno marca pontos de acordo com a soma das quantidades expressas nos rótulos das garrafas que são derrubadas. Se dois ou mais rótulos representam a mesma quantidade, apenas um deles entra na contagem dos pontos. Um aluno marcou 7,55 pontos em uma jogada. Uma das garrafas que ele derrubou tinha o rótulo 6,8. A quantidade máxima de garrafas que ele derrubou para obter essa pontuação é igual a:",
    "alternativas": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5",
      "E": "6"
    },
    "correta": "C",
    "imagem": "https://static.wixstatic.com/media/b05a8a_78a650c99e1847c6979c501a3967f318~mv2.png/v1/fill/w_311,h_187,al_c,q_85,enc_avif,quality_auto/46.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, primeiro subtraímos o valor da garrafa conhecida da pontuação total:</p><p>7,55 - 6,8 = 0,75</p><p>Agora, identificamos no conjunto de garrafas todas aquelas que possuem valores equivalentes a 0,75. De acordo com as regras, se o aluno derrubar várias garrafas com o mesmo valor, a pontuação é contabilizada apenas uma vez.</p><p>As garrafas equivalentes a 0,75 são: 0,75, 3/4 e 9/12.</p><p>Para obter a quantidade máxima de garrafas, consideramos que ele derrubou a garrafa de 6,8 e todas as três garrafas que representam 0,75.</p><p>Total de garrafas = 1 (rótulo 6,8) + 3 (rótulos 0,75, 3/4 e 9/12) = <input data-resposta=\"4\"></p>"
    }
  },
  {
    "id": 47,
    "titulo": "Problema 47",
    "enunciado": "Deseja-se comprar determinado produto e, após uma pesquisa de preços, o produto foi encontrado em 5 lojas diferentes, a preços variados.\n\n– Loja 1: 20% de desconto, que equivale a R$ 720,00, mais R$ 70,00 de frete;\n– Loja 2: 20% de desconto, que equivale a R$ 740,00, mais R$ 50,00 de frete;\n– Loja 3: 20% de desconto, que equivale a R$ 760,00, mais R$ 80,00 de frete;\n– Loja 4: 15% de desconto, que equivale a R$ 710,00, mais R$ 10,00 de frete;\n– Loja 5: 15% de desconto, que equivale a R$ 690,00, sem custo de frete.\n\nO produto foi comprado na loja que apresentou o menor preço total. O produto foi adquirido na loja:",
    "alternativas": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4",
      "E": "5"
    },
    "correta": "A",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "Para encontrar o preço total em cada loja, primeiro calculamos o valor original (V) a partir do desconto (vD) e sua porcentagem (p): V = vD / p. O preço final é (V - vD) + Frete.<br><br>Loja 1: (720 / 0,20) - 720 + 70 = R$ <input data-resposta=\"2950\"><br>Loja 2: (740 / 0,20) - 740 + 50 = R$ <input data-resposta=\"3010\"><br>Loja 3: (760 / 0,20) - 760 + 80 = R$ <input data-resposta=\"3120\"><br>Loja 4: (710 / 0,15) - 710 + 10 = R$ <input data-resposta=\"4033.33\"><br>Loja 5: (690 / 0,15) - 690 + 0 = R$ <input data-resposta=\"3910\"><br><br>Comparando os valores, a Loja 1 apresenta o menor preço total."
    }
  },
  {
    "id": 48,
    "titulo": "Problema 48",
    "enunciado": "Para a compra de um repelente eletrônico, uma pessoa fez uma pesquisa nos mercados de seu bairro. Cada tipo de repelente pesquisado traz escrito no rótulo da embalagem as informações quanto à duração, em dias, associada à quantidade de horas de utilização por dia. Essas informações e o preço por unidade foram representados no quadro:\n\n- Tipo I: 30 dias, 12 horas/dia, R$ 12,00\n- Tipo II: 40 dias, 9 horas/dia, R$ 9,00\n- Tipo III: 20 dias, 10 horas/dia, R$ 10,00\n- Tipo IV: 30 dias, 8 horas/dia, R$ 11,00\n- Tipo V: 48 dias, 8 horas/dia, R$ 12,00\n\nA pessoa comprará aquele que apresentar o menor custo diário, quando ligado durante 8 horas por dia. Nessas condições, o repelente eletrônico que essa pessoa comprará é do tipo:",
    "alternativas": {
      "A": "I",
      "B": "II",
      "C": "III",
      "D": "IV",
      "E": "V"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver, calculamos o tempo total de uso em horas e depois a nova duração em dias para 8h/dia.</p><ul><li>Tipo I: (30 * 12) / 8 = 45 dias. Custo: 12/45</li><li>Tipo II: (40 * 9) / 8 = <input data-resposta=\"45\"> dias. Custo: <input data-resposta=\"9/45\"></li><li>Tipo III: (20 * 10) / 8 = 25 dias. Custo: 10/25</li><li>Tipo IV: (30 * 8) / 8 = 30 dias. Custo: 11/30</li><li>Tipo V: (48 * 8) / 8 = 48 dias. Custo: 12/48</li></ul><p>Comparando as frações, o menor custo diário é o do Tipo II.</p>"
    }
  },
  {
    "id": 49,
    "titulo": "Problema 49",
    "enunciado": "O tamanho mínimo que a visão humana é capaz de visualizar sem o uso de equipamento auxiliar é equivalente a 100 micrômetros (1 micrômetro = 10^3 milímetros). Uma estudante pretende visualizar e analisar hemácias do sangue humano, que medem 0,007 mm de diâmetro. Ela adquiriu um microscópio óptico que tem uma lente ocular que amplia em 10 vezes a imagem do objeto em observação, e um conjunto de lentes objetivas com estas capacidades de ampliação: – lente I: 2 vezes; – lente IV: 1,1 vez; – lente II: 10 vezes; – lente V: 1,4 vez; – lente III: 15 vezes. O funcionamento desse microscópio permite o uso da lente ocular sozinha ou a combinação dela com uma de suas lentes objetivas, proporcionando, nesse caso, um aumento de sua capacidade de ampliação final, que é dada pelo produto entre as capacidades de ampliação da ocular e da objetiva. Essa estudante pretende selecionar a lente objetiva de menor capacidade de ampliação que permita, na combinação com a ocular, visualizar hemácias do sangue humano. A lente objetiva a ser selecionada pela estudante é a:",
    "alternativas": {
      "A": "I",
      "B": "II",
      "C": "III",
      "D": "IV",
      "E": "V"
    },
    "correta": "A",
    "imagem": "https://static.wixstatic.com/media/b05a8a_1afa8d16c3ff4963a21e2eb0032e08f1~mv2.png/v1/fill/w_208,h_241,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/49.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "O limite da visão humana é 100 μm, que equivale a 0,1 mm. Para que a hemácia de 0,007 mm seja visível, a ampliação total necessária deve ser de pelo menos 0,1 / 0,007 ≈ <input data-resposta=\"14.28\"> vezes. Como a lente ocular já amplia 10 vezes, a lente objetiva deve ampliar no mínimo 14,28 / 10 = <input data-resposta=\"1.428\"> vezes. Analisando as opções disponíveis: Lente IV (1,1x), Lente V (1,4x) e Lente I (2x). A lente de menor ampliação que atende ao requisito (maior que 1,428) é a Lente <input data-resposta=\"I\">."
    }
  },
  {
    "id": 50,
    "titulo": "Problema 50",
    "enunciado": "Uma sala com piso no formato retangular, com lados de medidas 3 m e 6 m, será dividida em dois ambientes. Para isso, serão utilizadas colunas em formato cilíndrico, dispostas perpendicularmente ao piso e representadas na figura pelos círculos de cor azul. Os centros desses círculos estarão sobre uma reta paralela aos lados de menor medida do piso da sala. Os vãos entre duas colunas e entre uma coluna e a parede não poderão ser superiores a 15 cm. Para efetuar a compra dessas colunas, foram feitos orçamentos com base em dados fornecidos por cinco lojas:\n\n- Loja I: colunas com 10 cm de diâmetro e preço unitário de R$ 50,00;\n- Loja II: colunas com 12 cm de diâmetro e preço unitário de R$ 55,00;\n- Loja III: colunas com 15 cm de diâmetro e preço unitário de R$ 60,00;\n- Loja IV: colunas com 20 cm de diâmetro e preço unitário de R$ 75,00;\n- Loja V: colunas com 30 cm de diâmetro e preço unitário de R$ 100,00.\n\nA compra será realizada na loja cujo orçamento resulte no menor valor total possível. A compra será realizada na loja:",
    "alternativas": {
      "A": "I",
      "B": "II",
      "C": "III",
      "D": "IV",
      "E": "V"
    },
    "correta": "A",
    "imagem": "https://static.wixstatic.com/media/b05a8a_f23e5e0211ed46bca4f2f9f1d3eaab53~mv2.png/v1/fill/w_281,h_154,al_c,q_85,enc_avif,quality_auto/50.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, devemos garantir que o vão entre as colunas seja de no máximo 15 cm. A largura total a ser preenchida é de 3 m, ou seja, <input data-resposta=\"300\"> cm.</p><p>Seja <i>n</i> o número de colunas e <i>d</i> o diâmetro de cada uma. O número de vãos será <i>n + 1</i>. A condição é: <br> (300 - n * d) / (n + 1) ≤ 15 <br> 300 - nd ≤ 15n + 15 <br> 285 ≤ n(d + 15) <br> <b>n ≥ 285 / (d + 15)</b></p><p>Calculando para cada loja:</p><ul><li>Loja I: n ≥ 285 / (10 + 15) = 11,4 → n = 12. Custo: 12 * 50 = R$ <input data-resposta=\"600\"></li><li>Loja II: n ≥ 285 / (12 + 15) = 10,55 → n = 11. Custo: 11 * 55 = R$ <input data-resposta=\"605\"></li><li>Loja III: n ≥ 285 / (15 + 15) = 9,5 → n = 10. Custo: 10 * 60 = R$ <input data-resposta=\"600\"></li><li>Loja IV: n ≥ 285 / (20 + 15) = 8,14 → n = 9. Custo: 9 * 75 = R$ <input data-resposta=\"675\"></li><li>Loja V: n ≥ 285 / (30 + 15) = 6,33 → n = 7. Custo: 7 * 100 = R$ <input data-resposta=\"700\"></li></ul><p>As lojas I e III oferecem o menor valor, porém a Loja I é a primeira opção listada com o valor mínimo de 600.</p>"
    }
  }
];