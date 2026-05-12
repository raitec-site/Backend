const db = require("../../services/firebaseAdmin");

// O JSON entra aqui, atribuído a uma variável
const dadosDoRegador = {
  "nome": "Regador Automático",
  "slug": "regador-automatico",
  "status": "ativo",
  "eixoTecnico": "Técnico",
  "objetivo": "Sistema automatizado de irrigação com sensores inteligentes para monitoramento em tempo real e economia de água",
  "descricao": "O Regador Automático é um sistema integrado de irrigação automática com sensores voltados à coleta de dados de culturas vegetais, com o objetivo de prever e remediar possíveis riscos diretos ao objeto de análise...",
  "problema": "Consumo excessivo de água em sistemas tradicionais de irrigação manual ou temporizada...",
  "justificativa": "Aproximar atividades técnicas à sustentabilidade e promover impacto social e acadêmico...",
  "funcionamento": "O funcionamento do regador automático baseia-se na coleta, processamento e transmissão de dados ambientais...",
  "logica": "A lógica principal do sistema monitora continuamente a umidade do solo...",
  "fluxo": [
    { "titulo": "Leitura dos Sensores Ambientais", "descricao": "O ESP32 realiza leitura contínua..." },
    { "titulo": "Envio dos Dados ao Microcontrolador", "descricao": "Os dados coletados são transmitidos ao ESP32..." },
    { "titulo": "Processamento e Verificação", "descricao": "O microcontrolador processa as informações..." },
    { "titulo": "Acionamento do Sistema de Irrigação", "descricao": "Se necessário, o ESP32 aciona automaticamente a bomba..." },
    { "titulo": "Envio dos Dados via MQTT", "descricao": "Os dados são transmitidos via protocolo MQTT..." },
    { "titulo": "Armazenamento no Firebase", "descricao": "O servidor intermedia armazena os dados no Firebase..." },
    { "titulo": "Exibição em Tempo Real", "descricao": "O aplicativo Flutter consome os dados do Firebase..." }
  ],
  "componentes": [
    { "nome": "ESP32", "quantidade": 1, "descricao": "Microcontrolador com WiFi...", "funcao": "Controle e comunicação" },
    { "nome": "Sensor de Umidade do Solo SEN0193", "quantidade": 6, "descricao": "Sensor capacitivo...", "funcao": "Medir a umidade" },
    { "nome": "Sensor de Temperatura DS18B20", "quantidade": 3, "descricao": "Sensor digital waterproof...", "funcao": "Monitoramento térmico" },
    { "nome": "Sensor de Luminosidade BH1750", "quantidade": 3, "descricao": "Sensor digital de luz...", "funcao": "Medir intensidade de luz" },
    { "nome": "Fios de Cobre Fino", "quantidade": 30, "descricao": "Cabos de cobre...", "funcao": "Conexões elétricas" },
    { "nome": "Canaletas de Proteção", "quantidade": 8, "descricao": "Canaletas de PVC...", "funcao": "Organização" },
    { "nome": "Case Impressa em 3D", "quantidade": 1, "descricao": "Caixa de proteção customizada...", "funcao": "Proteção" },
    { "nome": "Bomba de Água Submersível", "quantidade": 1, "descricao": "Pequena bomba...", "funcao": "Acionamento da irrigação" }
  ],
  "custoTotal": "46.00",
  "tecnologias": [
    { "nome": "ESP32", "tipo": "Hardware" },
    { "nome": "Arduino IDE", "tipo": "IDE" },
    { "nome": "C++", "tipo": "Linguagem" },
    { "nome": "MQTT", "tipo": "Protocolo" },
    { "nome": "Firebase Realtime Database", "tipo": "Backend" },
    { "nome": "Flutter", "tipo": "Framework" },
    { "nome": "Dart", "tipo": "Linguagem" },
    { "nome": "Internet das Coisas (IoT)", "tipo": "Conceito" }
  ],
  "linguagens": ["C++", "Dart"],
  "imagens": [],
  "video": "",
  "resultados": "Sistema completamente funcional de irrigação automática...",
  "melhorias": ["Automação completa...", "Aprimoramento da interface...", "Sensores mais precisos..."],
  "aplicacoes": ["Uso residencial...", "Escala agrícola...", "Estufas..."],
  "duracao": "x meses",
  "membros": ["Iago", "Wagner", "Maria Paula", "Larissa", "Laiza"],
  "data": "2025-09-29",
  "linkGithub": "https://github.com/eixotecnico"
};

async function enviar() {
  try {
    // Aqui ele cria o documento na coleção 'projetos' com o ID 'regador-automatico'
    await db.collection("projetos").doc("regador-automatico").set(dadosDoRegador);
    console.log("Projeto injetado com sucesso no Firebase da RAITec!");
    process.exit();
  } catch (error) {
    console.error("Erro ao injetar dados:", error);
    process.exit(1);
  }
}

enviar();