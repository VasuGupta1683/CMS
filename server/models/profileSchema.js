import mongoose from "mongoose"

const profileSchema = mongoose.Schema({
  Name: String,
  Designation: String,
  Content: String,
  Image: String,
})

const ProfileSchema = mongoose.model("ProfileSchema", profileSchema)

export default ProfileSchema
