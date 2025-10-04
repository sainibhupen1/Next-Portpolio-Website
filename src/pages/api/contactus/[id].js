



import { dbConnect } from "@/lib/dbConnect";
import ContactUs from "@/models/Contactus";

export default async function handler(req, res) {
    await dbConnect();

    const {
        query: { id },
        method,
    } = req;

    switch (method) {
        case "GET":
            try {
                const contact = await ContactUs.findById(id);
                if (!contact) {
                    return res.status(404).json({ error: "Contact not found" });
                }
                return res.status(200).json(contact);
            } catch (error) {
                return res.status(500).json({ error: "GET failed", details: error.message });
            }

        case "PUT": // Full edit
            try {
                const updated = await ContactUs.findByIdAndUpdate(id, req.body, {
                    new: true,
                });
                return res.status(200).json(updated);
            } catch (error) {
                return res.status(500).json({ error: "PUT failed", details: error.message });
            }

        case "PATCH": // Only status update
            try {
                const { status } = req.body;
                if (!status) {
                    return res.status(400).json({ error: "Status is required" });
                }

                const updatedStatus = await ContactUs.findByIdAndUpdate(
                    id,
                    { status },
                    { new: true }
                );

                if (!updatedStatus) {
                    return res.status(404).json({ error: "Contact not found" });
                }

                return res.status(200).json(updatedStatus);
            } catch (error) {
                return res.status(500).json({ error: "PATCH failed", details: error.message });
            }

        case "DELETE":
            try {
                await ContactUs.findByIdAndDelete(id);
                return res.status(200).json({ success: true });
            } catch (error) {
                return res.status(500).json({ error: "DELETE failed", details: error.message });
            }

        default:
            return res.status(405).json({ error: `Method ${method} not allowed` });
    }
}
