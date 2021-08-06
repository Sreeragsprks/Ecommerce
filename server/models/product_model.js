import mongoose from 'mongoose';
mongoose.set('debug', true);
const { Schema } = mongoose;

const productSchema = new Schema({
    uuid: String,
    name: String,
    productImage: [{id: String, imageUrl: String}],
    rating: Number,
    review: [
        {
        reviewId: Number|String,
        message: String,
        reviewImages: [
            {
                id: String,
                imageUrl: String
            }
        ],
        date: Date,
        isEdited: Boolean
        }
    ],
    isWishlisted: Boolean,
    price: Number,
    currencyCode: String,
    updatedDate: Date,
    tags: [{id: String}],
    isInStock: Boolean,
    availableStockCount: Number
})
const Product = mongoose.model('Products', productSchema);

export default Product;