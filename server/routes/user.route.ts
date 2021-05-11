import express from 'express';
import { userController } from '../controllers/user.controller';

const router = express.Router();

router.get('/:id', (req, res) => userController.getUser(req, res));

export default router;
