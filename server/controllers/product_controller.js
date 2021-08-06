import Product from '../models/product_model.js';

export const getProductList = async(req, res) => {
    try {
        const productList = await Product.find();
        console.log('products', productList);
        res.status(200).json(productList);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}