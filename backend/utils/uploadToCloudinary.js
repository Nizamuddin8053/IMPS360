const cloudinary = require("../config/cloudinary");

const uploadToCloudinary = async(filePath, folder)=>{
    try{
        const result = await cloudinary.uploader.upload(filePath, {
            folder,
            resource_type: "auto"
        });

        return {
            secure_url: result.secure_url,
            public_id: result.public_id
        }

    }catch(error){
        console.log("error to uplaod cloudinary",error);
        throw error;
    }
    
}

module.exports = uploadToCloudinary;