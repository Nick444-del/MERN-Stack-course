export const fivehunderd = (req, res) => {
    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    })
}