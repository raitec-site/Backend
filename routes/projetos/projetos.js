/*v1: com mock de dados

const express = require("express");
const router = express.Router();
const db = require("../../services/firebaseAdmin");


// DADOS MOCK (temporário)
const projetos_ativos = [
  {
    nome: "Maquina de Filamento",
    slug: "maquina-de-filamento",  
    eixo_time: "Técnico",         
    descricao_curta: "blablabla...", 
    descricao_longa: "blablabla...", 
    membros: [],         
    imagem: "url de imagem",         
    link_doc: "link do doc",
    link_github: "link do repositório",    
  },
  {
    nome: "Raitor",
    slug: "raitor",           
    eixo_time: "Técnico", 
    descricao_curta: "blablabla...", 
    descricao_longa: "blablabla...", 
    membros: [],         
    imagem: "url de imagem",         
    link_doc: "link do doc",
    link_github: "link do repositório",    
  },
  {
    nome: "RAITecHydro",
    slug: "raitechydro",   
    eixo_time: "Técnico",         
    descricao_curta: "blablabla...", 
    descricao_longa: "blablabla...", 
    membros: [],         
    imagem: "url de imagem",         
    link_doc: "link do doc",
    link_github: "link do repositório",    
  },
  {
    nome: "Maquete IOT",
    slug: "maquete-iot",  
    eixo_time: "Técnico",          
    descricao_curta: "blablabla...", 
    descricao_longa: "blablabla...", 
    membros: [],         
    imagem: "url de imagem",         
    link_doc: "link do doc",
    link_github: "link do repositório",    
  },
  {
    nome: "GameBOY",
    slug: "gameboy",  
    eixo_time: "Inovação",          
    descricao_curta: "blablabla...", 
    descricao_longa: "blablabla...", 
    membros: [],         
    imagem: "url de imagem",         
    link_doc: "link do doc",
    link_github: "link do repositório",    
  },
  {
    nome: "Bracinho",
    slug: "bracinho",  
    eixo_time: "Inovação",          
    descricao_curta: "blablabla...", 
    descricao_longa: "blablabla...", 
    membros: [],         
    imagem: "url de imagem",         
    link_doc: "link do doc",
    link_github: "link do repositório",    
  },
  {
    nome: "Bracelete Sensorial",
    slug: "bracelete-sensorial",    
    eixo_time: "Apoio",        
    descricao_curta: "blablabla...", 
    descricao_longa: "blablabla...", 
    membros: [],         
    imagem: "url de imagem",         
    link_doc: "link do doc",
    link_github: "link do repositório",    
  },
  {
    nome: "Aplicativo de Libras",
    slug: "aplicativo-de-libras",    
    eixo_time: "Apoio",        
    descricao_curta: "blablabla...", 
    descricao_longa: "blablabla...", 
    membros: [],         
    imagem: "url de imagem",         
    link_doc: "link do doc",
    link_github: "link do repositório",    
  }
];

const projetos_arquivados = [
  {
    nome: "Wallerson",
    slug: "wallerson",    
    eixo_time: "Técnico",        
    descricao_curta: "blablabla...", 
    descricao_longa: "blablabla...", 
    membros: [],         
    imagem: "url de imagem",         
    link_doc: "link do doc",
    link_github: "link do repositório",    
  },
  {
    nome: "Drone",
    slug: "drone",     
    eixo_time: "Técnico",       
    descricao_curta: "blablabla...", 
    descricao_longa: "blablabla...", 
    membros: [],         
    imagem: "url de imagem",         
    link_doc: "link do doc",
    link_github: "link do repositório",    
  },
  {
    nome: "Dinossalto",
    slug: "dinossalto",     
    eixo_time: "Inovação",       
    descricao_curta: "blablabla...", 
    descricao_longa: "blablabla...", 
    membros: [],         
    imagem: "url de imagem",         
    link_doc: "link do doc",
    link_github: "link do repositório",    
  },
  {
    nome: "Baby Yoda",
    slug: "baby-yoda",     
    eixo_time: "Inovação",       
    descricao_curta: "blablabla...", 
    descricao_longa: "blablabla...", 
    membros: [],         
    imagem: "url de imagem",         
    link_doc: "link do doc",
    link_github: "link do repositório",    
  },
  {
    nome: "Comedouro Automático",
    slug: "comedouro-automatico",    
    eixo_time: "Apoio",        
    descricao_curta: "blablabla...", 
    descricao_longa: "blablabla...", 
    membros: [],         
    imagem: "url de imagem",         
    link_doc: "link do doc",
    link_github: "link do repositório",    
  },
  {
    nome: "Modelo Preditivo",
    slug: "modelo-preditivo",    
    eixo_time: "Apoio",        
    descricao_curta: "blablabla...", 
    descricao_longa: "blablabla...", 
    membros: [],         
    imagem: "url de imagem",         
    link_doc: "link do doc",
    link_github: "link do repositório",    
  }
];

const projetos_finalizados = [
  {
    nome: "Gangorra",
    slug: "gangorra", 
    eixo_time: "Técnico",           
    descricao_curta: "blablabla...", 
    descricao_longa: "blablabla...", 
    membros: [],         
    imagem: "url de imagem",         
    link_doc: "link do doc",
    link_github: "link do repositório",    
  },
  {
    nome: "Tri Tanque",
    slug: "tri-tanque",    
    eixo_time: "Técnico",        
    descricao_curta: "blablabla...", 
    descricao_longa: "blablabla...", 
    membros: [],         
    imagem: "url de imagem",         
    link_doc: "link do doc",
    link_github: "link do repositório",    
  },
  {
    nome: "RAInel",
    slug: "rainel",    
    eixo_time: "Inovação",        
    descricao_curta: "blablabla...", 
    descricao_longa: "blablabla...", 
    membros: [],         
    imagem: "url de imagem",         
    link_doc: "link do doc",
    link_github: "link do repositório",    
  },
  {
    nome: "Braço Robótico",
    slug: "braco-robotico",    
    eixo_time: "Apoio",        
    descricao_curta: "blablabla...", 
    descricao_longa: "blablabla...", 
    membros: [],         
    imagem: "url de imagem",         
    link_doc: "link do doc",
    link_github: "link do repositório",    
  },
  {
    nome: "Análise de Dados",
    slug: "analise-de-dados",    
    eixo_time: "Apoio",        
    descricao_curta: "blablabla...", 
    descricao_longa: "blablabla...", 
    membros: [],         
    imagem: "url de imagem",         
    link_doc: "link do doc",
    link_github: "link do repositório",    
  }
];


// LISTA DE PROJETOS
router.get("/projetos", (req, res) => {
  res.render("projetos/index", { 
    projetos_ativos,
    projetos_arquivados,
    projetos_finalizados 
  });
});


// PROJETO INDIVIDUAL
router.get("/projetos/:slug", (req, res) => {
  const slug = req.params.slug;

  const projeto = 
    projetos_ativos.find(p => p.slug === slug) ||
    projetos_arquivados.find(p => p.slug === slug) ||
    projetos_finalizados.find(p => p.slug === slug);

  if (!projeto) {
    return res.status(404).send("Projeto não encontrado");
  }

  res.render("projetos/projeto", { projeto });
});*/


/*v2: direto do banco
router.get("/projetos", async (req, res) => {
  try {
    const snapshot = await db.collection("projetos").get();

    const ativos = [];
    const arquivados = [];
    const finalizados = [];

    snapshot.forEach(doc => {
      const projeto = {
        id: doc.id,
        ...doc.data()
      };

      if (projeto.status === "ativo") {
        ativos.push(projeto);
      } else if (projeto.status === "arquivado") {
        arquivados.push(projeto);
      } else if (projeto.status === "finalizado") {
        finalizados.push(projeto);
      }
    });

    res.render("projetos/index", { ativos, arquivados, finalizados });

  } catch (erro) {
    console.error(erro);
    res.status(500).send("Erro ao buscar projetos");
  }
});


module.exports = router;*/



//v3: com a página de projetos, precisa integrar ao banco de dados
const express = require("express");
const router = express.Router();
const db = require("../../services/firebaseAdmin");

// LISTA DE PROJETOS
router.get("/projetos", async (req, res) => {
  try {
    const snapshot = await db.collection("projetos").get();

    const ativos = [];
    const arquivados = [];
    const finalizados = [];

    snapshot.forEach(doc => {
      const projeto = {
        id: doc.id,
        ...doc.data()
      };

      if (projeto.status === "ativo") {
        ativos.push(projeto);
      } else if (projeto.status === "arquivado") {
        arquivados.push(projeto);
      } else if (projeto.status === "finalizado") {
        finalizados.push(projeto);
      }
    });

    res.render("projetos/index", { ativos, arquivados, finalizados });

  } catch (erro) {
    console.error(erro);
    res.status(500).send("Erro ao buscar projetos");
  }
});


// PROJETO INDIVIDUAL - Buscar por ID ou Slug (do Firebase)
router.get("/projetos/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Tenta buscar pelo ID direto
    const docSnapshot = await db.collection("projetos").doc(id).get();
    
    if (docSnapshot.exists) {
      const projeto = {
        id: docSnapshot.id,
        ...docSnapshot.data()
      };
      
      return res.render("projetos/projeto", { projeto });
    }

    // Se não encontrar pelo ID, tenta buscar pelo slug
    const querySnapshot = await db.collection("projetos")
      .where("slug", "==", id)
      .limit(1)
      .get();

    if (!querySnapshot.empty) {
      const projeto = {
        id: querySnapshot.docs[0].id,
        ...querySnapshot.docs[0].data()
      };
      
      return res.render("projetos/projeto", { projeto });
    }

    // Se não encontrar, retorna 404
    return res.status(404).render("erro", { 
      mensagem: "Projeto não encontrado",
      titulo: "404 - Projeto não encontrado"
    });

  } catch (erro) {
    console.error("Erro ao buscar projeto:", erro);
    res.status(500).send("Erro ao buscar projeto");
  }
});

module.exports = router;