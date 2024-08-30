import categoryModal from "../models/categories.modal";

export const createCategories = async (req, res) => {
    try{
        const { name, description } = req.body;
        const categories = await categoryModal.create({
            name: name,
            description: description,
        });
        return res.status(200).json({
            data: categories,
            message: "Categories created successfully",
            success: true,
        });
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false,
        });
    }
}

export const getCategories = async (req, res) => {
    try{
        const categoriesdata = await categoryModal.find();
        return res.status(200).json({
            data: categoriesdata,
            message: "Categories fetched successfully",
            success: true,
        });
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false,
        });
    }
}

export const getCategory = async (req, res) => {
    try{
        const catId = req.params.cat_Id;

        const categoriedata = await categoryModal.findOne({_id: catId});

        return res.status(200).json({
            data: categoriedata,
            message: "Category fetched successfully",
            success: true,
        });
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}

export const updateCategory = async (req, res) => {
    try{
        const catId = req.params.cat_Id;
        const {name, description} = req.body;
        const updateCategory = await categoryModal.updateOne({_id:catId}, {$set:{name:name, description:description}});

        if(updateCategory.modifiedCount > 0){
            return res.status(200).json({
                message: 'Updated category successfully',
                success: true,
            });
        }

        return res.status(400).json({
            message: 'Something went wrong',
            success: false,
        })
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false,
        });
    }
}

export const deleteCategory = async (req, res) => {
    try{
        const catId = req.params.cat_Id;
        const deleteCategory = await categoryModal.deleteOne({_id: catId});
        if(deleteCategory.deletedCount > 0){
            return res.status(200).json({
                message: 'Category deleted successfully',
                success: true,
            });
        }
        return res.status(400).json({
            message: 'Something went wrong',
            success: false,
        })
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false,
        });
    }
}