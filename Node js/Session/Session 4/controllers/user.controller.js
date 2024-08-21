import userModal from "../modals/user.modal";

export const addUser = async (req, res) => {
    try{
        console.log("Data is being recievded");
        console.log(req.body);
        const {name, email, password, contact} = req.body;     // <== Getting data from request body

        const created = await userModal.create({     // <== This is a query for creating a new user
            name: name,
            email: email,
            password: password,
            contact: contact,
        });

        return res.status(201).json({      // <== If the user is created successfully, we will send this response
            data: created,
            message: "User created successfully",
            success: true,
        });
    }catch(err){
        return res.status(500).json({       // <== If the user is not created successfully, we will send this response
            message: err.message,
            success: false,
        })
    }
}

export const getUser = async (req, res) => {
    try{
        const userdata = await userModal.find();     // <== This is a query for fetching all users
        return res.status(200).json({
            data: userdata,
            message: "User fetched",
            success: true,
        });
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}