import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controller/clerkWebhooks.js";
import bodyParser from "body-parser";

await connectDB();

const app = express();

app.use(cors());

// ✅ Only use raw body parser for /api/clerk (for Clerk signature verification)
app.use("/api/clerk", bodyParser.raw({ type: "*/*" }));

app.use(express.json()); // for other JSON requests
app.use(clerkMiddleware());

// ✅ Clerk Webhook Route (must use POST!)
app.post("/api/clerk", clerkWebhooks);

app.get("/", (req, res) => res.send("API is working fine"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
