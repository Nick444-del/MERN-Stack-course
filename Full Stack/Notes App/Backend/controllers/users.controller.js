import jwt from "jsonwebtoken";

import usersModel from "../models/users.model";

export const getUsers = async (req, res) => {
    try {
        const users = await usersModel.find();
        return res.status(200).json({
            data: users,
            message: "Users fetched successfully",
            success: true
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

export const createUser = async (req, res) => {
    try {
        const { fullName, email, password, userId } = req.body;
        const newUser = await usersModel.create({
            fullName: fullName,
            email: email,
            password: password
        });
        return res.status(201).json({
            data: newUser,
            message: "User created successfully",
            success: true
        })
    } catch(err) {
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

export const login = async (req, res) => {
    try{
        const { email, password } = req.body;

        const existUser = await usersModel.findOne({email: email});
        if(!existUser){
            return res.status(400).json({
                message: "User does not exist",
                success: false
            })
        }

        const token = jwt.sign({
            data: {id: existUser._id}
        }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "36000m"})

        const userData = await usersModel.findOne({email: email});

        return res.status(200).json({
            data: userData,
            token: token,
            message: "User logged in successfully",
            success: true
        })
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

export const register =  async (req, res) => {
    try{
        const { fullName, email, password } = req.body;

        const existUser = await usersModel.findOne({email: email});

        if(existUser){
            return res.status(400).json({
                message: "User already exist",
                success: false
            })
        }

        const userData = await usersModel.create({
            fullName: fullName,
            email: email,
            password: password
        })

        const accessTocken = jwt.sign({
            userData
        }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "30m"
        })

        return res.status(201).json({
            data: userData,
            accessTocken,
            message: "User created successfully",
            success: true
        })

    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

export const getUser = async (req, res) => {
    try{
        const id = req.user.id;
        const user = await usersModel.findOne({_id: id});
        return res.status(200).json({
            data: user,
            message: "User fetched successfully",
            success: true
        })
        
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const data = await usersModel.deleteOne({_id: id});
        return res.status(200).json({
            data: data,
            message: "User deleted successfully",
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false
        })
    }
}