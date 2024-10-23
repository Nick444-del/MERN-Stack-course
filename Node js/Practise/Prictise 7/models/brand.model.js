import mongoose from "mongoose";

const schema = mongoose.Schema;

const brandSchema = new schema({
    name: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model("Brand", brandSchema)