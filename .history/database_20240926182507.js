// database.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Import the dispositions data
const dispositionsData = require('./dispositions_data');

const dbPath = path.resolve(__dirname, 'dispositions.db');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  // Drop existing tables if you want to reset the database
  db.run('DROP TABLE IF EXISTS actions');
  db.run('DROP TABLE IF EXISTS dispositions');

  // Create the dispositions table
  db.run(`
    CREATE TABLE IF NOT EXISTS dispositions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      enabled BOOLEAN DEFAULT TRUE,
      contactOn BOOLEAN DEFAULT TRUE,
      dripCampaign BOOLEAN DEFAULT FALSE,
      dripCampaignUUID TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create the actions table
  db.run(`
    CREATE TABLE IF NOT EXISTS actions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      dispositionId INTEGER,
      target TEXT,
      templateId TEXT,
      actionType TEXT,
      FOREIGN KEY(dispositionId) REFERENCES dispositions(id)
    )
  `);

  // Prepare the statement for inserting dispositions
  const stmt = db.prepare(`
    INSERT INTO dispositions (id, name, description, enabled, contactOn, dripCampaign, dripCampaignUUID)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  // Insert each disposition
  dispositionsData.forEach((dispo) => {
    stmt.run(
      dispo.id,
      dispo.name,
      dispo.description,
      dispo.enabled,
      dispo.contactOn,
      dispo.dripCampaign,
      dispo.dripCampaignUUID
    );
  });

  stmt.finalize();

  // If you have default actions to insert, you can prepare and insert them here
});

module.exports = db;
