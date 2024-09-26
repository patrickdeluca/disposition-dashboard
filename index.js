// index.js
const express = require('express');
const cors = require('cors');
const db = require('./database');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Get all dispositions
app.get('/api/dispositions', (req, res) => {
  db.all('SELECT * FROM dispositions', (err, dispositions) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    if (dispositions.length === 0) {
      return res.json([]);
    }

    let completed = 0;
    dispositions.forEach((dispo) => {
      db.all(
        'SELECT * FROM actions WHERE dispositionId = ?',
        [dispo.id],
        (err, actions) => {
          if (err) {
            res.status(500).json({ error: err.message });
            return;
          }
          dispo.actions = actions;
          completed++;
          if (completed === dispositions.length) {
            res.json(dispositions);
          }
        }
      );
    });
  });
});

// Add a new disposition
app.post('/api/dispositions', (req, res) => {
  const {
    name,
    description,
    enabled,
    contactOn,
    dripCampaign,
    dripCampaignUUID,
    actions,
  } = req.body;

  const stmt = db.prepare(
    `INSERT INTO dispositions (name, description, enabled, contactOn, dripCampaign, dripCampaignUUID)
     VALUES (?, ?, ?, ?, ?, ?)`
  );
  stmt.run(
    name,
    description,
    enabled,
    contactOn,
    dripCampaign,
    dripCampaignUUID,
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        stmt.finalize();
        return;
      }
      const dispositionId = this.lastID;

      // Insert actions
      if (actions && actions.length > 0) {
        const actionStmt = db.prepare(
          `INSERT INTO actions (dispositionId, target, templateId, actionType)
           VALUES (?, ?, ?, ?)`
        );
        actions.forEach((action) => {
          actionStmt.run(
            dispositionId,
            action.target,
            action.templateId,
            action.actionType
          );
        });
        actionStmt.finalize(() => {
          stmt.finalize();
          res.json({ id: dispositionId });
        });
      } else {
        stmt.finalize();
        res.json({ id: dispositionId });
      }
    }
  );
});

// Update a disposition
app.put('/api/dispositions/:id', (req, res) => {
  const {
    name,
    description,
    enabled,
    contactOn,
    dripCampaign,
    dripCampaignUUID,
    actions,
  } = req.body;
  const id = req.params.id;

  const stmt = db.prepare(
    `UPDATE dispositions
     SET name = ?, description = ?, enabled = ?, contactOn = ?, dripCampaign = ?, dripCampaignUUID = ?, updatedAt = CURRENT_TIMESTAMP
     WHERE id = ?`
  );
  stmt.run(
    name,
    description,
    enabled,
    contactOn,
    dripCampaign,
    dripCampaignUUID,
    id,
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        stmt.finalize();
        return;
      }

      stmt.finalize();

      // Delete existing actions
      db.run(`DELETE FROM actions WHERE dispositionId = ?`, [id], function (err) {
        if (err) {
          res.status(500).json({ error: err.message });
          return;
        }

        // Insert new actions
        if (actions && actions.length > 0) {
          const actionStmt = db.prepare(
            `INSERT INTO actions (dispositionId, target, templateId, actionType)
             VALUES (?, ?, ?, ?)`
          );
          actions.forEach((action) => {
            actionStmt.run(
              id,
              action.target,
              action.templateId,
              action.actionType
            );
          });
          actionStmt.finalize(() => {
            res.json({ message: 'Disposition updated successfully' });
          });
        } else {
          res.json({ message: 'Disposition updated successfully' });
        }
      });
    }
  );
});

// Delete a disposition
app.delete('/api/dispositions/:id', (req, res) => {
  const id = req.params.id;

  db.run(`DELETE FROM dispositions WHERE id = ?`, [id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    // Delete associated actions
    db.run(`DELETE FROM actions WHERE dispositionId = ?`, [id], function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'Disposition deleted successfully' });
    });
  });
});

// Fallback to 'index.html' for Single Page Application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
