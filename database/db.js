const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("banco.db");

db.serialize(() => {
  db.run(
    `create table if not exists animais (nome TEXT, tipo TEXT, raca TEXT, nascimento DATE)`
  );
});

module.exports = db;
