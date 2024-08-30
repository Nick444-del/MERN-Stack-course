import userModal from "../models/user.modal";

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

export const getUsers = async (req, res) => {
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

export const getUser = async (req, res) => {
    try{
        const userId = req.params.user_Id;

        const userData = await userModal.findOne({_id:userId});
        return res.status(200).json({
            data: userData,
            message: "User fetched successfully",
            success: true,
        })
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}

export const updateUser = async (req, res) => {
    try{
        const userId = req.params.user_Id;

        const {name, email, password, contact} = req.body;

        const updateUserData = await userModal.updateOne({_id:userId}, {$set:{name:name, email:email, password:password, contact:contact}});

        if(updateUserData.modifiedCount > 0){
            return res.status(200).json({
                message: 'Updated user successfully',
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

export const deleteUser = async (req, res) => {
    try{
        const userId = req.params.user_Id;

        const deleteUserData = await userModal.deleteOne({_id: userId});

        if(deleteUserData.deletedCount > 0){
            return res.status(200).json({
                message: 'Deleted user successfully',
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
        })
    }
}