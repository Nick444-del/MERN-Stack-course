import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


import userModel from "../models/user.model";

export const signUp = async (req, res) => {
    try {
        const { name, email, password, contact } = req.body;
        const existUser = await userModel.findOne({ email: email });
        if(existUser){
            return res.status(400).json({
                message: "User already exists",
                success: false
            })
        }
        const hashPassword = bcrypt.hashSync(password, 12);
        const saveUser = await userModel.create({
            username: name,
            email: email,
            password: hashPassword,
            contact: contact
        })
        return res.status(201).json({
            data: saveUser,
            message: "User created successfully/Signed Up",
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false
        })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const matchEmail = await userModel.findOne({ email: email });
        if(!matchEmail){
            return res.status(404).json({
                message: "User not found",
                success: false
            })
        }
        const comparePass = bcrypt.compareSync(password, matchEmail.password)
        if(!comparePass){
            return res.status(400).json({
                message: "Invalid credentials",
                success: false
            })
        }
        const token = jwt.sign({
            data: { id: matchEmail._id }
        }, process.env.JWT_SECRET, { expiresIn: "1h" })
        const getUserData = await userModel.findOne({
            email: email
        }).select("-password")
        return res.status(200).json({
            data: getUserData,
            token: token,
            message: "Login successful",
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false
        })
    }
}
