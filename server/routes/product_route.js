import express from 'express';
import { getProductList } from '../controllers/product_controller.js';
const router = express.Router();

router.get('/list', (req, res) => {
    console.log('find called', req.route);
    getProductList(req, res);
});

router.post('/detail/:id', (req, res, next) => {
    
});

export default router;