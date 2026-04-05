const multer = require('multer');
const path = require('path');
const fs = require('fs');

if (!fs.existsSync(path.join(__dirname, '../uploads'))) {
    fs.mkdirSync(path.join(__dirname, '../uploads'));
}

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage });
module.exports = upload;
