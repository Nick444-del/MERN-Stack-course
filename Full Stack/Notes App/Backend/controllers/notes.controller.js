import notesModel from "../models/notes.model";

export const createNote = async (req, res) => {
    try{
        const { title, content, tags } = req.body;
        const newNote = await notesModel.create({
            title: title,
            content: content,
            tags: tags
        });

        return res.status(201).json({
            data: newNote,
            message: "Note created successfully",
            success: true
        });
    }catch(err){
        return res.status(500).json({
            message: err.message,
            success: false
        });
    }
}

export const getNotes = async (req, res) => {
    try {
        const data = await notesModel.find();

        return res.status(200).json({
            data: data,
            message: "Notes fetched successfully",
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false
        })
    }
}