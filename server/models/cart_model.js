import mongoose from 'mongoose';

const {Schema} = mongoose;

const cartSchema = new Schema({
    userId: String,
    productList: [
        {
            uuid: String,
            name: String,
            productImage: [{id: String, imageUrl: String}],
            price: Number,
            currencyCode: String
        }
    ]
});

const Cart = mongoose.model('Carts', cartSchema);

export default Cart;