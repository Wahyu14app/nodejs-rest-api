const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const authController = {
    login: (req, res) => {
        // Contoh autentikasi sederhana
        const { username, password } = req.body;
        if (username === 'admin' && password === 'password') {
            const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    },
    profile: (req, res) => {
        // Contoh endpoint yang memerlukan autentikasi
        res.json({ profile: req.path});
    }
};

module.exports = authController;
