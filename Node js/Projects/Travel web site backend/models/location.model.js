import mongoose from "mongoose";

const schema = mongoose.Schema;

const locationSchema = new schema({
    location_name: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('location', locationSchema)