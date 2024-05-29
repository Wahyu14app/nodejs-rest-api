// Contoh utilitas autentikasi
const isAdmin = (req, res, next) => {
    if (req.user === 'admin') {
        next();
    } else {
        res.status(403).json({ error: 'Access denied' });
    }
};

module.exports = { isAdmin };
