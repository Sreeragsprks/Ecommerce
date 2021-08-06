import express from 'express';
import { getCartList } from '../controllers/cart_controller.js';


const router = express.Router();

router.get('/:userId', getCartList);

export default router;