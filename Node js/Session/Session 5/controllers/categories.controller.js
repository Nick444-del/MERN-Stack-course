import categoryModal from '../modals/categories.modals';

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