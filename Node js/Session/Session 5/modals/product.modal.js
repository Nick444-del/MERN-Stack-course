import mongoose from "mongoose";

const schema = mongoose.Schema;

const ProductSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    catetedAt: {
        type: Date,
        default: Date.now(),
    }
});

export default mongoose.model('products', ProductSchema);