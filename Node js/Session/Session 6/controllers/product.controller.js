import productModal from "../models/product.modal";

export const createProduct = async (req, res) => {
    try{
        const { name, price, quantity, category, brand, shortdescription, description } = req.body;
        const created = await productModal.create({
            name: name,
            price: price,
            quantity: quantity,
            category: category,
            brand: brand,
            shortdescription: shortdescription,
            description: description,
        });
        return res.status(201).json({
            data: created,
            message: "Product created successfully",
            success: true,
        });
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false,
        });
    }
}

export const getProducts = async (req, res) => {
    try{
        const productdata = await productModal.find().populate('category').populate('brand');
        return res.status(200).json({
            data: productdata,
            message: "Product fetched successfully",
            success: true,
        });
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false,
        });
    }
}

export const getProduct = async (req, res) => {
    try{
        const productId = req.params.product_Id;
        
        const productData = await productModal.findOne({_id: productId}).populate('category');
        return res.status(200).json({
            data: productData,
            message: "Product retrieved successfully",
            success: true,
        })
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}

export const updateProduct = async (req, res) => {
    try{
        const productId = req.params.product_Id;
        const { name, price, category, brand, shortdescription, description } = req.body;
        const updateProductData = await productModal.updateOne({_id: productId}, {$set: {name:name, price: price, category: category, brand: brand, shortdescription: shortdescription, description: description}});
        if(updateProductData.modifiedCount > 0){
            return res.status(200).json({
                message: 'Updated product data successfully',
                success: true,
            })
        }
        return res.status(400).json({
            message: 'Something went wrong',
            success: false,
        })
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}

export const deleteProduct = async (req, res) => {
    try{
        const productId = req.params.product_Id;
        const deleteProductData = await productModal.deleteOne({_id: productId});
        if(deleteProductData.deletedCount > 0){
            return res.status(200).json({
                message: 'Deleted product successfully',
                success: true,
            })
        }
        return res.status(400).json({
            message: 'Something went wrong',
            success: false,
        })
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}