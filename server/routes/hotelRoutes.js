import express from "express"
import { registerHotel } from "../controller/hotelController";

const hotelRouter = express.Router();

hotelRouter.post('/',protect,registerHotel);

export default hotelRouter;