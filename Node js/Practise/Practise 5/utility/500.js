export const serverError = (err, res) => {
    return res.status(500).json({
        message: err.message,
        success: false
    })
}