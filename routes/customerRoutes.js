import  express  from "express";
import { signup } from "../controllers/customerController.js";

const router = express.Router()

router.post("/signup" , signup )



export default router