import categoryModal from "../modals/category.modal";

export const addCategory = async (req, res) => {
    try{
        console.log("Data is being recievded");
        console.log(req.body);
        const {name, description} = req.body;     // <== Getting data from request body
        const created = await categoryModal.create({
            name: name,
            description: description,
        });
        return res.status(201).json({
            data: created,
            message: "Category created successfully",
            success: true,
        });
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}

export const getCategory = async (req, res) => {
    try{
        const categorydata = await categoryModal.find();
        return res.status(200).json({
            data: categorydata,
            message: "Category fetched",
            success: true,
        })
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}