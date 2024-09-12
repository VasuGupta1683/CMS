import mongoose from "mongoose"
import ProfileSchema from "../models/profileSchema.js"

export const getProfile = async (req, res) => {
  try {
    const profileSchema = await ProfileSchema.find()

    res.status(200).json(profileSchema)
  } catch (error) {
    res.status(404).json({ message: error })
  }
}

export const createProfile = async (req, res) => {
  const profile = req.body

  const newProfile = new ProfileSchema(profile)

  try {
    await newProfile.save()

    res.status(201).json(newProfile)
  } catch (error) {
    res.status(409).json({ message: error })
  }
}

export const updateProfile = async (req, res) => {
  const { id: _id } = req.params

  const profile = req.body

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that id")
  }
  const updatedProfile = await ProfileSchema.findByIdAndUpdate(
    _id,
    { ...profile, _id },
    {
      new: true,
    }
  )

  res.json(updatedProfile)
}

export const deleteProfile = async (req, res) => {
  const { id: _id } = req.params

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that id")
  }

  await ProfileSchema.findByIdAndDelete(_id)

  res.json({ message: "Post deleted successfully" })
}
