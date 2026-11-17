const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcrypt");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

const db = new sqlite3.Database("./db.sqlite3", (err) => {
  if (err) {
    console.error("Fehler beim öffnen der Datenbank", err.message);
  } else {
    console.log("Mit der Datenbank verbunden");
    createTables();
  }
});

function createTables() {
  db.run(`CREATE TABLE IF NOT EXISTS firmen (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firmenname TEXT NOT NULL,
    status TEXT DEFAULT 'aktiv',
    erstellt_am TEXT
  )`);

  db.run(
    `CREATE TABLE IF NOT EXISTS benutzer (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firma_id INTEGER,
    system_username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    is_temp_password INTEGER DEFAULT 1,
    display_name TEXT,
    FOREIGN KEY (firma_id) REFERENCES firmen(id)
  )`,
    () => {
      console.log("Tabellen erfolgreich erstellt oder überprüft.");
    },
  );
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Frontend", "login.html"));
});

app.post("/api/login", (req, res) => {
  const { username, password, firma_id } = req.body;

  db.get(
    `SELECT * FROM benutzer WHERE system_username = ?`,
    [username],
    async (err, user) => {
      if (err) {
        return res
          .status(500)
          .json({ error: "Serverfehler bei der Datenbank" });
      }
      if (!user) {
        return res.status(400).json({ error: "Benutzer nicht gefunden" });
      }

      const match = await bcrypt.compare(password, user.password_hash);
      if (!match) {
        return res.status(400).json({ error: "Falsches Password" });
      }

      db.get(
        `SELECT * FROM firmen WHERE id = ?`,
        [user.firma_id],
        (err, firma) => {
          if (err) {
            return res
              .status(500)
              .json({ error: "Serverfehler bei der Firmenprüfung" });
          }
          if (firma && firma.status == "gesperrt") {
            return res.status(403).json({
              error: "Account gesperrt: Das Monats-Abo wurde nicht bezhalt",
            });
          }

          res.json({
            success: true,
            message: "Login erfolgreich",
            isTempPassword: user.is_temp_password === 1, // Sagt der App, ob es der Erstlogin ist
            userId: user.id,
            firmaId: user.firma_id
          });
        },
      );
    },
  );
});

app.listen(3000, () => {
  console.log("Backend-Server läuft auf http://localhost:3000");
});
