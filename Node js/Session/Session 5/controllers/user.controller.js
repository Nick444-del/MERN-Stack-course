import userModal from "../modals/user.modal";

export const createUser = async (req, res) => {
    try{
        const {name, email, password, contact} = req.body;
        const users = await userModal.create({
            name: name,
            email: email,
            password: password,
            contact: contact
        });
        return res.status(200).json({
            data: users,
            message: "User created successfully",
            success: true,
        })
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}

export const getUser = async (req, res) => {
    try{
        const userdata = await userModal.find();
        return res.status(200).json({
            data: userdata,
            message: "User fetched successfully",
            success: true,
        });
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}