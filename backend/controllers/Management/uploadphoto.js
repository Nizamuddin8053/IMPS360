const uplaodToCloudinary = require("../../utils/uploadToCloudinary");
const FOLDERS = require("../../utils/cloudinaryFolders");

const uploadTeacher = async(req , res)=>{
    try{
        const image = req.file;
        const result = await uplaodToCloudinary(
            image.path,
            FOLDERS.TEACHERS
        );

        res.status(200).json({
            success: true,
            imageUrl: result.secure_url,
            publicId: result.public_id
        });

    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })

    }

}

