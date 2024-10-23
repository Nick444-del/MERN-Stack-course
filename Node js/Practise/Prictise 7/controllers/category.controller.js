import categoryModel from "../models/category.model.js";

export const addCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        const addCategory = await categoryModel.create({
            name: name,
            description: description
        })

        return res.status(201).json({
            data: addCategory,
            message: "Category added successfully",
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false
        })
    }
}

export const getAllCategory = async (req, res) => {
    try {
        const allCategory = await categoryModel.find();
        return res.status(200).json({
            data: allCategory,
            message: "Category fetched successfully",
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false
        })
    }
}