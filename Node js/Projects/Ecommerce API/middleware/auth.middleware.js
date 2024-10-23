import jwt, { decode } from 'jsonwebtoken';
import userModel from '../models/user.model';

export const auth = async (req, res) => {
    let token = null;
    try{
        if(req.header.authorization){
            token = req.headers.authorization;
            let decoded = jwt.verify(token, process.env.JWT_SECRET);
            if(decoded){
                const user = await userModel.findOne({_id: decoded.data.id}).select('-password');
                req.user = user;
                console.log(user);
                next();
            }else{
                return res.status(401).json({
                    message: 'Invalid token',
                    success: false,
                })
            }
        }else{
            return res.status(401).json({
                message: 'No token provided',
            })
        }
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}

export const isAdmin = async (req, res) => {
    if(req.user.isAdmin){
        next();
    }else{
        return res.status(500).json({
            message: 'Access denied',
        })
    }
}