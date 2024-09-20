import mongoose from "mongoose";

const schema = mongoose.Schema;

const brandSchema = new schema({
    name:{
        type: String,
        required: true
    },
    logo: {
        type: String,
        default: null,
    }
})

export default mongoose.model("brand", brandSchema);