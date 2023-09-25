import { Router } from "express";

const router = Router();
const indexController = require('../controllers/indexController')

router.get('/',indexController.index);

module.exports = router;