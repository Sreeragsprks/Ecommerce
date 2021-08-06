import express from 'express';
import { customerLogin } from '../controllers/user_controller.js';

const router = express.Router();

// console.log(user);
router.get('/', (req, res, next) => {

});

router.post('/login', customerLogin);

router.get('/register', (req, res, next) => {
    
});

export default router;