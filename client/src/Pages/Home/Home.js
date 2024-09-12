import React from "react"

import Feature from "./Feature/feature"
import Footer from "./Footer/footer"
import Logo from "./logo.jpeg"

function Home() {
  return (
    <div>
      <div id="welcome">
        <img src={Logo} alt="logo" />
        <h1 className="rightAlign">
          Hi! Welcome to
          <br /> CCMS
        </h1>
      </div>
      <Feature />
      <Footer />
    </div>
  )
}

export default Home
