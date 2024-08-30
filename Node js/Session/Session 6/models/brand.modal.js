import mongoose from "mongoose";

const schema = mongoose.Schema;

const BrandScema = new schema({
    name: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        default: null,
    }
});

export default mongoose.model('brands', BrandScema);