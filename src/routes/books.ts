import express from 'express';

const router = express.Router();
const bookController = require('../controllers/booksController');
const clientAuth = require('../config/clientAuth')

router.post('/register',bookController.createNewBook);
router.get('/:id',bookController.findBookById);
router.post('/:id/review',clientAuth,bookController.createReview);

module.exports = router;