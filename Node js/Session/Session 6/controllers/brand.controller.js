import multer from "multer";
import path from "path";
import fs from "fs";

import brandModal from "../models/brand.modal";

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
});

const upload = multer({ storage: storage });

export const addBrand = async (req, res) => {
    try {

        const uploadDataWithFile = upload.single("logo");

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

            const { name } = req.body;

            const created = await brandModal.create({
                name: name,
                logo: img
            });
            return res.status(200).json({
                data: created,
                message: "Brand created successfully",
                success: true
            })
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        });
    }
}

export const getBrands = async (req, res) => {
    try {
        const brands = await brandModal.find();
        brands.map((logo) => {
            if(logo.logo !== null)
                logo.logo = "http://localhost:3000/uploads/" + logo.logo
        })
        return res.status(200).json({
            data: brands,
            message: "Brands fetched successfully",
            success: true
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        });
    }
}

export const getBrand = async (req, res) => {
    try {
        const brandId = req.params.brand_Id;
        const brandData = await brandModal.findOne({ _id: brandId });
        if(brandData.logo !== null){
            brandData.logo = "http://localhost:3000/uploads/" + brandData.logo
        }
        return res.status(200).json({
            data: brandData,
            message: "Brand fetched successfully",
            success: true,
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        });
    }
}

export const deleteBrand = async (req, res) => {
    try {
        const brandId = req.params.brand_Id;
        const deleteBrandData = await brandModal.deleteOne({ _id: brandId });
        if (deleteBrandData.deletedCount > 0) {
            return res.status(200).json({
                message: "Brand deleted successfully",
                success: true
            })
        }
        return res.status(400).json({
            message: "Something went wrong",
            success: false
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        });
    }
}

export const updateBrand = async (req, res) => {
    try {
        const brandId = req.params.brand_Id;
        const { name, logo } = req.body;
        const updateBrandData = await brandModal.updateOne({ _id: brandId }, { $set: { name: name, logo: logo } });
        if (updateBrandData.modifiedCount > 0) {
            return res.status(200).json({
                message: "Brand updated successfully",
                success: true,
            })
        }
        return res.status(400).json({
            message: "Something went wrong",
            success: false
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        });
    }
}