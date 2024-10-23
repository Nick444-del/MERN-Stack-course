import multer from "multer";
import bcrypt from "bcrypt";

import userModel from "../models/user.model.js";
import storage from "../utilities/storage.js";

const upload = multer({ storage: storage });

export const addUser = async (req, res) => {
    try {
        const uploadDataWithFile = upload.single("image");
        uploadDataWithFile(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ message: err.message });
            }
            console.log(req.file, req.files)
            let img = null;
            if (req.file) {
                img = req.file.filename;
            }
            const { name, email, password, contact } = req.body;
            const created = await userModel.create({
                name: name,
                email: email,
                password: password,
                contact: contact,
                image: img
            })
            return res.status(200).json({
                data: created,
                message: "User Data Created",
                success: true
            })
        })
    } catch (err) {
        return res.status(400).json({ message: err.message, success: false });
    }
}

// Auth

export const signUp = async (req, res) => {
    try {
        const uploadDataWithFile = upload.single("image");
        uploadDataWithFile(req, res, async (err) => {
            const { name, email, password, contact } = req.body;
            const existUser = await userModel.findOne({ email: email, name: name });
            if (existUser) {
                return res.status(400).json({ message: "User Already Exist", success: false });
            }
            const hashPassword = bcrypt.hashSync(password, 12);
            if (err) {
                return res.status(400).json({ message: err.message, success: false });
            }

            let img = null;
            if (req.file) {
                img = req.file.filename;
            }
            const saveuser = await userModel.create({
                name: name,
                email: email,
                password: hashPassword,
                contact: contact,
                image: img
            })
            console.log(hashPassword);

            return res.status(201).json({
                data: saveuser,
                message: "Signup successful",
                success: true
            })
        })

    } catch (err) {
        return res.status(500).json({ message: err.message, success: false });
    }
}

export const login = async(req, res) => {
    try{
        const {email, password} = req.body;
        const existUser = await userModel.findOne({email:email});
        if(!existUser){
            return res.status(400).json({message:"User Not Found", success:false});
        }
        const match = await bcrypt.compare(password, existUser.password);
        if(!match){
            return res.status(400).json({message:"Invalid Credentials", success:false});
        }
        const userData = await userModel.findOne({email:email}).select('-password');
        return res.status(200).json({
            data: userData,
            message: "Login Successful",
            success: true
        })
    }catch(err){
        return res.status(500).json({message:err.message, success:false});
    }
}

export const getUsers = async(req, res) => {
    try{

        console.log(req.query);
        const {page, limit, search, sort} = req.query;

        const skipno = (page - 1) * limit;

        let filter = {};

        if(search){
            const rex = (pattern) => new RegExp(`.*${pattern}.*`);
            const searchRgx = rgx(search);
            filter = {
                $or: [
                    { title: { $regex: searchRgx, $options: "i" } },
                    { descriptio: { $regex: searchRgx, $option: "i" } },
                ]
            }
        }

        let sortData = { _id: 1 }

        if(sort == "latest"){
            sortData = {_id: -1};
        }

        const userData = await userModel.find().select('-password');
        return res.status(200).json({
            data: userData,
            message: "User Data Fetched",
            success: true
        })
    }catch(err){
        return res.status(500).json({message:err.message, success:false});
    }
}

export const getUser = async(req, res) => {
    try{
        const userId = req.params.user_id;
        const userData = await userModel.findOne({_id: userId}).select('-password');
        return res.status(200).json({
            data: userData,
            message: "User Data Fetched",
            success: true
        })
    }catch(err){
        return res.status(500).json({message:err.message, success:false});
    }
}

export const forgetPassword = async(req, res) => {
    try{
        const userEmail = req.params;

        const userData = await userModel.findOne({email: userEmail});

        if(userData){
            const password = req.body;
            const changePassword = await userModel.updateOne({email: userEmail}, {
                password: password
            })

            return res.status(200).json({
                data: changePassword,
                message: "Password changed",
                success: true,
            })
        }

        return res.status(404).json({
            message: "User not found",
            success: false
        })
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

