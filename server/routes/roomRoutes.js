import express from "express"
import upload from "../middleware/uploadMiddleware";
import { protect } from "../middleware/authMiddleware";
import { createRoom } from "../controller/roomController";

const roomRouter = express.Router();

roomRouter.post('/',upload.array("images",4),protect,createRoom)

export default roomRouter;