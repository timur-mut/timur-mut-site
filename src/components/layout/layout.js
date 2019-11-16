import React from "react"
import AppBar from "../appbar/appbar"
import "./layout.css"
import "normalize.css"
import Helmet from "react-helmet/es/Helmet"
const Layout = ({ children }) => {
  return (
    <div className="site">
      <Helmet title="Timur's personal website" defer={false} />
      <AppBar />
      <main className="site-content">{children}</main>
      <footer></footer>
    </div>
  )
}

export default Layout
