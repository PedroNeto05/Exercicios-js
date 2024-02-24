import { Router } from 'express';
import userRoutes from '../controllers/UserController';

const router = new Router();

router.post('/', userRoutes.store);

export default router;
