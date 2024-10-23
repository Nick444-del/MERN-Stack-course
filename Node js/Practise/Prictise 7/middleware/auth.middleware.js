import jwt from 'jsonwebtoken';
import usersModel from '../models/users.model';

export const auth = async(req, res, next) => {
    let token = null;
    try{
        if(req.headers.authorization){
            token = req.headers.authorization;
            let decoded = jwt.verify(token, process.env.JWT_SECRET);
            if(decoded){
                const user = await usersModel.findOne({_id: decoded.data.id}).select('-password');
                req.user = user;
                console.log(user);
                next();
            }else{
                return res.status(400).json({
                    message: "Invalid token"
                })
            }
        }else{
            return res.status(401).json({
                message: "Invalid Token"
            })
        }
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

export const isAdmin = async(req, res, next) => {
    if(req.user.isAdmin){
        next();
    }else{
        return res.status(400).json({
            message: "You are not an admin"
        })
    }
}