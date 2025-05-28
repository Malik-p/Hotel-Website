import { Webhook } from "svix";
import User from "../models/User.js";
import connectDB from "../configs/db.js";

const clerkWebhooks = async (req, res) => {
  try {
    await connectDB();

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    const payload = req.body.toString("utf8"); // because we're using raw body parser
    const evt = wh.verify(payload, headers);

    const { data, type } = evt;

    const userData = {
      _id: data.id,
      email: data.email_addresses?.[0]?.email_address || "",
      username: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
      image: data.image_url || "",
    };

    switch (type) {
      case "user.created":
        await User.create(userData);
        break;
      case "user.updated":
        await User.findByIdAndUpdate(data.id, userData);
        break;
      case "user.deleted":
        await User.findByIdAndDelete(data.id);
        break;
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ Clerk Webhook Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export default clerkWebhooks;
