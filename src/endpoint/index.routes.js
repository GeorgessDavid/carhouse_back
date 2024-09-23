import express from 'express';
const router = express.Router();

import brandsRoutes from './routes/brandsRoutes.js';


router.get('/', (req,res) => {
    return res.send('Servidor corriendo.')
})
router.get('/brands', brandsRoutes);

export default router;