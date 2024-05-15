// import { Cloudinary, Qualifiers } from "@cloudinary/url-gen";
// import { CloudinaryImage } from "@cloudinary/url-gen";

// const uploadToCloudinary = async (file) => {
//   try {
//     const cloudName = "dpkonhpvd"; // Replace with your Cloudinary cloud name
//     const cld = new Cloudinary({ cloud: { cloudName } });

//     // Create ImageUpload action with file data and optional transformations
//     const upload = new ImageUpload(file, {
//       folder: "uploads", // Set folder name if needed
//       // Optional transformations
//       transformation: new Qualifiers()
//         .resize()
//         .width(500)
//         .height(500)
//         .gravity("auto"),
//     });

//     // Upload the image
//     const response = await cld.upload(upload);

//     console.log("Uploaded:", response.secure_url);
//     return response.secure_url;
//   } catch (error) {
//     console.error("Error uploading file to Cloudinary:", error);
//     throw error;
//   }
// };

// export default uploadToCloudinary;
const uploadImageToCloudinary = async (file) => {
  try {
    const cloudName = "dpkonhpvd"; // Replace with your Cloudinary cloud name
    const uploadPreset = "ubnzk7ik"; // Replace with your Cloudinary upload preset

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to upload file to Cloudinary");
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error("Error uploading file to Cloudinary:", error);
    throw error;
  }
};

export default uploadImageToCloudinary;
