import mongoose from "mongoose";
import brandModal from "./brand.modal.js";
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
        type: schema.Types.ObjectId,
        required: true,
        ref: categoryModel,
    },
    brand: {
        type: schema.Types.ObjectId,
        required: true,
        ref: brandModal,
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