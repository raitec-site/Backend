const express = require("express");
const router = express.Router();
const db = require("../../services/firebaseAdmin");


/** 
// DADOS MOCK (temporário)
const eixos = [
  {
    nome: "Apoio",
    slug: "apoio",
    descricao: "blábláblá..."
  },
  {
    nome: "Inovação",
    slug: "inovacao",
    descricao: "blábláblá..."
  },
  {
    nome: "Técnico",
    slug: "tecnico",
    descricao: "blábláblá..."
  }
];

const times = [
  {
    nome: "Mídias",
    slug: "midias",
    descricao: "blábláblá..."
  },
  {
    nome: "Processos",
    slug: "processos",
    descricao: "blábláblá..."
  }
];

// LISTA DE EIXOS
router.get("/estrutura", (req, res) => {
  res.render("quem-somos/estrutura", {
    eixos, times
  });
});


// EIXO OU TIME INDIVIDUAL
router.get("/estrutura/:slug", (req, res) => {
  const slug = req.params.slug;

  const eixo = eixos.find(e => e.slug === slug);
  const time = times.find(t => t.slug === slug);


  if (!eixo && !time) {
    return res.status(404).send("Eixo ou Time não encontrado");

  }
  res.render("quem-somos/eixo-time", {
    eixo, time
  });
});

module.exports = router;
*/


// LISTA
router.get("/estrutura", async (req, res) => {
  try {
    const eixosSnap = await db.collection("eixos").get();
    const timesSnap = await db.collection("times").get();

    const eixos = [];
    const times = [];

    eixosSnap.forEach(doc => {
      eixos.push({
        id: doc.id,
        ...doc.data()
      });
    });

    timesSnap.forEach(doc => {
      times.push({
        id: doc.id,
        ...doc.data()
      });
    });

    res.render("quem-somos/estrutura", { eixos, times });

  } catch (erro) {
    console.error(erro);
    res.status(500).send("Erro ao buscar estrutura");
  }
});

// EIXO
router.get("/eixos/:slug", async (req, res) => {
  try {
    const doc = await db.collection("eixos").doc(req.params.slug).get();

    if (!doc.exists) {
      return res.status(404).send("Eixo não encontrado");
    }

    res.render("quem-somos/eixo", {
      eixo: { id: doc.id, ...doc.data() }
    });

  } catch (erro) {
    console.error(erro);
    res.status(500).send("Erro ao buscar eixo");
  }
});

// TIME
router.get("/times/:slug", async (req, res) => {
  try {
    const doc = await db.collection("times").doc(req.params.slug).get();

    if (!doc.exists) {
      return res.status(404).send("Time não encontrado");
    }

    res.render("quem-somos/time", {
      time: { id: doc.id, ...doc.data() }
    });

  } catch (erro) {
    console.error(erro);
    res.status(500).send("Erro ao buscar time");
  }
});


module.exports = router;