const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./database/db");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views", "partials"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.render("header");
});

app.get("/pets", (req, res) => {
  res.render("footer");
});

app.get("/mostrar", (req, res) => {
  let query = `SELECT * FROM animais`;

  db.all(query, [], (err, row) => {
    if (err) {
      res.status(500).json({ msg: "Erro ao consultar animais" });
    }
    res.json(row);
  });
});

app.post("/", (req, res) => {
  const { nome, tipo, raca, nascimento } = req.body;

  db.run(
    "INSERT INTO animais (nome,tipo,raca,nascimento) VALUES (?,?,?,?)",
    [nome, tipo, raca, nascimento],
    (err) => {
      if (err) throw err;
      console.log("Cadastrado com sucesso!");
    }
  );
  res.render("footer");
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
