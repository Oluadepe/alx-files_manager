import { Router } from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';

const router = Router();
router.get('/status', AppController.getStatus);
router.post('/users', UsersController.postNew);
router.get('/stats', AppController.getStats);

module.exports = router;
