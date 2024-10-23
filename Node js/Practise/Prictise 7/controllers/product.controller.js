import fs from "fs";

import productModel from "../models/product.model.js";
import storage from "../utilities/storage.js";

const upload = multer({ storage: storage });

export const createProduct = async (req, res) => {
    try{
        const uploadDataWithFile = upload.single("thumbnail");

        uploadDataWithFile(req, res, async (err) => {
            if(err){
                return res.status(500).json({
                    message: err.message,
                    success: false
                })
            }

        })
    }catch(err){}
}