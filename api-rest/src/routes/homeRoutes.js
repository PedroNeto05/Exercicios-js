import { Router } from 'express';
import homeRoutes from '../controllers/HomeController';

const router = new Router();

router.get('/', homeRoutes.index);

export default router;
