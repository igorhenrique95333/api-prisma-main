import { createPost} from "../models/Post.js";
import { findPosts } from "../models/Post.js";
import { findPostById } from "../models/Post.js";
import { updatePost } from "../models/Post.js";
import { deletePost } from "../models/Post.js";

export const addPost = async (req, res) => {
  try {
    const { name, email } = req.body;
    const post = await createPost(title, serId, subtitle, body);
    res.status(201).json({ post });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to add post", message: error.message });
  }
};

export const findAllPost = async (req, res) => {
  try {
 const posts = await findPosts();
 res.status(200).json( { posts });  
  }
  catch (error) {
    res
    .status(500)
    .json({ error: "Failed to find posts", message: error.message});
  }
};

export const getPostById = async (req, res) => {
  try {
 const posts = await findPostById(req.params.id);
 res.status(200).json({ posts });  
  }
  catch (error) {
    res
    .status(500)
    .json({ error: "Failed to find post by id", message: error.message});
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params.id;
    const post = await updatePost(id,userData);
    res.status(200).json({ post });
  } catch (error) {
    res
    .status(500)
    .json({ error: "Failed to update post", message: error.message});
  }
};

export const delPost = async (req, res) => {
  try {
    const { id } = req.params.id;
    const post = await deletePost(id);
    res.status(200).json({ post });
  } catch (error) {
    res
    .status(500)
    .json({ error: "Failed to delete post", message: error.message});
  }
};



