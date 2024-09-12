import React from "react"

import "./Data.css"

const Data = () => {
  const profiles = 4
  const posts = 5
  return (
    <div className="Data">
      <form className="form">
        <h3>Post</h3>
        <input type="text" placeholder="Title" className="title" />
        <br />
        <input type="text" placeholder="Author Name" className="title" />
        <br />
        <input type="text" placeholder="Content" className="title" />
        <br />
        <input type="date" placeholder="Date" className="title" />
        <br />

        <div>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
            Post
          </label>{" "}
          <pre> Post</pre>
        </div>
      </form>

      <form className="form2">
        <h3>Profile</h3>
        <input type="text" placeholder="Name" className="title" />
        <br />
        <input type="text" placeholder="Designation" className="title" />
        <br />
        <input type="text" placeholder="Content" className="title" />
        <br />
        <input type="file" accept="image/*" className="title" />
        <br />
        <div>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <pre> Profile</pre>
        </div>
      </form>

      <div className="details">
        <h3>Details</h3>
        <h5>
          No of post:
          {posts}
        </h5>
        <h5>
          No of profiles:
          {profiles}
        </h5>
      </div>
    </div>
  )
}

export default Data
