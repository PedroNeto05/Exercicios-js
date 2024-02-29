import { Router } from 'express';

import fotoRoutes from '../controllers/FotoController';

const router = new Router();

router.post('/', fotoRoutes.store);

export default router;
