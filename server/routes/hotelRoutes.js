import express from "express"
import { registerHotel } from "../controller/hotelController.js";
import hotelController from '../controller/hotelController.js';

const hotelRouter = express.Router();

hotelRouter.post('/',protect,registerHotel);

export default hotelRouter;