const db = require("../../services/firebaseAdmin");

const dadosDoProjeto = {

    "nome": "Regador Automático",
    "slug": "regador-automatico",
    "status": "ativo",
    "eixoTecnico": "Técnico",
    "objetivo": "Sistema automatizado de irrigação com sensores inteligentes para monitoramento em tempo real e economia de água",
    
    "descricao": "O Regador Automático é um sistema integrado de irrigação automática com sensores voltados à coleta de dados de culturas vegetais, com o objetivo de prever e remediar possíveis riscos diretos ao objeto de análise. De forma geral, o sistema apresenta uma série de sensores que coletarão dados do vegetal e, por intermédio de uma rede, tais dados serão enviados para um aplicativo que os apresentará de forma gráfica, auxiliando aqueles que cultivam o vegetal em questão. Os principais dados utilizados serão temperatura, umidade e luminosidade, prezando pelo baixo custo do projeto.",
    
    "problema": "Consumo excessivo de água em sistemas tradicionais de irrigação manual ou temporizada, falta de precisão no monitoramento das condições do solo e ambientais, dificuldade de manutenção de plantas para usuários com rotinas ocupadas.",
    
    "justificativa": "Aproximar atividades técnicas à sustentabilidade e promover impacto social e acadêmico, democratizando o acesso à tecnologia agrícola e incentivando monitoramento e gestão nas lavouras. A integração com tecnologias digitais possibilita acompanhamento remoto e tomada de decisões mais precisas.",
    
    "funcionamento": "O funcionamento do regador automático baseia-se na coleta, processamento e transmissão de dados ambientais. O ESP32 atua como unidade central, interpretando as informações recebidas e tomando decisões em tempo real com base principalmente na leitura dos sensores de umidade do solo. Caso o nível esteja abaixo do ideal, o sistema identifica a necessidade de irrigação e pode acioná-la automaticamente. Os dados de temperatura e luminosidade são utilizados como parâmetros complementares.",
    
    "logica": "A lógica principal do sistema monitora continuamente a umidade do solo. Quando detectado um nível abaixo da faixa ideal, o microcontrolador ativa a bomba de água automaticamente. Sensores de temperatura influenciam a evaporação e desenvolvimentodas plantas, enquanto sensores de luminosidade indicam a exposição solar e necessidade de água.",
    
    "fluxo": [
        {
        "titulo": "Leitura dos Sensores Ambientais",
        "descricao": "O ESP32 realiza leitura contínua dos sensores de umidade, temperatura e luminosidade distribuídos pelo sistema"
        },
        {
        "titulo": "Envio dos Dados ao Microcontrolador",
        "descricao": "Os dados coletados são transmitidos ao ESP32 via fios de cobre organizados em canaletas"
        },
        {
        "titulo": "Processamento e Verificação",
        "descricao": "O microcontrolador processa as informações e verifica a necessidade de irrigação com base nos parâmetros configurados"
        },
        {
        "titulo": "Acionamento do Sistema de Irrigação",
        "descricao": "Se necessário, o ESP32 aciona automaticamente a bomba de água para início da irrigação"
        },
        {
        "titulo": "Envio dos Dados via MQTT",
        "descricao": "Os dados são transmitidos via protocolo MQTT para um servidor intermediário"
        },
        {
        "titulo": "Armazenamento no Firebase",
        "descricao": "O servidor intermedia armazena os dados em Firebase para acesso permanente e sincronização"
        },
        {
        "titulo": "Exibição em Tempo Real",
        "descricao": "O aplicativo Flutter consome os dados do Firebase e exibe as informações graficamente ao usuário"
        }
    ],
    
    "componentes": [
        {
        "nome": "ESP32",
        "quantidade": 1,
        "descricao": "Microcontrolador com WiFi e Bluetooth integrados, responsável pelo controle central do sistema",
        "funcao": "Controle e comunicação do sistema",
        },
        {
        "nome": "Sensor de Umidade do Solo SEN0193",
        "quantidade": 6,
        "descricao": "Sensor capacitivo de umidade com high precision para leitura de múltiplos pontos",
        "funcao": "Medir a umidade em múltiplos pontos do solo",
        },
        {
        "nome": "Sensor de Temperatura DS18B20",
        "quantidade": 3,
        "descricao": "Sensor digital waterproof com encapsulamento resistente à água",
        "funcao": "Monitoramento térmico do ambiente",
        },
        {
        "nome": "Sensor de Luminosidade BH1750",
        "quantidade": 3,
        "descricao": "Sensor digital de luz com alta precisão, suporta I2C",
        "funcao": "Medir a intensidade de luz para análise de exposição solar",
        },
        {
        "nome": "Fios de Cobre Fino",
        "quantidade": 30,
        "descricao": "Cabos de cobre de boa qualidade com isolamento apropriado",
        "funcao": "Realizar todas as conexões elétricas entre componentes",
        },
        {
        "nome": "Canaletas de Proteção",
        "quantidade": 5,
        "descricao": "Canaletas de PVC ou plástico para organização e proteção dos fios",
        "funcao": "Organização estruturada dos cabos e proteção contra danos",
        },
        {
        "nome": "Case Impressa em 3D",
        "quantidade": 1,
        "descricao": "Caixa de proteção customizada para acomodar o ESP32 e componentes sensíveis",
        "funcao": "Proteção dos componentes eletrônicos contra umidade e impactos",
        },
        {
        "nome": "Bomba de Água Submersível",
        "quantidade": 1,
        "descricao": "Pequena bomba para acionamento do sistema de irrigação",
        "funcao": "Acionamento automático do sistema de irrigação",
        }
    ],
        
    "tecnologias": [
        {
        "nome": "ESP32",
        "tipo": "Hardware",
        "descricao": "Microcontrolador com WiFi e Bluetooth integrados para processamento e comunicação"
        },
        {
        "nome": "Arduino IDE",
        "tipo": "IDE",
        "descricao": "Ambiente de desenvolvimento integrado para programação do ESP32"
        },
        {
        "nome": "C++",
        "tipo": "Linguagem",
        "descricao": "Linguagem de programação usada no firmware do microcontrolador"
        },
        {
        "nome": "MQTT",
        "tipo": "Protocolo",
        "descricao": "Message Queuing Telemetry Transport - protocolo padrão para comunicação IoT"
        },
        {
        "nome": "Firebase Realtime Database",
        "tipo": "Backend",
        "descricao": "Plataforma para armazenamento, sincronização e acesso remoto aos dados em tempo real"
        },
        {
        "nome": "Flutter",
        "tipo": "Framework",
        "descricao": "Framework multiplataforma de código aberto para desenvolvimento de aplicativos mobile"
        },
        {
        "nome": "Dart",
        "tipo": "Linguagem",
        "descricao": "Linguagem moderna e orientada a objetos utilizada no desenvolvimento com Flutter"
        },
        {
        "nome": "Internet das Coisas (IoT)",
        "tipo": "Conceito",
        "descricao": "Paradigma de interconexão de dispositivos físicos através da internet"
        }
    ],
    
    "linguagens": [
        "C++",
        "Dart"
    ],
    
    "imagens": [
    ],
    
    "video": "",
    
    "resultados": "Sistema completamente funcional de irrigação automática com monitoramento em tempo real das condições ambientais. O projeto oferece interface intuitiva e responsiva para visualização dos dados em qualquer dispositivo. Redução significativa do consumo de água comparado a sistemas convencionais e automatização completa do processo de irrigação com possibilidade de acionamento manual remoto.",
    
    "melhorias": [
        "Automação completa do acionamento da irrigação com algoritmos machine learning mais avançados",
        "Aprimoramento da interface do aplicativo com gráficos detalhados, alertas personalizáveis e notificações push",
        "Utilização de sensores mais precisos e com melhor durabilidade para maior confiabilidade dos dados coletados",
        "Implementação de sistema de backup local para reduzir dependência crítica da conectividade com internet",
        "Integração com inteligência artificial para análise preditiva das condições ambientais e sugestões automáticas",
        "Suporte a múltiplas plantas com configurações individualizadas"
    ],
    
    "aplicacoes": [
        "Aplicação em escala agrícola para otimização de irrigação em plantações diversas",
        "Monitoramento ambiental contínuo em estufas e ambientes controlados",
        "Controle de irrigação"
    ],
    
    "duracao": "x meses",
    
    "membros": [
        "Iago",
        "Wagner",
        "Maria Paula",
        "Larissa",
        "Laiza"
    ],
    
    "data": "2025-09-29",
    
    "linkGithub": "https://github.com/raitec/regador-automatico"
}


async function enviarParaOBanco() {
  try {
    // Salvamos usando o slug como ID para ficar organizado
    await db.collection("projetos").doc("regador-automatico").set(dadosDoProjeto);
    console.log("Projeto do Regador enviado com sucesso!");
    process.exit();
  } catch (erro) {
    console.error("Erro ao enviar:", erro);
  }
}

enviarParaOBanco();