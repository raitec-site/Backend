const express = require("express");
const router = express.Router();

// DADOS MOCK
const artigos = [
  {
    nome: "Capacitação de Arduino",
    slug: "capacitacao-de-arduino",
    conteudo: "blábláblá..."
  },
  {
    nome: "Capacitação de SCRUM",
    slug: "capacitacao-de-scrum",
    conteudo: "blábláblá..."
  },
  {
    nome: "Capacitação de FLUTTER",
    slug: "capacitacao-de-flutter",
    conteudo: "blábláblá..."
  }
];

// LISTA DE ARTIGOS
router.get("/raipedia", (req, res) => {
  res.render("raipedia/index", { artigos });
});

// ARTIGO INDIVIDUAL
router.get("/raipedia/:slug", (req, res) => {
  const slug = req.params.slug;

  const artigo = artigos.find(a => a.slug === slug);

  if (!artigo) {
    return res.status(404).send("Artigo não encontrado!");
  }

  res.render("raipedia/artigo", { artigo });
});

module.exports = router;