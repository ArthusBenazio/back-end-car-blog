import express from "express"
import { addPost, deletePost, getPosts, getPost, updatePost } from "../controllers/post.js"

const router = express.Router()

//router.post("/register", )
router.get("/", getPosts)
router.get("/:id", getPost)
router.post("/", addPost)
router.delete("/:id", deletePost)
router.put("/:id", updatePost)



export default router;