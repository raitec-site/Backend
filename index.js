const express = require("express");
const path = require("path");
const session = require("express-session");

const app = express();


// =====================
// CONFIG EJS
// =====================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// =====================
// MIDDLEWARES
// =====================

// Formulários
app.use(express.urlencoded({ extended: true }));

// Arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Sessão
app.use(session({
  secret: process.env.SESSION_SECRET || "raitec-admin",
  resave: false,
  saveUninitialized: false
}));


// =====================
// ROTAS PÚBLICAS
// =====================

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
const testeRoutes = require("./routes/teste");


// =====================
// ROTAS ADMIN / AUTENTICAÇÃO
// =====================

const authRoutes = require("./routes/admin/auth");
const adminRoutes = require("./routes/admin/admin");
const adminMembrosRoutes = require("./routes/admin/membros");


// =====================
// USO DAS ROTAS (CORRIGIDO)
// =====================

// 🔥 IMPORTANTE: cada uma com sua base correta

app.use("/sobre", sobreRoutes);
app.use("/estrutura", estruturaRoutes);
app.use("/membros", membrosRoutes);
app.use("/projetos", projetosRoutes);
app.use("/eventos", eventosRoutes);
app.use("/extensao", extensaoRoutes);
app.use("/raipedia", raipediaRoutes);
app.use("/processo-seletivo", processoSeletivoRoutes);
app.use("/noticias", noticiasRoutes);
app.use("/contato", contatoRoutes);
app.use("/teste", testeRoutes);

// Admin
app.use("/admin", adminRoutes);
app.use("/admin", adminMembrosRoutes);
app.use("/", authRoutes);


// =====================
// ROTA PRINCIPAL
// =====================
app.get("/", (req, res) => {
  res.render("index");
});


// =====================
// START SERVER
// =====================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});
