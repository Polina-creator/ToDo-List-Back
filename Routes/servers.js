import {Router} from 'express';
import {getAll} from '../Controllers/server.js';
const router = Router();

router.get('/', getAll)

export default router;