import mongoose, { Schema } from "mongoose";

const cartSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "product"
    },
    quantity: {
        type: Number,
        default: 0,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model("cart", cartSchema);