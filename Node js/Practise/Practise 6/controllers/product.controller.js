import multer from "multer";
import fs from "fs";

import productModel from "../models/product.model";
import storage from "../utilities/storage";

const upload = multer({ storage: storage })

export const addProduct = async (req, res) => {
    const uploadDataWithFile = upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: 'images', maxCount: 8 }]);
    try {
        uploadDataWithFile(req, res, async(err)=> {
            if(err){
                return res.status(400).json({message:err.message});
            }

            let img = null;
            let imgArr = [];

            if(req.files['thumbnail']){
                img = req.files['thumbnail'][0].filename;
            }

            if(req.files['images']){
                for(let i = 0; i < req.files['images'].length; i++){
                    const element = req.files['images'][i];
                    imgArr.push(element.filename);
                }
            }

            console.log(img, imgArr);

            const { name, price, quantity, description, categories, brand } = req.body;
            const created = await productModel.create({
                name: name,
                price: price,
                quantity: quantity,
                description: description,
                categories: categories,
                brand: brand,
                thumbnail: img,
                images: imgArr
            })
            return res.status(200).json({
                data: created,
                message: "Product Data Created",
                success: true
            })
        });
    } catch (err) { 
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

export const getProducts = async (req, res) => {
    try{
        console.log(req.query);
        const { page, limit, search, sort } = req.query;

        const skipno = (page - 1) * limit;

        let filter = {};
        if(search){
            const rex = (pattern) => new RegExp(`.*${pattern}.*`);
            const searchRgx = rgx(search);
            filter = {
                $or: [
                    { title: { $regex: searchRgx, $options: "i" } },
                    { description: { $regex: searchRgx, $options: "i" } },
                ]
            }
        }

        let sortData = { _id: 1 }

        if(sort == "latest"){
            sortData = {_id: -1};
        }

        if(sort == 'htol'){
            sortData = {price: -1};
        }

        if(sort == 'ltoh'){
            sortData = {price: 1};
        }

        const productData = await productModel.find(filter).populate("category").populate("brand").limit(limit).skip(skipno).sort(sortData);

        return res.status(200).json({
            data: productData,
            message: "Product Data Fetched",
            success: true
        })

    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

export const deleteProduct = async (req, res) => {
    try{
        const productId = req.params.product_id;
        const productData = await productModel.findOne({_id: productId});
        if(!productData){
            return res.status(404).json({
                message: 'Product not found',
                success: false
            })
        }
        const thumbnail = productData.thumbnail
        console.log(thumbnail);
        const images = productData.images
        console.log(images);

        if(fs.existsSync(`./uploads/${thumbnail}`)){
            fs.unlinkSync(`./uploads/${thumbnail}`);
        }

        let removeImg = null;
        for(let i = 0; i < images.length; i++){
            removeImg = images.pop();
            if(fs.existsSync(`./uploads/${removeImg}`)){
                fs.unlinkSync(`./uploads/${removeImg}`);
                console.log(`Image Removed ${removeImg}`);
            }
        }
        // console.log(removeImg);

        const deleteProductData = await productModel.deleteOne({_id: productId});
        return res.status(200).json({
            data: deleteProductData,
            message: 'Product deleted successfully.',
            success: true
        })
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

export const updateProduct = async (req, res) => {
    try{
        const productId = req.params.product_id;
        const productData = await productModel.findOne({_id: productId});
        if(!productData){
            return res.status(404).json({
                message: 'Product not found',
                success: false
            })
        }

        const uploadDataWithFile = upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: 'images', maxCount: 8 }]);
        uploadDataWithFile(req, res, async(err)=> {
            if(err){
                return res.status(400).json({message:err.message});
            }

            let img = productData.thumbnail;
            let imgArr = productData.images;

            if(req.files['thumbnail']){
                img = req.files['thumbnail'].filename;
            }

            if(req.files['images']){
                for(let i = 0; i < req.files['images'].length; i++){
                    const element = req.files['images'][i];
                    imgArr.push(element.filename);
                }
            }

            const { name, price, quantity, description, categories, brand } = req.body;
            const updateProductData = await productModel.updateOne({
                name: name,
                price: price,
                quantity: quantity,
                description: description,
                categories: categories,
                brand: brand,
                thumbnail: img,
                images: imgArr
            })

            return res.status(200).json({
                data: updateProductData,
                message: 'Product updated successfully.',
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

export const getProductAggr = async (req, res) => {
    try{
        const productData = await productModel.aggregate([
            {
                $lookup: {
                    from: "categories",
                    localField: "categories",
                    foreignField: "_id",
                    as: "categories"
                },
                $lookup: {
                    from: "brand",
                    localField: "brand",
                    foreignField: "_id",
                    as: "brand"
                },
            },
            {
                $unwind: "$categories",
            },
            {
                $sort: { "_id": -1 }
            },
        ])

        return res.status(200).json({
            data: productData,
            message: "Product Data Fetched",
            success: true
        })
    }catch(err){
        return res.status(500).json({message: err.message, success: false});
    }
}