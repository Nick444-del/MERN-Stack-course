import mongoose from "mongoose";

const schema = mongoose.Schema;

const UserSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        default: null
    },
    image: {
        type: String,
        default: null
    },
    status: {
        type: Number,
        default: 1
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('users', UserSchema);
