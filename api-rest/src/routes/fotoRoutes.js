import { Router } from 'express';

import fotoRoutes from '../controllers/FotoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, fotoRoutes.store);

export default router;
