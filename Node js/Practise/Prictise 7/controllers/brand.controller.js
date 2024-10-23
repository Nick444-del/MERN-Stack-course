import multer from "multer";
import fs from "fs";

import brandModel from "../models/brand.model";
import storage from "../utilities/storage";

const upload = multer({ storage: storage });

export const createBrand = async (req, res) => {
    try{
        const uploadDataWithFile = upload.single("logo");
        uploadDataWithFile(req, res, async(err) => {
            if(err){
                return res.status(500).json({
                    message: err.message,
                    success: false
                })
            }
            let img = null;
            if(req.file){
                img = req.file.filename;
            }
            const { name } = req.body;
            const addBrand = await brandModel.create({
                name: name,
                logo: img
            })
            if(addBrand.logo !== null){
                addBrand.logo = "./uploads/" + addBrand.logo
            }
            return res.status(201).json({
                data: addBrand,
                message: "Brand added successfully",
                success: true
            })
        })
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

export const getAllBrand = async (req, res) => {
    try {
        const allBrand = await brandModel.find();
        if(allBrand.profile !== null){
            allBrand.profile = "./uploads/" + allBrand.profile
        }
        return res.status(200).json({
            data: allBrand,
            message: "All brands fetched successfully",
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false
        })
    }
}