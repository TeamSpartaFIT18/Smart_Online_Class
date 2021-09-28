import express from "express";
const router = express.Router();
import { getRoles, getPermissions } from "../controllers/adminController.js";
import jwtCheck from "../middleware/auth.js";

router.route("/roles").get(jwtCheck, getRoles);
router.route("/permissions").get(jwtCheck, getPermissions);
export default router;
