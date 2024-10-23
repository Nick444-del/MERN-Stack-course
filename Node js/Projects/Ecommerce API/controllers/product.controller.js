import multer from "multer";
import fs from 'fs';

import productsModel from '../models/products.model';
import storage from '../utilities/storage';

const upload = multer({ storage: storage });

export const createProduct = async (req, res) => {
    try {
        const uploadDataWithImage = upload.fields([
            { name: 'pthumbnail', maxCount: 1 },
            { name: 'pimages', maxCount: 8 }
        ]);
        uploadDataWithImage(req, res, async (err) => {
            if (err) return res.status(400).json({ message: err.message, success: false });
            let img = null;
            let imgArr = [];
            if (req.files['pthumbnail'][0]) {
                img = req.files['pthumbnail'][0].filename;
            }

            if (req.files['pimages']) {
                for (let i = 0; i < req.files['pimages'].length; i++) {
                    const element = req.files['pimages'][i];
                    imgArr.push(element.filename);
                }
            }

            const { ptitle, pprice, pcategory, pdescription, psize, pquantity } = req.body;

            const addProduct = await productsModel.create({
                ptitle: ptitle,
                pprice: pprice,
                pcategory: pcategory,
                pdescription: pdescription,
                psize: psize,
                pquantity: pquantity,
                pthumbnail: img,
                pimages: imgArr
            });

            return res.status(201).json({
                data: addProduct,
                message: "Product created successfully",
                success: true
            })
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

export const getAllProduct = async (req, res) => {
    try{
        const data = await productsModel.find();
        return res.status(200).json({
            data: data,
            message: "Products fetched successfully",
            success: true
        })
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

export const deletProduct = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await productsModel.findByIdAndDelete({_id: id});
        let img = data.pthumbnail;
        if(img){
            img = "./uploads/" + img;
            fs.unlinkSync(`${img}`);
        }

        let imgArr = data.pimages;
        for(let i = 0; i < imgArr.length; i++){
            imgArr[i] = "./uploads/" + imgArr[i];
            fs.unlinkSync(`${imgArr[i]}`);
        }
        return res.status(200).json({
            data: data,
            message: "Product deleted successfully",
            success: true
        })
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

export const getProduct = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await productsModel.findById({_id: id});
        return res.status(200).json({
            data: data,
            message: "Product fetched successfully",
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
        const uploadDataWithImage = upload.fields([{ name: 'pthumbnail', maxCount: 1 }, { name: 'pimages', maxCount: 8 }]);
        uploadDataWithImage(req, res, async(err) =>{
            if(err){
                return res.status(400).json({
                    message: err.message,
                    success: false
                })
            }
            const id = req.params.id;
            let data = await productsModel.findById({_id: req.params.id});
            let img = `${data.pthumbnail}`;
            let imgArr = `${data.pimages}`;
            if(req.files['pthumbnail']){
                fs.unlinkSync(`./uploads/${img}`);
                img = req.files['pthumbnail'].filename;
            }
            if(req.files['pimages']){
                for(let i = 0; i < req.files['pimages'].length; i++){
                    fs.unlinkSync(`./uploads/${imgArr}`);
                    const element = req.files['pimages'][i];
                    imgArr.push(element.filename);
                }
            }
            const { ptitle, pprice, pcategory, pdescription, pquantity } = req.body;
            const updateProduct = await productsModel.findByIdAndUpdate({_id: id},{
                ptitle: ptitle,
                pprice: pprice,
                pcategory: pcategory,
                pdescription: pdescription,
                pquantity: pquantity,
                pthumbnail: img,
                pimages: imgArr
            })

            return res.status(200).json({
                data: updateProduct,
                message: "Product updated successfully",
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