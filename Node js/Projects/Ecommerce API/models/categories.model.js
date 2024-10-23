import mongoose from "mongoose";

const schema = mongoose.Schema;

const CategorySchema = new schema({
    cname: {
        type: String,
        required: true,
    },
    cdescription: {
        type: String,
        required: true,
    },
    ctype: {
        type: String,
        required: true,
    },
    cimage: {
        type: String,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model("Category", CategorySchema);