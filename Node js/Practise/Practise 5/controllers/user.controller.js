import multer from "multer";
import userModel from "../models/user.model";
import fs from 'fs';
// import { storage } from "../utility/storage";
import serverError from "../utility/500";
import bcrypt from 'bcrypt';


import path from "path";

export const storage = multer.diskStorage({
    destination: function(req, res, cb){
        if(fs.existsSync('./uploads')){
            cb(null, './uploads');
        }else{
            fs.mkdirSync('./uploads');
            cb(null, './uploads');
        }
    },

    filename: function(req, file, cb){
        const orgName = file.originalname;
        const fname = path.parse(orgName).name;
        const ext = path.parse(orgName).ext;
        const uniqueValue = Date.now();
        const filename = fname + '-' + uniqueValue + ext;
        cb(null, filename);
    }
})
const upload = multer({ storage: storage });

export const addUser = async (req, res) => {
    try{
        const uploadFileWithData = upload.single("profile");
        uploadFileWithData(req, res, async(err) => {
            if(err) return res.status(400).json({message: err.message, success: false});
            let img = null;
            if(req.file){
                img = req.file.filename;
            }
            const { name, email, password, contact} = req.body;
            const created = await userModel.create({
                name: name,
                email: email,
                password: password,
                contact: contact,
                image: img
            })
            return res.status(200).json({
                data: created,
                message: 'User created successfully',
                success: true,
            })
        })
    }catch(err){
        serverError(err);
    }
}

export const getUsers = async (req, res) => {
    try{
        const userData = await userModel.find();
        userData.map((user) => {
            if(user.image !== null){
                user.image = `http://localhost:3001/static/${user.image}`
            }
        })
        return res.status(200).json({
            data: userData,
            message: 'User Data fetched successfully',
            success: true,
        })
    }catch(err){
        serverError(err);
    }
}

export const getUser = async (req, res) => {
    try{
        const userId = req.params.userId;
        const userData = await userModel.findOne({_id: userId});
        if(userData.image !== null){
            userData.image = `http://localhost:3001/static/${userData.image}`
        }
        return res.status(200).json({
            data: userData,
            messgae: 'User Data fetched successfully',
            success: true,
        })
    }catch(err){
        serverError(err);
    }
}

export const updateUser = async (req, res) => {
    try{
        const uploadFileWithData = upload.single("profile");
        uploadFileWithData(req, res, async (err) => {
            if(err){
                res.status(400).json({
                    message: err.message,
                    success: false
                })
            }
            const userId = req.params.userId;
            const userData = await userModel.findOne({_id: userId});
            let img = userData.image;
            if(req.file){
                img = req.file.filename;
                if(fs.existSync('./uploads/'+ userData.image)){
                    fs.unlinkSync('./uploads/'+ userData.image);
                }
            }
            const {name, email, password, contact } = req.body;
            const updateData = await userModel.updateOne({
                name: name,
                email: email,
                password: password,
                contact: contact,
                image: img
            });
            if(updateData.modifiedCount > 0){
                return res.status(200).json({
                    message: 'User updated successfully',
                    success: true
                })
            }
        })
    }catch(err){
        serverError(err);
    }
}

export const deleteUser = (req, res) => {
    try{
        const userId = req.params.userId;
        const userData = userModel.findOne({_id: userId});
        const deleteData = userModel.deleteOne({_id: userId});
        if(deleteData.deleteCount > 0){
            if(fs.existsSync("./static/"+ userData.image)){
                fs.unlinkSync('./static/'+ userData.image);
            }
            return res.status(200).json({
                message: 'User deleted successfully',
                success: true
            })
        }
        return res.status(400).json({
            message: 'User not found',
            success: false
        })
    }catch(err){
        serverError(err);
    }
}

// Aucthentication

export const signUp = (req, res) => {
    try{

    }catch(err){
        serverError(err);
    }
}