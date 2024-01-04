const AWS = require('aws-sdk');
const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require("path");

const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com');
const region = 'kr-standard';
const config = require("../config/key.js");

const S3 = new AWS.S3({
    endpoint: endpoint,
    region: region,
    credentials: {
        accessKeyId: config.access_key,
        secretAccessKey: config.secret_key
    }
});

function setUpload(bucket) {
    const upload = multer({
        storage: multerS3({
            s3: S3,
            bucket: bucket,
            acl: "public-read-write",
            key: function (req, file, cb) {
                let extenstion = path.extname(file.originalname)
                cb(null, Date.now().toString() + extenstion);
            }
        })
    }).array("image", 10) // 예를 들어, 최대 10개의 파일을 업로드하도록 설정
    return upload
}

module.exports = setUpload;