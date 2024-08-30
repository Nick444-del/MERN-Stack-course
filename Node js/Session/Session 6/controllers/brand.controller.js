import brandModal from "../models/brand.modal";

export const addBrand = async (req, res) => {
    try{
        const { name, logo } = req.body;

        const created = await brandModal.create({
            name: name,
            logo: logo
        });
        return res.status(200).json({
            data: created,
            message: "Brand created successfully",
            success: true
        })
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false
        });
    }
}

export const getBrands = async (req, res) => {
    try{
        const brands = await brandModal.find();
        return res.status(200).json({
            data: brands,
            message: "Brands fetched successfully",
            success: true
        })
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false
        });
    }
}

export const getBrand = async (req, res) => {
    try{
        const brandId = req.params.brand_Id;

        const brandData = await brandModal.findOne({_id: brandId});
        return res.status(200).json({
            data: brandData,
            message: "Brand fetched successfully",
            success: true,
        })
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false
        });
    }
}

export const deleteBrand = async (req, res) => {
    try{
        const brandId = req.params.brand_Id;
        const deleteBrandData = await brandModal.deleteOne({_id: brandId});
        if(deleteBrandData.deletedCount > 0){
            return res.status(200).json({
                message: "Brand deleted successfully",
                success: true
            })
        }
        return res.status(400).json({
            message: "Something went wrong",
            success: false
        })
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false
        });
    }
}

export const updateBrand = async (req, res) => {
    try{
        const brandId = req.params.brand_Id;
        const { name, logo } = req.body;
        const updateBrandData = await brandModal.updateOne({_id: brandId}, {$set: {name: name, logo: logo}});
        if(updateBrandData.modifiedCount > 0){
            return res.status(200).json({
                message: "Brand updated successfully",
                success: true,
            })
        }
        return res.status(400).json({
            message: "Something went wrong",
            success: false
        })
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false
        });
    }
}