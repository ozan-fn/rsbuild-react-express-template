import { Router } from 'express';
import { helloController } from '../controllers/hello.controller';

const router = Router();

router.get('/hello', helloController.getHello);

export default router;
