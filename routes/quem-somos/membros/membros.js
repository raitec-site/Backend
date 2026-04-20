const express = require("express");
const router = express.Router();

// DADOS MOCK (temporário)
const membros = [
  {
    nome: "Larissa dos Santos Holanda",
    slug: "larissa-holanda",
    eixo: "Técnico",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Davi Jessé Honorato de Oliveira",
    slug: "davi-jesse",
    eixo: "Inovação",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Lucas de Oliveira Sobral",
    slug: "lucas-sobral",
    eixo: "Técnico",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "João Victor Marques Falcão",
    slug: "joao-victor-falcao",
    eixo: "Técnico",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Osvaldo Medeiros Cavalcante Neto",
    slug: "osvaldo-medeiros",
    eixo: "Técnico",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Davi Maurício Guedes Moreira",
    slug: "davi-mauricio",
    eixo: "Técnico",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Lucas Martins Menezes",
    slug: "lucas-martins",
    eixo: "Técnico",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Davi Sousa Trévia Magalhães",
    slug: "davi-trevia",
    eixo: "Técnico",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Gabriel Gonzaga Sá Barreto",
    slug: "gabriel-gonzaga",
    eixo: "Técnico",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Matheus Rocha Gomes da Silva",
    slug: "matheus-rocha",
    eixo: "Técnico",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Paulo Ricardo Jucá Santiago",
    slug: "paulo-ricardo",
    eixo: "Técnico",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Maria Paula Mesquita Silva Saraiva",
    slug: "maria-paula-mesquita",
    eixo: "Técnico",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Iago de Farias Gomes",
    slug: "iago-farias",
    eixo: "Técnico",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Wagner Silva da Costa Filho",
    slug: "wagner-silva",
    eixo: "Técnico",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Laiza Edwigens Rocha da Silva",
    slug: "laiza-edwiges",
    eixo: "Técnico",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Amanda Kelly Caetano da Silva",
    slug: "amanda-kelly",
    eixo: "Apoio",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Luan José Maciel dos Santos",
    slug: "luan-maciel",
    eixo: "Apoio",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Bruno Costa Ferreira",
    slug: "bruno-costa",
    eixo: "Apoio",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "João Matheus Pereira da Silva",
    slug: "joao-matheus",
    eixo: "Apoio",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Rafael Martins Guimaraes Vieira",
    slug: "rafael-martins",
    eixo: "Apoio",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Savlio Carvalho Pontes",
    slug: "savlio-carvalho",
    eixo: "Apoio",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Matheus Andrade Maia",
    slug: "matheus-maia",
    eixo: "Inovação",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Vitor Nogueira de Sousa",
    slug: "vitor-nogueira",
    eixo: "Inovação",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Sophya Evelyn de Sousa Ferreira Silva",
    slug: "sophya-evelyn",
    eixo: "Inovação",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Penelope Aghata Liberato de Oliveira",
    slug: "penelope-aghata",
    eixo: "Inovação",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Joinale Mendes da Rocha",
    slug: "joinale-mendes",
    eixo: "Inovação",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Levi Rocha de Santana Guimares",
    slug: "levi-rocha",
    eixo: "Apoio",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "David Baima Monte",
    slug: "david-baima",
    eixo: "Inovação",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Leticia Romero Ciconini Gomes da Silva",
    slug: "leticia-ciconin",
    eixo: "Apoio",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Gabriel Mapurunga de Carvalho",
    slug: "gabriel-mapurunga",
    eixo: "Inovação",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Aquiles de Oliveira Ferreira",
    slug: "aquiles-ferreira",
    eixo: "Inovação",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Fernando Caio Ribeiro Moura",
    slug: "fernando-caio",
    eixo: null,
    time: null,
    descricao: "blábláblá..."
  },
  {
    nome: "Geovanna Angelino de Sousa",
    slug: "geovanna-angelino",
    eixo: "Inovação",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Camila De Oliveira Silva",
    slug: "camila-oliveira",
    eixo: "Apoio",
    time: "Mídias",
    descricao: "blábláblá..."
  }
];


// LISTA DE MEMBROS
router.get("/membros", (req, res) => {
  res.render("quem-somos/membros/index", { membros });
});


// MEMBRO INDIVIDUAL
router.get("/membros/:slug", (req, res) => {
  const slug = req.params.slug;

  const membro = membros.find(m => m.slug === slug);

  if (!membro) {
    return res.status(404).send("Membro não encontrado");
  }

  res.render("quem-somos/membros/membro", { membro });
});

module.exports = router;