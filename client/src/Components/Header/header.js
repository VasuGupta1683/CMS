import React from "react"
import { Link } from "react-router-dom"

import "./header.css"

function Header() {
  return (
    <div id="header">
      <div id="nav">
        <h2 className="CCMS">CCMS</h2>
        <div>
          <Link to="/">
            <button className="dataButton">Home</button>
          </Link>
          <Link to="/data">
            <button className="dataButton">Create/All data</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Header
