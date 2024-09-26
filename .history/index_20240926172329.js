// index.js
const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
app.use(cors());
app.use(express.json());

// Get all dispositions
app.get('/api/dispositions', (req, res) => {
  db.all('SELECT * FROM dispositions', (err, dispositions) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    // Fetch actions for each disposition
    const dispositionsWithActions = [];
    let count = 0;
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
          dispositionsWithActions.push(dispo);
          count++;
          if (count === dispositions.length) {
            res.json(dispositionsWithActions);
          }
        }
      );
    });

    // If there are no dispositions
    if (dispositions.length === 0) {
      res.json([]);
    }
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
        actionStmt.finalize();
      }

      res.json({ id: dispositionId });
    }
  );
  stmt.finalize();
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
        return;
      }

      // Delete existing actions
      db.run(
        `DELETE FROM actions WHERE dispositionId = ?`,
        [id],
        function (err) {
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
            actionStmt.finalize();
          }

          res.json({ message: 'Disposition updated successfully' });
        }
      );
    }
  );
  stmt.finalize();
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

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
