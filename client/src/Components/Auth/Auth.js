import React, { useState } from "react"
import { GoogleLogin } from "react-google-login"

import Gicon from "./icon"

import "./Auth.css"

const Auth = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))

  const logout = () => {
    // dispatch({ type: actionType.LOGOUT })

    // history.push("/auth")
    localStorage.clear()
    setUser(null)
  }

  const googleSuccess = async (res) => {
    const result = res?.profileObj
    const token = res?.tokenId

    localStorage.setItem("profile", JSON.stringify({ result, token }))
    setUser(result, token)

    console.log(result)
    console.log(token)

    try {
      //dispatch({ type: "AUTH", data: { result, token } })
      //history.push("/")
    } catch (error) {
      console.log(error)
    }
  }

  const googleFailure = (error) => {
    console.log("Sign in unsuccessful \n")
    console.log(error)
  }

  return (
    <div className="GoogleButton">
      {!user && (
        <GoogleLogin
          clientId="65050724318-9ost9pd74pn6lcvp7nnm21f6c1lcedd6.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              className="Glogin"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <Gicon /> Google Sign In
            </button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
        />
      )}
      {user && (
        <button className="Glogin" onClick={logout}>
          Logout
        </button>
      )}
    </div>
  )
}

export default Auth
