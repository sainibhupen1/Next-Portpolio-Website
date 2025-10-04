// import { dbConnect } from "@/lib/dbConnect";
// import ContactUs from "@/models/Contactus";

// export default async function handler(req, res) {
//     await dbConnect();

//     if (req.method === "POST") {
//         const { name, email, number, producttype, message } = req.body;

//         if (!name || !email || !number || !producttype || !message) {
//             return res.status(400).json({ error: "All fields are required" });
//         }

//         try {
//             const newContact = await ContactUs.create({
//                 name,
//                 email,
//                 number,
//                 producttype,
//                 message,
//             });

//             return res.status(201).json(newContact);
//         } catch (error) {
//             return res
//                 .status(500)
//                 .json({ error: "Failed to submit", details: error.message });
//         }
//     }

//     if (req.method === "GET") {
//         try {
//             const allContacts = await ContactUs.find().sort({ createdAt: -1 });
//             return res.status(200).json(allContacts);
//         } catch (error) {
//             return res
//                 .status(500)
//                 .json({ error: "Failed to fetch data", details: error.message });
//         }
//     }

//     res.setHeader("Allow", ["GET", "POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
// }




import { dbConnect } from "@/lib/dbConnect";
import ContactUs from "@/models/Contactus";

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,POST,OPTIONS"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );


    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    await dbConnect();

    if (req.method === "POST") {
        const { name, email, number, message } = req.body;

        if (!name || !email || !number || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        try {
            const newContact = await ContactUs.create({
                name,
                email,
                number,
                message,
            });

            return res.status(201).json(newContact);
        } catch (error) {
            return res
                .status(500)
                .json({ error: "Failed to submit", details: error.message });
        }
    }

    if (req.method === "GET") {
        try {
            const allContacts = await ContactUs.find().sort({ createdAt: -1 });
            return res.status(200).json(allContacts);
        } catch (error) {
            return res
                .status(500)
                .json({ error: "Failed to fetch data", details: error.message });
        }
    }

    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}
