import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

import postRoutes from "./routes/posts_profiles.js"

const app = express()
dotenv.config()

//The app. use() function is used to mount the specified middleware function(s) at the path which is being specified
// like telling the server to use Routes
app.use(express.json({ limit: "10mb", extended: true }))
app.use(express.urlencoded({ limit: "10mb", extended: true }))
app.use(cors())

// all the routes are with the prefix of /data  ex. localhost:5000/data/posts
app.use("/data", postRoutes)

app.get("/", (req, res) => {
  res.send("Welcome to CCMS backend!")
})

const PORT = process.env.PORT || 5000

//telling mongoose to connect at the url and then start the server on port
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) // to remove warnings
  .then(() =>
    app.listen(PORT, () => console.log(`Port: http://localhost:${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`))

mongoose.set("useFindAndModify", false) //for warning again
