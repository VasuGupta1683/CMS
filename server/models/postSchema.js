import mongoose from "mongoose"

const postSchema = mongoose.Schema({
  Title: String,
  Author: String,
  Content: String,
  Date: String,
})

const PostSchema = mongoose.model("PostSchema", postSchema)

export default PostSchema
