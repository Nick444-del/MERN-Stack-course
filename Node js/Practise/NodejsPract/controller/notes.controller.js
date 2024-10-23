import pool from "../config/db.js";

export const getNotes = async (req, res) => {
    try{
        const [rows] = await pool.query("SELECT * FROM notes");
        return res.status(200).json({
            data: rows,
            message: "Notes retrieved successfully",
            success: true
        })
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

export const createNote = async (req, res) => {
    try {
        const [rows] = await pool.query("INSERT INTO notes SET ? ", [req.body]);
        return res.status(201).json({
            data: rows,
            message: "Note created successfully",
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false
        })
    }
}