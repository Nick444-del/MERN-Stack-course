import mongoose from "mongoose";

const schema = mongoose.Schema;

const UserSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

export default mongoose.modelNames('categories', UserSchema)