import mongoose from 'mongoose';

const orderCollection = 'orders';
const orderSchema = new mongoose.Schema({
    number: Number,
    business: {
        type: mongoose.Schematypes.ObjectId,
        ref: 'business'
    },
    user: {
        type: mongoose.Schematypes.ObjectId,
        ref: 'users'
    },
    status: String,
    products: [],
    totalPrice: Number,

});

const orderModel = mongoose.model(orderCollection, orderSchema);
export default orderModel;