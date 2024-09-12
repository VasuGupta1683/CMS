import express from "express"
import auth from "../middleware/auth.js"

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/posts.js"
import {
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
} from "../controllers/profiles.js"

const router = express.Router()

//Post
router.get("/posts", getPosts)
router.post("/posts", auth, createPost)
router.patch("/post/:id", auth, updatePost)
router.delete("/post/:id", auth, deletePost)

// Profile
router.get("/profiles", getProfile)
router.post("/profiles", auth, createProfile)
router.patch("/profile/:id", auth, updateProfile)
router.delete("/profile/:id", auth, deleteProfile)

export default router
