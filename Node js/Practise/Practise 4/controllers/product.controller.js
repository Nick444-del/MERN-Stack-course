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

export const getProduct = async (req, res) => {
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