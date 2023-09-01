import { Router } from 'express';
import { getUser, getUserById, createUser } from '../controllers/users-controller.js'

const router = new Router();

router.get('/', getUser);
router.get('/:id', getUserByI);
router.post('/', createUser);

export default router;