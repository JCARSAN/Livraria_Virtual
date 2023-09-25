import {Router} from 'express';

const router = Router();
const clientController = require('../controllers/clientsController');

router.post('/register',clientController.registerNewClient);
router.post('/authenticate',clientController.authenticateClient)

module.exports = router;