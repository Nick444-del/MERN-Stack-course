import mongoose from "mongoose";

import categoriesModel from "./categories.model";

const schema = mongoose.Schema;

const ProductSchema = new schema({
    ptitle: {
        type: String,
        required: true
    },
    pprice: {
        type: Number,
        required: true
    },
    pcategory: {
        type: schema.Types.ObjectId,
        required: true,
        ref: categoriesModel,
    },
    pdescription: {
        type: String,
        required: true
    },
    psize: {
        type: Array,
        required: true
    },
    pquantity: {
        type: Number,
        required: true
    },
    pthumbnail: {
        type: String,
        default: null
    },
    pimages: {
        type: Array,
        default: []
    }
})

export default mongoose.model("Product", ProductSchema);