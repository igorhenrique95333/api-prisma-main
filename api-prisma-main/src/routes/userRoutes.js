import { Router } from "express";
import { addUser, createUserPost, delUser, findAllUsers, getUserByEmail, update } from "../controllers/UserController.js";
import { addPost, delPost, findAllPost, getPostById } from "../controllers/PostController.js";
import { updatePost } from "../models/Post.js";

const router = Router();

router.post('/users', addUser);
router.get('/users', findAllUsers);

router.get('/users/:email', getUserByEmail);
router.get('/users/:email', update);
router.get('/users/:email', delUser);

router.post('/users/post', createUserPost);

router.post('/post', addPost);
router.get('/post', findAllPost);

router.get('/post/:email', getPostById);
router.get('/post/:email', updatePost);
router.get('/post/:email', delPost);

export default router;