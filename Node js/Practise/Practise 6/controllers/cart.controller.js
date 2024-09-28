import productModel from "../models/product.model";
import cartModel from "../models/cart.model";
import userModel from "../models/user.model";

export const addToCart = async (req, res) => {
    try{
        const { productId, userId } = req.body;

        const product = await productModel.findOne({_id: productId});
        const userData = await userModel.findOne({_id: userId});
        console.log(product);
        console.log(userData);

        
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}