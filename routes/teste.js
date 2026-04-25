// routes/teste.js
const express = require("express");
const router = express.Router();

const db = require("../services/firebaseAdmin");

router.get("/teste-firebase", async (req, res) => {
  try {
    const snapshot = await db.collection("teste").get();

    const dados = [];
    snapshot.forEach(doc => dados.push(doc.data()));

    res.json(dados);
  } catch (erro) {
  console.error(erro);
  res.status(500).send(erro.message);
}
});

module.exports = router;