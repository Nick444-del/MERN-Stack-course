import mongoose from "mongoose";

import categoriesModel from "./categories.model";
import brandModel from "./brand.model";

const schema = mongoose.Schema;

const productSchema = new schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category: {
        type: schema.Types.ObjectId,
        ref: categoriesModel
    },
    brand: {
        type: schema.Types.ObjectId,
        ref: brandModel
    },
    thumbnail: {
        type: String,
        default: null
    },
    images: {
        type: Array,
        default: []
    },
    status: {
        type: Number,
        default: 1
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model("products", productSchema);