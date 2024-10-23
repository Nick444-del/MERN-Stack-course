import multer from "multer";
import fs from "fs";

import categoriesModel from "../models/categories.model";
import storage from "../utilities/storage";

const upload = multer({storage: storage});

export const createCategories = async(req, res) => {
    try{
        const uploadDataWithImage = upload.single("cimage");
        uploadDataWithImage(req, res, async(err) => {
            if(err){
                return res.status(400).json({
                    message: err.message,
                    success: false
                })
            }
            let img = null;
            if(req.file){
                img = req.file.filename;
            }
            console.log(img)
            const { cname, cdescription, ctype } = req.body;
            const addCategory = await categoriesModel.create({
                cname: cname,
                cdescription: cdescription,
                ctype: ctype,
                cimage: img
            })
            if(addCategory.cimage !== null){
                addCategory.cimage = `./upload/${addCategory.cimage}`;
            }
            return res.status(200).json({
                data: addCategory,
                message: "Category created successfully",
                success: true,
            })
        })
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

export const getAllCategories = async (req, res) => {
    try {
        const data = await categoriesModel.find();
        return res.status(200).json({
            data: data,
            message: "Categories fetched successfully",
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false
        })
    }
}

export const getCategorie = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await categoriesModel.findById({_id: id});
        return res.status(200).json({
            data: data,
            message: "Category fetched successfully",
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false
        })
    }
}

export const updateCategory = async (req, res) => {
    try {
        const updateCategoryWithImage = upload.single("cimage");
        updateCategoryWithImage(req, res, async (err) => {
            if(err){
                return res.status(400).json({
                    message: err.message,
                    success: false
                })
            }
            const id = req.params.id;
            const cdata = await categoriesModel.findById({_id: id});
            let img = cdata.cimage;
            if(req.file){
                img = req.file.filename;
            }else{
                img = cdata.cimage;
            }
            const updateCategory = await categoriesModel.findByIdAndUpdate({_id: id}, {
                cname: req.body.cname,
                cdescription: req.body.cdescription,
                ctype: req.body.ctype,
                cimage: img
            })
            if(updateCategory.cimage !== null){
                updateCategory.cimage = `./upload/${updateCategory.cimage}`;
            }
            return res.status(200).json({
                data: updateCategory,
                message: "Category updated successfully",
                success: true
            })
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false
        })
    }
}

export const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const imgData = await categoriesModel.findById({_id: id});
        let img = imgData.cimage;
        console.log(img);
        if(img){
            img = "./uploads/" + img;
            fs.unlinkSync(`${img}`);
        }
        const categoiresData = await categoriesModel.deleteOne({_id: id});
        return res.status(200).json({
            data: categoiresData,
            message: "Category deleted successfully",
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false
        })
    }
}