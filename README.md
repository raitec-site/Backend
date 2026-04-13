# 🚀 RAITec Site

Projeto web institucional do RAITec.

---

# 📋 Pré-requisitos

Antes de rodar o projeto, você precisa ter instalado:

* **Git** → para clonar o repositório
* **Node.js** → necessário para rodar o projeto
* **npm** → gerenciador de pacotes (já vem com o Node)
* **VS Code** (recomendado) → editor de código

---

# 🚀 Como rodar o projeto

## 🔹 1. Clonar o repositório (Observação: usamos -b para clonar a branch development)

```bash
git clone -b development https://github.com/raitec-site/Backend.git
```


## 🔹 2. Entrar na pasta do projeto

```bash
cd Backend
```


## 🔹 3. Instalar as dependências

```bash
npm install
```

Isso irá instalar todas as dependências e recriar a pasta `node_modules`.


## 🔹 4. Rodar o servidor

### ▶️ Modo padrão

```bash
node index.js
```


### 🔄 Modo desenvolvimento (recomendado)

```bash
npx nodemon index.js
```

👉 **O que é o nodemon?**
O `nodemon` reinicia automaticamente o servidor sempre que você altera o código.
Isso evita ficar parando e rodando o servidor manualmente toda hora.



## 🔹 5. Acessar no navegador

```bash
http://localhost:3000
```

---

# ⚠️ Observações importantes

* A pasta `node_modules` **não é enviada para o GitHub**
* Sempre execute `npm install` ao baixar o projeto
* Caso o servidor não inicie, verifique se o Node.js está instalado corretamente


# 💡 Dica

Para instalar o nodemon globalmente (opcional):

```bash
npm install -g nodemon
```

Assim você pode rodar apenas:

```bash
nodemon index.js
```

---

# 📌 Tecnologias utilizadas

* Node.js
* Express
* EJS

---

# Organização do Projeto

* **routes/** → controla as rotas (backend)
* **views/** → páginas EJS (frontend)
* **public/** → CSS, JS e imagens
* **middlewares/** → lógica intermediária (ex: autenticação)
* **services/** → integrações externas (Firebase)
* **models/** → estrutura de dados (futuro)

---
# Rotas principais

```bash
/                     → Página inicial
/contato              → Contato

/estrutura            → Estrutura
/membros              → Lista de membros
/membros/:slug        → Membro individual

/noticias             → Lista de notícias
/noticias/:slug       → Notícia individual

/projetos             → Lista de projetos
/projetos/:slug       → Projeto individual

/admin/login          → Login admin
/admin/dashboard      → Painel admin
```
---
# Estrutura do Projeto

```bash
raitec-site/
│
├── middlewares/             # Funções intermediárias (ex: autenticação)
│   └── auth.js
│
├── models/                  # Estrutura de dados (futuro banco)
│   └── noticia.js
│
├── node_modules/            # Dependências do projeto (NÃO sobe para o GitHub)
│
├── public/                  # Arquivos estáticos
│   ├── css/
│   ├── js/
│   └── images/
│
├── routes/                  # Rotas da aplicação
│   ├── admin/
│   │   ├── auth.js
│   │   ├── dashboard.js
│   │   └── noticias.js
│   │
│   ├── contato/
│   │   └── contato.js
│   │
│   ├── quem-somos/
│   │   ├── sobre.js
│   │   ├── estrutura.js
│   │   └── membros.js
│   │
│   ├── noticias/
│   │   └── noticias.js
│   │
│   ├── projetos/
│   │   └── projetos.js
│   │
│   ├── eventos/
│   │   └── eventos.js
│   │
│   └── raipedia/
│       └── raipedia.js
│
├── services/                # Integrações externas (ex: Firebase)
│   └── firebase.js
│
├── views/                   # Templates EJS (frontend)
│   ├── index.ejs
│
│   ├── admin/
│   ├── contato/
│   ├── quem-somos/
│   ├── noticias/
│   ├── projetos/
│   ├── eventos/
│   ├── raipedia/
│   │
│   └── partials/            # Componentes reutilizáveis
│       ├── header.ejs
│       └── footer.ejs
│
├── .gitignore               # Arquivos ignorados pelo Git
├── index.js                 # Servidor principal
├── package-lock.json
└── package.json
```

---
# Desenvolvido por
Time de Mídias RAITec
