
const questoes = [
  {
    "id": 1,
    "titulo": "Problema 1",
    "enunciado": "No período de 2005 a 2013, o valor da venda dos imóveis em uma cidade apresentou alta, o que resultou no aumento dos aluguéis. Os gráficos apresentam a evolução destes valores para um mesmo imóvel no mercado imobiliário desta cidade. A rentabilidade do aluguel de um imóvel é calculada pela razão entre o valor mensal de aluguel e o valor de mercado desse imóvel. Com base nos dados fornecidos, em que ano a rentabilidade do aluguel foi maior?",
    "alternativas": {
      "A": "2005",
      "B": "2007",
      "C": "2009",
      "D": "2011",
      "E": "2013"
    },
    "correta": "B",
    "imagem": "https://static.wixstatic.com/media/b05a8a_d8b3639596e4424caf371502fc73bfb9~mv2.png/v1/fill/w_289,h_367,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/01-Prob_01_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>A rentabilidade do imóvel é calculada pela razão: <b>rentabilidade = (valor mensal do aluguel) / (valor de mercado)</b>.</p><p>Preencha as razões para cada ano:</p><ul><li>2005: <input data-resposta=\"630/90000\"></li><li>2007: <input data-resposta=\"960/120000\"></li><li>2009: <input data-resposta=\"1350/270000\"></li><li>2011: <input data-resposta=\"1800/450000\"></li><li>2013: <input data-resposta=\"3240/540000\"></li></ul>"
    }
  },
  {
    "id": 2,
    "titulo": "Problema 2",
    "enunciado": "Uma unidade de medida comum usada para expressar áreas de terrenos de grandes dimensões é o hectare, que equivale a 10.000m2. Um fazendeiro decide fazer um loteamento utilizando 3 hectares de sua fazenda, dos quais 0,9 hectares será usado para a construção de ruas e calçadas e o restante será dividido em terrenos com área de 300m2 cada um. Os 20 primeiros terrenos vendidos terão preços promocionais de R$20.000,00 cada e os demais R$30.000,00 cada. Nas condições estabelecidas, o valor total em real obtido pelo fazendeiro com a venda de todos os terrenos será igual a:",
    "alternativas": {
      "A": "R$ 1.600.000,00",
      "B": "R$ 1.900.000,00",
      "C": "R$ 2.100.000,00",
      "D": "R$ 2.200.000,00",
      "E": "R$ 2.500.000,00"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>1. Calcule a área total em m²: 3 * 10.000 = <input data-resposta=\"30000\"> m².</p><p>2. Calcule a área para ruas: 0,9 * 10.000 = <input data-resposta=\"9000\"> m².</p><p>3. Área restante para lotes: 30.000 - 9.000 = <input data-resposta=\"21000\"> m².</p><p>4. Quantidade de lotes: 21.000 / 300 = <input data-resposta=\"70\"> lotes.</p><p>5. Valor total: (20 * 20.000) + (50 * 30.000) = <input data-resposta=\"1900000\">.</p>"
    }
  },
  {
    "id": 3,
    "titulo": "Problema 3",
    "enunciado": "Sabe-se que a distância real em linha reta de uma cidade A localizada no estado de São Paulo a uma cidade B localizada no estado de Alagoas, é igual a 2 000 km. Um estudante, ao analisar o mapa, verificou com a sua régua que a distância entre essas 2 cidades A e B era 8 cm. Os dados nos indicam que o mapa observado pelo estudante está na escala de:",
    "alternativas": {
      "A": "1 : 250",
      "B": "1 : 2.500",
      "C": "1 : 25.000",
      "D": "1 : 250.000",
      "E": "1 : 25.000.000"
    },
    "correta": "E",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver a questão, primeiro converta a distância real para a mesma unidade da medida do mapa (centímetros).</p><p>2.000 km = <input data-resposta=\"2000000\"> m = <input data-resposta=\"200000000\"> cm.</p><p>A escala é a razão entre a distância no mapa e a distância real: 8 / 200.000.000.</p><p>Dividindo ambos os termos por 8, a escala é 1 : <input data-resposta=\"25000000\">.</p>"
    }
  },
  {
    "id": 4,
    "titulo": "Problema 4",
    "enunciado": "O rótulo da embalagem de um cosmético informa que a dissolução de seu conteúdo de acordo com suas especificações rende 2,7 litros desse produto para o uso. Uma pessoa será submetida a um tratamento estético em que deverá tomar um banho de imersão com esse produto numa banheira com capacidade de 0,3 m3. Para evitar o transbordamento, essa banheira será preenchida em 80% da sua capacidade. Para esse banho, o número mínimo de embalagem desse cosmético é",
    "alternativas": {
      "A": "9",
      "B": "12",
      "C": "89",
      "D": "112",
      "E": "132"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Siga os passos para resolver o problema:</p><ol><li>Converta a capacidade da banheira para litros (sabendo que 1 m³ = 1000 litros): 0,3 * 1000 = <input data-resposta=\"300\"> litros.</li><li>Calcule o volume que será preenchido (80% da capacidade): 300 * 0,8 = <input data-resposta=\"240\"> litros.</li><li>Divida o volume total pelo rendimento de cada embalagem: 240 / 2,7 = <input data-resposta=\"88.88\">...</li><li>Como o número de embalagens deve ser inteiro, o valor mínimo é <input data-resposta=\"89\">.</li></ol>"
    }
  },
  {
    "id": 5,
    "titulo": "Problema 5",
    "enunciado": "O gráfico na Figura apresenta o nível de ocupação dos 5 reservatórios de água que abasteciam uma cidade em 2 fevereiro de 2015. Com base nos dados, qual desses reservatórios apresentava o maior volume de água?",
    "alternativas": {
      "A": "I",
      "B": "II",
      "C": "III",
      "D": "IV",
      "E": "V"
    },
    "correta": "D",
    "imagem": "https://static.wixstatic.com/media/b05a8a_6498011a7a8945a7b0d7893b18817ce8~mv2.png/v1/fill/w_315,h_274,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/02-Prob_05_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "Para calcular o volume de ocupação, multiplicamos a capacidade total pela porcentagem de ocupação (em decimal):<br>Reservatório I: 105 x 0,2 = <input data-resposta=\"21\"> bilhões de litros.<br>Reservatório II: 100 x 0,3 = <input data-resposta=\"30\"> bilhões de litros.<br>Reservatório III: 20 x 0,5 = <input data-resposta=\"10\"> bilhões de litros.<br>Reservatório IV: 80 x 0,4 = <input data-resposta=\"32\"> bilhões de litros.<br>Reservatório V: 40 x 0,6 = <input data-resposta=\"24\"> bilhões de litros.<br>Portanto, o reservatório com o maior volume de ocupação é o reservatório IV."
    }
  },
  {
    "id": 6,
    "titulo": "Problema 6",
    "enunciado": "O hábito de comer um prato de folhas todo dia faz proezas para o corpo. Uma das formas de variar o sabor das saladas é experimentar diferentes molhos. Um molho de iogurte com mostarda contém 2 colheres de sopa de iogurte desnatado, 1 colher de sopa de mostarda, 4 colheres sopa de água, 2 colheres de sopa de azeite. Considerando que uma colher de sopa equivale a aproximadamente 15 ml, qual é o número máximo de doses desse molho que se faz utilizando 1,5 l de azeite e mantendo a proporcionalidade das quantidades dos demais ingredientes?",
    "alternativas": {
      "A": "25",
      "B": "50",
      "C": "75",
      "D": "100",
      "E": "150"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, siga os passos:</p><ol><li>Calcule o volume de azeite por dose: 2 colheres &times; 15 ml = 30 ml.</li><li>Converta o total de azeite disponível para mililitros: 1,5 l = 1500 ml.</li><li>Divida o total disponível pelo volume por dose: 1500 / 30 = <input data-resposta=\"50\"> doses.</li></ol>"
    }
  },
  {
    "id": 7,
    "titulo": "Problema 7",
    "enunciado": "Um confeiteiro deseja fazer um bolo cuja receita indica a utilização de açúcar e farinha de trigo em quantidade fornecida 100 g. Ele sabe que uma determinada xícara, utilizada para medir os ingredientes, comporta 120 g de farinha de trigo e que três dessas xícaras de açúcar correspondem, em gramas, a quatro de farinha de trigo. Quantas gramas de açúcar cabem em uma dessas xícaras?",
    "alternativas": {
      "A": "130 g",
      "B": "140 g",
      "C": "150 g",
      "D": "160 g",
      "E": "170 g"
    },
    "correta": "D",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, seguimos as proporções dadas:</p><ul><li>(i) 1 xícara de farinha de trigo comporta <input data-resposta=\"120\"> g.</li><li>(ii) 3 xícaras de açúcar equivalem a 4 xícaras de farinha de trigo.</li></ul><p>Primeiro, calculamos a massa total de 4 xícaras de farinha: 4 &times; <input data-resposta=\"120\"> = <input data-resposta=\"480\"> g.</p><p>Como 3 xícaras de açúcar têm a mesma massa, para encontrar o valor de 1 xícara de açúcar, dividimos o total por 3: 480 / 3 = <input data-resposta=\"160\"> g.</p>"
    }
  },
  {
    "id": 8,
    "titulo": "Problema 8",
    "enunciado": "Uma pessoa pratica atividades físicas - caminhar, correr, andar de bicicleta e jogar futebol - como parte do seu programa de emagrecimento. Essas atividades são praticadas semanalmente, de acordo com a tabela 01 na figura abaixo que apresenta o número de horas diárias por atividade. Ela deseja comemorar seu aniversário e escolhe o dia da semana em que o gasto calórico com atividades físicas praticadas for o maior. Para tanto, considera que os valores dos gastos calóricos, das atividades por hora (cal/h) são os descrito na tabela 02. O dia da semana em que será comemorado o aniversário é",
    "alternativas": {
      "A": "segunda-feira",
      "B": "terça-feira",
      "C": "quarta-feira",
      "D": "quinta-feira",
      "E": "sexta-feira"
    },
    "correta": "D",
    "imagem": "https://static.wixstatic.com/media/b05a8a_f691101c450b41fca856b483450f3a15~mv2.png/v1/fill/w_263,h_200,al_c,q_85,enc_avif,quality_auto/20-Prob_8a_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "Para resolver o problema, é suficiente calcular o número de calorias gasta em cada dia da semana. <br> 3ª-feira: <input data-resposta=\"0,5\"> x 248 + <input data-resposta=\"0,5\"> x 764 + <input data-resposta=\"1\"> x 356 + <input data-resposta=\"0,5\"> x 492 = <input data-resposta=\"1108\">."
    }
  },
  {
    "id": 9,
    "titulo": "Problema 9",
    "enunciado": "O calendário Maia apresenta 2 contagens simultâneas de ano, o chamado ano Tzolkim, composto por 260 dias e que determinava o calendário religioso. E o ano Haab, composto por 365 dias e determinava o calendário agrícola. Um historiador encontrou evidências de que gerações de uma mesma família governaram certa comunidade Maia pelo período de 20 ciclos, sendo cada ciclo formado por 52 anos Haab. De acordo com as informações fornecidas, durante quantos anos Tzolkim aquela comunidade maia foi governada por tal família?",
    "alternativas": {
      "A": "730",
      "B": "1040",
      "C": "1460",
      "D": "2100",
      "E": "5200"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Primeiro, calculamos o total de anos Haab: 20 ciclos &times; 52 anos = <input data-resposta=\"1040\"> anos Haab.</p><p>Sabendo que cada ano Haab possui 365 dias, o total de dias &eacute; 1040 &times; 365. Para encontrar a quantidade de anos Tzolkim (de 260 dias), dividimos o total de dias por 260:</p><p>(1040 &times; 365) / 260 = <input data-resposta=\"1460\"> anos Tzolkim.</p>"
    }
  },
  {
    "id": 10,
    "titulo": "Problema 10",
    "enunciado": "Entre maratonistas, um parâmetro utilizado é o de economia de corrida (EC). O valor desse parâmetro é calculado pela razão entre o consumo de oxigênio em mililitro (ml) por minuto (min), e a massa em quilograma (kg), do atleta correndo a uma velocidade constante. Um maratonista, visando melhorar sua performance auxiliado por um médico, mensura o seu consumo de oxigênio por minuto a velocidade constante. Com base nesse consumo e na massa do atleta, o médico calcula o EC do atleta. A unidade de medida da grandeza descrita pelo parâmetro EC é",
    "alternativas": {
      "A": "(ml · min) / kg",
      "B": "(ml · kg) / min",
      "C": "ml · min · kg",
      "D": "ml / (min · kg)",
      "E": "kg / (ml · min)"
    },
    "correta": "D",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>A Economia de Corrida (EC) é definida pela razão entre o consumo de oxigênio e a massa corporal:</p><p>EC = (ml / min) / kg</p><p>Para simplificar essa divisão de frações, multiplicamos a primeira pelo inverso da segunda:</p><p>EC = (ml / min) × (1 / kg) = ml / (min · kg)</p><p>Exemplo: Se um atleta consome 3000 ml/min e possui 60 kg, seu EC será <input data-resposta=\"50\"> ml/(min·kg).</p>"
    }
  },
  {
    "id": 11,
    "titulo": "Problema 11",
    "enunciado": "Alguns estudos comprovam que os carboidratos fornecem energia ao corpo, preservam as proteínas estruturais dos músculos durante a prática de atividade física, ainda dão força para o cérebro coordenar os movimentos, o que de fato tem impacto positivo no desenvolvimento do praticante. O ideal é consumir 1 grama de carboidrato para cada minuto de caminhada. Um casal realizará diariamente 30 minutos de caminhada ingerindo, antes dessa atividade, a quantidade ideal de carboidratos recomendada. Para ter o consumo ideal apenas por meio do consumo de pão de forma integral, o casal planeja garantir o suprimento de pães para um período de 30 dias. Sabe-se que cada pacote de pão possui 18 fatias e que cada fatia possui 15g de carboidratos. A quantidade mínima de pacotes de pão de forma integral que o casal deve adquirir para o período é:",
    "alternativas": {
      "A": "4",
      "B": "6",
      "C": "7",
      "D": "8",
      "E": "9"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>De acordo com o enunciado, o ideal é consumir 1g de carboidrato para cada minuto de caminhada.</p><p>(i) O casal realizará diariamente 30 minutos de caminhada, o que exige <input data-resposta=\"30\"> gramas de carboidrato por pessoa. Logo, para o casal, serão necessários <input data-resposta=\"60\"> gramas por dia.</p><p>(ii) Para um período de 30 dias, o consumo total será de 60 * 30 = <input data-resposta=\"1800\"> gramas.</p><p>(iii) Cada fatia de pão contém 15g de carboidratos. Portanto, o número de fatias necessárias é 1800/15 = <input data-resposta=\"120\"> fatias.</p><p>(iv) Como cada pacote possui 18 fatias, dividimos 120/18. O resultado é aproximadamente 6,66. Como não se pode comprar frações de pacotes, a quantidade mínima é <input data-resposta=\"7\">.</p>"
    }
  },
  {
    "id": 12,
    "titulo": "Problema 12",
    "enunciado": "Uma imobiliária pôs cinco apartamentos à venda em cinco prédios diferentes de uma cidade brasileira. O quadro na figura apresenta o preço e a área de cada um desses imóveis. Um investidor decidiu comprar o apartamento com o menor preço por metro quadrado dentre os cinco apresentados. Ele deverá comprar o apartamento",
    "alternativas": {
      "A": "I",
      "B": "II",
      "C": "III",
      "D": "IV",
      "E": "V"
    },
    "correta": "E",
    "imagem": "https://static.wixstatic.com/media/b05a8a_fd86de2859314d02be3220022813f828~mv2.png/v1/fill/w_351,h_198,al_c,lg_1,q_85,enc_avif,quality_auto/03-Prob_12_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "Para encontrar o menor preço por metro quadrado, calculamos a razão entre o preço e a área de cada imóvel:<br>Apartamento I: 350/80 = <input data-resposta=\"4.375\"><br>Apartamento II: 420/100 = <input data-resposta=\"4.2\"><br>Apartamento III: 480/120 = <input data-resposta=\"4\"><br>Apartamento IV: 540/150 = <input data-resposta=\"3.6\"><br>Apartamento V: 600/180 = <input data-resposta=\"3.33\">"
    }
  },
  {
    "id": 13,
    "titulo": "Problema 13",
    "enunciado": "Especialistas do instituto Internacional de águas de Estocolmo estimam que cada pessoa necessita de, no mínimo, 1000 m3 de água por ano para consumo, higiene e cultivo de alimentos. Sabe-se também que o Rio Amazonas despeja 200.000 m3 de água no mar por segundo. Por quanto tempo deveríamos coletar as águas que o Rio Amazonas despeja no mar para manter a população da cidade de São Paulo, estimada em 20 milhões de pessoas, por 1 ano?",
    "alternativas": {
      "A": "16 minutos e 40 segundos",
      "B": "1 dia, 3 horas, 46 minutos e 40 segundos",
      "C": "3 meses, 25 dias, 17 horas e 40 segundos.",
      "D": "2 horas, 46 minutos e 40 segundos",
      "E": "11 dias, 13 horas, 46 minutos e 40 segundos"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<div><p>Para resolver o problema, siga os passos:</p><ol><li>Calcule o volume total de água necessário para 20 milhões de pessoas em 1 ano: 20.000.000 &times; 1000 = <input data-resposta=\"20000000000\"> m&sup3;.</li><li>Determine o tempo T em segundos dividindo o volume total pela vazão do Rio Amazonas: 20.000.000.000 / 200.000 = <input data-resposta=\"100000\"> segundos.</li><li>Converta 100.000 segundos para unidades de tempo maiores:</li><ul><li>100.000 / 60 = 1666 minutos e <input data-resposta=\"40\"> segundos.</li><li>1666 / 60 = <input data-resposta=\"27\"> horas e <input data-resposta=\"46\"> minutos.</li><li>27 horas = <input data-resposta=\"1\"> dia e <input data-resposta=\"3\"> horas.</li></ul></ol><p>Resultado final: <input data-resposta=\"1\"> dia, <input data-resposta=\"3\"> horas, <input data-resposta=\"46\"> minutos e <input data-resposta=\"40\"> segundos.</p></div>"
    }
  },
  {
    "id": 14,
    "titulo": "Problema 14",
    "enunciado": "Uma padaria criou uma receita de bolo chamada bolo de xícara, pois, com exceção dos ovos e do fermento, os demais ingredientes são medidos com xícaras de mesma capacidade, conforme descrito na Figura. O modo de fazer a receita orienta colocar primeiramente os ovos e depois ir adicionando os ingredientes cujas quantidades foram medidas em xícaras, da menor para a maior quantidade. Por último, adiciona-se o fermento. Em qual ordem os ingredientes medidos em xícara serão adicionados na receita?",
    "alternativas": {
      "A": "Chocolate, leite, açúcar, farinha de trigo",
      "B": "Leite, chocolate, açúcar, farinha de trigo",
      "C": "Leite, chocolate, farinha de trigo, açúcar",
      "D": "Farinha de trigo, açúcar, chocolate, leite",
      "E": "Leite, farinha de trigo, açúcar, chocolate"
    },
    "correta": "B",
    "imagem": "https://static.wixstatic.com/media/b05a8a_1c1041e7b3294e2f856ff1b0feff0584~mv2.png/v1/fill/w_221,h_273,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/03-Prob_14_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver o problema, devemos comparar as frações das xícaras e transformá-las em números decimais:</p><ul><li>Leite: 1/4 = <input data-resposta=\"0.25\"></li><li>Chocolate em pó: 1/2 = <input data-resposta=\"0.5\"></li><li>Açúcar: 2 = <input data-resposta=\"2\"></li><li>Farinha de trigo: 2 1/4 = <input data-resposta=\"2.25\"></li></ul><p>Organizando da menor para a maior quantidade (ordem crescente), temos: 0.25 < 0.5 < 2 < 2.25.</p>"
    }
  },
  {
    "id": 15,
    "titulo": "Problema 15",
    "enunciado": "Em radiometria, a potência radiante emitida por uma fonte de radiação é diretamente proporcional à quantidade de energia em joule (J), irradiada pela fonte e inversamente proporcional ao intervalo de tempo em segundo (s), que a fonte necessita para emitir essa energia. Por meio de sensores adequados, localizados em diferentes instâncias da fonte medidas em metro (m), é possível medir a potência radiante por unidade de área que chega aquela posição. A expressão que representa a unidade de medida para grandeza, potência radiante por unidade de área é:",
    "alternativas": {
      "A": "J / (s · m)",
      "B": "J / (s · m²)",
      "C": "J · s / m²",
      "D": "J · m² / s",
      "E": "J / (s² · m)"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>De acordo com o enunciado, a potência radiante é proporcional a E/Δt, cujas unidades de medida são J/s. Para encontrar a unidade de medida por unidade de área (m²), dividimos a potência pela área: J / (s · <input data-resposta=\"m²\">).</p>"
    }
  },
  {
    "id": 16,
    "titulo": "Problema 16",
    "enunciado": "Uma pessoa comprou uma caixa com 25 bombons por 5 reais. Resolveu revendê-los de forma avulsa, a um preço único. Não resistindo a tentação durante a venda comeu cinco bombons. Obteve mesmo assim, com a venda dos bombons restantes, um lucro de 20% sobre o valor pago pela caixa. Qual foi o valor em real de venda de cada bombom?",
    "alternativas": {
      "A": "R$ 0,20",
      "B": "R$ 0,24",
      "C": "R$ 0,25",
      "D": "R$ 0,30",
      "E": "R$ 0,35"
    },
    "correta": "D",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>A caixa com 25 bombons custou R$ <input data-resposta=\"5,00\">. Após ter comido 5 bombons, apenas <input data-resposta=\"20\"> foram vendidos. O lucro de 20% sobre o valor pago (R$ 5,00) é de R$ <input data-resposta=\"1,00\">. Portanto, o valor total arrecadado com a venda deve ser R$ <input data-resposta=\"6,00\">. O preço unitário de venda foi a fração 6/20, ou seja, cada bombom foi vendido por R$ <input data-resposta=\"0,30\">.</p>"
    }
  },
  {
    "id": 17,
    "titulo": "Problema 17",
    "enunciado": "Para o tratamento de uma doença específica, existem disponíveis no mercado somente 4 medicamentos, que são comercializados em versões diferentes.\n- Medicamento I: Caixa com 25 comprimidos com preço de R$ 50,00.\n- Medicamento II: Caixa com 30 comprimidos com preço de R$ 48,00.\n- Medicamento III: Caixa com 40 comprimidos com preço de R$ 60,00.\n- Medicamento IV: Caixa com 60 comprimidos com preço de R$ 100,00.\nUm laboratório lançou um novo medicamento, chamado Z para o tratamento desta doença. Visando tornar esse medicamento competitivo economicamente, o laboratório decidiu fixar um preço que apresente o menor valor por comprimido em relação aos medicamentos já existentes. O preço máximo por comprimido do medicamento Z será",
    "alternativas": {
      "A": "R$ 1,49",
      "B": "R$ 1,50",
      "C": "R$ 1,60",
      "D": "R$ 1,66",
      "E": "R$ 2,00"
    },
    "correta": "A",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para encontrar o preço competitivo do medicamento Z, calculamos o valor unitário de cada medicamento existente:</p><ul><li>Medicamento I: 50/25 = R$ <input data-resposta=\"2,00\"></li><li>Medicamento II: 48/30 = R$ <input data-resposta=\"1,60\"></li><li>Medicamento III: 60/40 = R$ <input data-resposta=\"1,50\"></li><li>Medicamento IV: 100/60 = R$ <input data-resposta=\"1,66\"></li></ul><p>O menor valor por comprimido atualmente é R$ 1,50. Para que o medicamento Z seja o mais competitivo, seu preço deve ser inferior a R$ <input data-resposta=\"1,50\">.</p>"
    }
  },
  {
    "id": 18,
    "titulo": "Problema 18",
    "enunciado": "Quanto é mil trilhões vezes infinito? O trecho da canção Oito anos, de Paulo Toller, foi apresentado por um professor de matemática a um grupo de 5 alunos. Em seguida, o professor solicitou que cada aluno apresentasse uma expressão matemática que traduzisse os versos citados. 5 respostas diferentes foram dadas;",
    "alternativas": {
      "A": "10^12",
      "B": "10^13",
      "C": "10^14",
      "D": "10^15",
      "E": "10^18"
    },
    "correta": "D",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<div><p><strong>Solução do Problema 48</strong></p><p>01 trilhão (1.000.000.000.000) escrito como uma potência de 10 é escrito na forma <input data-resposta=\"10^12\">.</p><p>Sendo assim, mil trilhões é igual a <input data-resposta=\"10^15\">.</p><p>Portanto, a resposta para a questão é <input data-resposta=\"10^15\">.</p><p><em>PhD em Matemática - Professor Titular do Departamento de Matemática (UFSC)</em></p></div>"
    }
  },
  {
    "id": 19,
    "titulo": "Problema 19",
    "enunciado": "Os aeroportos apresentam regras rígidas para despacho de bagagem. No caso de embarque nacional, algumas companhias aéreas ainda não cobravam, até 2017, por unidade de bagagem despachada, limitada a 23 kg por passageiro. Uma pessoa irá viajar com uma única mala. Como não quer pagar por excesso de peso e disponha em casa de uma balança de pêndulo que apresentava um erro máximo de 8% a mais em relação à massa real do objeto que nela for verificada, conferirá qual a massa de sua mala antes de ir para o aeroporto. O valor máximo em quilograma indicado em sua balança deverá ser.",
    "alternativas": {
      "A": "21,16",
      "B": "21,30",
      "C": "24,84",
      "D": "25,00",
      "E": "28,75"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>A bagagem do passageiro é limitada a 23 kg. A balança tem um erro de 8% para mais em relação à massa real. Para encontrar o valor máximo indicado na balança (I) que corresponde à massa real (M) de 23 kg, aplicamos o acréscimo:</p><p>I = M + (8/100 * M)</p><p>I = 23 + (0,08 * 23)</p><p>I = 23 + 1,84</p><p>O valor máximo indicado deve ser: <input data-resposta=\"24,84\"> kg.</p>"
    }
  },
  {
    "id": 20,
    "titulo": "Problema 20",
    "enunciado": "Associação de comerciantes varejistas de uma cidade, a fim de incrementar as vendas para o Natal, decidiu promover um fim de semana de descontos e promoções, no qual produtos e serviços estariam com valores reduzidos. Antes do período promocional, um celular custava R$ 300,00 e teve seu preço reajustado, passando a custar R$ 315,00. Durante o fim de semana de descontos e promoções, o preço desse celular recebeu um desconto de 20%. O desconto dado no preço do celular em porcentagem com base no valor dele anteriormente ao aumento sofrido antes da promoção, foi de",
    "alternativas": {
      "A": "5%",
      "B": "10%",
      "C": "12%",
      "D": "15%",
      "E": "16%"
    },
    "correta": "E",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>O preço do celular era R$ 300,00 e passou a custar R$ 315,00.</p><p>Um desconto de 20% de 315 corresponde a R$ <input data-resposta=\"63\">.</p><p>Com o desconto de 20% o celular custou R$ <input data-resposta=\"252\">.</p><p>Para saber o valor do desconto dado em relação ao valor antigo, temos que calcular a razão do preço da venda pelo valor antigo, isto é, 252/300 = <input data-resposta=\"0,84\">.</p><p>Logo, a resposta correta é <input data-resposta=\"16\">%.</p>"
    }
  },
  {
    "id": 21,
    "titulo": "Problema 21",
    "enunciado": "Os países anglófonos, como a Inglaterra, o Canadá, a Austrália e outros, são países que utilizam dois sistemas de unidade para a identificação de distâncias: o Sistema Internacional, com o quilômetro (km), e o CGS, com a milha (mi). Nas rodovias canadenses, por exemplo, as placas de sinalização de distâncias apresentam dois valores, um em km e outro em mi, com esta última equivalente aproximadamente a 1.610 metros. Um turista brasileiro, habituado ao Sistema Internacional, dm viagem por uma dessas rodovias, verifica em dado momento, uma placa indicando a distância até a cidade a que ele se destina, onde está escrito 50 mi e XX km, com o valor da distância em quilômetro ilegível. Qual o valor, desprezando as casas decimais, que deveria estar escrito na placa, para identificar a distância XX, em quilômetro, até a cidade destino?",
    "alternativas": {
      "A": "31",
      "B": "50",
      "C": "80",
      "D": "161",
      "E": "805"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "A questão quer a resposta em km e o enunciado diz que 01 milha corresponde a <input data-resposta=\"1610\"> m. Portanto, 50 milhas corresponde a <input data-resposta=\"80500\"> m. Logo, a resposta correta é <input data-resposta=\"80\"> km."
    }
  },
  {
    "id": 22,
    "titulo": "Problema 22",
    "enunciado": "A meta de uma concessionária de automóveis é vender, pelo menos, 104 carros por mês. Sabe-se que, em média, em dias em que não são oferecidos descontos, são vendidos 3 carros por dia; em dias em que há desconto mínimo, são vendidos 4 carros por dia; e, em dias em que há o desconto máximo, são vendidos 5 carros por dia. No mês atual, até o fim do expediente do sexto dia em que a concessionária abriu, não foram oferecidos descontos, tendo sido vendido 18 carros, conforme indicava a média. Ela ainda abrirá por mais 20 dias neste mês. A menor quantidade de dias em que será necessário oferecer o desconto máximo, de modo que ainda seja possível a concessionária alcançar sua meta de vendas para o mês, é",
    "alternativas": {
      "A": "6",
      "B": "7",
      "C": "8",
      "D": "9",
      "E": "10"
    },
    "correta": "A",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, primeiro calculamos quantos carros ainda precisam ser vendidos: 104 - 18 = <input data-resposta=\"86\"> carros.</p><p>Restam 20 dias de trabalho. Para encontrar a <b>menor</b> quantidade de dias com desconto máximo (5 carros/dia), devemos preencher os outros dias com a segunda maior taxa de vendas, que é o desconto mínimo (4 carros/dia).</p><p>Se todos os 20 dias fossem de desconto mínimo, seriam vendidos: 20 * 4 = <input data-resposta=\"80\"> carros.</p><p>A diferença entre o que falta e o que seria vendido apenas com desconto mínimo é: 86 - 80 = <input data-resposta=\"6\">.</p><p>Como a diferença de vendas entre um dia de desconto máximo e um dia de desconto mínimo é de 1 carro (5 - 4 = 1), precisamos converter <input data-resposta=\"6\"> dias de desconto mínimo em dias de desconto máximo.</p>"
    }
  },
  {
    "id": 23,
    "titulo": "Problema 23",
    "enunciado": "Demografia médica é o estudo da população de médico sob vários aspectos quantitativos e qualitativos. Um dos componentes desse estudo é a densidade médica, a qual se obtém dividindo-se o número de médicos registrados no Conselho Federal de Medicina (CFM) em uma região pela respectiva quantidade de pessoas da Unidade Federativa (UF) correspondente à região em estudo. A tabela na Figura apresenta a informação sobre cinco unidades federativas, relativamente ao total de médicos registrados no CFM e à população existente. Dentre as unidades federativas indicadas, qual apresenta a maior densidade médica?",
    "alternativas": {
      "A": "Distrito Federal",
      "B": "Minas Gerais",
      "C": "São Paulo",
      "D": "Sergipe",
      "E": "Piauí"
    },
    "correta": "A",
    "imagem": "https://static.wixstatic.com/media/b05a8a_a5b68bdc41944f9290ad58433045c96f~mv2.png/v1/fill/w_282,h_240,al_c,lg_1,q_85,enc_avif,quality_auto/04-prob_23_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "A densidade médica (DM) é calculada pela razão: <br><b>DM = nº de médicos registrados no CFM / nº de habitantes da região</b><br><br>De acordo com os dados da tabela, as razões são:<br>1) Distrito Federal: 10352 / 2570160<br>2) Minas Gerais: 40481 / 19597330<br>3) São Paulo: 109103 / 41262199<br>4) Sergipe: 2952 / 2068017<br>5) Piauí: 3051 / 3118360<br><br>Ao comparar as razões, o Distrito Federal apresenta o maior valor (aproximadamente 0,004).<br>Qual o número de médicos registrados no Distrito Federal? <input data-resposta=\"10352\">"
    }
  },
  {
    "id": 24,
    "titulo": "Problema 24",
    "enunciado": "As hemácias são células sanguíneas responsáveis pelo transporte de uma substância chamada hemoglobina, a qual tem a função de levar oxigênio dos pulmões para os tecidos. Hemácias normais têm diâmetro médio de 7,8 × 10⁻⁶ metros. O diâmetro médio dessas hemácias, em metros, é representado pela razão 78/d, em que d é igual a:",
    "alternativas": {
      "A": "10⁵",
      "B": "10⁶",
      "C": "10⁷",
      "D": "10⁸",
      "E": "10⁹"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para encontrar o valor de <b>d</b>, igualamos o diâmetro médio à razão fornecida:</p><p>7,8 &times; 10⁻⁶ = 78/d</p><p>Primeiro, transformamos a notação científica para que o numerador seja 78:</p><p>7,8 &times; 10⁻⁶ = 78 &times; 10⁻¹ &times; 10⁻⁶ = 78 &times; 10⁻⁷</p><p>Sabemos que 78 &times; 10⁻⁷ é o mesmo que 78 / 10⁷. Comparando com a razão 78/d, temos que d = 10⁷.</p><p>O valor numérico de d (10 elevado a 7) é: <input data-resposta=\"10000000\"></p>"
    }
  },
  {
    "id": 25,
    "titulo": "Problema 25",
    "enunciado": "Um clube está sendo reformado e deve ter algumas paredes e partes do teto repintadas. São, no total, 560 m² de parede e 260 m² de teto. Segundo orientações técnicas, um entre três tipos diferentes de tinta deve ser usado para pintar as paredes (tipos I, II e III), e um entre outros dois tipos podem ser utilizados na pintura do teto (tipos X e Y). As características dos diferentes produtos são apresentadas a seguir:\n\n-Tipo I: vendido em embalagem com 10 L por R$ 180,00 cada. O conteúdo permite pintar uma área de 220 m²;\n-Tipo II: vendido em embalagem com 20 L por R$ 350,00 cada. O conteúdo permite pintar uma área de 450 m²;\n-Tipo III: vendido em embalagem com 25 L por R$ 650,00 cada. O conteúdo permite pintar uma área de 550 m²;\n-Tipo X: vendido em embalagem com 4 L por R$ 70,00 cada. O conteúdo permite pintar uma área de 80 m²;\n-Tipo Y: vendido em embalagem com 5 L por R$ 85,00 cada. O conteúdo permite pintar uma área de 90 m².\n\nPretende-se gastar a menor quantia possível, em real, com essa pintura. As tintas que devem ser escolhidas para uso nas paredes e teto do clube, respectivamente, são as de tipos:",
    "alternativas": {
      "A": "I e X",
      "B": "I e Y",
      "C": "II e X",
      "D": "II e Y",
      "E": "III e Y"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para encontrar o menor custo, calculamos a quantidade de latas (arredondando para cima, pois não se vende latas fracionadas) e o valor total para cada tipo.</p><strong>Paredes (560 m²):</strong><ul><li>Tipo I: 560/220 = 2,54... → <input data-resposta=\"3\"> latas. Custo: 3 * 180 = R$ <input data-resposta=\"540\">.</li><li>Tipo II: 560/450 = 1,24... → <input data-resposta=\"2\"> latas. Custo: 2 * 350 = R$ <input data-resposta=\"700\">.</li><li>Tipo III: 560/550 = 1,01... → <input data-resposta=\"2\"> latas. Custo: 2 * 650 = R$ <input data-resposta=\"1300\">.</li></ul><strong>Teto (260 m²):</strong><ul><li>Tipo X: 260/80 = 3,25 → <input data-resposta=\"4\"> latas. Custo: 4 * 70 = R$ <input data-resposta=\"280\">.</li><li>Tipo Y: 260/90 = 2,88... → <input data-resposta=\"3\"> latas. Custo: 3 * 85 = R$ <input data-resposta=\"255\">.</li></ul><p>O menor custo para parede é o Tipo I e para o teto é o Tipo Y.</p>"
    }
  },
  {
    "id": 26,
    "titulo": "Problema 26",
    "enunciado": "Toda a iluminação de um escritório é feita utilizando-se 40 lâmpadas incandescentes que produzem 600 lúmens cada. O gerente planeja reestruturar o sistema de iluminação desse escritório, utilizando somente lâmpadas fluorescentes que produzem 1.600 lúmens, para aumentar a quantidade de energia luminosa em 50%. Para alcançar seu objetivo, a quantidade mínima de lâmpadas fluorescentes que o gerente desse escritório deverá instalar é",
    "alternativas": {
      "A": "15",
      "B": "22",
      "C": "23",
      "D": "30",
      "E": "40"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<div><p>Para resolver este problema, siga os passos abaixo:</p><ul><li>1. Calcule a energia luminosa total atual: 40 lâmpadas &times; 600 lúmens = <input data-resposta=\"24000\"> lúmens.</li><li>2. Calcule o novo objetivo de energia (aumento de 50%): 24000 &times; 1,5 = <input data-resposta=\"36000\"> lúmens.</li><li>3. Determine a quantidade de lâmpadas fluorescentes necessárias: 36000 / 1600 = <input data-resposta=\"22,5\">.</li><li>4. Como a quantidade deve ser um número inteiro e atender ao mínimo de 50% de aumento, o gerente deve instalar <input data-resposta=\"23\"> lâmpadas.</li></ul></div>"
    }
  },
  {
    "id": 27,
    "titulo": "Problema 27",
    "enunciado": "Um engenheiro fará um projeto de uma casa cujo terreno tem o formato de um retângulo de 36 m de comprimento por 9 m de largura. Para isso, ele fará um desenho de um retângulo de 24 cm de comprimento por 6 cm de largura. Qual deve ser a escala utilizada pelo engenheiro?",
    "alternativas": {
      "A": "1:100",
      "B": "1:150",
      "C": "1:200",
      "D": "1:250",
      "E": "1:500"
    },
    "correta": "B",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "Para encontrar a escala, primeiro convertemos as medidas para a mesma unidade: 36 m = 3600 cm. A escala é a razão entre a medida no desenho e a medida real: 24/3600. Simplificando a razão, chegamos ao valor da escala: <input data-resposta=\"1/150\">"
    }
  },
  {
    "id": 28,
    "titulo": "Problema 28",
    "enunciado": "Uma família decidiu comprar um aparelho condicionador de ar usando como critério de escolha seu consumo mensal de energia. Suponha que o valor de 1 kWh da conta de energia elétrica dessa família custe R$ 0,58 (impostos incluídos) e que há bandeira tarifária vermelha correspondendo a R$ 0,045 para cada 1 kWh consumido. O uso desse aparelho deve representar um acréscimo mensal na conta de energia elétrica da família de R$ 150,00. O consumo de energia elétrica mensal mais próximo, em quilowatt-hora, que o aparelho deve ter é igual a:",
    "alternativas": {
      "A": "24",
      "B": "94",
      "C": "240",
      "D": "259",
      "E": "333"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para encontrar o consumo, primeiro somamos o valor do kWh com a bandeira tarifária: 0,58 + 0,045 = <input data-resposta=\"0,625\">.</p><p>O acréscimo na conta foi de R$ 150,00. Seja C o consumo em kWh, temos a relação: 0,625 * C = 150. Portanto, C = 150 / 0,625 = <input data-resposta=\"240\">.</p>"
    }
  },
  {
    "id": 29,
    "titulo": "Problema 29",
    "enunciado": "Um jovem, no trajeto que usa para ir para a escola, sempre passa por um grande relógio digital que há no centro da sua cidade e compara a hora nele mostrada com a hora que marca o seu relógio de pulso. Ao longo de 30 dias de observação, constata que o seu relógio atrasa 2 minutos a cada 15 dias, em relação ao do centro da cidade. Após 90 dias, sem nenhum dos dois relógios receberem ajustes e mantida a mesma parcela de atraso diário, ao ler as marcações de horário dos dois relógios, verificou que o do centro da cidade marcava exatamente 7 horas. Qual horário marcava seu relógio de pulso nesse instante?",
    "alternativas": {
      "A": "6h 48min",
      "B": "6h 54min",
      "C": "7h 06min",
      "D": "7h 12min",
      "E": "7h 15min"
    },
    "correta": "A",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver o problema, primeiro calculamos o número de períodos de 15 dias que se passaram em 90 dias: 90/15 = <input data-resposta=\"6\"> períodos.</p><p>Sabendo que o relógio atrasa 2 minutos a cada período, o atraso total acumulado é de 6 * 2 = <input data-resposta=\"12\"> minutos.</p><p>Como o relógio de pulso está atrasado em relação ao relógio do centro, subtraímos o atraso do horário oficial (7h 00min): 7h - 12min = <input data-resposta=\"6\">h <input data-resposta=\"48\">min.</p>"
    }
  },
  {
    "id": 30,
    "titulo": "Problema 30",
    "enunciado": "Um ciclista faz um treino para uma prova, em um circuito oval, cujo percurso é de 800 m. Nesse treino, realiza 20 voltas. Ele divide seu treino em 3 etapas. Na primeira etapa, inicializa seu cronômetro e realiza as cinco primeiras voltas com velocidade média de 4 m/s. Na segunda etapa, faz mais cinco voltas, mas com velocidade média 25% maior que a da etapa anterior. Na última etapa, finaliza o treino mantendo a velocidade média da primeira etapa. Ao final do treino, o cronômetro estará marcando, em segundos,",
    "alternativas": {
      "A": "3000",
      "B": "3200",
      "C": "3800",
      "D": "4000",
      "E": "4200"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, calculamos o tempo gasto em cada uma das três etapas:</p><ul><li><strong>1ª Etapa:</strong> 5 voltas de 800m = 4000m. Com velocidade de 4 m/s, o tempo é 4000 / 4 = <input data-resposta=\"1000\"> s.</li><li><strong>2ª Etapa:</strong> A velocidade é 25% maior que 4 m/s (4 * 1.25 = 5 m/s). 5 voltas de 800m = 4000m. O tempo é 4000 / 5 = <input data-resposta=\"800\"> s.</li><li><strong>3ª Etapa:</strong> Restam 10 voltas (20 total - 5 - 5). 10 voltas de 800m = 8000m. A velocidade volta a ser 4 m/s. O tempo é 8000 / 4 = <input data-resposta=\"2000\"> s.</li></ul><p>O tempo total marcado no cronômetro será a soma: 1000 + 800 + 2000 = <input data-resposta=\"3800\"> s.</p>"
    }
  },
  {
    "id": 31,
    "titulo": "Problema 31",
    "enunciado": "Os pneus estão entre os itens mais importantes para a segurança de um carro. Segundo revendedores especializados, o desgaste do pneu em um trajeto é diretamente proporcional ao número de voltas que ele efetua em contato com o solo, sem derrapar, durante esse trajeto, sendo que a constante de proporcionalidade k depende do material empregado na sua fabricação. O proprietário de um carro, cujo diâmetro do pneu mede L m, conforme indicado na Figura, pretende obter uma expressão que forneça a uma estimativa para a medida do desgaste D desse pneu ao longo de uma viagem de ”x” km. Para efeito dos cálculos, considerou o diâmetro do pneu como sendo L, independentemente da extensão do trajeto. O valor de D é dado pela expressão:",
    "alternativas": {
      "A": "D = (k * x) / (π * L)",
      "B": "D = (k * 1000 * x) / (π * L)",
      "C": "D = (k * π * L) / x",
      "D": "D = (k * π * L) / (1000 * x)",
      "E": "D = (k * x) / (1000 * π * L)"
    },
    "correta": "B",
    "imagem": "https://static.wixstatic.com/media/b05a8a_74b0b86d834840ae8a9a1fef02189e2d~mv2.png/v1/fill/w_222,h_222,al_c,q_85,enc_avif,quality_auto/05-Prob_31_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>O desgaste <b>D</b> é proporcional ao número de voltas <b>n</b>, ou seja: <b>D = k · n</b>.</p><p>O número de voltas é a distância total dividida pelo comprimento da circunferência (C = π · L). Como a distância <b>x</b> está em quilômetros e o diâmetro <b>L</b> em metros, convertemos a distância para metros: 1000x.</p><p>O número de voltas é n = <input data-resposta=\"1000x / (π * L)\">.</p><p>Substituindo na fórmula do desgaste, temos: D = <input data-resposta=\"(k * 1000 * x) / (π * L)\">.</p>"
    }
  },
  {
    "id": 32,
    "titulo": "Problema 32",
    "enunciado": "No rótulo de uma lata com 350 mL de um refrigerante, é possível descobrir que o valor energético é de 85 kcal (quilocalorias) a cada 200 mL de refrigerante. Por recomendação de um nutricionista, um paciente que consumia em sua dieta 2800 kcal por dia mudou o hábito de consumir o conteúdo de 2 latas desse refrigerante por dia para consumir 2 latas de suco, cujo rótulo indicava um valor energético de 25 kcal por lata. Em relação à sua dieta original, o consumo energético diário do paciente diminuiu, em porcentagem, o valor mais próximo de:",
    "alternativas": {
      "A": "1%",
      "B": "6%",
      "C": "9%",
      "D": "11%",
      "E": "33%"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>De acordo com o enunciado:</p><p>(i) 01 lata de refrigerante com 350 ml tem <input data-resposta=\"85\"> kcal a cada <input data-resposta=\"200\"> ml.</p>"
    }
  },
  {
    "id": 33,
    "titulo": "Problema 33",
    "enunciado": "Uma operadora de telefonia oferece cinco planos de serviços. Em cada plano, para cada mês, o cliente paga um valor V que lhe dá direito a telefonar por M minutos para clientes da mesma operadora. Quando a duração total das chamadas para clientes da mesma operadora excede M minutos, é cobrada uma tarifa T1 por cada minuto excedente nesse tipo de chamada. Além disso, é cobrado um valor T2, por minuto, nas chamadas para clientes de outras operadoras, independentemente do fato de os M minutos terem ou não sido usados. A tabela apresenta o valor de V, M, T1 e T2 para cada um dos cinco planos. Se um cliente dessa operadora planeja telefonar durante 75 minutos para amigos da mesma operadora e 50 minutos para amigos de outras operadoras, o plano que ele deverá escolher, a fim de pagar menos, é o:",
    "alternativas": {
      "A": "Plano A",
      "B": "Plano B",
      "C": "Plano C",
      "D": "Plano D",
      "E": "Plano E"
    },
    "correta": "A",
    "imagem": "https://static.wixstatic.com/media/b05a8a_eebbfb353ed547ec87d0e74621c48377~mv2.png/v1/fill/w_397,h_206,al_c,q_85,enc_avif,quality_auto/06-Prob_33_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver, calculamos o custo total de cada plano considerando 75 minutos para a mesma operadora e 50 minutos para outras operadoras:</p><ul><li>Plano A: 35 + (75-50) * 0,50 + 50 * 0,50 = <input data-resposta=\"72,50\"></li><li>Plano B: 60 + 0 + 50 * 0,40 = <input data-resposta=\"80,00\"></li><li>Plano C: 60 + 75 * 0,60 + 50 * 0,30 = <input data-resposta=\"120,00\"></li><li>Plano D: 90 + 0 + 50 * 0,25 = <input data-resposta=\"102,50\"></li><li>Plano E: 135 + 0 + 50 * 0,10 = <input data-resposta=\"140,00\"></li></ul><p>O plano mais barato é o Plano A.</p>"
    }
  },
  {
    "id": 34,
    "titulo": "Problema 34",
    "enunciado": "Para um evento que acontecerá no centro de uma cidade, há a opção de três estacionamentos, que cobram conforme mostra a tabela a seguir; Duas pessoas que participarão do evento precisam estacionar seus carros, uma delas pelo período de 1 hora e 50 minutos e a outra pelo período de 4 horas, pretendendo cada uma pagar o menor preço total pelo uso do estacionamento. Essas pessoas deverão optar, respectivamente, pelos estacionamentos:",
    "alternativas": {
      "A": "X e Y",
      "B": "X e Z",
      "C": "Y e Z",
      "D": "Z e X",
      "E": "Z e Z"
    },
    "correta": "E",
    "imagem": "https://static.wixstatic.com/media/b05a8a_45ebf9becd3d42409fcdafdb510420fb~mv2.png/v1/fill/w_369,h_176,al_c,lg_1,q_85,enc_avif,quality_auto/08-Prob_34_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<div><p><strong>Tópico:</strong> Números, proporções e escalas.</p><p><strong>Solução do Problema 34:</strong></p><p>Vamos analisar cada caso para encontrar o menor custo:</p><p><strong>1) Período de 1 hora e 50 minutos (cobrado como 2 horas nos estacionamentos X e Y):</strong></p><ul><li>Estacionamento X: 4 + <input data-resposta=\"2\"> = <input data-resposta=\"6\"></li><li>Estacionamento Y: 3 + <input data-resposta=\"3\"> = <input data-resposta=\"6\"></li><li>Estacionamento Z: Valor fixo para até 2 horas = <input data-resposta=\"5\"></li></ul><p>O menor custo para 1h 50min é o estacionamento <strong>Z</strong>.</p><p><strong>2) Período de 4 horas:</strong></p><ul><li>Estacionamento X: 4 + (3 &times; 2) = <input data-resposta=\"10\"></li><li>Estacionamento Y: 3 + (3 &times; 3) = <input data-resposta=\"12\"></li><li>Estacionamento Z: 5 + (2 &times; 2) = <input data-resposta=\"9\"></li></ul><p>O menor custo para 4 horas é o estacionamento <strong>Z</strong>.</p><p>Portanto, as pessoas deverão optar, respectivamente, pelos estacionamentos <strong>Z e Z</strong>.</p></div>"
    }
  },
  {
    "id": 35,
    "titulo": "Problema 35",
    "enunciado": "Um professor tem uma despesa mensal de 10% do seu salário com transporte e 30% com alimentação. No próximo mês, os valores desses gastos sofrerão aumentos de 10% e 20%, respectivamente, mas o seu salário não terá reajuste. Com esses aumentos, suas despesas com transporte e alimentação aumentarão em R$ 252,00. O salário mensal desse professor é de:",
    "alternativas": {
      "A": "R$ 1.680,00",
      "B": "R$ 2.100,00",
      "C": "R$ 3.600,00",
      "D": "R$ 5.200,00",
      "E": "R$ 6.000,00"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Seja <b>s</b> o valor do salário do professor.</p><p>1. Aumento no transporte: 10% de 10% de s = 0,10 &times; 0,10s = 0,01s</p><p>2. Aumento na alimentação: 20% de 30% de s = 0,20 &times; 0,30s = 0,06s</p><p>3. Aumento total: 0,01s + 0,06s = 0,07s</p><p>Sabendo que o aumento total é R$ 252,00, temos a equação:</p><p>0,07s = 252</p><p>s = 252 / 0,07</p><p>s = <input data-resposta=\"3600\"></p>"
    }
  },
  {
    "id": 36,
    "titulo": "Problema 36",
    "enunciado": "Um nutricionista preparou cinco opções de dieta para seus clientes. A quantidade de calorias, em quilocaloria, de cada dieta é apresentada no quadro, em função de três componentes básicos: proteínas, carboidratos e suplementos. Como um de seus clientes apresentou muita redução de massa corporal, o nutricionista recomendou que ele escolhesse uma das cinco dietas do quadro e quadruplicasse a quantidade de proteínas, triplicasse a quantidade de carboidratos e duplicasse a quantidade de suplementos recomendadas pela dieta escolhida. O cliente seguirá a recomendação do nutricionista, mas deseja escolher a dieta na qual ele consumirá a menor quantidade de calorias dentre as opções disponíveis. O cliente deverá escolher a dieta:",
    "alternativas": {
      "A": "I",
      "B": "II",
      "C": "III",
      "D": "IV",
      "E": "V"
    },
    "correta": "C",
    "imagem": "https://static.wixstatic.com/media/b05a8a_dca6de5692844626befec1f60cf2498b~mv2.png/v1/fill/w_423,h_174,al_c,q_85,enc_avif,quality_auto/10-Prbl_36a_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver este problema, devemos aplicar os multiplicadores recomendados pelo nutricionista para cada componente da dieta: 4 para proteínas (p), 3 para carboidratos (c) e 2 para suplementos (s). A fórmula da nova caloria total (D) é: <b>D = 4p + 3c + 2s</b>.</p><p>Calcule o valor para cada dieta baseando-se nos dados da tabela:</p><ul><li>Dieta I: 4(400) + 3(300) + 2(200) = <input data-resposta=\"2900\"> kcal</li><li>Dieta II: 4(400) + 3(400) + 2(100) = <input data-resposta=\"3000\"> kcal</li><li>Dieta III: 4(200) + 3(500) + 2(200) = <input data-resposta=\"2700\"> kcal</li><li>Dieta IV: 4(100) + 3(600) + 2(300) = <input data-resposta=\"2800\"> kcal</li><li>Dieta V: 4(200) + 3(400) + 2(400) = <input data-resposta=\"2800\"> kcal</li></ul><p>Comparando os resultados, a dieta com a menor quantidade de calorias é a Dieta III.</p>"
    }
  },
  {
    "id": 37,
    "titulo": "Problema 37",
    "enunciado": "Um técnico gráfico constrói uma nova folha a partir das medidas de uma folha A0. As medidas de uma folha A0 são 595 mm de largura e 840 mm de comprimento. A nova folha foi construída do seguinte modo: acrescenta uma polegada na medida da largura e 16 polegadas na medida do comprimento. Esse técnico precisa saber a razão entre as medidas da largura e do comprimento, respectivamente, dessa nova folha. Considere 2,5 cm como valor aproximado para uma polegada.\nQual é a razão entre as medidas da largura e do comprimento da nova folha?",
    "alternativas": {
      "A": "1/2",
      "B": "595/840",
      "C": "620/840",
      "D": "595/1240",
      "E": "621/1240"
    },
    "correta": "A",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Considerando que 01 polegada = 25 mm, a conversão das medidas para mm resulta que a nova folha tem:</p><ul><li>Largura: 595 mm + 25 mm = <input data-resposta=\"620\"> mm</li><li>Comprimento: 840 mm + (16 * 25 mm) = 840 mm + 400 mm = <input data-resposta=\"1240\"> mm</li></ul><p>Portanto, a razão entre as medidas da nova folha é <input data-resposta=\"620/1240\">, que simplificada resulta em <input data-resposta=\"1/2\">.</p>"
    }
  },
  {
    "id": 38,
    "titulo": "Problema 38",
    "enunciado": "O preço médio cobrado por um pintor para executar um serviço consiste em uma taxa fixa de R$ 25,00 mais uma quantia proporcional à área pintada. O quadro apresenta os valores cobrados por ele em trabalhos recentes. Qual o preço cobrado para realizar um serviço de pintura de uma área de 150 m²?",
    "alternativas": {
      "A": "R$ 300,00",
      "B": "R$ 325,00",
      "C": "R$ 350,00",
      "D": "R$ 375,00",
      "E": "R$ 400,00"
    },
    "correta": "B",
    "imagem": "https://static.wixstatic.com/media/b05a8a_69d50284dd7c47e784d544cbaf78d1d8~mv2.png/v1/fill/w_332,h_143,al_c,q_85,enc_avif,quality_auto/11-Probl_38_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>O preço p(A) é dado por p(A) = 25 + k.A. De acordo com os dados, para uma área de 5 m², o preço é R$ 35,00:</p><p>35 = 25 + k . 5</p><p>10 = 5k</p><p>k = <input data-resposta=\"2\"></p><p>Para calcular o preço de 150 m²:</p><p>p(150) = 25 + 2 . 150</p><p>p(150) = 25 + 300</p><p>p(150) = <input data-resposta=\"325\"></p>"
    }
  },
  {
    "id": 39,
    "titulo": "Problema 39",
    "enunciado": "Um fabricante produz cinco tipos de enfeites de Natal. Para saber o lucro líquido correspondente a cada tipo de enfeite, criou um quadro com os valores de custo (matéria-prima e mão de obra) e de venda por unidade, em real, além da quantidade vendida para cada tipo de enfeite. Qual tipo de enfeite de Natal gera maior lucro líquido para o fabricante?",
    "alternativas": {
      "A": "I",
      "B": "II",
      "C": "III",
      "D": "IV",
      "E": "V"
    },
    "correta": "D",
    "imagem": "https://static.wixstatic.com/media/b05a8a_70eb1dcee1ab449f87dbdb2d0d0ffa69~mv2.png/v1/fill/w_405,h_152,al_c,q_85,enc_avif,quality_auto/12-Prob_39_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>O lucro L é calculado pela expressão <b>L = (v - (x + y)) * q</b>, onde:</p><ul><li>x = matéria-prima</li><li>y = mão de obra</li><li>v = valor de venda</li><li>q = quantidade</li></ul><p>Preencha a tabela abaixo para descobrir qual enfeite gera o maior lucro:</p><table border='1' style='border-collapse: collapse; width: 100%; text-align: center;'><thead><tr><th>Tipo</th><th>Cálculo do Lucro</th><th>Lucro Total (R$)</th></tr></thead><tbody><tr><td>I</td><td>(2,50 - 1,70) * 1000</td><td><input data-resposta=\"800\"></td></tr><tr><td>II</td><td>(4,00 - 2,50) * 600</td><td><input data-resposta=\"900\"></td></tr><tr><td>III</td><td>(11,00 - 6,00) * 200</td><td><input data-resposta=\"1000\"></td></tr><tr><td>IV</td><td>(19,00 - 10,00) * 150</td><td><input data-resposta=\"1350\"></td></tr><tr><td>V</td><td>(35,00 - 23,00) * 50</td><td><input data-resposta=\"600\"></td></tr></tbody></table>"
    }
  },
  {
    "id": 40,
    "titulo": "Problema 40",
    "enunciado": "Em determinado mês, o consumo de energia elétrica da residência de uma família foi de 400 kWh. Achando que o valor da conta estava alto, os membros da família decidiram diminuí-lo e estabeleceram a meta de reduzir o consumo em 40%. Começaram trocando a geladeira, de consumo mensal igual a 90 kWh, por outra, de consumo mensal igual a 54 kWh, e realizaram algumas mudanças na rotina de casa:\n- reduzir o tempo de banho dos moradores, economizando 30 kWh por mês;\n- reduzir o tempo em que o ferro de passar roupas fica ligado, economizando 14 kWh por mês;\n- diminuir a quantidade de lâmpadas acesas no período da noite, conseguindo uma redução de 10 kWh mensais.\nNo entanto, observaram que, mesmo assim, não atingiriam a meta estabelecida e precisariam decidir outras maneiras para diminuir o consumo de energia.\nDe modo a atingir essa meta, o consumo mensal de energia, em quilowatt-hora, ainda precisa diminuir:",
    "alternativas": {
      "A": "70",
      "B": "90",
      "C": "160",
      "D": "240",
      "E": "310"
    },
    "correta": "A",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>O consumo inicial era de 400 kWh. A meta é reduzir 40% desse valor.</p><p>Cálculo da meta de redução: 400 * 40/100 = <input data-resposta=\"160\"> kWh.</p><p>Reduções já efetuadas:</p><ul><li>Geladeira: 90 - 54 = 36 kWh</li><li>Banho: 30 kWh</li><li>Ferro: 14 kWh</li><li>Lâmpadas: 10 kWh</li></ul><p>Total de redução atual: 36 + 30 + 14 + 10 = <input data-resposta=\"90\"> kWh.</p><p>Para atingir a meta de 160 kWh, ainda falta reduzir: 160 - 90 = <input data-resposta=\"70\"> kWh.</p>"
    }
  },
  {
    "id": 41,
    "titulo": "Problema 41",
    "enunciado": "O rendimento de um carro bicombustível (abastecido com álcool ou gasolina), popularmente conhecido como carro flex, quando abastecido com álcool é menor do que quando abastecido com gasolina, conforme o gráfico, que apresenta o rendimento médio dos carros populares. Suponha que um cidadão fez uma viagem, cujo percurso foi de 1.009 km, em um carro popular flex, tendo abastecido o carro nos primeiros 559 km com gasolina e, no restante do percurso, com álcool. Considere que no momento do abastecimento não havia mais combustível no tanque. Qual o valor mais próximo do rendimento médio do carro ao concluir todo o percurso de 1.009 km?",
    "alternativas": {
      "A": "10,4 km/L",
      "B": "10,8 km/L",
      "C": "11,0 km/L",
      "D": "12,1 km/L",
      "E": "12,5 km/L"
    },
    "correta": "B",
    "imagem": "https://static.wixstatic.com/media/b05a8a_a5247a8001334ab49fdb70feffb5ecf1~mv2.png/v1/fill/w_287,h_194,al_c,q_85,enc_avif,quality_auto/14-Prob_41_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para calcular o rendimento médio, precisamos do percurso total dividido pelo consumo total de combustível.</p><ol><li>Distância com gasolina: 559 km. Rendimento (gráfico): 13 km/L. Consumo: 559/13 = <input data-resposta=\"43\"> litros.</li><li>Distância com álcool: 1.009 - 559 = <input data-resposta=\"450\"> km. Rendimento (gráfico): 9 km/L. Consumo: 450/9 = <input data-resposta=\"50\"> litros.</li><li>Consumo total: 43 + 50 = <input data-resposta=\"93\"> litros.</li><li>Rendimento médio: 1009/93 ≈ <input data-resposta=\"10,8\"> km/L.</li></ol>"
    }
  },
  {
    "id": 42,
    "titulo": "Problema 42",
    "enunciado": "Coloquei uma pizza no forno às 8 h, momento em que o cachorro saiu para o quintal. Após 15 minutos, o telefone tocou, atendi e fiquei 4 minutos conversando. Ah, lembrei que, 5 minutos antes de o telefone tocar, meu vizinho tocou a campainha, eu atendi e ele disse que iria pegar uma encomenda no correio. Eu pedi para que ele pegasse a minha também. Nossa conversa durou 3 minutos e, após 30 minutos, ele voltou com a minha encomenda. Eu abri a porta para atendê-lo, quando o cachorro aproveitou para entrar em casa. Nossa conversa durou apenas 2 minutos, mas a pizza não queimou, porque eu já tinha tirado do forno 15 minutos antes de me despedir do vizinho. Os quadrinhos, dispostos em ordem aleatória, representam momentos da situação descrita e formam a base do raciocínio usado para determinar o tempo que a pizza ficou no forno. A ordem cronológica das ações relatadas no texto, relativas à medição do tempo transcorrido, é representada pela sequência de quadrinhos:",
    "alternativas": {
      "A": "2, 3, 4, 5, 1",
      "B": "2, 4, 3, 5, 1",
      "C": "5, 3, 4, 2, 1",
      "D": "5, 4, 3, 1, 2",
      "E": "5, 4, 3, 2, 1."
    },
    "correta": "E",
    "imagem": "https://static.wixstatic.com/media/b05a8a_a812aae04b0d45fe9da48128ff67963b~mv2.png/v1/fill/w_300,h_285,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/18-Probl_42_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para resolver a questão, é necessário organizar a cronologia dos eventos descritos no texto:</p><ul><li><strong>8:00</strong> - Pizza no forno e cachorro sai (Quadrinho 5).</li><li><strong>8:10</strong> - Vizinho toca a campainha (5 min antes do telefone - Quadrinho 4).</li><li><strong>8:15</strong> - Telefone toca (15 min após as 8h - Quadrinho 3).</li><li><strong>8:43</strong> - Vizinho volta (30 min após sair às 8:13 - Quadrinho 2).</li><li><strong>8:45</strong> - Despedida do vizinho e cachorro entra (Quadrinho 1).</li></ul><p>A sequência cronológica correta é: <input data-resposta=\"5, 4, 3, 2, 1\"></p>"
    }
  },
  {
    "id": 43,
    "titulo": "Problema 43",
    "enunciado": "A imagem representa uma calculadora científica com duas teclas destacadas. A tecla A eleva ao quadrado o número que está no visor da calculadora, e a tecla B extrai a raiz cúbica do número apresentado no visor. Uma pessoa digitou o número 8 na calculadora e em seguida apertou três vezes a tecla A e depois uma vez a tecla B. A expressão que representa corretamente o cálculo efetuado na calculadora é:",
    "alternativas": {
      "A": "8^(2/3)",
      "B": "8^(5/3)",
      "C": "8^(8/3)",
      "D": "8^2",
      "E": "8^8"
    },
    "correta": "C",
    "imagem": "https://static.wixstatic.com/media/b05a8a_654ee1a23210442a9d0ec423c7198dd1~mv2.png/v1/fill/w_334,h_255,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/15-Prob_43_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Ao digitar o número 8 e apertar 3 vezes a tecla A, a pessoa calculou ((8²)²)² = 8⁸. Em seguida, pressionou a tecla B para obter a raiz cúbica de 8⁸, que pode ser escrita como 8 elevado a <input data-resposta=\"8/3\">.</p>"
    }
  },
  {
    "id": 44,
    "titulo": "Problema 44",
    "enunciado": "O índice pluviométrico é uma medida, em milímetro, que fornece a quantidade de precipitação de chuva num determinado local e num intervalo de tempo (hora, dia, mês e/ou ano). Os valores mensais do índice pluviométrico de uma cidade brasileira, no primeiro semestre, são mostrados no gráfico. De acordo com a previsão meteorológica, o índice pluviométrico no mês de julho será igual ao índice do mês de junho somado à variação correspondente ao maior acréscimo, em milímetro, do índice pluviométrico entre dois meses consecutivos do semestre apresentado. O índice pluviométrico, em milímetro, previsto para o mês de julho, na cidade considerada, será igual a:",
    "alternativas": {
      "A": "150",
      "B": "190",
      "C": "210",
      "D": "260",
      "E": "310"
    },
    "correta": "B",
    "imagem": "https://static.wixstatic.com/media/b05a8a_380cfe26980d4ecb81c2d7d74cf06f19~mv2.png/v1/fill/w_346,h_252,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/16-Prob_44_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para encontrar o índice de julho, primeiro identificamos os acréscimos entre meses consecutivos no gráfico:</p><ul><li>Fevereiro para Março: 140 - 100 = 40</li><li>Março para Abril: 160 - 140 = 20</li><li>Maio para Junho: 150 - 110 = 40</li></ul><p>O maior acréscimo verificado foi de 40 mm. Segundo o enunciado, Julho = Junho + Maior Acréscimo.</p><p>Julho = 150 + 40 = <input data-resposta=\"190\"></p>"
    }
  },
  {
    "id": 45,
    "titulo": "Problema 45",
    "enunciado": "Uma dona de casa vai ao supermercado para comprar dois fardos de refrigerantes, contendo cada um deles seis unidades de 0,6 litro. Lá chegando, verificou não existirem fardos nem no formato e nem na capacidade desejadas. Decidiu, então, comprar os refrigerantes em unidades avulsas, de mesma capacidade, de forma a obter, no mínimo, a mesma quantidade de líquido desejada inicialmente, gastando o mínimo de dinheiro. As opções de embalagens e respectivos preços existentes no supermercado são dados no quadro.\n\nQual é a opção de embalagem, em litro, que proporcionará maior economia para essa dona de casa?",
    "alternativas": {
      "A": "0,5",
      "B": "1,0",
      "C": "1,5",
      "D": "2,0",
      "E": "3,0"
    },
    "correta": "C",
    "imagem": "https://static.wixstatic.com/media/b05a8a_07ec666635a64045b5c2ee3209cf6ba0~mv2.png/v1/fill/w_363,h_74,al_c,q_85,enc_avif,quality_auto/17-Prob_45_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "01 fardo de refrigerantes contém 06 unidades de 0,6 litros, portanto, 02 fardos contêm 12 unidades. O volume total desejado é 12 &times; 0,6 = <input data-resposta=\"7,2\"> litros. <br> Para encontrar a maior economia, calculamos o custo para atingir no mínimo 7,2 litros em cada opção: <br> - Opção I (0,5L): 15 un &times; 0,70 = 10,50 <br> - Opção II (1,0L): 8 un &times; 1,20 = 9,60 <br> - Opção III (1,5L): 5 un &times; 1,80 = <input data-resposta=\"9,00\"> <br> - Opção IV (2,0L): 4 un &times; 2,40 = 9,60 <br> - Opção V (3,0L): 3 un &times; 3,60 = 10,80. <br> A embalagem de 1,5 L é a que resulta no menor custo."
    }
  },
  {
    "id": 46,
    "titulo": "Problema 46",
    "enunciado": "Após o término das inscrições de um concurso, cujo número de vagas é fixo, foi divulgado que a razão entre o número de candidatos e o número de vagas, nesta ordem, era igual a 300. Entretanto, as inscrições foram prorrogadas, inscrevendo-se mais 4.000 candidatos, fazendo com que a razão anteriormente referida passasse a ser igual a 400. Todos os candidatos inscritos fizeram a prova, e o total de candidatos aprovados foi igual à quantidade de vagas. Os demais candidatos foram reprovados. Nessas condições, quantos foram os candidatos reprovados?",
    "alternativas": {
      "A": "11.480",
      "B": "12.600",
      "C": "13.720",
      "D": "14.840",
      "E": "15.960"
    },
    "correta": "E",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Considere <b>V</b> como o número de vagas e <b>C</b> como o número inicial de candidatos.</p><p>1. A razão inicial era: C/V = 300 &rarr; C = 300V.</p><p>2. Após a prorrogação: (C + 4000) / V = 400.</p><p>3. Substituindo C: (300V + 4000) / V = 400 &rarr; 300 + 4000/V = 400 &rarr; 4000/V = 100.</p><p>4. O número de vagas é V = <input data-resposta=\"40\">.</p><p>5. O número total de inscritos final é 400 &times; 40 = <input data-resposta=\"16000\">.</p><p>6. Como o número de aprovados é igual ao de vagas (40), o número de reprovados é 16000 - 40 = <input data-resposta=\"15960\">.</p>"
    }
  },
  {
    "id": 47,
    "titulo": "Problema 47",
    "enunciado": "A fim de reforçar o orçamento familiar, uma dona de casa começou a produzir doces para revender. Cada receita é composta de 4/5 de quilograma de amendoim e 1/5 de quilograma de açúcar. O quilograma de amendoim custa R$ 10,00 e o do açúcar, R$ 2,00. Porém, o açúcar teve um aumento e o quilograma passou a custar R$ 2,20. Para manter o mesmo custo com a produção de uma receita, essa dona de casa terá que negociar um desconto com o fornecedor de amendoim. Nas condições estabelecidas, o novo valor do quilograma de amendoim deverá ser igual a:",
    "alternativas": {
      "A": "R$ 9,20",
      "B": "R$ 9,75",
      "C": "R$ 9,80",
      "D": "R$ 9,95",
      "E": "R$ 10,20"
    },
    "correta": "D",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<div><p>1. Calcule o custo inicial da receita: (4/5 &times; 10,00) + (1/5 &times; 2,00) = 8,00 + 0,40 = R$ 8,40.</p><p>2. Calcule o novo custo do açúcar: 1/5 &times; 2,20 = R$ 0,44.</p><p>3. Determine quanto sobra para o amendoim manter o custo total: 8,40 - 0,44 = R$ 7,96.</p><p>4. Encontre o novo preço por kg (x): 4/5 &times; x = 7,96 &rArr; x = <input data-resposta=\"9,95\"></p></div>"
    }
  },
  {
    "id": 48,
    "titulo": "Problema 48",
    "enunciado": "Uma pesquisa de mercado sobre produtos de higiene e limpeza apresentou o comparativo entre duas marcas, A e B. Esses produtos são concentrados e, para sua utilização, é necessária sua diluição em água. O quadro apresenta a comparação em relação ao preço dos produtos de cada marca e ao rendimento de cada produto em litro. Um consumidor pretende comprar um litro de cada produto e, para isso, escolherá a marca com o menor custo em relação ao rendimento. Nessas condições, as marcas dos quatro produtos adquiridos pelo consumidor, na ordem apresentada na tabela, são:",
    "alternativas": {
      "A": "A, A, A, A.",
      "B": "B, B, A, A.",
      "C": "B, B, B, B.",
      "D": "A, B, A, B.",
      "E": "B, A, B, A."
    },
    "correta": "B",
    "imagem": "https://static.wixstatic.com/media/b05a8a_98e87bb060e54839b9e70468f34c51a5~mv2.png/v1/fill/w_600,h_121,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/19-Prob_48_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "Para determinar a marca mais econômica, calculamos a razão entre o preço e o rendimento (preço por litro):<br><br>Produto 1: Marca A (12/24) = <input data-resposta=\"0.5\">; Marca B (10/25) = <input data-resposta=\"0.4\">. (B é menor)<br>Produto 2: Marca A (15/30) = <input data-resposta=\"0.5\">; Marca B (14/35) = <input data-resposta=\"0.4\">. (B é menor)<br>Produto 3: Marca A (18/40) = <input data-resposta=\"0.45\">; Marca B (20/40) = <input data-resposta=\"0.5\">. (A é menor)<br>Produto 4: Marca A (20/50) = <input data-resposta=\"0.4\">; Marca B (24/48) = <input data-resposta=\"0.5\">. (A é menor)<br><br>A sequência de marcas com menor custo é B, B, A, A."
    }
  },
  {
    "id": 49,
    "titulo": "Problema 49",
    "enunciado": "Se a tartaruga, a lesma e o caramujo apostassem uma corrida, a lesma chegaria em último lugar, o penúltimo colocado seria o caramujo e a primeira seria a tartaruga. Segundo o biólogo americano Branley Allan Branson, a velocidade “recorde” já registrada em pesquisas, por uma lesma, é de 16,5 centímetros por minuto. Para uma reportagem, dispondo das velocidades recordes da tartaruga e do caramujo em metro por segundo, se faz necessário saber o fator de conversão da velocidade recorde da lesma para metro por segundo para divulgar uma comparação. Com base nas informações, o fator de conversão da velocidade recorde da lesma para metro por segundo é:",
    "alternativas": {
      "A": "16,5 / 60",
      "B": "16,5 / 600",
      "C": "16,5 / 6000",
      "D": "165 / 60",
      "E": "165 / 600"
    },
    "correta": "C",
    "imagem": "",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>A velocidade da lesma é 16,5 cm/min. Para transformar para m/s é necessário mudar a escala de centímetro para metro (dividir por 100) e de minuto para segundo (dividir por 60).</p><p>Cálculo: 16,5 / (100 * 60) = <input data-resposta=\"16,5/6000\"></p>"
    }
  },
  {
    "id": 50,
    "titulo": "Problema 50",
    "enunciado": "O nanofio é um feixe de metais semicondutores usualmente utilizado na fabricação de fibra óptica. A imagem ilustra, sem escala, as representações das medidas dos diâmetros de um nanofio e de um fio de cabelo, possibilitando comparar suas espessuras e constatar o avanço das novas tecnologias. O número que expressa a razão existente entre o comprimento do diâmetro de um fio de cabelo e o de um nanofio é:",
    "alternativas": {
      "A": "6 x 10^-14",
      "B": "6 x 10^-4",
      "C": "6 x 10^4",
      "D": "6 x 10^14",
      "E": "6 x 10^45"
    },
    "correta": "C",
    "imagem": "https://static.wixstatic.com/media/b05a8a_fc6edefff77945909eaa92c89fea7148~mv2.png/v1/fill/w_311,h_157,al_c,q_85,enc_avif,quality_auto/22-Prob_50_PNG.png",
    "ajuda": {
      "tipo": "input",
      "conteudo": "<p>Para encontrar a razão entre o diâmetro do fio de cabelo e o do nanofio, realizamos a divisão entre as medidas fornecidas:</p><p>Razão = (6 x 10⁻⁵) / (10⁻⁹)</p><p>Aplicando a propriedade de divisão de potências de mesma base, subtraímos os expoentes: -5 - (-9) = -5 + 9 = 4.</p><p>O resultado é 6 x 10⁴. Digite o valor do expoente da base 10: <input data-resposta=\"4\"></p>"
    }
  }
];