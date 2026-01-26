const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ mensagem: "Olá, os robôs estão conectados!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});
