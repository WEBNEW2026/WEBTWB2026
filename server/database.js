const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const bcrypt = require('bcryptjs');

const dbPath = path.resolve(__dirname, 'database.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

const initDatabase = () => {
    db.serialize(() => {
        // Users Table
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            username TEXT UNIQUE,
            password TEXT,
            name TEXT,
            role TEXT,
            avatar TEXT
        )`);

        // Villas Table
        db.run(`CREATE TABLE IF NOT EXISTS villas (
            id TEXT PRIMARY KEY,
            name TEXT,
            cluster TEXT,
            capacity TEXT,
            price INTEGER,
            priceWeekday INTEGER,
            priceWeekend INTEGER,
            priceHighSeason INTEGER,
            description_id TEXT,
            description_en TEXT,
            description_zh TEXT,
            image TEXT,
            status TEXT,
            createdAt TEXT,
            updatedAt TEXT
        )`);

        // Packages Table
        db.run(`CREATE TABLE IF NOT EXISTS packages (
            id TEXT PRIMARY KEY,
            title TEXT,
            subtitle TEXT,
            duration TEXT,
            price INTEGER,
            unit TEXT,
            image TEXT,
            type TEXT,
            status TEXT,
            createdAt TEXT,
            updatedAt TEXT
        )`);

        // Blog Posts Table
        db.run(`CREATE TABLE IF NOT EXISTS blog_posts (
            id TEXT PRIMARY KEY,
            title TEXT,
            slug TEXT,
            excerpt TEXT,
            content TEXT,
            coverImage TEXT,
            category TEXT,
            status TEXT,
            publishDate TEXT,
            author_name TEXT,
            author_avatar TEXT,
            createdAt TEXT,
            updatedAt TEXT
        )`);

        // Gallery Images Table
        db.run(`CREATE TABLE IF NOT EXISTS gallery_images (
            id TEXT PRIMARY KEY,
            url TEXT,
            title TEXT,
            category TEXT,
            uploadedAt TEXT
        )`);

        // Menu Items Table
        db.run(`CREATE TABLE IF NOT EXISTS menu_items (
            id TEXT PRIMARY KEY,
            name TEXT,
            description_id TEXT,
            description_en TEXT,
            description_zh TEXT,
            price INTEGER,
            image TEXT,
            category TEXT,
            isSignature INTEGER,
            isAvailable INTEGER,
            createdAt TEXT,
            updatedAt TEXT
        )`);

        // FAQs Table
        db.run(`CREATE TABLE IF NOT EXISTS faqs (
            id TEXT PRIMARY KEY,
            question_id TEXT,
            question_en TEXT,
            question_zh TEXT,
            answer_id TEXT,
            answer_en TEXT,
            answer_zh TEXT,
            category TEXT,
            "order" INTEGER,
            status TEXT,
            createdAt TEXT,
            updatedAt TEXT
        )`);

        // Seed Admin User if not exists
        db.get("SELECT * FROM users WHERE username = ?", ['admin'], (err, row) => {
            if (!row) {
                const hashedPassword = bcrypt.hashSync('password', 10);
                const adminId = Date.now().toString();
                db.run("INSERT INTO users (id, username, password, name, role, avatar) VALUES (?, ?, ?, ?, ?, ?)",
                    [adminId, 'admin', hashedPassword, 'Admin', 'admin', 'https://ui-avatars.com/api/?name=Admin']);
                console.log('Admin user seeded.');
            }
        });
    });
};

module.exports = { db, initDatabase };
