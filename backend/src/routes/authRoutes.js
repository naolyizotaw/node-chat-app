import express from "express";
import { 
    signup,
    login, 
    logout,
    updateProfile,
 } from "../controllers/authController.js";

 import { protectRoute } from "../middleware/authMiddleware.js";
import { arcjetProtection } from "../middleware/arcjetMiddleware.js";


const router = express.Router();

router.use(arcjetProtection);

router.get("/test", arcjetProtection, (req, res) => {
    res.status(200).json({message: "Arcjet protection working!"});
})

router.post("/signup", signup);
router.post("/login", login),
router.post("/logout", logout);
router.put("/update-profile", protectRoute, updateProfile);
router.get("/check", protectRoute, (req, res) => res.status(200).json(req.user));



export default router;