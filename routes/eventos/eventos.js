const express = require("express");
const router = express.Router();
const db = require("../../services/firebaseAdmin");

/*
// DADOS MOCK (temporário)
const eventos = [
  {
    nome: "Desafio Tecnológico",
    slug: "dtec",
    descricao: "Desafio Tecnológico"
  },
  {
    nome: "Control4Future",
    slug: "c4f",
    descricao: "Control for Future"
  }
];


// LISTA DE MEMBROS
router.get("/eventos", (req, res) => {
  res.render("eventos/index", {
    eventos
  });
});


// MEMBRO INDIVIDUAL
router.get("/eventos/:slug", (req, res) => {
  const slug = req.params.slug;

  const evento = eventos.find(e => e.slug === slug);

  if (!evento) {
    return res.status(404).send("Evento não encontrado");
  }

  res.render("eventos/evento", {
    evento
  });
});
*/

router.get("/eventos", async (req, res) => {
  try {
    const snapshot = await db.collection("eventos").get();

    const eventos = [];
    snapshot.forEach(doc => {
      eventos.push(doc.data());
    });

    res.render("eventos/index", { eventos });

  } catch (erro) {
    console.error(erro);
    res.status(500).send("Erro ao buscar eventos");
  }
});



router.get("/eventos/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;

    const snapshot = await db.collection("eventos")
      .where("slug", "==", slug)
      .get();

    if (snapshot.empty) {
      return res.status(404).send("Evento não encontrado!");
    }

    const evento = snapshot.docs[0].data();

    res.render("eventos/evento", { evento });

  } catch (erro) {
    console.error(erro);
    res.status(500).send("Erro ao buscar evento");
  }
});


module.exports = router;