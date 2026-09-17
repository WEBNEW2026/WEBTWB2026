const express = require('express');
const { db } = require('../database');
const router = express.Router();

// Get all villas
router.get('/', (req, res) => {
    db.all("SELECT * FROM villas", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        // Parse JSON fields
        const villas = rows.map(villa => ({
            ...villa,
            features: JSON.parse(villa.features || '[]'),
            bedConfiguration: JSON.parse(villa.bedConfiguration || '[]'),
            facilities: JSON.parse(villa.facilities || '{}'),
            policies: JSON.parse(villa.policies || '{}'),
            description: {
                id: villa.description_id,
                en: villa.description_en,
                zh: villa.description_zh
            }
        }));
        res.json(villas);
    });
});

// Get single villa
router.get('/:id', (req, res) => {
    db.get("SELECT * FROM villas WHERE id = ?", [req.params.id], (err, row) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (!row) {
            return res.status(404).json({ message: 'Villa not found' });
        }
        const villa = {
            ...row,
            features: JSON.parse(row.features || '[]'),
            bedConfiguration: JSON.parse(row.bedConfiguration || '[]'),
            facilities: JSON.parse(row.facilities || '{}'),
            policies: JSON.parse(row.policies || '{}'),
            description: {
                id: row.description_id,
                en: row.description_en,
                zh: row.description_zh
            }
        };
        res.json(villa);
    });
});

// Create villa
router.post('/', (req, res) => {
    const {
        name, cluster, capacity, price, priceWeekday, priceWeekend, priceHighSeason,
        description, image, category, features, bedConfiguration, facilities, policies, status
    } = req.body;

    const id = Date.now().toString();
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const sql = `INSERT INTO villas (
        id, name, cluster, capacity, price, priceWeekday, priceWeekend, priceHighSeason,
        description_id, description_en, description_zh, image, category, 
        features, bedConfiguration, facilities, policies, status, createdAt, updatedAt
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const params = [
        id, name, cluster, capacity, price, priceWeekday, priceWeekend, priceHighSeason,
        description.id, description.en, description.zh, image, category,
        JSON.stringify(features), JSON.stringify(bedConfiguration), JSON.stringify(facilities), JSON.stringify(policies),
        status, createdAt, updatedAt
    ];

    db.run(sql, params, function (err) {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(201).json({ id, ...req.body });
    });
});

// Update villa
router.put('/:id', (req, res) => {
    const {
        name, cluster, capacity, price, priceWeekday, priceWeekend, priceHighSeason,
        description, image, category, features, bedConfiguration, facilities, policies, status
    } = req.body;

    const updatedAt = new Date().toISOString();

    const sql = `UPDATE villas SET 
        name = ?, cluster = ?, capacity = ?, price = ?, priceWeekday = ?, priceWeekend = ?, priceHighSeason = ?,
        description_id = ?, description_en = ?, description_zh = ?, image = ?, category = ?, 
        features = ?, bedConfiguration = ?, facilities = ?, policies = ?, status = ?, updatedAt = ?
        WHERE id = ?`;

    const params = [
        name, cluster, capacity, price, priceWeekday, priceWeekend, priceHighSeason,
        description.id, description.en, description.zh, image, category,
        JSON.stringify(features), JSON.stringify(bedConfiguration), JSON.stringify(facilities), JSON.stringify(policies),
        status, updatedAt, req.params.id
    ];

    db.run(sql, params, function (err) {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json({ message: 'Villa updated successfully' });
    });
});

// Delete villa
router.delete('/:id', (req, res) => {
    db.run("DELETE FROM villas WHERE id = ?", [req.params.id], function (err) {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json({ message: 'Villa deleted successfully' });
    });
});

module.exports = router;
