import multer from "multer";
import path from "path";
import fs from "fs";

import productModal from "../models/product.modal";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (fs.existsSync('./uploads')) {
            cb(null, './uploads');
        } else {
            fs.mkdirSync('./uploads');
            cb(null, './uploads');
        }
    },
    filename: function (req, file, cb) {
        const orgName = file.originalname;
        const fname = path.parse(orgName).name;
        const ext = path.parse(orgName).ext;
        const uniqueValue = Date.now();
        const filename = fname + '-' + uniqueValue + ext;
        cb(null, filename);
    }
})

const upload = multer({ storage: storage });

export const createProduct = async (req, res) => {
    const uploadDataWithFile = upload.fields([{name: 'thumbnail', maxCount: 1}, { name: 'images', maxCount: 8 }]);
    try {

        uploadDataWithFile(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    message: err.message,
                    success: false,
                });
            }

            let img = null;
            if (req.file) {
                img = req.file.filename;
            }

            if(req.files['images']){
                for(let i = 0; i < req.files['images'].length; i++){
                    const element = req.files['images'][i];
                    imgArr.push(element.filename);
                }
            }

            const { name, price, quantity, category, brand, shortdescription, description } = req.body;
            console.log(req.body);
            const created = await productModal.create({
                name: name,
                price: price,
                quantity: quantity,
                category: category,
                brand: brand,
                thumbnail: img,
                images: imgArr,
                shortdescription: shortdescription,
                description: description,
            });
            return res.status(201).json({
                data: created,
                message: "Product created successfully",
                success: true,
            });
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false,
        });
    }
}

export const getProducts = async (req, res) => {
    try {
        const productdata = await productModal.find().populate('category').populate('brand');
        productdata.map((thumbnail) => {
            if (thumbnail.thumbnail !== null) {
                thumbnail.thumbnail = "http://localhost:3000/uploads/" + thumbnail.thumbnail
            }
        })
        return res.status(200).json({
            data: productdata,
            message: "Product fetched successfully",
            success: true,
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false,
        });
    }
}

export const getProduct = async (req, res) => {
    try {
        const productId = req.params.product_Id;
        
        const productData = await productModal.findOne({ _id: productId }).populate('category').populate('brand');
        console.log(productData);
        if (productData.thumbnail !== null) {
            productData.thumbnail = "http://localhost:3000/uploads/" + productData.thumbnail
        }
        return res.status(200).json({
            data: productData,
            message: "Product retrieved successfully",
            success: true,
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const productId = req.params.product_Id;
        const { name, price, category, brand, shortdescription, description } = req.body;
        const updateProductData = await productModal.updateOne({ _id: productId }, { $set: { name: name, price: price, category: category, brand: brand, shortdescription: shortdescription, description: description } });
        if (updateProductData.modifiedCount > 0) {
            return res.status(200).json({
                message: 'Updated product data successfully',
                success: true,
            })
        }
        return res.status(400).json({
            message: 'Something went wrong',
            success: false,
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.product_Id;
        const deleteProductData = await productModal.deleteOne({ _id: productId });
        if (deleteProductData.deletedCount > 0) {
            return res.status(200).json({
                message: 'Deleted product successfully',
                success: true,
            })
        }
        return res.status(400).json({
            message: 'Something went wrong',
            success: false,
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}