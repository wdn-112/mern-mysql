import express  from "express";
import {
    getUser,
    getUserId,
    createUser,
    UpdateUser,
    deleteUser
} from "../controllers/userController.js";

const router  = express.Router();
router.get('/users', getUser);
router.get('/users/:id', getUserId);
router.post('/users', createUser);
router.patch('/users/:id', UpdateUser);
router.delete('/users/:id', deleteUser);


export default router;