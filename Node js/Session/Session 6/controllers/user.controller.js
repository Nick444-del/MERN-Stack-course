import multer from 'multer';
import path from 'path';
import fs from 'fs';

import userModal from "../models/user.modal";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (fs.existsSync('./uploads')) {
            cb(null, './uploads');
        } else {
            fs.mkdirSync('./uploads');
            cb(null, './uploads');
        }
    },

    filename: function (req, file, cb) {
        const orgName = file.originalname;
        const fname = path.parse(orgName).name;
        const ext = path.parse(orgName).ext;
        const uniqueValue = Date.now();
        const filename = fname + '-' + uniqueValue + ext;
        cb(null, filename);
    }
})

const upload = multer({ storage: storage });

export const createUser = async (req, res) => {
    try {

        const uploadDataWithFile = upload.single("profile");

        uploadDataWithFile(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    message: err.message,
                    success: false,
                });
            }
            let img = null;
            if (req.file) {
                img = req.file.filename
            }

            const { name, email, password, contact } = req.body;
            const users = await userModal.create({
                name: name,
                email: email,
                password: password,
                contact: contact,
                image: img
            });
            return res.status(200).json({
                data: users,
                message: "User created successfully",
                success: true,
            })
        })

    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}

export const getUsers = async (req, res) => {
    try {
        const userdata = await userModal.find();
        userdata.map((image) => {
            if(image.image !== null)
                image.image = "http://localhost:3000/uploads/" + image.image
        })
        return res.status(200).json({
            data: userdata,
            message: "User fetched successfully",
            // filepath: "http://localhost:3000/uploads/",
            success: true,
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}

export const getUser = async (req, res) => {
    try {
        const userId = req.params.user_Id;

        const userData = await userModal.findOne({ _id: userId });
        if(userData.image !== null){
            userData.image = "http://localhost:3000/uploads/" + userData.image
        }
        return res.status(200).json({
            data: userData,
            message: "User fetched successfully",
            // filepath: "http://localhost:3000/uploads/",
            success: true,
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}

export const updateUser = async (req, res) => {
    try {
        const userId = req.params.user_Id;

        const { name, email, password, contact } = req.body;

        const updateUserData = await userModal.updateOne({ _id: userId }, { $set: { name: name, email: email, password: password, contact: contact } });

        if (updateUserData.modifiedCount > 0) {
            return res.status(200).json({
                message: 'Updated user successfully',
                success: true,
            })
        }

        return res.status(400).json({
            message: 'Something went wrong',
            success: false,
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.user_Id;

        const deleteUserData = await userModal.deleteOne({ _id: userId });

        if (deleteUserData.deletedCount > 0) {
            return res.status(200).json({
                message: 'Deleted user successfully',
                success: true,
            });
        }

        return res.status(400).json({
            message: 'Something went wrong',
            success: false,
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}