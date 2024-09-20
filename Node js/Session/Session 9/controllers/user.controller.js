import multer from 'multer';
import path from 'path';
import fs from 'fs';
import User from '../models/user.model.js';
import {storage, serverError} from '../utilities/';
import userModel from '../models/user.model.js';

const upload = multer({ storage: storage });

export const addUser = async (req, res) => {
    try{
        const uploadDataWithFile = upload.single("image");
        uploadDataWithFile(req, res, async(err)=> {
            if(err) return res.status(400).json({
                message: err.message,
                success: false
            });
            
            let img = null;
            if(req.file){
                img = req.file.filename;
            }
            const { name, email, password, contact } = req.body;
            const created = await userModel.create({
                name: name,
                email: email,
                password: password,
                contact: contact,
                image: img,
            })
        })
    }catch(err){
        serverError(err, res);
    }
}