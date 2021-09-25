import express from "express";
const router = express.Router();
import {getRoles} from "../controllers/adminController.js"
import jwtCheck from "../middleware/auth.js";

router.route("/roles")..get(jwtCheck, getRoles);
export default router;