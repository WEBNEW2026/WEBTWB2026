const express = require('express');
const { db } = require('../database');
const router = express.Router();

// Get all blog posts
router.get('/', (req, res) => {
    db.all("SELECT * FROM blog_posts", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        const posts = rows.map(post => ({
            ...post,
            tags: JSON.parse(post.tags || '[]'),
            author: {
                name: post.author_name,
                avatar: post.author_avatar
            }
        }));
        res.json(posts);
    });
});

// Create blog post
router.post('/', (req, res) => {
    const { title, slug, excerpt, content, coverImage, category, tags, status, publishDate, author } = req.body;
    const id = Date.now().toString();
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const sql = `INSERT INTO blog_posts (
        id, title, slug, excerpt, content, coverImage, category, tags, status, publishDate, 
        author_name, author_avatar, createdAt, updatedAt
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const params = [
        id, title, slug, excerpt, content, coverImage, category, JSON.stringify(tags), status, publishDate,
        author.name, author.avatar, createdAt, updatedAt
    ];

    db.run(sql, params, function (err) {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(201).json({ id, ...req.body });
    });
});

// Update blog post
router.put('/:id', (req, res) => {
    const { title, slug, excerpt, content, coverImage, category, tags, status, publishDate, author } = req.body;
    const updatedAt = new Date().toISOString();

    const sql = `UPDATE blog_posts SET 
        title = ?, slug = ?, excerpt = ?, content = ?, coverImage = ?, category = ?, 
        tags = ?, status = ?, publishDate = ?, author_name = ?, author_avatar = ?, updatedAt = ?
        WHERE id = ?`;

    const params = [
        title, slug, excerpt, content, coverImage, category, JSON.stringify(tags), status, publishDate,
        author.name, author.avatar, updatedAt, req.params.id
    ];

    db.run(sql, params, function (err) {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json({ message: 'Blog post updated successfully' });
    });
});

// Delete blog post
router.delete('/:id', (req, res) => {
    db.run("DELETE FROM blog_posts WHERE id = ?", [req.params.id], function (err) {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json({ message: 'Blog post deleted successfully' });
    });
});

module.exports = router;
