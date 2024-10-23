import multer from "multer";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import fs from "fs";

import usersModel from "../models/users.model";
import storage from "../utilities/storage";

const upload = multer({ storage: storage });

export const signUp = async (req, res) => {
    try {
        const uploadFile = upload.single("profile");
        uploadFile(req, res, async (err) => {
            const { name, email, password, contact } = req.body;

            const existUser = await usersModel.findOne({ email: email });

            if (existUser) {
                return res.status(400).json({
                    message: "User already exist",
                    success: false
                });
            }

            let img = "https://icon-library.com/images/user-icon-jpg/user-icon-jpg-7.jpg";
            if (req.file) {
                img = req.file.filename;
            }

            const hashPassword = bcrypt.hashSync(password, 12);

            if (err) {
                return res.status(400).json({
                    message: err.message,
                    success: false
                })
            }

            const saveUserData = await usersModel.create({
                name: name,
                email: email,
                password: hashPassword,
                contact: contact,
                profile: img
            });

            if (saveUserData.profile !== null && saveUserData.profile !== process.env.DEFAULT_USER_IMG) {
                saveUserData.profile = "./uploads/" + saveUserData.profile
            }

            return res.status(200).json({
                data: saveUserData,
                message: "User created successfully",
                success: true
            })

        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existUser = await usersModel.findOne({ email: email });
        if (!existUser) {
            return res.status(400).json({
                message: "User does not exist",
                success: false
            });
        }

        const checkPassword = bcrypt.compareSync(password, existUser.password);
        if (!checkPassword) {
            return res.status(400).json({
                message: "Incorrect password",
                success: false
            });
        }

        const token = jwt.sign({
            data: { id: existUser._id }
        }, process.env.JWT_SECRET, { expiresIn: "1h" });

        const getUserData = await usersModel.findOne({
            email: email
        }).select("-password");

        console.log(getUserData);
        if (getUserData.profile !== null && getUserData.profile !== process.env.DEFAULT_USER_IMG) {
            getUserData.profile = "./uploads/" + getUserData.profile
        }

        return res.status(200).json({
            data: getUserData,
            token,
            message: "Login successfully",
            success: true
        })

    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

export const forgetPassword = async (req, res) => {
    try {
        const email = req.query.email;
        console.log(email);
        const { password } = req.body;

        const existUser = await usersModel.findOne({ email: email });
        if (!existUser) {
            return res.status(400).json({
                message: "User does not exist",
                success: false
            });
        }

        const hashPassword = bcrypt.hashSync(password, 12);

        const changeForgottenPassword = await usersModel.updateOne({
            password: hashPassword
        })

        return res.status(200).json({
            data: changeForgottenPassword,
            message: "Password changed successfully",
            success: true
        })

    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

export const changePassword = async (req, res) => {
    try {
        const { newpassword } = req.body
        const id = req.user.id;
        console.log(id);
        const hashPassword = bcrypt.hashSync(newpassword, 12);
        const updatePassword = await usersModel.updateOne({ _id: id }, { password: hashPassword });

        return res.status(201).json({
            data: updatePassword,
            message: "Password changed successfully",
            success: true
        })

    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const id = req.user.id;
        console.log(id);
        const existUser = await usersModel.findOne({ _id: id });
        if (!existUser) {
            return res.status(400).json({
                message: "User does not exist",
                success: false
            });
        }
        if (existUser.profile !== null) {
            fs.unlinkSync(`./uploads/${existUser.profile}`);
        }
        const deleteUser = await usersModel.deleteOne({ _id: id });
        return res.status(200).json({
            data: deleteUser,
            message: "User deleted successfully",
            success: true
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

export const updateUser = async (req, res) => {
    try {
        const updateDataWithFile = upload.single("profile");
        updateDataWithFile(req, res, async (err) => {
            if(err){
                return res.status(500).json({
                    message: err.message,
                    success: false
                })
            }
            const id = req.user.id;
            const existUser = await usersModel.findOne({ _id: id });
            if (!existUser) {
                return res.status(400).json({
                    message: "User does not exist",
                    success: false
                });
            }
            const { name, email, contact } = req.body;
            const updateUserData = await usersModel.updateOne({ _id: id }, { name: name, email: email, contact: contact, profile: req.file ? req.file.filename : existUser.profile });
            return res.status(201).json({
                data: updateUserData,
                message: "User updated successfully",
                success: true
            })
        })
    } catch (err) { }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await usersModel.find();
        console.log(users);
        if(users.profile !== null && users.profile !== process.env.DEFAULT_USER_IMG){
            users.profile = "./uploads/" + users.profile
        }
        return res.status(200).json({
            data: users,
            message: "All users fetched successfully",
            success: true
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}