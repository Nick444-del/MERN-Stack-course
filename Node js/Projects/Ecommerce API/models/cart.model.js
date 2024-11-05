import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        required:true
    },
    product:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"product"
    },
    quantity:{
        type:Number,
        default:1
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

export default mongoose.model('cart',CartSchema)