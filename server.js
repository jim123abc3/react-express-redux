const express = require('express');
const app = express(); 
const aws = require('aws-sdk');

const s3 = new aws.S3({
    accessKeyId: "REPLACE_WITH_ACTUAL",
    secretAccessKey: "REPLACE_WITH_ACTUAL",
    region : 'eu-west-2',
    Bucket: 'jims-aws-bucket' 
});

let params = {
    Bucket: "jims-aws-bucket", 
    MaxKeys: 6 
};

app.get('/api/images', (req, res) => {
    let images = [];
    
    s3.listObjectsV2(params, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else { 
            var href = this.request.httpRequest.endpoint.href;
            var bucketUrl = href + "jims-aws-bucket" + '/';
         
            data.Contents.map(function(photo) { 
                var photoKey = photo.Key;
                var photoUrl = bucketUrl + encodeURIComponent(photoKey);
                images.push(photoUrl);
            }); 
        }
    
        res.json(images);
    
    });  

});
const port = 5001; 
app.listen(port, () => console.log(`Server is on port: ${port}`));
