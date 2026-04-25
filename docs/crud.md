# CRUD com Firestore 
# (Node.js + Express + EJS)

-------------------------------------------------------------------------------------------------------------------
## 1. Conceito geral

CRUD = operações básicas de um sistema:

* Create → criar dados
* Read → ler dados
* Update → atualizar dados
* Delete → remover dados

-------------------------------------------------------------------------------------------------------------------

## 2. CREATE — Criar dados

### Código

```js
router.post("/projetos", async (req, res) => {
  try {
    const { nome, status } = req.body;

    await db.collection("projetos").add({
      nome,
      status
    });

    res.redirect("/projetos");

  } catch (erro) {
    console.error(erro);
    res.status(500).send("Erro ao criar projeto");
  }
});
```

### Explicação

* `.add()` cria um novo documento com ID automático
* `req.body` contém os dados do formulário

-----------------------------------------------------------------------------------------------------------------
## 3. READ — Ler dados

### Listar todos

```js
const snapshot = await db.collection("projetos").get();
```

### Buscar um

```js
const doc = await db.collection("projetos").doc(id).get();
```

-----------------------------------------------------------------------------------------------------------------

## 4. UPDATE — Atualizar dados

### Código

```js
router.post("/projetos/:id/editar", async (req, res) => {
  try {
    const { nome, status } = req.body;

    await db.collection("projetos").doc(req.params.id).update({
      nome,
      status
    });

    res.redirect("/projetos");

  } catch (erro) {
    console.error(erro);
    res.status(500).send("Erro ao atualizar");
  }
});
```

### Explicação

* `.update()` altera apenas os campos informados
* usa o ID do documento

----------------------------------------------------------------------------------------------------------------

## 5. DELETE — Remover dados

### Código

```js
router.post("/projetos/:id/deletar", async (req, res) => {
  try {
    await db.collection("projetos").doc(req.params.id).delete();

    res.redirect("/projetos");

  } catch (erro) {
    console.error(erro);
    res.status(500).send("Erro ao deletar");
  }
});
```

### Explicação

* `.delete()` remove o documento permanentemente

----------------------------------------------------------------------------------------------------------------


## 6. Formulário (EJS)

### Criar projeto

```ejs
<form action="/projetos" method="POST">
  <input type="text" name="nome" placeholder="Nome do projeto" required>
  
  <select name="status">
    <option value="ativo">Ativo</option>
    <option value="arquivado">Arquivado</option>
    <option value="finalizado">Finalizado</option>
  </select>

  <button type="submit">Criar</button>
</form>
```

----------------------------------------------------------------------------------------------------------------


### Atualizar projeto

```ejs
<form action="/projetos/<%= projeto.id %>/editar" method="POST">
  <input type="text" name="nome" value="<%= projeto.nome %>">

  <button type="submit">Salvar</button>
</form>
```

---

### Deletar projeto

```ejs
<form action="/projetos/<%= projeto.id %>/deletar" method="POST">
  <button type="submit">Excluir</button>
</form>
```

----------------------------------------------------------------------------------------------------------------


## 7. Boas práticas

* Sempre validar `req.body`
* Usar `try/catch`
* Redirecionar após ações (`res.redirect`)
* Usar IDs para operações (não slug)
* Separar rotas por responsabilidade

----------------------------------------------------------------------------------------------------------------


## 8. Resumo rápido

* `.add()` → cria
* `.get()` → lê
* `.doc(id).update()` → atualiza
* `.doc(id).delete()` → remove

----------------------------------------------------------------------------------------------------------------


## 9. Resultado esperado

Ao final, deve-se conseguir:

* Criar registros no banco
* Listar dados
* Editar informações
* Deletar registros
* Integrar tudo com páginas EJS
