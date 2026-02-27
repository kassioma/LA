const questions = [
  {
    question: "De acordo com a Lei nº 9.609/1998, qual é a definição legal de programa de computador?",
    options: [
      "Qualquer representação visual ou sonora gerada por um hardware específico para entretenimento do usuário final.",
      "Um método de negócio patenteável que utiliza obrigatoriamente a rede mundial de computadores.",
      "O conjunto físico de componentes eletrônicos que compõem a unidade de processamento de dados.",
      "A expressão de um conjunto organizado de instruções em linguagem natural ou codificada para fazer funcionar máquinas de tratamento da informação."
    ],
    correct: 3,
    hint: "Refere-se ao Art. 1º da Lei 9.609/98, que define software como um conjunto organizado de instruções destinadas ao funcionamento de máquinas."
  },
  {
    question: "Qual é o regime de proteção à propriedade intelectual conferido aos programas de computador no Brasil?",
    options: [
      "O regime de proteção conferido às obras literárias pela legislação de direitos autorais.",
      "Um regime de segredo industrial perpétuo e impenhorável.",
      "O regime de proteção de marcas e nomes comerciais.",
      "O regime conferido às patentes de invenção industriais."
    ],
    correct: 0,
    hint: "A lei equipara o software às obras literárias para fins de proteção jurídica."
  },
  {
    question: "Qual é o prazo de proteção dos direitos relativos a um programa de computador segundo a Lei nº 9.609/1998?",
    options: [
      "Vinte anos contados da data do depósito do pedido de registro no órgão competente.",
      "Cinquenta anos, contados a partir de 1º de janeiro do ano subsequente ao da sua publicação ou criação.",
      "Setenta anos a partir da morte do autor, conforme a regra geral de direitos autorais.",
      "Dez anos renováveis por períodos iguais enquanto houver comercialização ativa."
    ],
    correct: 1,
    hint: "O prazo é de 50 anos contados do ano subsequente ao da publicação ou criação."
  },
  {
    question: "Sobre o registro de programas de computador, o que a lei estabelece?",
    options: [
      "Os trechos do programa submetidos ao registro tornam-se de domínio público imediato.",
      "A proteção aos direitos independe de registro.",
      "O registro é obrigatório para que o software receba qualquer tipo de proteção legal no território nacional.",
      "O registro é necessário apenas para programas de origem estrangeira que desejam ser comercializados."
    ],
    correct: 1,
    hint: "O registro é facultativo; a proteção nasce com a criação da obra."
  },
  {
    question: "A quem pertencem os direitos de um software desenvolvido por um empregado durante a vigência de um contrato de trabalho destinado à pesquisa e desenvolvimento?",
    options: [
      "Ao Governo Federal, por se tratar de incentivo à ciência e tecnologia nacional.",
      "Cinquenta por cento ao empregado e cinquenta por cento à empresa, em regime de condomínio obrigatório.",
      "Ao empregado, que detém a propriedade intelectual por ser o criador físico da obra.",
      "Exclusivamente ao empregador ou contratante dos serviços."
    ],
    correct: 3,
    hint: "Quando desenvolvido no âmbito do contrato de trabalho voltado à P&D, os direitos pertencem ao empregador."
  },
  {
    question: "Em qual situação o empregado detém a exclusividade dos direitos sobre um programa de computador por ele gerado?",
    options: [
      "Quando o software é uma derivação direta de um projeto da empresa, mas o autor é estagiário.",
      "Quando o programa é gerado sem relação com o contrato de trabalho e sem a utilização de recursos ou dados do empregador.",
      "Sempre que o programa for desenvolvido fora do horário comercial, independentemente do uso de equipamentos da empresa.",
      "Apenas se o empregado registrar o software antes do empregador tomar conhecimento da sua existência."
    ],
    correct: 1,
    hint: "A exclusividade ocorre quando não há vínculo com o contrato nem uso de recursos do empregador."
  },
  {
    question: "Qual das alternativas abaixo NÃO constitui uma ofensa aos direitos do titular do software?",
    options: [
      "A reprodução de um só exemplar de cópia legitimamente adquirida para fins de salvaguarda (backup).",
      "A remoção de travas de segurança para permitir a instalação em computadores de terceiros sem licença.",
      "A reprodução de múltiplas cópias para distribuição gratuita em instituições de caridade.",
      "A engenharia reversa para fins de criação de um produto comercial idêntico."
    ],
    correct: 0,
    hint: "A lei permite uma cópia de segurança da versão legitimamente adquirida."
  },
  {
    question: "O que deve obrigatoriamente constar no contrato de licença, suporte físico ou embalagem do software para garantir os direitos do usuário?",
    options: [
      "O prazo de validade técnica da versão comercializada.",
      "Uma garantia vitalícia contra quaisquer erros de programação (bugs).",
      "O código-fonte completo da versão comercializada.",
      "A lista detalhada de todos os programadores que trabalharam no projeto."
    ],
    correct: 0,
    hint: "A lei exige informações claras, incluindo prazo de validade técnica, quando aplicável."
  },
  {
    question: "Em casos de transferência de tecnologia de programa de computador, qual documento é de entrega obrigatória do fornecedor ao receptor?",
    options: [
      "A documentação completa, em especial o código-fonte comentado e diagramas.",
      "O histórico financeiro da empresa desenvolvedora nos últimos cinco anos.",
      "Um comprovante de residência de todos os sócios da empresa estrangeira.",
      "A lista de clientes atuais do fornecedor."
    ],
    correct: 0,
    hint: "A documentação técnica é essencial para a transferência de tecnologia."
  },
  {
    question: "Qual é a pena prevista para quem viola direitos de autor de programa de computador mediante reprodução para fins de comércio sem autorização?",
    options: [
      "Detenção de um a três meses apenas.",
      "Prestação de serviços comunitários na área de tecnologia por seis meses.",
      "Multa administrativa de dez vezes o valor do software.",
      "Reclusão de um a quatro anos e multa."
    ],
    correct: 3,
    hint: "A reprodução com finalidade comercial sem autorização configura crime com pena de reclusão e multa."
  }
];
