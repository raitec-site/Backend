const db = require("../../services/firebaseAdmin");

// Juntando todos os seus projetos com o campo "status" correto
const todosOsProjetos = [
  // ATIVOS
  { nome: "Maquina de Filamento", slug: "maquina-de-filamento", eixo_time: "Técnico", status: "ativo", descricao: "blablabla..." },
  { nome: "Raitor", slug: "raitor", eixo_time: "Técnico", status: "ativo", descricao: "blablabla..." },
  { nome: "Regador Automático", slug: "regadorautomatico", eixo_time: "Técnico", status: "ativo", descricao: "blablabla..." },
  { nome: "Maquete IOT", slug: "maquete-iot", eixo_time: "Técnico", status: "ativo", descricao: "blablabla..." },
  { nome: "GameBOY", slug: "gameboy", eixo_time: "Inovação", status: "ativo", descricao: "blablabla..." },
  { nome: "Bracinho", slug: "bracinho", eixo_time: "Inovação", status: "ativo", descricao: "blablabla..." },
  { nome: "Bracelete Sensorial", slug: "bracelete-sensorial", eixo_time: "Apoio", status: "ativo", descricao: "blablabla..." },
  { nome: "Aplicativo de Libras", slug: "aplicativo-de-libras", eixo_time: "Apoio", status: "ativo", descricao: "blablabla..." },
  
  // ARQUIVADOS
  { nome: "Wallerson", slug: "wallerson", eixo_time: "Técnico", status: "arquivado", descricao: "blablabla..." },
  { nome: "Drone", slug: "drone", eixo_time: "Técnico", status: "arquivado", descricao: "blablabla..." },
  { nome: "Dinossalto", slug: "dinossalto", eixo_time: "Inovação", status: "arquivado", descricao: "blablabla..." },
  { nome: "Baby Yoda", slug: "baby-yoda", eixo_time: "Inovação", status: "arquivado", descricao: "blablabla..." },
  { nome: "Comedouro Automático", slug: "comedouro-automatico", eixo_time: "Apoio", status: "arquivado", descricao: "blablabla..." },
  { nome: "Modelo Preditivo", slug: "modelo-preditivo", eixo_time: "Apoio", status: "arquivado", descricao: "blablabla..." },

  // FINALIZADOS
  { nome: "Gangorra", slug: "gangorra", eixo_time: "Técnico", status: "finalizado", descricao: "blablabla..." },
  { nome: "Tri Tanque", slug: "tri-tanque", eixo_time: "Técnico", status: "finalizado", descricao: "blablabla..." },
  { nome: "RAInel", slug: "rainel", eixo_time: "Inovação", status: "finalizado", descricao: "blablabla..." },
  { nome: "Braço Robótico", slug: "braco-robotico", eixo_time: "Apoio", status: "finalizado", descricao: "blablabla..." },
  { nome: "Análise de Dados", slug: "analise-de-dados", eixo_time: "Apoio", status: "finalizado", descricao: "blablabla..." }
];

async function subirTudo() {
  console.log("Iniciando migração para o Firebase...");
  
  for (const projeto of todosOsProjetos) {
    try {
      await db.collection("projetos").doc(projeto.slug).set(projeto);
      console.log(`Projeto enviado: ${projeto.nome}`);
    } catch (erro) {
      console.error(`Erro no projeto ${projeto.nome}:`, erro);
    }
  }
  
  console.log("Migração dos projetos para o banco Firebase completa!");
  process.exit();
}

subirTudo();