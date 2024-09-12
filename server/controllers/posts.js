import mongoose from "mongoose"
import PostSchema from "../models/postSchema.js"

export const getPosts = async (req, res) => {
  try {
    const postSchema = await PostSchema.find()

    res.status(200).json(postSchema)
  } catch (error) {
    res.status(404).json({ message: error })
  }
}

export const createPost = async (req, res) => {
  const post = req.body

  const newPost = new PostSchema(post)

  try {
    await newPost.save()

    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error })
  }
}
export const updatePost = async (req, res) => {
  //extracting from req.params and renaming id to _id
  const { id: _id } = req.params

  const post = req.body

  // checking if id is valid
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that id")
  }
  const updatedPost = await PostSchema.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  )

  res.json(updatedPost)
}

export const deletePost = async (req, res) => {
  const { id: _id } = req.params

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that id")
  }

  try {
    await PostSchema.findByIdAndDelete(_id)
    res.json({ message: "Post deleted successfully" })
  } catch (error) {
    return res.status(404).send("No post with that id")
  }
}
