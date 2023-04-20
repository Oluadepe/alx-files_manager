import { Router } from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import FilesController from '../controllers/FilesController';


const router = Router();

router.get('/status', AppController.getStatus);

router.get('/stats', AppController.getStats);



module.exports = router;
