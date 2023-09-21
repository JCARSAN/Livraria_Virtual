import express from 'express';

const router = express.Router();
const bookController = require('../controllers/booksController');

router.post('/register',bookController.registerNewBook);
router.get('/:id',bookController.findBookById);

module.exports = router;