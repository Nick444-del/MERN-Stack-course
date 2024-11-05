import locationModel from "../models/location.model";

export const createLocation = async (req, res) => {
    try {
        const { location_name } = req.body;
        const create = await locationModel.create({
            location_name: location_name
        })

        return res.status(201).json({
            success: true,
            message: "Location created successfully",
            data: create
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error
        })
    }
}

export const getLoction = async (req, res) => {
    try {
        const getData = await locationModel.find();
        return res.status(200).json({
            success: true,
            message: "Location get successfully",
            data: getData
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error
        })
    }
}

export const updateLocation = async (req, res) => {
    try {
        const { location_name } = req.body;
        const { id } = req.params;
        const updateData = await locationModel.findByIdAndUpdate(id, {
            location_name: location_name
        })
        return res.status(203).json({
            success: true,
            message: "Location updated successfully",
            data: updateData
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error
        })
    }
}

export const deleteLocation = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteData = await locationModel.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            message: "Location deleted successfully",
            data: deleteData
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error
        })
    }
}

export const getLocationDataById = async (req, res) => {
    try {
        const { id } = req.params;
        const getData = await locationModel.findById(id);
        return res.status(200).json({
            success: true,
            message: "Location get successfully",
            data: getData
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error
        })
    }
}