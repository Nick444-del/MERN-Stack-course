import multer from 'multer';

import storage from '../utilities/storage';
import brandModel from '../models/brand.model';

const upload = multer({storage: storage})

export const addBrand = async (req, res) => {
    try{
        const uploadDataWithFile = upload.single('logo');
        uploadDataWithFile(req, res, async (err) => {
            if(err){
                return res.status(400).json({message:err.message});
            }
            let logo = null;
            if(req.file){
                logo = req.file.filename;
            }
            const { name } = req.body
            const created = await brandModel.create({
                name: name,
                logo: logo
            })

            return res.status(201).json({
                data: created,
                message: "Brand Created",
                success: true
            })
        })
    }catch(err){
        return res.status(500).json({message:err.message, success:false});
    }
}

export const getBrands = async (req, res) => {
    try{
        const brands = await brandModel.find();
        return res.status(200).json({
            data: brands,
            message: "Brands Fetched",
            success: true
        })
    }catch(err){
        return res.status(500).json({message:err.message, success:false});
    }
}