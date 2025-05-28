import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controller/clerkWebhooks.js";

await connectDB();

const app = express();
app.use(cors());
app.use(express.json()); // ✅ JSON middleware must come BEFORE routes
app.use(clerkMiddleware());

// ✅ Add webhook BEFORE any auth protection
app.post("/api/clerk", express.json(), clerkWebhooks); // ✅ Make sure to use POST and .json()

app.get("/", (req, res) => res.send("API is working fine still"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
