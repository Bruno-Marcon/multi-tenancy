const express = require('express');
const db = require('../database');

const router = express.Router();

router.post('/', (req, res) => {
    const { name, tenant_id } = req.body;
    db.run("INSERT INTO itens (name, tenant_id) VALUES (?, ?)", [name, tenant_id], function(err) {
        if (err) {
            res.status(400).json({ message: err.message });
        } else {
            res.status(201).json({ id: this.lastID, name, tenant_id });
        }
    });
});

router.get('/:tenant_id', (req, res) => {
    const tenant_id = req.params.tenant_id; 
    db.all("SELECT * FROM itens WHERE tenant_id = ?", [tenant_id], (err, rows) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json(rows);
        }
    });
});

router.get('/', (req, res) => {
    db.all("SELECT * FROM itens",(err, rows) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;
