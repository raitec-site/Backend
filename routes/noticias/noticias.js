const express = require("express");
const router = express.Router();
const db = require("../../services/firebaseAdmin");

/*
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
});*/

router.get("/noticias", async (req, res) => {
  try {
    const snapshot = await db.collection("noticias").get();

    const noticias = [];
    snapshot.forEach(doc => {
      noticias.push(doc.data());
    });

    res.render("noticias/index", { noticias });

  } catch (erro) {
    console.error(erro);
    res.status(500).send("Erro ao buscar notícia!");
  }
});



router.get("/noticias/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;

    const snapshot = await db.collection("noticias")
      .where("slug", "==", slug)
      .get();

    if (snapshot.empty) {
      return res.status(404).send("Noticia não encontrada");
    }

    const noticia = snapshot.docs[0].data();

    res.render("noticias/noticias", { noticia });

  } catch (erro) {
    console.error(erro);
    res.status(500).send("Erro ao buscar noticia");
  }
});

module.exports = router;