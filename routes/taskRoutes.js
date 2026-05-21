import express from 'express';
import * as taskController from '../controllers/taskController.js';
import checkAuth from '../middlewares/checkAuth.js';
import checkAdmin from '../middlewares/checkAdmin.js';

const router = express.Router();

router.use(checkAuth);

router.post('/task', taskController.createTask);
router.get('/task/all', checkAdmin, taskController.getAllTasks);

router.get('/task/:id', taskController.getTask);
router.get('/task', taskController.getTasksByUserId);

router.put('/task/:id', taskController.updateTask);
router.delete('/task/:id', taskController.deleteTask);
//Сколько роутов, столько и контроллеров

export default router;
