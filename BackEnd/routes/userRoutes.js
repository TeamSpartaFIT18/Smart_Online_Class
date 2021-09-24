import express from "express";
const router = express.Router();
import {
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
} from "../controllers/userController.js";
import jwtCheck from "../middleware/auth.js";

router.route("/").post(registerUser).get(jwtCheck, getUsers);

router
  .route("/profile")
  .get(jwtCheck, getUserProfile)
  .put(jwtCheck, updateUserProfile);
router.route("/:id").delete(jwtCheck, deleteUser).get(jwtCheck, getUserById);

export default router;
