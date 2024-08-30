import mongoose, { Schema } from "mongoose";
import brandModel from "./brand.modal.js";
import categoryModel from "./categories.modal.js";


const schema = mongoose.Schema;

const ProductSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: categoryModel,
    },
    brand: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: brandModel,
    },
    thumbnail: {
        type: String,
        default: null,
    },
    images: {
        type: Array,
        default: [],
    },
    shortdescription: {
        type: String,
        default: null,
    },
    description: {
        type: String,
        default: null,
    },
    catetedAt: {
        type: Date,
        default: Date.now(),
    }
});

export default mongoose.model('products', ProductSchema);