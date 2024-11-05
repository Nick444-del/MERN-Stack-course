import cartModel from "../models/cart.model";
import productsModel from "../models/products.model";

export const getCart = async (req, res) => {
    try {
        const userid = req.user._id;
        const cart = await cartModel.find({ user: userid });
        return res.status(200).json({
            data: cart,
            success: true
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false
        })
    }
}

export const addItem = async (req, res) => {
    try {
        const { productId } = req.body;
        const userId = req.user._id;
        const cartItem = await cartModel.findOne({ user: userId, product: productId });
        if (cartItem) {
            let quantity = cartItem.quantity + 1;
            if (quantity > 10) {
                return res.status(400).json({
                    message: "limit exceeded",
                    success: false
                })
            }
            await cartModel.updateOne({ _id: cartItem._id }, { $set: { quantity: quantity } });
            return res.status(200).json({
                message: "Quantity updated",
                success: true
            })
        }
        const addItem = new cartModel({
            product: productId,
            user: userId,
            quantity: 1
        });
        await addItem.save();
        return res.status(201).json({
            message: "Added to cart",
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false
        })
    }
}

export const updateQuantity = async (req, res) => {
    try {
        const itemId = req.params.item_id;
        const type = req.query.type // ?type=inc || ?type=desc
        const cartItem = await cartModel.findOne({ _id: itemId });
        let quantity = cartItem.quantity;
        if (type == 'inc') {
            quantity += 1;
        }
        if (type == 'desc') {
            quantity -= 1;
        }
        if (quantity > 10) {
            return res.status(400).json({
                message: "Limit exceeded",
                success: false
            })
        }
        if (quantity == 0) {
            const deleteItem = await cartModel.deleteOne({ _id: itemId });
            if (deleteItem.deletedCount > 0) {
                return res.status(200).json({
                    message: "Item removed from cart",
                    success: true
                })
            }
        }
        const updated = await cartModel.updateOne({ _id: itemId }, { $set: { quantity: quantity } });
        if (updated.modifiedCount > 0) {
            return res.status(200).json({
                message: "Quantity updated",
                success: true
            })
        }
        return res.status(400).json({
            message: "Something went wrong",
            success: false
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false
        })
    }
}

export const removeItem = async (req, res) => {
    try {
        const itemId = req.params.item_id
        const deleteItem = await cartModel.deleteOne({ _id: itemId });
        if (deleteItem.deletedCount > 0) {
            return res.status(200).json({
                message: "Item removed from cart",
                success: true
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false
        })
    }
}

