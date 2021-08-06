import express from 'express';
import mongoose from 'mongoose';

// routes
import userRoute from './routes/user_route.js';
import productRoute from './routes/product_route.js';
import cartRoute from './routes/cart_route.js';

// connecting to database
const mongoDB = 'mongodb://localhost:27017/ecommerce';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', () => {
    console.log('connected successfully');
    app.listen(3000);
}).on('error', (error) => {
    console.log('connection error', error);
});

// express handling routing etc
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/auth/', userRoute);
app.use('/auth/product/', productRoute);
app.use('/auth/cart', cartRoute);
