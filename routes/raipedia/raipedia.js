const express = require("express");
const router = express.Router();
const db = require("../../services/firebaseAdmin");

/** 
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
*/


router.get("/raipedia", async (req, res) => {
  try {
    const snapshot = await db.collection("raipedia").get();

    const raipedia = [];
    snapshot.forEach(doc => {
      raipedia.push(doc.data());
    });

    res.render("raipedia/index", { raipedia });

  } catch (erro) {
    console.error(erro);
    res.status(500).send("Erro ao buscar Raipédia");
  }
});



router.get("/raipedia/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;

    const snapshot = await db.collection("raipedia")
      .where("slug", "==", slug)
      .get();

    if (snapshot.empty) {
      return res.status(404).send("Artigo não encontrado!");
    }

    const raipedia = snapshot.docs[0].data();

    res.render("raipedia/raipedia", { raipedia });

  } catch (erro) {
    console.error(erro);
    res.status(500).send("Erro ao buscar artigo!");
  }
});


module.exports = router;