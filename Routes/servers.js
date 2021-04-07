import {Router} from 'express';
import {getAll} from '../controllers/server.js';
const router = Router();

router.get('/', getAll)

export default router;