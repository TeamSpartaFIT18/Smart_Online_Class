import express from "express";
const router = express.Router();
import {
  getRoles,
  getPermissions,
  CreateAClass,
} from "../controllers/adminController.js";
import jwtCheck from "../middleware/auth.js";

router.route("/roles").get(jwtCheck, getRoles);
router.route("/permissions").get(jwtCheck, getPermissions);
router.route("/create/class").post(CreateAClass);
export default router;
