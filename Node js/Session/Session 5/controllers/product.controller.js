import productModal from "../modals/product.modal";

export const createProduct = async (req, res) => {
    try{
        const { name, description, price } = req.body;
        const product = await productModal.create({
            name: name,
            description: description,
            price: price,
        });
        return res.status(200).json({
            data: product,
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
        const productdata = await productModal.find();
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
        
        const productData = await productModal.findOne({_id: productId});
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
        const { name, description, price } = req.body;
        const updateProductData = await productModal.updateOne({_id: productId}, {$set: {name:name, description: description, price: price}});
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