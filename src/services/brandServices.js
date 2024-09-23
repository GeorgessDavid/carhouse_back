import db from '../database/models/index.js';

export const getBrands = async (req, res) => {
    console.log('Searching for Brands')

    const {limit, offset} = req.query;

    try {
        let count = await db.Brand.count();

        offset = parseInt(offset) || 0;
        limit = parseInt(limit) || 30;

        const brands = await db.Brand.findAll({
            order: [['name', 'ASC']],
            offset,
            limit
        });

        if(brands.length === 0){
            return res.status(404).json({
                message: 'No hay marcas registradas'
            });
        }

        console.log('Brands Founded')
        return res.status(200).json(brands);
    } catch (error) {
        return res.status(500).json({
            message: 'Error en el servidor'
        });
    }
}