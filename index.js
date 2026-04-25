const express = require("express");
const path = require("path");
const app = express();

// EJS
app.set("view engine", "ejs");

// arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));


const sobreRoutes = require("./routes/quem-somos/sobre"); 
const estruturaRoutes = require("./routes/quem-somos/estrutura"); 
const membrosRoutes = require("./routes/quem-somos/membros/membros"); 
const projetosRoutes = require("./routes/projetos/projetos"); 
const eventosRoutes = require("./routes/eventos/eventos");
const extensaoRoutes = require("./routes/extensao/extensao"); 
const raipediaRoutes = require("./routes/raipedia/raipedia"); 
const processoSeletivoRoutes = require("./routes/processo-seletivo/processo-seletivo"); 
const noticiasRoutes = require("./routes/noticias/noticias");
const contatoRoutes = require("./routes/contato/contato"); 

app.use("/", sobreRoutes);
app.use("/", estruturaRoutes);
app.use("/", membrosRoutes);
app.use("/", projetosRoutes);
app.use("/", eventosRoutes);
app.use("/", extensaoRoutes);
app.use("/", raipediaRoutes);
app.use("/", processoSeletivoRoutes);
app.use("/", noticiasRoutes);
app.use("/", contatoRoutes);


const testeRoutes = require("./routes/teste");
app.use(testeRoutes);

// rota principal
app.get("/", (req, res) => {
  res.render("index");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});