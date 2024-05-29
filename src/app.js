const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);


// Middleware untuk menangani rute yang tidak ditemukan (404)
app.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found' });
});


module.exports = app;
