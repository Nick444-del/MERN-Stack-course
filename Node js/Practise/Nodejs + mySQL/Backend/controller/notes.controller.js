import pool from "../config/db.js";

export const getNotes = async (req, res) => {
    try{
        const [rows] = await pool.query("SELECT * FROM notes");
        return res.status(200).json({
            data: rows,
            message: "Notes retrieved successfully",
            error: false
        })
    }catch(err){
        return res.status(500).json({
            data: null,
            message: err.message,
            error: true
        })
    }
}

export const createNotes = async (req, res) => {
    try{
        const [rows] = await pool.query("INSERT INTO notes SET ?", [req.body]);
        return res.status(200).json({
            data: rows,
            message: "Note created successfully",
            error: false
        })
    }catch(err){
        return res.status(500).json({
            data: null,
            message: err.message,
            error: true
        })
    }
}

export const deleteNotes = async (req, res) => {
    try{
        const [rows] = await pool.query("DELETE FROM notes WHERE id = ?", [req.params.id]);
        if(rows.affectedRows === 0) return res.status(404).json({
            data: null,
            message: "Note not found",
            error: true
        })
        return res.status(200).json({
            data: rows,
            message: "Note deleted successfully",
            error: false
        })
    }catch(err){
        return res.status(500).json({
            data: null,
            message: err.message,
            error: true
        })
    }
}

export const updateNotes = async (req, res) => {
    try{
        const [rows] = await pool.query("UPDATE notes SET ? WHERE id = ?", [req.body, req.params.id]);
        return res.status(200).json({
            data: rows,
            message: "Note updated successfully",
            error: false
        })
    }catch(err){
        return res.status(500).json({
            data: null,
            message: err.message,
            error: true
        })
    }
}