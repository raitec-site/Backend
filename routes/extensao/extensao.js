const express = require("express");
const router = express.Router();

// DADOS MOCK (temporário)
const extensoes = [
  {
    nome: "ACCS",
    slug: "accs",
    descricao: "ACCS"
  }
];


// LISTA DE MEMBROS
router.get("/extensao", (req, res) => {
  res.render("extensao/index", {
    extensoes
  });
});


// MEMBRO INDIVIDUAL
router.get("/extensao/:slug", (req, res) => {
  const slug = req.params.slug;

  const extensao = extensoes.find(e => e.slug === slug);

  if (!extensao) {
    return res.status(404).send("Extensão não encontrada!");
  }

  res.render("extensao/extensao", {
    extensao
  });
});

module.exports = router;