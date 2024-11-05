import connection from "../config/dbconfig";

export const getPlayerRaid = async (req, res) => {
    connection.query("SELECT * FROM player_raids", (err, rows) => {
        if(err) throw err;
        return res.status(200).json({
            data: rows,
            success: true,
            message: "Success"
        })
    })
}

export const createPlayerRaid = async (req, res) => {
    const { player_id, no_super_raids, super_ten, avg_raid_points, total_raid, raid_strike_rate } = req.body
    connection.query("INSERT INTO player_raids (player_id, no_super_raids, super_ten, avg_raid_points, total_raid, raid_strike_rate) VALUES (?, ?, ?, ?, ?, ?)", [player_id, no_super_raids, super_ten, avg_raid_points, total_raid, raid_strike_rate], (err, rows) => {
        if(err){
            return res.status(400).json({
                success: false,
                message: err.message
            })
        }
        return res.status(200).json({
            data: rows,
            success: true,
            message: "Success"
        })
    })
}