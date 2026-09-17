const express = require('express');
const { db } = require('../database');
const router = express.Router();

// Get all packages
router.get('/', (req, res) => {
    db.all("SELECT * FROM packages", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        const packages = rows.map(pkg => ({
            ...pkg,
            includes: JSON.parse(pkg.includes || '[]')
        }));
        res.json(packages);
    });
});

// Create package
router.post('/', (req, res) => {
    const { title, subtitle, duration, price, unit, image, type, status, includes } = req.body;
    const id = Date.now().toString();
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const sql = `INSERT INTO packages (
        id, title, subtitle, duration, price, unit, image, type, status, includes, createdAt, updatedAt
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const params = [
        id, title, subtitle, duration, price, unit, image, type, status,
        JSON.stringify(includes), createdAt, updatedAt
    ];

    db.run(sql, params, function (err) {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(201).json({ id, ...req.body });
    });
});

// Update package
router.put('/:id', (req, res) => {
    const { title, subtitle, duration, price, unit, image, type, status, includes } = req.body;
    const updatedAt = new Date().toISOString();

    const sql = `UPDATE packages SET 
        title = ?, subtitle = ?, duration = ?, price = ?, unit = ?, image = ?, 
        type = ?, status = ?, includes = ?, updatedAt = ?
        WHERE id = ?`;

    const params = [
        title, subtitle, duration, price, unit, image, type, status,
        JSON.stringify(includes), updatedAt, req.params.id
    ];

    db.run(sql, params, function (err) {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json({ message: 'Package updated successfully' });
    });
});

// Delete package
router.delete('/:id', (req, res) => {
    db.run("DELETE FROM packages WHERE id = ?", [req.params.id], function (err) {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json({ message: 'Package deleted successfully' });
    });
});

module.exports = router;
