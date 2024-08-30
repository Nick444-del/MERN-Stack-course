import mongoose from "mongoose";

const schema = mongoose.Schema;

const CategoriesSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    catetedAt: {
        type: Date,
        default: Date.now(),
    }
});

export default mongoose.model('categories', CategoriesSchema);