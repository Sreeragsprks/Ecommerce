import user from '../models/user_model.js';

export const customerLogin = async(req, res) => {
    try {
        const {userName, password} = req.body;
        const response = await user.find({email: userName});
        res.status(200).json({userName, password});
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}