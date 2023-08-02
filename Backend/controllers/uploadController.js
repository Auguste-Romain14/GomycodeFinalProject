
const store = async (req, res)=>{
  try {
    if(!req.files) {
        res.status(403).json({
          status: false,
          message: 'No file uploaded'
        });
    } else {
        //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
        let avatar = req.files.avatar;
        
        //Use the mv() method to place the file in the upload directory (i.e. "uploads")
        avatar.mv('./public/uploads/' + avatar.name);

        //send response
        res.status(200).send({
            status: true,
            message: 'File is uploaded',
            data: {
                name: avatar.name,
                mimetype: avatar.mimetype,
                size: avatar.size
            }
        });
    }
} catch (err) {
    res.status(500).json({err : err.message});
}
}


module.exports= {store}