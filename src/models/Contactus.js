// import mongoose from "mongoose";

// const ContactUsSchema = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: true,
//             trim: true,
//         },
//         email: {
//             type: String,
//             required: true,
//             lowercase: true,
//             trim: true,
//         },
//         number: {
//             type: String,
//             required: true,
//             trim: true,
//         },
//         producttype: {
//             type: String,
//             required: true,
//             trim: true,
//         },
//         message: {
//             type: String,
//             required: true,
//             trim: true,
//         },
//     },
//     { timestamps: true }
// );

// export default mongoose.models.ContactUs ||
//     mongoose.model("ContactUs", ContactUsSchema);










import mongoose from "mongoose";

const ContactUsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        number: {
            type: String,
            required: true,
            trim: true,
        },
        message: {
            type: String,
            required: true,
            trim: true,
        },
        status: {
            type: String,
            enum: ["pending", "Done"], // allowed values
            default: "pending", // default value
            trim: true,
        },
    },
    { timestamps: true }
);

export default mongoose.models.ContactUs ||
    mongoose.model("Contact", ContactUsSchema);
