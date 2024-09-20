import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    status:{
        type: Number,
        default: 1
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model("categories", categoriesSchema);