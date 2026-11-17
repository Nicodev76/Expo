const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcrypt");

// Verbindung zur bestehenden Datenbank herstellen
const db = new sqlite3.Database("./db.sqlite3", async (err) => {
  if (err) {
    console.error("Fehler beim Öffnen der Datenbank:", err.message);
    return;
  }
  console.log("Mit der Datenbank verbunden. Erstelle Admin...");

  // 1. Erst eine Test-Firma anlegen (falls noch keine da ist)
  db.run(
    `INSERT INTO firmen (firmenname, status, erstellt_am) VALUES (?, ?, ?)`,
    ["Admin Firma", "aktiv", new Date().toISOString()],
    async function (err) {
      let firmaId = 1;
      if (err) {
        console.log("Hinweis: Firma konnte nicht neu erstellt werden (vielleicht existiert schon eine). Nutze ID 1.");
      } else {
        firmaId = this.lastID;
        console.log(`Test-Firma erstellt mit ID: ${firmaId}`);
      }

      // 2. Passwort sicher verschlüsseln (bcrypt)
      const klartextPasswort = "admin"; // <--- Hier dein Wunsch-Passwort eintragen
      const hashedPassword = await bcrypt.hash(klartextPasswort, 10);

      const username = "admin"; // <--- Dein Login-Benutzername

      // 3. Benutzer in die Tabelle 'benutzer' einfügen
      db.run(
        `INSERT INTO benutzer (firma_id, system_username, password_hash, is_temp_password, display_name) VALUES (?, ?, ?, ?, ?)`,
        [firmaId, username, hashedPassword, 2, "System Administrator"],
        (err) => {
          if (err) {
            console.error("Fehler beim Erstellen des Admin-Benutzers (vielleicht existiert der Username schon?):", err.message);
          } else {
            console.log("--------------------------------------------------");
            console.log("✅ Admin-Benutzer erfolgreich erstellt!");
            console.log(`Benutzername: ${username}`);
            console.log(`Passwort:     ${klartextPasswort}`);
            console.log("--------------------------------------------------");
          }
          // Datenbankverbindung wieder schließen
          db.close();
        }
      );
    }
  );
});