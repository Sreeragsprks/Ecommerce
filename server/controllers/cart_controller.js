import cart from '../models/cart_model.js';

export const getCartList = async(req, res) => {
    try {
        let userId = req.params.userId;
        const cartDetails = await cart.findOne({userId});

        res.status(200).json(cartDetails);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}