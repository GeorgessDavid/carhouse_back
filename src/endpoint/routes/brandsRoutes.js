import express from 'express';
import { getBrands } from '../../services/brandServices.js';

const router = express.Router();

router.get('/getBrands', (req, res, next) =>{
    console.log('getMethod initialized.')
    next()
},getBrands);

export default router;