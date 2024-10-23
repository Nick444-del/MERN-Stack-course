import multer from "multer";
import fs from "fs";
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if(fs.existsSync("./uploads")){
            cb(null, "./uploads");
        }else{
            fs.mkdirSync("./uploads");
            cb(null, "./uploads");
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

export default storage;