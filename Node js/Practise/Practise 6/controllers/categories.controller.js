import categoriesModel from "../models/categories.model";

export const addCategories = async (req, res) => {
    try{
        const {name, description} = req.body;
        const created = await categoriesModel.create({
            name: name,
            description: description
        })

        return res.status(201).json({
            data: created,
            message: "Category Created",
            success: true
        })
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

export const getCategories = async (req, res) => {
    try{
        const categorieData = await categoriesModel.find();
        return res.status(200).json({
            data: categorieData,
            message: "Categories Fetched",
            success: true
        })
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}