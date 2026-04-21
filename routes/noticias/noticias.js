const express = require("express");
const router = express.Router();

const noticias = [
    {
        nome: "Apresentação Institucional do Raitec 2026",
        slug: "apresentacao-institucional-2026",
        data: "00/00/0000",
        descricao: "blábláblá...",
        conteudo: "blábláblá...",
    },
    {
        nome: "Processo Seletivo 2026.1",
        slug: "processo-seletivo-2026-1",
        data: "00/00/0000",
        descricao: "blábláblá...",
        conteudo: "blábláblá...",
    }
]

// LISTA DE MEMBROS
router.get("/noticias", (req, res) => {
  res.render("noticias/index", { noticias });
});

// NOTÍCIA INDIVIDUAL
router.get("/noticias/:slug", (req, res) => {
  const slug = req.params.slug;

  const noticia = noticias.find(n => n.slug === slug);

  if (!noticia) {
    return res.status(404).send("noticia não encontrada!");
  }

  res.render("noticias/noticia", { noticia });
});

module.exports = router;